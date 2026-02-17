import React from "react";

const CitizenRequestStatusDetails = ({ request, onClose }) => {
  // For the example, we'll use a fixed timeline; you can make it dynamic.
  const timeline = [
    { label: "Submitted", time: "20 Dec 2025, 10:30 AM", completed: true },
    { label: "Assigned", time: "20 Dec 2025, 02:45 PM", completed: true },
    { label: "Collected", time: "21 Dec 2025, 11:20 AM", completed: true },
    { label: "Verified", time: "21 Dec 2025, 04:00 PM", completed: true },
    { label: "Paid", time: "22 Dec 2025, 09:15 AM", completed: true },
  ];

  return (
    <aside className="w-96 shrink-0 bg-white border-l border-[#dde3e0] flex flex-col sticky top-16.25 h-[calc(100vh-65px)] overflow-y-auto">
      <div className="p-6 border-b border-[#dde3e0] flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">Request Details</h2>
          <p className="text-xs text-[#6a8174] font-medium tracking-wide">ID: {request.id}</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-[#f1f4f2] rounded-full text-[#6a8174]">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* TIMELINE */}
      <div className="p-8">
        <h3 className="text-sm font-bold mb-6 text-[#121614]">Track Progress</h3>
        <div className="relative flex flex-col gap-8">
          <div className="absolute left-2.75 top-2 bottom-2 w-0.5 bg-[#dde3e0]"></div>
          {timeline.map((step, idx) => (
            <div key={idx} className="relative flex gap-4">
              <div
                className={`z-10 ${
                  step.completed ? "bg-primary text-white" : "bg-gray-300 text-gray-500"
                } rounded-full size-6 flex items-center justify-center`}
              >
                <span className="material-symbols-outlined text-sm">
                  {step.completed ? "check" : "schedule"}
                </span>
              </div>
              <div>
                <p className="text-sm font-bold">{step.label}</p>
                <p className="text-xs text-[#6a8174]">{step.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUMMARY DATA */}
      <div className="p-6 border-t border-[#dde3e0] bg-[#f8faf9]">
        <h3 className="text-sm font-bold mb-4">Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#6a8174]">Waste Type</p>
            <p className="text-sm font-bold">{request.wasteType}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#6a8174]">Actual Weight</p>
            <p className="text-sm font-bold">12.5 kg</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#6a8174]">Rate per kg</p>
            <p className="text-sm font-bold">Rs 14.40</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#6a8174]">Final Earnings</p>
            <p className="text-sm font-bold text-primary">Rs 180.00</p>
          </div>
        </div>
      </div>

      {/* PHOTO THUMBNAIL */}
      <div className="p-6 flex flex-col gap-3">
        <p className="text-xs font-bold text-[#6a8174] uppercase tracking-wider">Pickup Photo</p>
        <div
          className="w-full h-40 rounded-lg overflow-hidden border border-[#dde3e0] relative group cursor-pointer"
          onClick={() => {}}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBa8VSasLL8iiBn1BY3V5PBEzIupG04Rr49f8UhcGn_Z8Qk6JS9sG3hgn7DJ5hSP4oltVfY6ln6kpPsF7wZBHhMvWITWGjHAFcBMs9ni6faVbUfdenz_cZuvLzipmq8sAuUKpvJkR--VY4UngL5YMdv3BrHRLZ-1qQi4BDoQQE0WwqoQd7GZCXVQ_Frnp0UxTxxSAKBaiUtmpFi2IvL26Y14dLRzlVUy7bugbG50YU9nP0o3tSlcyAdRg_iiwxYa0pnw2yfv_DD")',
            }}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CitizenRequestStatusDetails;