import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Header Section */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Our Product
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to our revolutionary platform! Our product helps you manage
          your workflow efficiently, with smart tools to help you collaborate
          and grow. Join us on this journey to simplify your tasks and enhance
          productivity.
        </p>
      </div>

      {/* Product Highlight Section */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Product Highlights
        </h2>
        <ul className="text-gray-600 text-base list-disc list-inside">
          <li>Streamlined task management tools.</li>
          <li>Collaborate with teams in real-time.</li>
          <li>Integrates with all your favorite apps.</li>
          <li>Customizable dashboards for better insights.</li>
        </ul>
      </div>

      {/* Google Form Section */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We would love to hear your feedback! Please fill out the form below
          and help us improve.
        </p>
        <div className="w-full h-96">
          <iframe
            title="Google Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdvIcYCB-jhqNTugMJElHkFHbwh8bcj_Ueq3puC0jdz_xIWwA/viewform?usp=sf_link/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-lg"
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
