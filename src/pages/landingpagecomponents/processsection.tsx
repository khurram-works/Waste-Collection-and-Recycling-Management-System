import React from "react";

function ProcessSection() {
  const steps = [
    {
      icon: "smartphone",
      title: "Step 1: Submit",
      desc: "Citizens submit a pickup request for segregated waste through our mobile app or web portal.",
    },
    {
      icon: "recycling",
      title: "Step 2: Verify",
      desc: "Municipal workers collect, weigh, and verify the waste quality at your doorstep.",
    },
    {
      icon: "payments",
      title: "Step 3: Earn",
      desc: "The system calculates and credits earnings directly to the citizen's digital wallet instantly.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] dark:bg-background-dark/50 py-20">
      <div className="max-w-300 mx-auto px-6 lg:px-40">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-[#121614]  text-3xl font-bold leading-tight tracking-[-0.015em]">
            How It Works in 3 Steps
          </h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto md:mx-0"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 p-8 bg-white  rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {step.icon}
                </span>
              </div>
              <div>
                <h3 className="text-[#121614]  text-xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600  text-base leading-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
