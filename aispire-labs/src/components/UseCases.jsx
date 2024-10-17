import React from "react";

const UseCaseCards = () => {
  const useCases = [
    {
      title: "Use Case 1",
      description:
        "This is a description of the first use case. You can write more details here.",
      icon: "🌟",
    },
    {
      title: "Use Case 2",
      description:
        "This is a description of the second use case. Add your specific information here.",
      icon: "🚀",
    },
    {
      title: "Use Case 3",
      description:
        "This is a description of the third use case. Provide further insights here.",
      icon: "💡",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 shadow-2xl shadow-blue-500/20">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-md rounded-lg p-6 max-w-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl">{useCase.icon}</span>
              <h2 className="ml-4 text-2xl font-semibold">{useCase.title}</h2>
            </div>
            <p className="text-gray-600">{useCase.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCaseCards;
