import Link from 'next/link';

const TeaserCard = ({ title, description, link, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 h-full flex flex-col justify-between">
      <div>
        {icon && (
          <div className="text-4xl text-blue-600 mb-4">
            <i className={icon}></i>
          </div>
        )}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="mt-4">
        <Link href={link}>
          <span className="text-blue-600 font-medium hover:underline">Learn More →</span>
        </Link>
      </div>
    </div>
  );
};

export default TeaserCard;
