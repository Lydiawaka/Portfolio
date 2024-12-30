import React from 'react';

const Contact = () => {
  
  return (
    <div>
      {/* Header */}
      <h2 className="text-3xl text-center text-gray-800 mb-2">Contacts</h2>
        <div className="flex justify-center mb-12">
          <div className="w-8 h-px bg-gray-300 my-auto mx-2"></div>
          <span className="text-rose-400">♥</span>
          <div className="w-8 h-px bg-gray-300 my-auto mx-2"></div>
        </div>
        <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3">Get in touch!</h1>
        <p className="text-gray-600">
          Elevate your brand and leave a lasting impression with a meticulously crafted website tailored to your needs.
        </p>
      </div>

     </div>
  );
};

export default Contact;
