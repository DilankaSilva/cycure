const menu_data = [
    {
        id: 1,
        mega_menu: false,
        has_dropdown: false,
        title: "Home",
        link: "/home-two",
        sub_menus: [
            
        ],
    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: false,
        title: "About",
        link: "/about-us",
    },
    {
        id: 3,
        mega_menu: false,
        has_dropdown: true,
        title: "Solution",
        link: "#",
        sub_menus: [
            { link: "/services", title: "Our Services" },
            { link: "/services/microsoft-365-solutions", title: "Microsoft 365 Solutions" },
            { link: "/services/azure-cloud-engineering", title: "Azure Cloud Engineering" },
            { link: "/services/cybersecurity-solutions", title: "Cybersecurity Solutions" },
            { link: "/services/csp-additional-solutions", title: "CSP and Additional Solutions" },
            { link: "/services/bcdr-services", title: "Business Continuity and Disaster Recovery (BCDR)" },
            // { link: "/services/information-protection-solutions", title: "Information Protection Solutions" },
            // { link: "/services/managed-it-security-services", title: "Managed IT & Security Services" },
            // { link: "/services/mobile-device-management", title: "Mobile Device Management" }
        ],
    },
    // {
    //     id: 4,
    //     mega_menu: false,
    //     has_dropdown: true,
    //     title: "Pages",
    //     link: "#",
    //     sub_menus: [
    //         { link: "/pricing", title: "Pricing" },
    //         { link: "/team", title: "Our Team" },
    //         { link: "/faq", title: "Faq" },
    //         { link: "/not-found", title: "4o4 Page" },
    //     ],
    // },
        {
        id: 4,
        mega_menu: false,
        has_dropdown: true,
        title: "Pricing",
        link:  "/pricing",
    },
    {
        id: 5,
        mega_menu: false,
        has_dropdown: true,
        title: "Resources",
        link: "/case-studies",
        // sub_menus: [
        //     { link: "/shop", title: "Our-Shop" },
        //     { link: "/shop-details", title: "Shop Details" },
        // ],
    },
    // {
    //     id: 6,
    //     mega_menu: false,
    //     has_dropdown: true,
    //     title: "Blog",
    //     link: "#",
    //     sub_menus: [
    //         { link: "/blog-grid", title: "Blog-Grid" },
    //         { link: "/blog", title: "Blog-Standard" },
    //         { link: "/blog-details", title: "Blog-Details" },
    //     ],
    // },
    {
        id: 7,
        mega_menu: false,
        has_dropdown: false,
        title: "Contact Us",
        link: "/contact",
    },
];
export default menu_data;


