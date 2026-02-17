import React, { useState } from "react";
import CitizenRequestStatusDetails from "./CitizenRequestStatusDetails";

const CitizenRequestStatusView = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Sample request data
  const requests = [
    {
      id: "#REQ-1005",
      wasteType: "PET Bottles",
      submitted: "24 Dec 2025",
      scheduled: "--",
      status: "Pending",
      statusIcon: "schedule",
      statusColor: "bg-yellow-100 text-yellow-700",
      earnings: "Rs 150",
    },
    {
      id: "#REQ-1004",
      wasteType: "Cardboard",
      submitted: "23 Dec 2025",
      scheduled: "26 Dec 2025",
      status: "Assigned",
      statusIcon: "local_shipping",
      statusColor: "bg-blue-100 text-blue-700",
      earnings: "Rs 120",
    },
    {
      id: "#REQ-1003",
      wasteType: "Mixed Paper",
      submitted: "22 Dec 2025",
      scheduled: "25 Dec 2025",
      status: "Verified",
      statusIcon: "verified",
      statusColor: "bg-green-100 text-green-700",
      earnings: "Rs 45",
    },
    {
      id: "#REQ-1002",
      wasteType: "Metal Cans",
      submitted: "20 Dec 2025",
      scheduled: "21 Dec 2025",
      status: "Paid",
      statusIcon: "check_circle",
      statusColor: "bg-primary/20 text-primary",
      earnings: "Rs 180",
    },
  ];

  return (
    <>
      <main className="flex-1 flex flex-col bg-background-light p-8 gap-8 overflow-x-hidden">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-[#121614] text-4xl font-black leading-tight tracking-[-0.033em]">
              My Pickup Requests
            </h1>
          </div>
          <div className="flex flex-wrap items-end gap-4 bg-white p-6 rounded-xl border border-[#dde3e0] shadow-sm">
            <div className="flex flex-col gap-2 min-w-50">
              <p className="text-[#121614] text-sm font-semibold">Filter by Status</p>
              <select className="form-select w-full rounded-lg border-[#dde3e0] border-2 bg-white text-sm focus:border-primary focus:ring-primary h-11">
                <option>All Statuses</option>
                <option>Pending</option>
                <option>Assigned</option>
                <option>Collected</option>
                <option>Verified</option>
                <option>Paid</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-75">
              <p className="text-[#121614] text-sm font-semibold">Search Request ID</p>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6a8174]">
                  search
                </span>
                <input
                  className="form-input w-full pl-10 rounded-lg border-[#dde3e0] border-2 bg-white text-sm focus:border-primary focus:ring-primary h-11"
                  placeholder="Search by Request ID (#REQ-...)"
                  type="text"
                />
              </div>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold h-11 px-8 rounded-lg transition-colors whitespace-nowrap">
              Apply Filters
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden flex flex-col flex-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#f8faf9] border-b border-[#dde3e0]">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Request ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Waste Type
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Submitted
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Scheduled
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Est. Earnings
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dde3e0]">
                {requests.map((req) => (
                  <tr
                    key={req.id}
                    className="hover:bg-primary/5 transition-colors cursor-pointer"
                    onClick={() => setSelectedRequest(req)}
                  >
                    <td className="px-6 py-4 font-bold text-sm">{req.id}</td>
                    <td className="px-6 py-4 text-sm">{req.wasteType}</td>
                    <td className="px-6 py-4 text-sm">{req.submitted}</td>
                    <td className="px-6 py-4 text-sm">{req.scheduled}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${req.statusColor}`}
                      >
                        <span className="material-symbols-outlined text-sm">
                          {req.statusIcon}
                        </span>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold">{req.earnings}</td>
                    <td className="px-6 py-4">
                      <button
                        className="text-primary hover:underline text-sm font-bold"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedRequest(req);
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-[#dde3e0] flex items-center justify-between">
            <p className="text-sm text-[#6a8174]">Showing 4 of 28 requests</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded border border-[#dde3e0] text-sm disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1 rounded border border-primary bg-primary/5 text-primary text-sm font-bold">
                1
              </button>
              <button className="px-3 py-1 rounded border border-[#dde3e0] text-sm">2</button>
              <button className="px-3 py-1 rounded border border-[#dde3e0] text-sm">Next</button>
            </div>
          </div>
        </div>
      </main>

      {/* Right Details Panel */}
      {selectedRequest && (
        <CitizenRequestStatusDetails
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
        />
      )}
    </>
  );
};

export default CitizenRequestStatusView;