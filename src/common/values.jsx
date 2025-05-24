import React from 'react';

const coreValue = {
    title: "Our Core Values",
    values: [
        { title: "Security", text: "Protecting your data with enterprise-grade safeguards." },
        { title: "Innovation", text: "Pioneering cutting-edge tools for tomorrow's challenges." },
        { title: "Trust", text: "Building partnerships through transparency and results."},
        { title: "Global Reach", text: "Delivering localized solutions with international expertise."},
        { title: "Simplicity", text: "Streamlining complexity into user-friendly systems." }
    ],
};

const ValueCard = ({ title, text, imgPath }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-2xl font-bold mb-2" style={{ fontSize: '24px' }}>{title}</h3>
      <p className="text-gray-600 max-w-xs" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>{text}</p>
    </div>
  );
};

const Values = () => {
  // First row: Security, Innovation, Trust
  const firstRowValues = coreValue.values.slice(0, 3);
  // Second row: Global Reach, Simplicity
  const secondRowValues = coreValue.values.slice(3);

  return (
    <div className="values-area" style={{ marginTop: '100px' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mission-content" style={{ margin: '0 0 50px' }}>
              <h2 className="title mb-4">{coreValue.title}</h2>
            </div>
          </div>
        </div>

        {/* First row - 3 values */}
        <div className="row justify-content-center mb-5">
          {firstRowValues.map((value, index) => (
            <div key={index} className="col-lg-4 col-md-4 mb-5">
              <ValueCard 
                title={value.title} 
                text={value.text} 
              />
            </div>
          ))}
        </div>

        {/* Second row - 2 values */}
        <div className="row justify-content-center">
          {secondRowValues.map((value, index) => (
            <div key={index} className="col-lg-4 col-md-4 mb-5 mx-3">
              <ValueCard 
                title={value.title} 
                text={value.text} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;

