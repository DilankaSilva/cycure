const fs = require("fs");
const path = require("path");
const readline = require("readline");

const patterns = [
  {
    name: "API Key",
    regex: /API[_-]?KEY\s*=\s*["']?([a-zA-Z0-9-_]{16,})["']?/gi,
  },
  {
    name: "Secret Key",
    regex: /SECRET\s*=\s*["']?([a-zA-Z0-9-_]{16,})["']?/gi,
  },
  { name: "Token", regex: /TOKEN\s*=\s*["']?([a-zA-Z0-9-_]{16,})["']?/gi },
  { name: "Hardcoded URL", regex: /(http|https):\/\/[^\s"'<>]+/gi },
  { name: "Localhost", regex: /localhost[:\d]*/gi },
  { name: "Password", regex: /password\s*=\s*["']?([a-zA-Z0-9-_]+)["']?/gi },
  { name: "AWS Access Key", regex: /\bAKIA[0-9A-Z]{16}\b/g },
  // { name: 'AWS Secret Key', regex: /\b[0-9a-zA-Z\/+]{40}\b/g },
  {
    name: "Database URI",
    regex: /(mongodb|mysql|postgres|redis):\/\/[^\s"']+/gi,
  },
  {
    name: "JWT Secret",
    regex: /jwt[_-]?secret\s*=\s*["']?([a-zA-Z0-9-_]+)["']?/gi,
  },
  { name: "IPv4 Address", regex: /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g },
  // { name: 'Capital Letters (3+ in a row)', regex: /\b[A-Z]{3,}\b/g },
];

const ignoredDirs = ["node_modules", "dist", ".git", "coverage", "logs"];
const allowedExtensions = [
  ".js",
  ".ts",
  ".json",
  ".env",
  ".yml",
  ".yaml",
  ".py",
  ".java",
];

function scanDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      if (!ignoredDirs.includes(file)) {
        scanDirectory(fullPath);
      }
    } else {
      // Skip `.spec.ts` files
      if (file.endsWith(".spec.ts")) return;

      if (allowedExtensions.includes(path.extname(file))) {
        scanFile(fullPath);
      }
    }
  });
}

function removeComments(line, extension) {
  // Remove single-line comments
  if ([".js", ".ts", ".java"].includes(extension)) {
    line = line.replace(/\/\/.*$/, ""); // Remove `// comments`
  }
  if ([".env", ".yml", ".yaml", ".py"].includes(extension)) {
    line = line.replace(/#.*/, ""); // Remove `# comments`
  }

  // Remove multi-line comments (/* ... */)
  if ([".js", ".ts", ".java"].includes(extension)) {
    line = line.replace(/\/\*.*?\*\//g, ""); // Remove `/* comments */`
  }

  return line.trim(); // Return cleaned line
}

function scanFile(filePath) {
  const readStream = fs.createReadStream(filePath, "utf8");
  const rl = readline.createInterface({ input: readStream });

  let lineNumber = 0;
  const fileExt = path.extname(filePath);

  rl.on("line", (line) => {
    lineNumber++;
    line = removeComments(line, fileExt); // Remove comments before scanning

    if (!line.trim()) return; // Skip empty or commented-out lines

    patterns.forEach(({ name, regex }) => {
      const matches = line.match(regex);

      if (matches) {
        matches.forEach((match) => {
          console.log(`[⚠] ${name} found in: ${filePath} (Line ${lineNumber})`);
          console.log(` → ${match}\n`);
        });
      }
    });
  });

  rl.on("close", () => {
    readStream.close();
  });
}

// Start scanning from the current directory
console.log("🔍 Scanning for hardcoded configurations...\n");
scanDirectory(process.cwd());
console.log("\n✅ Scan complete.");
