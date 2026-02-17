import React from "react";

function WasteTypesSection() {
  return (
    <section className="bg-white  py-20">
      <div className="max-w-300 mx-auto px-6 lg:px-40">
        <div className="mb-12 text-center">
          <h2 className="text-[#121614] text-3xl font-bold leading-tight tracking-[-0.015em]">
            What We Accept & What You Earn
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-gray-200  shadow-xl">
          <div className="flex flex-col p-8 bg-primary/5  border-r border-gray-200">
            <div className="mb-6">
              <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                High Value
              </span>
              <h3 className="text-primary text-2xl font-black mt-4">
                Earn More (RsX/kg)
              </h3>
            </div>
            <ul className="space-y-4 flex-1">
              {["PET Bottles", "Cardboard", "Metal Cans"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm italic text-gray-500">
              Note: Must be properly separated and cleaned.
            </p>
          </div>

          <div className="flex flex-col p-8 bg-white border-r border-gray-200">
            <div className="mb-6">
              <span className="bg-gray-200 text-gray-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Medium Value
              </span>
              <h3 className="text-[#121614]  text-2xl font-black mt-4">
                Earn Less (RsY/kg)
              </h3>
            </div>
            <ul className="space-y-4 flex-1">
              {["Mixed Paper", "Newspapers"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="material-symbols-outlined text-gray-400">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm italic text-gray-500">
              Note: For clean, mixed dry recyclables.
            </p>
          </div>

          <div className="flex flex-col p-8 bg-gray-50 ">
            <div className="mb-6">
              <span className="bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Non-Recyclable
              </span>
              <h3 className="text-gray-500 text-2xl font-black mt-4">
                No Earnings
              </h3>
            </div>
            <ul className="space-y-4 flex-1">
              {["Food Waste", "Sanitary Waste", "All other waste"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-500 "
                  >
                    <span className="material-symbols-outlined">cancel</span>
                    {item}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-8 text-sm italic text-gray-500">
              Note: Responsibly sent to landfill/compost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WasteTypesSection;
