// import React from "react";
// import { Dialog, DialogPanel } from "@headlessui/react";

// export default function RequestDetailsModal({ isOpen, onClose, requests }) {
//   return (
//     // Main Container (formerly body)
//     <Dialog
//       open={isOpen}
//       onClose={onClose}
//       className="relative z-50 focus:outline-none"
//     >
//       <div
//         className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out data-closed:opacity-0"
//         aria-hidden="true"
//       />
//       <div className="fixed inset-0 z-10 overflow-y-auto">
//         <div className="flex min-h-full items-center justify-center p-4">
//           <DialogPanel
//             transition
//             className="relative w-full max-w-2xl rounded-xl bg-white shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0 overflow-hidden"
//           >
//               <div className="relative z-50 w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                
//                 <header className="flex items-center justify-between px-8 py-6 border-b border-primary/10">
//                   <div>
//                     <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-2">
//                       Request Details:{" "}
//                       <span className="text-primary">{requests.id}</span>
//                     </h2>
//                     <p className="text-zinc-500 text-sm mt-1">
//                       Submitted on: 24 Dec 2025, 10:30 AM
//                     </p>
//                   </div>
//                   <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-400 hover:text-zinc-600">
//                     <span className="material-symbols-outlined text-3xl">
//                       close
//                     </span>
//                   </button>
//                 </header>

//                 {/* MODAL BODY (Scrollable) */}
//                 <div className="overflow-y-auto p-8 space-y-8">
//                   {/* SECTION A: STATUS TIMELINE */}
//                   <section className="space-y-6">
//                     <div className="relative flex items-center justify-between">
//                       {/* Progress Line Background */}
//                       <div className="absolute top-5 left-0 w-full h-0.5 bg-zinc-200 -z-10"></div>
//                       {/* Active Progress Line */}
//                       <div className="absolute top-5 left-0 w-1/4 h-0.5 bg-primary -z-10"></div>

//                       {/* Step 1: Submitted */}
//                       <div className="flex flex-col items-center gap-2 bg-white px-2">
//                         <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
//                           <span className="material-symbols-outlined">
//                             check
//                           </span>
//                         </div>
//                         <span className="text-sm font-semibold text-zinc-900">
//                           Submitted
//                         </span>
//                       </div>

//                       {/* Step 2: Assigned */}
//                       <div className="flex flex-col items-center gap-2 bg-white px-2">
//                         <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
//                           <span className="material-symbols-outlined fill-icon">
//                             radio_button_checked
//                           </span>
//                         </div>
//                         <span className="text-sm font-semibold text-blue-600">
//                           Assigned
//                         </span>
//                       </div>

//                       {/* Step 3: Collected */}
//                       <div className="flex flex-col items-center gap-2 bg-white px-2">
//                         <div className="w-10 h-10 rounded-full border-2 border-zinc-200 bg-white flex items-center justify-center text-zinc-400">
//                           <span className="material-symbols-outlined text-sm">
//                             circle
//                           </span>
//                         </div>
//                         <span className="text-sm font-medium text-zinc-400">
//                           Collected
//                         </span>
//                       </div>

//                       {/* Step 4: Verified */}
//                       <div className="flex flex-col items-center gap-2 bg-white px-2">
//                         <div className="w-10 h-10 rounded-full border-2 border-zinc-200 bg-white flex items-center justify-center text-zinc-400">
//                           <span className="material-symbols-outlined text-sm">
//                             circle
//                           </span>
//                         </div>
//                         <span className="text-sm font-medium text-zinc-400">
//                           Verified
//                         </span>
//                       </div>

//                       {/* Step 5: Paid */}
//                       <div className="flex flex-col items-center gap-2 bg-white px-2">
//                         <div className="w-10 h-10 rounded-full border-2 border-zinc-200 bg-white flex items-center justify-center text-zinc-400">
//                           <span className="material-symbols-outlined text-sm">
//                             circle
//                           </span>
//                         </div>
//                         <span className="text-sm font-medium text-zinc-400">
//                           Paid
//                         </span>
//                       </div>
//                     </div>

//                     <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-center gap-3">
//                       <span className="material-symbols-outlined text-blue-600">
//                         info
//                       </span>
//                       <p className="text-blue-700 font-medium">
//                         Status: Assigned - Worker on the way
//                       </p>
//                     </div>
//                   </section>

//                   {/* SECTION B: REQUEST INFORMATION */}
//                   <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-100 pt-8">
//                     {/* Left Column */}
//                     <div className="space-y-4">
//                       <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
//                         Request Information
//                       </h3>
//                       <div className="space-y-3">
//                         <div className="flex items-start gap-3">
//                           <span className="material-symbols-outlined text-primary">
//                             recycling
//                           </span>
//                           <div>
//                             <p className="text-xs text-zinc-500">Waste Type</p>
//                             <p className="font-semibold text-zinc-800">
//                               PET Bottles
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-start gap-3">
//                           <span className="material-symbols-outlined text-primary">
//                             weight
//                           </span>
//                           <div>
//                             <p className="text-xs text-zinc-500">
//                               Estimated Weight
//                             </p>
//                             <p className="font-semibold text-zinc-800">
//                               4.5 kg
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-start gap-3">
//                           <span className="material-symbols-outlined text-primary">
//                             location_on
//                           </span>
//                           <div>
//                             <p className="text-xs text-zinc-500">
//                               Pickup Address
//                             </p>
//                             <p className="font-semibold text-zinc-800 leading-snug">
//                               123 Main Street, Gulberg, Block C
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right Column */}
//                     <div className="space-y-4">
//                       <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
//                         Citizen Note & Media
//                       </h3>
//                       <div className="space-y-4">
//                         <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
//                           <p className="text-xs text-zinc-500 mb-1">
//                             Citizen Note
//                           </p>
//                           <p className="text-zinc-700 italic">
//                             "Bags are at the back gate, near the blue bin."
//                           </p>
//                         </div>
//                         <div>
//                           <p className="text-xs text-zinc-500 mb-2">
//                             Uploaded Photo
//                           </p>
//                           <div className="relative group cursor-pointer w-24 h-24 rounded-lg overflow-hidden border-2 border-zinc-200 hover:border-primary transition-all">
//                             <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
//                               <span className="material-symbols-outlined text-white">
//                                 zoom_in
//                               </span>
//                             </div>
//                             <img
//                               alt="Plastic bottles in a bag"
//                               className="w-full h-full object-cover"
//                               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs5qkN3jL_dULifQVUtcAlpIyavpQg06tUGWAh279gMxameSffrhE-NV9KcgjYiBfpzTJkTth1sUCDP7BLjOHprGQ33Ppe-tCyVL5VVwUHps_ybUvsFJmhSFuFptgibt2-PTRlW09VfOEq6AV3Y__5UqhTOuQisl4R3l9Jg_6P1pc5PK8UmVrAuo4lv1S5N5H0Hg1-GvwibBsHmtQ6Nbx0ZrpMvA2vu1iKgSQIvz7-YRWRhdQfVG_gYCcL62aNG7LnMWlDZoto"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>

//                   {/* SECTION C: VERIFICATION DETAILS (Optional Card) */}
//                   <section className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-xl p-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="font-bold text-zinc-900 flex items-center gap-2">
//                         <span className="material-symbols-outlined text-primary">
//                           verified
//                         </span>
//                         Verification Details
//                       </h3>
//                       <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">
//                         Pending Collection
//                       </span>
//                     </div>
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 opacity-60">
//                       <div>
//                         <p className="text-xs text-zinc-500">Actual Weight</p>
//                         <p className="font-bold text-lg">-- kg</p>
//                       </div>
//                       <div>
//                         <p className="text-xs text-zinc-500">Condition</p>
//                         <p className="font-bold text-lg text-primary">--</p>
//                       </div>
//                       <div>
//                         <p className="text-xs text-zinc-500">Rate Applied</p>
//                         <p className="font-bold text-lg">₹ --/kg</p>
//                       </div>
//                       <div>
//                         <p className="text-xs text-zinc-500">Final Earnings</p>
//                         <p className="font-bold text-lg text-primary">₹ --</p>
//                       </div>
//                     </div>
//                     <p className="mt-4 text-xs text-zinc-400 text-center italic">
//                       Details will be updated once the waste is collected and
//                       verified.
//                     </p>
//                   </section>

//                   {/* SECTION D: ASSIGNMENT DETAILS */}
//                   <section className="border-t border-zinc-100 pt-8">
//                     <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">
//                       Assigned Worker
//                     </h3>
//                     <div className="flex items-center justify-between bg-zinc-50 p-4 rounded-xl border border-zinc-100">
//                       <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden border-2 border-white">
//                           <img
//                             alt="Worker Portrait"
//                             className="w-full h-full object-cover"
//                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbLHKZxAZa8z2fwVqcSC8MS-lxAxP74o32lWoMyw8X8vh1FNxenWl0nVvTkquszMdVPPWgd0coEV7Y4S4UdM3qRYULfQePoHgVIq_6t11GV4N86SW7XtpSnjtnG2r1IPwiTZDQUG2SUXT0iwis3ICQx6HjnqslvNajFN48ZrDOOM8mktHdk61Dv1LnHdmIRYTlb-LEifnvKIFhEp0mKftCx17900OBfGL-iGltQaqihWpOLqBvkZX-MX__fRRzYpO8hOD8t8At"
//                           />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-zinc-900">
//                             Ali Raza{" "}
//                             <span className="text-zinc-400 font-normal text-xs">
//                               (W-07)
//                             </span>
//                           </h4>
//                           <div className="flex items-center gap-1 mt-0.5 text-xs text-zinc-500">
//                             <span className="material-symbols-outlined text-xs text-yellow-500 fill-icon">
//                               star
//                             </span>
//                             4.8 Rating • 1.2k Pickups
//                           </div>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-xs text-zinc-500 uppercase font-bold">
//                           Estimated Arrival
//                         </p>
//                         <p className="font-bold text-zinc-900">
//                           Today, 2:00 PM - 4:00 PM
//                         </p>
//                       </div>
//                     </div>
//                   </section>
//                 </div>

//                 {/* SECTION E: ACTION BUTTONS (Footer) */}
//                 <footer className="flex items-center justify-between px-8 py-6 bg-zinc-50 border-t border-zinc-100">
//                   <button className="px-6 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
//                     <span className="material-symbols-outlined text-sm">
//                       cancel
//                     </span>
//                     Cancel Request
//                   </button>
//                   <div className="flex gap-3">
//                     <button className="px-8 py-2.5 text-sm font-bold text-zinc-600 border border-zinc-300 rounded-lg hover:bg-zinc-100 transition-colors">
//                       Close
//                     </button>
//                     <button className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 text-sm font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
//                       <span className="material-symbols-outlined text-sm">
//                         support_agent
//                       </span>
//                       Need Help?
//                     </button>
//                   </div>
//                 </footer>
//               </div>
//           </DialogPanel>
//         </div>
//       </div>
//     </Dialog>
//   );
// }


import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

// Helper to determine step state
const getStepState = (currentStatus, stepName) => {
  const statusOrder = ["Pending", "Assigned", "Collected", "Verified", "Paid"];
  const stepIndex = statusOrder.indexOf(stepName);
  const currentIndex = statusOrder.indexOf(currentStatus);

  if (currentIndex > stepIndex) return "completed";
  if (currentIndex === stepIndex) return "active";
  return "pending";
};

export default function RequestDetailsModal({ isOpen, onClose, request }) {
  if (!request) return null; // safety check

  const {
    id,
    wasteType = "—",
    submitted = "—",
    scheduled = "—",
    status = "Pending",
    earnings = "—",
    // Extended fields (add these to your request objects)
    weight = "—",
    address = "—",
    citizenNote = "—",
    workerName = "—",
    workerId = "—",
    workerRating = "—",
    workerPickups = "—",
    estimatedArrival = "—",
    imageUrl = null,
  } = request;

  const statusOrder = ["Pending", "Assigned", "Collected", "Verified", "Paid"];

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 focus:outline-none">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out data-closed:opacity-0" aria-hidden="true" />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative w-full max-w-2xl rounded-xl bg-white shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0 overflow-hidden"
          >
            {/* Modal Header */}
            <header className="flex items-center justify-between px-8 py-6 border-b border-primary/10">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-2">
                  Request Details: <span className="text-primary">{id}</span>
                </h2>
                <p className="text-zinc-500 text-sm mt-1">
                  Submitted on: {submitted}
                </p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-400 hover:text-zinc-600">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </header>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-8 space-y-8 max-h-[calc(90vh-200px)]">
              {/* Status Timeline */}
              <section className="space-y-6">
                <div className="relative flex items-center justify-between">
                  {/* Progress background lines */}
                  <div className="absolute top-5 left-0 w-full h-0.5 bg-zinc-200 -z-10" />
                  <div
                    className="absolute top-5 left-0 h-0.5 bg-primary -z-10 transition-all"
                    style={{ width: `${(statusOrder.indexOf(status) / (statusOrder.length - 1)) * 100}%` }}
                  />

                  {statusOrder.map((step) => {
                    const state = getStepState(status, step);
                    return (
                      <div key={step} className="flex flex-col items-center gap-2 bg-white px-2">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                            state === "completed"
                              ? "bg-primary text-white shadow-primary/20"
                              : state === "active"
                              ? "bg-blue-500 text-white shadow-blue-500/20"
                              : "border-2 border-zinc-200 bg-white text-zinc-400"
                          }`}
                        >
                          <span className="material-symbols-outlined">
                            {state === "completed"
                              ? "check"
                              : state === "active"
                              ? "radio_button_checked"
                              : "circle"}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-${
                            state === "active" ? "bold text-blue-600" : "medium text-zinc-400"
                          }`}
                        >
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-600">info</span>
                  <p className="text-blue-700 font-medium">Status: {status}</p>
                </div>
              </section>

              {/* Request Information */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-100 pt-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                    Request Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary">recycling</span>
                      <div>
                        <p className="text-xs text-zinc-500">Waste Type</p>
                        <p className="font-semibold text-zinc-800">{wasteType}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary">weight</span>
                      <div>
                        <p className="text-xs text-zinc-500">Estimated Weight</p>
                        <p className="font-semibold text-zinc-800">{weight}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                      <div>
                        <p className="text-xs text-zinc-500">Pickup Address</p>
                        <p className="font-semibold text-zinc-800 leading-snug">{address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                    Citizen Note & Media
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                      <p className="text-xs text-zinc-500 mb-1">Citizen Note</p>
                      <p className="text-zinc-700 italic">"{citizenNote}"</p>
                    </div>
                    {imageUrl && (
                      <div>
                        <p className="text-xs text-zinc-500 mb-2">Uploaded Photo</p>
                        <div className="relative group cursor-pointer w-24 h-24 rounded-lg overflow-hidden border-2 border-zinc-200 hover:border-primary transition-all">
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <span className="material-symbols-outlined text-white">zoom_in</span>
                          </div>
                          <img src={imageUrl} alt="Waste" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Verification Details */}
              <section className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-zinc-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    Verification Details
                  </h3>
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    {status === "Verified" || status === "Paid" ? "Completed" : "Pending Collection"}
                  </span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <p className="text-xs text-zinc-500">Actual Weight</p>
                    <p className="font-bold text-lg">{status === "Verified" || status === "Paid" ? weight : "-- kg"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Condition</p>
                    <p className="font-bold text-lg text-primary">{status === "Verified" || status === "Paid" ? "Good" : "--"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Rate Applied</p>
                    <p className="font-bold text-lg">{status === "Verified" || status === "Paid" ? "₹ 15/kg" : "₹ --/kg"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Final Earnings</p>
                    <p className="font-bold text-lg text-primary">{status === "Paid" ? earnings : "--"}</p>
                  </div>
                </div>
                {(status !== "Verified" && status !== "Paid") && (
                  <p className="mt-4 text-xs text-zinc-400 text-center italic">
                    Details will be updated once the waste is collected and verified.
                  </p>
                )}
              </section>

              {/* Assigned Worker */}
              {workerName !== "—" && (
                <section className="border-t border-zinc-100 pt-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">
                    Assigned Worker
                  </h3>
                  <div className="flex items-center justify-between bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden border-2 border-white">
                        {/* You can add a worker image if available */}
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900">
                          {workerName} <span className="text-zinc-400 font-normal text-xs">({workerId})</span>
                        </h4>
                        <div className="flex items-center gap-1 mt-0.5 text-xs text-zinc-500">
                          <span className="material-symbols-outlined text-xs text-yellow-500 fill-icon">star</span>
                          {workerRating} Rating • {workerPickups} Pickups
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-zinc-500 uppercase font-bold">Estimated Arrival</p>
                      <p className="font-bold text-zinc-900">{estimatedArrival}</p>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Footer Actions */}
            <footer className="flex items-center justify-between px-8 py-6 bg-zinc-50 border-t border-zinc-100">
              <button className="px-6 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">cancel</span>
                Cancel Request
              </button>
              <div className="flex gap-3">
                <button onClick={onClose} className="px-8 py-2.5 text-sm font-bold text-zinc-600 border border-zinc-300 rounded-lg hover:bg-zinc-100 transition-colors">
                  Close
                </button>
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 text-sm font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">support_agent</span>
                  Need Help?
                </button>
              </div>
            </footer>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}