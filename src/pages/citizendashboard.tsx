import React from "react";
import { useState } from "react";

export default function MyPage() {
  const [citizendashboard, setcitizendashboard] = useState("Dashboard");
  const [Recycleable, setRecycleable] = useState("Recycleable");

  return (
    <div className="bg-background-light min-h-screen text-[#121614]">
      <div className="flex flex-col h-screen">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dde3e0] bg-white px-6 py-3 z-10">
          <div className="flex items-center gap-4 text-[#121614]">
            <div className="size-8 text-primary">
              <svg
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">
              Smart Waste Platform
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-background-light text-[#121614] text-sm font-bold">
              <span className="truncate">Welcome, Alex Johnson</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARLnZCokXKKDWEsIDIjwcwXqdOEMDA668FrQyd_Q6uUGsAeFMDQmCqAf28ukoRKC7G-fMKgKD_XJht4TxfdIuxMMbbIq1C_jGjSE1wAg6FrM47b-gCZm73h5z75p1UUmRoo0C3PMSX_zdnDzF9_6BzH4S9_LlrEtAfSH-f1v3GhyEJpV-jCKE6T1SM25HMnwr9K2dxjYPJ2AM7BDpLpC23RT4_wv31P6Yg0b3epeJRiMmI5W1ddzrRf45zQPvhSAOLQfzrlY6w")',
              }}
            ></div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar Navigation */}
          <aside className="w-72 bg-white border-r border-[#dde3e0] flex flex-col justify-between p-4 overflow-y-auto">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col px-3">
                <h1 className="text-[#121614] text-base font-bold">
                  Citizen Portal
                </h1>
                <p className="text-[#6a8174] text-xs font-medium uppercase tracking-wider">
                  Main Menu
                </p>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                <a
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${citizendashboard === "Dashboard" ? "bg-primary text-white" : "bg-white text-[#121614] hover:bg-[#f6f8f7]"}`}
                  onClick={() => {
                    setcitizendashboard("Dashboard");
                  }}
                  href="#"
                >
                  <span className="material-symbols-outlined">grid_view</span>
                  <p className="text-sm font-medium">Dashboard</p>
                </a>
                <a
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${citizendashboard === "Request" ? "bg-primary text-white" : "bg-white text-[#121614] hover:bg-[#f6f8f7]"}`}
                  onClick={() => {
                    setcitizendashboard("Request");
                  }}
                  href="#"
                >
                  <span className="material-symbols-outlined">add_circle</span>
                  <p className="text-sm font-medium">Submit New Request</p>
                </a>
                <a
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${citizendashboard === "RequestStatus" ? "bg-primary text-white" : "bg-white text-[#121614] hover:bg-[#f6f8f7]"}`}
                  onClick={() => {
                    setcitizendashboard("RequestStatus");
                  }}
                  href="#"
                >
                  <span className="material-symbols-outlined">
                    format_list_bulleted
                  </span>
                  <p className="text-sm font-medium">My Requests & Status</p>
                </a>
                <a
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${citizendashboard === "Earnings" ? "bg-primary text-white" : "bg-white text-[#121614] hover:bg-[#f6f8f7]"}`}
                  onClick={() => {
                    setcitizendashboard("Earnings");
                  }}
                  href="#"
                >
                  <span className="material-symbols-outlined">
                    account_balance_wallet
                  </span>
                  <p className="text-sm font-medium">Earnings Wallet</p>
                </a>
                <a
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${citizendashboard === "Guidelines" ? "bg-primary text-white" : "bg-white text-[#121614] hover:bg-[#f6f8f7]"}`}
                  onClick={() => {
                    setcitizendashboard("Guidelines");
                  }}
                  href="#"
                >
                  <span className="material-symbols-outlined">menu_book</span>
                  <p className="text-sm font-medium">Recycling Guidelines</p>
                </a>
                <div className="my-4 border-t border-[#dde3e0]"></div>
                <a
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${citizendashboard === "Profile" ? "bg-primary text-white" : "bg-white text-[#121614] hover:bg-[#f6f8f7]"}`}
                  onClick={() => {
                    setcitizendashboard("Profile");
                  }}
                  href="#"
                >
                  <span className="material-symbols-outlined">person</span>
                  <p className="text-sm font-medium">My Profile</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">logout</span>
                  <p className="text-sm font-medium">Log Out</p>
                </a>
              </nav>
            </div>

            {/* Impact Goal Box */}
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-[10px] uppercase font-bold text-primary mb-1">
                Impact Goal
              </p>
              <p className="text-xs text-[#121614]">
                You've saved <span className="font-bold">12kg</span> of CO2 this
                month!
              </p>
            </div>
          </aside>

          {/* Main Content Area */}
          {citizendashboard === "Dashboard" && (
            <main className="flex-1 overflow-y-auto bg-background-light p-8">
              <div className="max-w-275 mx-auto space-y-8">
                {/* Stats Section - Three Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Total Earnings Card */}
                  <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
                    <div className="flex justify-between items-start">
                      <p className="text-[#6a8174] text-sm font-medium">
                        Total Earnings
                      </p>
                      <span className="material-symbols-outlined text-primary text-xl">
                        payments
                      </span>
                    </div>
                    <p className="text-[#121614] text-3xl font-bold leading-tight">
                      Rs 1,240
                    </p>
                    <div className="flex items-center gap-1 text-primary text-sm font-bold mt-1">
                      <span className="material-symbols-outlined text-sm">
                        trending_up
                      </span>
                      <span>+12% from last month</span>
                    </div>
                  </div>

                  {/* Pending Pickups Card */}
                  <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
                    <div className="flex justify-between items-start">
                      <p className="text-[#6a8174] text-sm font-medium">
                        Pending Pickups
                      </p>
                      <span className="material-symbols-outlined text-orange-400 text-xl">
                        pending_actions
                      </span>
                    </div>
                    <p className="text-[#121614] text-3xl font-bold leading-tight">
                      2
                    </p>
                    <p className="text-[#6a8174] text-sm mt-1">
                      Scheduled within 48h
                    </p>
                  </div>

                  {/* Completed This Month Card */}
                  <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
                    <div className="flex justify-between items-start">
                      <p className="text-[#6a8174] text-sm font-medium">
                        Completed This Month
                      </p>
                      <span className="material-symbols-outlined text-primary text-xl">
                        verified
                      </span>
                    </div>
                    <p className="text-[#121614] text-3xl font-bold leading-tight">
                      5
                    </p>
                    <p className="text-[#6a8174] text-sm mt-1">
                      Target: 8 pickups
                    </p>
                  </div>
                </div>

                {/* Primary Action Card - Request New Pickup */}
                <div className="flex flex-col xl:flex-row items-stretch rounded-xl shadow-md bg-white border border-[#dde3e0] overflow-hidden">
                  <div
                    className="w-full xl:w-1/3 h-48 xl:h-full bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCV2ZwaK3eYezr1BmL33Rz-6IIsIfJVt3fXhW6ZgNkaVOu2jnIPm1RGui0yHeoDIl8EH9DohH6qxGpJO6X38SeEmOZgvZIMOjNyAzyLOYZi59DoVjmUpCmSHVpUFUaB-GXB5EMxQzYd_Ci6loiEEtwwski_2HDf6GKBTOynuogtDVcFOE_x0rjgcrDuBLHpVNh1SHLZOldhWS_Wf4lI6FgJFnNiDhm0XqymgMa3tx7cU23d56AWT87mmHWn5vkDCmf6dizJATpw")',
                    }}
                  ></div>
                  <div className="flex w-full grow flex-col items-start justify-center gap-4 p-8">
                    <div>
                      <h3 className="text-[#121614] text-2xl font-bold tracking-tight">
                        Ready for a new pickup?
                      </h3>
                      <p className="text-[#6a8174] text-base mt-1">
                        Request a pickup for your sorted waste and start earning
                        rewards. We accept PET, cardboard, and glass.
                      </p>
                    </div>
                    <button
                      className="flex items-center gap-2 cursor-pointer rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20"
                      onClick={() => setcitizendashboard("Request")}
                    >
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                      <span>Submit a New Pickup Request</span>
                    </button>
                  </div>
                </div>

                {/* Recent Activity Table */}
                <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden">
                  <div className="px-6 py-5 border-b border-[#dde3e0] flex justify-between items-center">
                    <h2 className="text-[#121614] text-xl font-bold">
                      Recent Pickup Requests
                    </h2>
                    <button className="text-primary text-sm font-bold hover:underline">
                      View All My Requests
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-background-light">
                          <th className="px-6 py-4 text-sm font-bold text-[#6a8174] uppercase tracking-wider">
                            Request ID
                          </th>
                          <th className="px-6 py-4 text-sm font-bold text-[#6a8174] uppercase tracking-wider">
                            Waste Type
                          </th>
                          <th className="px-6 py-4 text-sm font-bold text-[#6a8174] uppercase tracking-wider">
                            Date Submitted
                          </th>
                          <th className="px-6 py-4 text-sm font-bold text-[#6a8174] uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-4 text-sm font-bold text-[#6a8174] uppercase tracking-wider text-right">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#dde3e0]">
                        {/* Row 1 - Pending */}
                        <tr className="hover:bg-background-light transition-colors">
                          <td className="px-6 py-4 text-sm font-medium">
                            #REQ-1001
                          </td>
                          <td className="px-6 py-4 text-sm">PET Bottles</td>
                          <td className="px-6 py-4 text-sm">24 Dec 2025</td>
                          <td className="px-6 py-4 text-sm">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700">
                              Pending
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-right">
                            <button className="text-primary font-bold hover:text-primary/80">
                              View
                            </button>
                          </td>
                        </tr>

                        {/* Row 2 - Verified */}
                        <tr className="hover:bg-background-light transition-colors">
                          <td className="px-6 py-4 text-sm font-medium">
                            #REQ-1000
                          </td>
                          <td className="px-6 py-4 text-sm">Cardboard</td>
                          <td className="px-6 py-4 text-sm">23 Dec 2025</td>
                          <td className="px-6 py-4 text-sm">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/20 text-primary">
                              Verified
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-right">
                            <button className="text-primary font-bold hover:text-primary/80">
                              View
                            </button>
                          </td>
                        </tr>

                        {/* Row 3 - Paid */}
                        <tr className="hover:bg-background-light transition-colors">
                          <td className="px-6 py-4 text-sm font-medium">
                            #REQ-0999
                          </td>
                          <td className="px-6 py-4 text-sm">Mixed Paper</td>
                          <td className="px-6 py-4 text-sm">22 Dec 2025</td>
                          <td className="px-6 py-4 text-sm">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                              Paid
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-right">
                            <button className="text-primary font-bold hover:text-primary/80">
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
          )}

          {citizendashboard === "Request" && (
            <main className="flex-1 overflow-y-auto px-6 py-8 md:px-12 lg:px-20">
              <div className="max-w-4xl mx-auto">
                {/* <!-- Page Heading --> */}
                <div className="mb-8">
                  <h1 className="text-[#121614] text-2xl font-black leading-tight tracking-[-0.033em]">
                    Submit a New Pickup Request
                  </h1>
                  <p className="text-[#6a8174] text-base mt-2">
                    Please fill in the details below to schedule a waste
                    collection from your location.
                  </p>
                </div>
                {/* <!-- Form Card --> */}
                <div className="bg-white  border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 md:p-8 flex flex-col gap-8">
                    {/* <!-- Waste Type Selection --> */}
                    <section>
                      <h2 className="text-[#121614]  text-lg font-bold mb-4">
                        Waste Type Selection
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* <!-- Selection 1 --> */}
                        <div
                          className={`relative cursor-pointer flex flex-col p-4 rounded-xl border-2 transition-all ${Recycleable === "Recycleable" ? "border-primary bg-primary/5" : "border-gray-100 hover:border-primary/50"}`}
                          onClick={() => setRecycleable("Recycleable")}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <span className="text-2xl">♻️</span>
                            {Recycleable === "Recycleable" && (
                              <span className="material-symbols-outlined text-primary active-icon">
                                check_circle
                              </span>
                            )}
                          </div>
                          <p className="text-[#121614]  text-sm font-bold leading-tight mb-1">
                            Properly Separated Recyclables
                          </p>
                          <p className="text-primary text-xs font-semibold mb-2">
                            Earns: Rs 15/kg
                          </p>
                          <p className="text-[#6a8174] text-xs">
                            PET bottles, Cardboard, Aluminum, Metal
                          </p>
                        </div>
                        {/* <!-- Selection 2 --> */}
                        <div
                          className={`relative cursor-pointer flex flex-col p-4 rounded-xl border-2 transition-all ${Recycleable === "SemiRecycleable" ? "border-primary bg-primary/5" : "border-gray-100 hover:border-primary/50"}`}
                          onClick={() => setRecycleable("SemiRecycleable")}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <span className="text-2xl">⚠️</span>
                            {Recycleable === "SemiRecycleable" && (
                              <span className="material-symbols-outlined text-primary active-icon">
                                check_circle
                              </span>
                            )}
                          </div>
                          <p className="text-[#121614]  text-sm font-bold leading-tight mb-1">
                            Mixed Clean Recyclables
                          </p>
                          <p className="text-gray-500  text-xs font-semibold mb-2">
                            Earns: Rs 5/kg
                          </p>
                          <p className="text-[#6a8174] text-xs">
                            Mixed paper, Newsprint, Office waste only
                          </p>
                        </div>
                        {/* <!-- Selection 3 --> */}
                        <div
                          className={`relative cursor-pointer flex flex-col p-4 rounded-xl border-2 transition-all ${Recycleable === "NonRecycleable" ? "border-primary bg-primary/5" : "border-gray-100 hover:border-primary/50"}`}
                          onClick={() => setRecycleable("NonRecycleable")}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <span className="text-2xl">🗑️</span>
                            {Recycleable === "NonRecycleable" && (
                              <span className="material-symbols-outlined text-primary active-icon">
                                check_circle
                              </span>
                            )}
                          </div>
                          <p className="text-[#121614]  text-sm font-bold leading-tight mb-1">
                            Non-Recyclable Waste
                          </p>
                          <p className="text-gray-500  text-xs font-semibold mb-2">
                            No earnings
                          </p>
                          <p className="text-[#6a8174] text-xs">
                            General waste, Food scrap, Sanitaries
                          </p>
                        </div>
                      </div>
                    </section>
                    {/* <!-- Weight and Photo --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <section>
                        <label className="block text-sm font-bold text-[#121614]  mb-2">
                          Estimated Weight (kg) *
                        </label>
                        <input
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="Enter weight"
                          type="number"
                        />
                        <p className="mt-2 text-xs text-gray-500 italic">
                          * Final weight will be verified by collector.
                        </p>
                      </section>
                      <section>
                        <label className="block text-sm font-bold text-[#121614]  mb-2">
                          Photo of Waste Bag *
                        </label>
                        <div className="border-2 border-dashed border-gray-300  rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50  hover:bg-gray-100 transition-colors cursor-pointer">
                          <span className="material-symbols-outlined text-gray-400 text-4xl mb-2">
                            cloud_upload
                          </span>
                          <p className="text-sm font-medium text-gray-700 ">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PNG, JPG up to 5MB
                          </p>
                        </div>
                      </section>
                    </div>
                    {/* <!-- Pickup Details --> */}
                    <section className="flex flex-col gap-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-bold text-[#121614] ">
                            Pickup Address
                          </label>
                          <a
                            className="text-xs text-primary font-bold hover:underline"
                            href="#"
                          >
                            Edit
                          </a>
                        </div>
                        <div className="p-4 bg-gray-50  border border-gray-200  rounded-lg flex gap-3 items-start">
                          <span className="material-symbols-outlined text-primary mt-1">
                            location_on
                          </span>
                          <div>
                            <p className="text-sm font-medium text-gray-900 ">
                              Home (Primary)
                            </p>
                            <p className="text-sm text-gray-600 ">
                              House No 30, Block 4, Citi Housing, Jhelum -
                              560001
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#121614]  mb-2">
                          Additional Notes for Worker
                        </label>
                        <textarea
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="Special instructions (e.g., Gate code, specific bin location...)"
                          rows={3}
                        ></textarea>
                      </div>
                    </section>
                    {/* <!-- Actions --> */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 ">
                      <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-primary/20">
                        Submit Request
                      </button>
                      <button className="flex-1 bg-transparent hover:bg-gray-100  text-gray-600  font-bold py-3 px-6 border border-gray-300  rounded-lg transition-colors">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Help Section --> */}
                <div className="mt-8 p-4 bg-primary/10 rounded-lg flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">
                    info
                  </span>
                  <div>
                    <p className="text-sm font-bold text-primary">
                      Need help with segregation?
                    </p>
                    <p className="text-sm text-gray-700 ">
                      Check our "
                      <a
                        className="font-semibold underline decoration-2"
                        href="#"
                      >
                        {" "}
                        Recycling Guide
                      </a>
                      " to maximize your earnings per kg.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          )}

          {citizendashboard === "Earnings" && (
            <main className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
              <div className="max-w-5xl mx-auto space-y-8">
                {/* <!-- Page Heading --> */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#121614]  text-3xl font-black tracking-tight">
                    Earnings Wallet
                  </h2>
                  <p className="text-gray-500  text-base">
                    Manage and track your recycling rewards and transaction
                    history
                  </p>
                </div>
                {/* <!-- Wallet Summary Cards --> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white  rounded-xl p-6 border border-[#dde3e0]  shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <p className="text-gray-500  text-sm font-medium">
                        Current Wallet Balance
                      </p>
                      <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full">
                        payments
                      </span>
                    </div>
                    <p className="text-primary text-3xl font-bold leading-tight">
                      Rs 1,850
                    </p>
                    <p className="text-primary text-sm font-semibold mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        arrow_upward
                      </span>
                      +Rs 150 today
                    </p>
                  </div>
                  <div className="bg-white  rounded-xl p-6 border border-[#dde3e0]  shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <p className="text-gray-500  text-sm font-medium">
                        Earned This Month
                      </p>
                      <span className="material-symbols-outlined text-gray-400 bg-gray-100  p-2 rounded-full">
                        calendar_today
                      </span>
                    </div>
                    <p className="text-[#121614]  text-3xl font-bold leading-tight">
                      Rs 420
                    </p>
                    <p className="text-primary text-sm font-semibold mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        trending_up
                      </span>
                      12% increase
                    </p>
                  </div>
                  <div className="bg-white  rounded-xl p-6 border border-[#dde3e0]  shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <p className="text-gray-500  text-sm font-medium">
                        Total Transactions
                      </p>
                      <span className="material-symbols-outlined text-gray-400 bg-gray-100  p-2 rounded-full">
                        receipt_long
                      </span>
                    </div>
                    <p className="text-[#121614]  text-3xl font-bold leading-tight">
                      14
                    </p>
                    <p className="text-primary text-sm font-semibold mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        add
                      </span>{" "}
                      2 new this week
                    </p>
                  </div>
                </div>
                {/* <!-- Earnings Breakdown & Visual --> */}
                <div className="bg-white  rounded-xl border border-[#dde3e0] shadow-sm">
                  <h3 className="text-[#121614]  text-lg font-bold p-6 border-b border-[#dde3e0] ">
                    Earnings Breakdown by Material
                  </h3>
                  <div className="p-8 flex flex-col md:flex-row items-center gap-12">
                    {/* <!-- Placeholder for Donut Chart --> */}
                    <div className="relative size-48 shrink-0">
                      <div
                        className="size-full rounded-full border-16 border-primary"
                        style={{
                          clipPath: "polygon(50% 50%, 50% 0, 100% 0, 100% 50%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 size-full rounded-full border-16 border-primary/40 rotate-90"
                        style={{
                          clipPath: "polygon(50% 50%, 50% 0, 100% 0, 100% 50%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 size-full rounded-full border-16 border-primary/20 rotate-180"
                        style={{ clipPath: "polygon(50% 50%, 50% 0, 80% 0)" }}
                      ></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-black text-primary">
                          Rs 1,850
                        </span>
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                          Total
                        </span>
                      </div>
                    </div>
                    {/* <!-- Legend --> */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-primary"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 ">
                            PET Bottles
                          </p>
                          <p className="text-lg font-bold">Rs 750</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-primary/60"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 ">
                            Cardboard
                          </p>
                          <p className="text-lg font-bold">Rs 600</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-primary/40"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 ">
                            Metal Cans
                          </p>
                          <p className="text-lg font-bold">Rs 350</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-primary/20"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 ">
                            Mixed Paper
                          </p>
                          <p className="text-lg font-bold">Rs 150</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Transaction History Table --> */}
                <div className="bg-white  rounded-xl border border-[#dde3e0]  shadow-sm overflow-hidden">
                  <div className="flex justify-between items-center p-6 border-b border-[#dde3e0] ">
                    <h3 className="text-[#121614]  text-lg font-bold">
                      Transaction History
                    </h3>
                    <div className="flex gap-2">
                      <button className="text-sm font-semibold text-primary px-3 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          download
                        </span>
                        Export to CSV
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-[#f6f8f7] ">
                        <tr>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Waste Type
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                            Weight / Rate
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                            Amount
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#dde3e0] ">
                        {/* <!-- Row 1 --> */}
                        <tr className="hover:bg-gray-50  transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 ">
                            20 Dec 2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <p className="text-sm font-semibold text-gray-900 ">
                              Payment for #REQ-1002
                            </p>
                            <p className="text-xs text-gray-400">
                              Recycling Credit
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 rounded bg-blue-50  text-blue-600 text-[11px] font-bold uppercase">
                              PET Bottles
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <p className="text-sm font-medium">5.0 kg</p>
                            <p className="text-xs text-gray-400">Rs 30/kg</p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <p className="text-sm font-bold text-primary">
                              + Rs 150
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                              <span className="material-symbols-outlined text-[18px]">
                                check_circle
                              </span>
                              Credited
                            </div>
                          </td>
                        </tr>
                        {/* <!-- Row 2 --> */}
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 ">
                            18 Dec 2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <p className="text-sm font-semibold text-gray-900 ">
                              Payment for #REQ-1001
                            </p>
                            <p className="text-xs text-gray-400">
                              Recycling Credit
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 rounded bg-amber-50  text-amber-600  text-[11px] font-bold uppercase">
                              Cardboard
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <p className="text-sm font-medium">4.0 kg</p>
                            <p className="text-xs text-gray-400">RS 30/kg</p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <p className="text-sm font-bold text-primary">
                              + Rs 120
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                              <span className="material-symbols-outlined text-[18px]">
                                check_circle
                              </span>
                              Credited
                            </div>
                          </td>
                        </tr>
                        {/* <!-- Row 3 --> */}
                        <tr className="hover:bg-gray-50  transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 ">
                            15 Dec 2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <p className="text-sm font-semibold text-gray-900 ">
                              Payment for #REQ-0999
                            </p>
                            <p className="text-xs text-gray-400">
                              Recycling Credit
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 rounded bg-gray-50 text-gray-600  text-[11px] font-bold uppercase">
                              Mixed Paper
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <p className="text-sm font-medium">3.0 kg</p>
                            <p className="text-xs text-gray-400">Rs 15/kg</p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <p className="text-sm font-bold text-primary">
                              + Rs 45
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                              <span className="material-symbols-outlined text-[18px]">
                                check_circle
                              </span>
                              Credited
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <!-- Pagination Footer --> */}
                  <div className="p-4 border-t border-[#dde3e0]  flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      Showing 1 to 3 of 14 transactions
                    </p>
                    <div className="flex items-center gap-1">
                      <button
                        className="p-2 rounded hover:bg-gray-100  disabled:opacity-30"
                        disabled={true}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          chevron_left
                        </span>
                      </button>
                      <button className="size-8 rounded bg-primary text-white text-sm font-bold">
                        1
                      </button>
                      <button className="size-8 rounded hover:bg-gray-100  text-sm font-medium">
                        2
                      </button>
                      <button className="size-8 rounded hover:bg-gray-100  text-sm font-medium">
                        3
                      </button>
                      <span className="px-1 text-gray-400">...</span>
                      <button className="p-2 rounded hover:bg-gray-100 ">
                        <span className="material-symbols-outlined text-[20px]">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          )}
          {citizendashboard === "RequestStatus" && (
            <>
              <main className="flex-1 flex flex-col bg-[#f6f8f7]  p-8 gap-8 overflow-x-hidden">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[#121614]  text-4xl font-black leading-tight tracking-[-0.033em]">
                      My Pickup Requests
                    </h1>
                  </div>
                  <div className="flex flex-wrap items-end gap-4 bg-white  p-6 rounded-xl border border-[#dde3e0]  shadow-sm">
                    <div className="flex flex-col gap-2 min-w-50">
                      <p className="text-[#121614]  text-sm font-semibold">
                        Filter by Status
                      </p>
                      <select className="form-select w-full rounded-lg border-[#dde3e0] border-2  bg-white  text-sm focus:border-primary focus:ring-primary h-11">
                        <option>All Statuses</option>
                        <option>Pending</option>
                        <option>Assigned</option>
                        <option>Collected</option>
                        <option>Verified</option>
                        <option>Paid</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 min-w-75">
                      <p className="text-[#121614]  text-sm font-semibold">
                        Search Request ID
                      </p>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6a8174]">
                          search
                        </span>

                        <input
                          className="form-input w-full pl-10 rounded-lg border-[#dde3e0] border-2  bg-white  text-sm focus:border-primary focus:ring-primary h-11"
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

                <div className="bg-white  rounded-xl border border-[#dde3e0]  shadow-sm overflow-hidden flex flex-col flex-1">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-[#f8faf9]  border-b border-[#dde3e0] ">
                        <tr>
                          <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174] ">
                            Request ID
                          </th>
                          <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174] ">
                            Waste Type
                          </th>
                          <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174] ">
                            Submitted
                          </th>
                          <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174] ">
                            Scheduled
                          </th>
                          <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174] ">
                            Status
                          </th>
                          <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174] ">
                            Est. Earnings
                          </th>
                          <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174] ">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#dde3e0] ">
                        <tr className="hover:bg-primary/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-sm">
                            #REQ-1005
                          </td>
                          <td className="px-6 py-4 text-sm">PET Bottles</td>
                          <td className="px-6 py-4 text-sm">24 Dec 2025</td>
                          <td className="px-6 py-4 text-sm text-[#6a8174]">
                            --
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700  ">
                              <span className="material-symbols-outlined text-sm">
                                schedule
                              </span>
                              Pending
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold">
                            Rs 150
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-primary hover:underline text-sm font-bold">
                              View Details
                            </button>
                          </td>
                        </tr>

                        <tr className="hover:bg-primary/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-sm">
                            #REQ-1004
                          </td>
                          <td className="px-6 py-4 text-sm">Cardboard</td>
                          <td className="px-6 py-4 text-sm">23 Dec 2025</td>
                          <td className="px-6 py-4 text-sm">26 Dec 2025</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 ">
                              <span className="material-symbols-outlined text-sm">
                                local_shipping
                              </span>
                              Assigned
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold">
                            Rs 120
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-primary hover:underline text-sm font-bold">
                              View Details
                            </button>
                          </td>
                        </tr>

                        <tr className="hover:bg-primary/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-sm">
                            #REQ-1003
                          </td>
                          <td className="px-6 py-4 text-sm">Mixed Paper</td>
                          <td className="px-6 py-4 text-sm">22 Dec 2025</td>
                          <td className="px-6 py-4 text-sm">25 Dec 2025</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 ">
                              <span className="material-symbols-outlined text-sm">
                                verified
                              </span>
                              Verified
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold">
                            Rs 45
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-primary hover:underline text-sm font-bold">
                              View Details
                            </button>
                          </td>
                        </tr>

                        <tr className="hover:bg-primary/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-sm">
                            #REQ-1002
                          </td>
                          <td className="px-6 py-4 text-sm">Metal Cans</td>
                          <td className="px-6 py-4 text-sm">20 Dec 2025</td>
                          <td className="px-6 py-4 text-sm">21 Dec 2025</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary ">
                              <span className="material-symbols-outlined text-sm">
                                check_circle
                              </span>
                              Paid
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold">
                            Rs 180
                          </td>
                          <td className="px-6 py-4 flex gap-4">
                            <button className="text-primary hover:underline text-sm font-bold">
                              View Details
                            </button>
                            <button className="text-[#6a8174] hover:text-[#121614]  text-sm font-bold flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">
                                receipt_long
                              </span>
                              View Receipt
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="px-6 py-4 border-t border-[#dde3e0]  flex items-center justify-between">
                    <p className="text-sm text-[#6a8174]">
                      Showing 4 of 28 requests
                    </p>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 rounded border border-[#dde3e0]  text-sm disabled:opacity-50">
                        Previous
                      </button>
                      <button className="px-3 py-1 rounded border border-primary bg-primary/5 text-primary text-sm font-bold">
                        1
                      </button>
                      <button className="px-3 py-1 rounded border border-[#dde3e0]  text-sm">
                        2
                      </button>
                      <button className="px-3 py-1 rounded border border-[#dde3e0]  text-sm">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </main>

              <aside className="w-96 shrink-0 bg-white  border-l border-[#dde3e0] flex flex-col sticky top-16.25 h-[calc(100vh-65px)] overflow-y-auto">
                <div className="p-6 border-b border-[#dde3e0]  flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold">Request Details</h2>
                    <p className="text-xs text-[#6a8174] font-medium tracking-wide">
                      ID: #REQ-1002
                    </p>
                  </div>
                  <button className="p-2 hover:bg-[#f1f4f2] rounded-full text-[#6a8174]">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                {/* TIMELINE */}
                <div className="p-8">
                  <h3 className="text-sm font-bold mb-6 text-[#121614] ">
                    Track Progress
                  </h3>
                  <div className="relative flex flex-col gap-8">
                    {/* Line */}
                    <div className="absolute left-2.75 top-2 bottom-2 w-0.5 bg-[#dde3e0] "></div>
                    {/* Step 1 */}
                    <div className="relative flex gap-4">
                      <div className="z-10 bg-primary text-white rounded-full size-6 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">
                          check
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Submitted</p>
                        <p className="text-xs text-[#6a8174]">
                          20 Dec 2025, 10:30 AM
                        </p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="relative flex gap-4">
                      <div className="z-10 bg-primary text-white rounded-full size-6 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">
                          check
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Assigned</p>
                        <p className="text-xs text-[#6a8174]">
                          20 Dec 2025, 02:45 PM
                        </p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="relative flex gap-4">
                      <div className="z-10 bg-primary text-white rounded-full size-6 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">
                          check
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Collected</p>
                        <p className="text-xs text-[#6a8174]">
                          21 Dec 2025, 11:20 AM
                        </p>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="relative flex gap-4">
                      <div className="z-10 bg-primary text-white rounded-full size-6 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">
                          check
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Verified</p>
                        <p className="text-xs text-[#6a8174]">
                          21 Dec 2025, 04:00 PM
                        </p>
                      </div>
                    </div>
                    {/* Step 5 */}
                    <div className="relative flex gap-4">
                      <div className="z-10 bg-primary text-white rounded-full size-6 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">
                          currency_rupee
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Paid</p>
                        <p className="text-xs text-[#6a8174]">
                          22 Dec 2025, 09:15 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* SUMMARY DATA */}
                <div className="p-6 border-t border-[#dde3e0] bg-[#f8faf9] ">
                  <h3 className="text-sm font-bold mb-4">Summary</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-[#6a8174]">Waste Type</p>
                      <p className="text-sm font-bold">Metal Cans</p>
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
                      <p className="text-sm font-bold text-primary">
                        Rs 180.00
                      </p>
                    </div>
                  </div>
                </div>
                {/* PHOTO THUMBNAIL */}
                <div className="p-6 flex flex-col gap-3">
                  <p className="text-xs font-bold text-[#6a8174] uppercase tracking-wider">
                    Pickup Photo
                  </p>
                  <div className="w-full h-40 rounded-lg overflow-hidden border border-[#dde3e0]  relative group">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      data-alt="Recycling pickup proof of metal cans"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBa8VSasLL8iiBn1BY3V5PBEzIupG04Rr49f8UhcGn_Z8Qk6JS9sG3hgn7DJ5hSP4oltVfY6ln6kpPsF7wZBHhMvWITWGjHAFcBMs9ni6faVbUfdenz_cZuvLzipmq8sAuUKpvJkR--VY4UngL5YMdv3BrHRLZ-1qQi4BDoQQE0WwqoQd7GZCXVQ_Frnp0UxTxxSAKBaiUtmpFi2IvL26Y14dLRzlVUy7bugbG50YU9nP0o3tSlcyAdRg_iiwxYa0pnw2yfv_DD")',
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-3xl">
                        zoom_in
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
            </>
          )}

          {citizendashboard === "Guidelines" && (
            <main className="flex-1 flex flex-col p-4 md:p-8 lg:p-12 gap-8 overflow-y-auto">
              <div className="flex flex-col gap-2">
                <h1 className="text-[#121614] text-3xl md:text-4xl font-black leading-tight tracking-tight">
                  Maximize Your Earnings: Recycling Guidelines
                </h1>
                <p className="text-[#6a8174] text-base md:text-lg max-w-2xl">
                  Follow these instructions to ensure your waste is processed
                  correctly and you earn the highest rates for every collection.
                </p>
              </div>
              <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-white p-3 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">
                      track_changes
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-primary text-xl font-bold">
                      The Golden Rule
                    </p>
                    <p className="text-[#6a8174] text-base leading-relaxed max-w-xl">
                      Keep it <strong>CLEAN, DRY, and SEPARATED</strong>.
                      Contaminated items reduce the value of your entire
                      collection and may lead to pickup rejection.
                    </p>
                  </div>
                </div>
                <button className="w-full md:w-auto px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">info</span>
                  Learn Detailed Process
                </button>
              </div>
              <section className="flex flex-col gap-6">
                <h2 className="text-[#121614] text-2xl font-bold">
                  Material Preparation Guides
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <div className="bg-white border border-primary/30 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
                    <div className="bg-primary/10 px-5 py-4 flex justify-between items-center border-b border-primary/10">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">
                          verified
                        </span>
                        <span className="text-primary font-bold">
                          High Value
                        </span>
                      </div>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                        EARN: ₹X/kg
                      </span>
                    </div>
                    <div className="p-6 flex flex-col gap-4 grow">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                          PET Plastic
                        </span>
                        <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                          Cardboard
                        </span>
                        <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                          Metal Cans
                        </span>
                      </div>
                      <ul className="space-y-3 mt-2">
                        <li className="flex items-start gap-2 text-sm text-[#121614]">
                          <span className="material-symbols-outlined text-primary text-lg">
                            check_circle
                          </span>
                          <span>Rinse containers to remove food residue</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-[#121614]">
                          <span className="material-symbols-outlined text-primary text-lg">
                            check_circle
                          </span>
                          <span>Flatten all boxes to save storage space</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-[#121614]">
                          <span className="material-symbols-outlined text-primary text-lg">
                            check_circle
                          </span>
                          <span>Keep PET separate from other plastics</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white border border-orange-200 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
                    <div className="bg-orange-50 px-5 py-4 flex justify-between items-center border-b border-orange-100">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-orange-600">
                          warning
                        </span>
                        <span className="text-orange-700 font-bold">
                          Low Value
                        </span>
                      </div>
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                        EARN: ₹Y/kg
                      </span>
                    </div>
                    <div className="p-6 flex flex-col gap-4 grow">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                          Newspapers
                        </span>
                        <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                          Magazines
                        </span>
                        <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                          Office Paper
                        </span>
                      </div>
                      <ul className="space-y-3 mt-2">
                        <li className="flex items-start gap-2 text-sm text-[#121614]">
                          <span className="material-symbols-outlined text-orange-600 text-lg">
                            check_circle
                          </span>
                          <span>Must be completely dry (No wet paper)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-[#121614]">
                          <span className="material-symbols-outlined text-orange-600 text-lg">
                            check_circle
                          </span>
                          <span>Can be mixed together in one bag</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-[#121614]">
                          <span className="material-symbols-outlined text-orange-600 text-lg">
                            check_circle
                          </span>
                          <span>Remove plastic/metal clips and binders</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-[#f8f9f8] border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col h-full opacity-90">
                    <div className="bg-gray-200 px-5 py-4 flex justify-between items-center border-b border-gray-300">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-gray-600">
                          delete
                        </span>
                        <span className="text-gray-700 font-bold">
                          No Earnings
                        </span>
                      </div>
                      <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                        EARN: ₹0
                      </span>
                    </div>
                    <div className="p-6 flex flex-col gap-4 grow">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-white rounded text-xs font-semibold">
                          Food Waste
                        </span>
                        <span className="px-2 py-1 bg-white rounded text-xs font-semibold">
                          Plastic Bags
                        </span>
                        <span className="px-2 py-1 bg-white rounded text-xs font-semibold">
                          Glass
                        </span>
                        <span className="px-2 py-1 bg-white rounded text-xs font-semibold">
                          Textiles
                        </span>
                      </div>
                      <div className="mt-2 p-3 bg-red-50 border border-red-100 rounded-lg">
                        <p className="text-xs text-red-700 leading-normal font-medium">
                          <strong>Note:</strong> These items contaminate
                          recycling batches. Dispose of food waste through
                          composting. Plastic bags are not currently accepted
                          for payout.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="mt-auto pt-8 border-t border-[#dde3e0]">
                <div className="bg-white border border-[#dde3e0] p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col text-center sm:text-left">
                    <p className="text-lg font-bold text-[#121614]">
                      Ready to recycle right?
                    </p>
                    <p className="text-sm text-[#6a8174]">
                      Your bins look sorted and ready for collection!
                    </p>
                  </div>
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white text-base font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    <span className="material-symbols-outlined">add_task</span>+
                    Submit a New Pickup Request
                  </button>
                </div>
              </div>
            </main>
          )}

          {citizendashboard === "Profile" && (
            <main className="flex-1 px-4 py-8 md:px-10 lg:px-16 bg-background-light min-h-[calc(100vh-64px)] overflow-y-auto">
              {/* Page Heading */}
              <div className="mb-8">
                <h1 className="text-[#121614] text-3xl md:text-3xl font-black leading-tight tracking-[-0.033em]">
                  My Account Profile
                </h1>
                <p className="text-[#6a8174] text-base font-normal mt-2 leading-normal">
                  Manage your personal details and service settings.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 max-w-4xl">
                {/* Personal Information Card */}
                <section className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-[#f1f4f2] overflow-hidden">
                  <div className="px-6 py-5 border-b border-[#f1f4f2]">
                    <h2 className="text-[#121614] text-xl font-bold leading-tight">
                      Personal Information
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    {/* Part 1: Basic Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-[#121614]">
                          Full Name
                        </label>
                        <input
                          className="rounded-lg border-[#e0e4e2]  border-2 focus:border-primary focus:ring-primary h-11 text-sm"
                          type="text"
                          defaultValue="Alex Citizen"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-[#121614]">
                          Email Address (Login ID)
                        </label>
                        <input
                          className="rounded-lg border-[#e0e4e2] border-2 bg-[#f8faf9] cursor-not-allowed h-11 text-sm text-[#6a8174]"
                          readOnly
                          type="email"
                          defaultValue="alex.citizen@example.com"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 md:col-span-2">
                        <label className="text-sm font-semibold text-[#121614]">
                          Phone Number
                        </label>
                        <input
                          className="rounded-lg border-[#e0e4e2] border-2 focus:border-primary focus:ring-primary h-11 text-sm"
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    {/* Part 2: Highlighted Address Section */}
                    <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-primary text-xl">
                          home_pin
                        </span>
                        <h3 className="text-primary text-base font-bold">
                          Primary Pickup Address
                        </h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        <textarea
                          className="w-full rounded-lg border-[#e0e4e2] focus:border-primary focus:ring-primary text-sm p-3"
                          placeholder="Enter your full street address, apartment number, and zip code"
                          rows={3}
                          defaultValue={`123 Green Valley Road, Eco District
Building 4, Apt 2B
Sustainability City, 54321`}
                        ></textarea>
                        <div className="flex items-start gap-2 text-[#6a8174]">
                          <span className="material-symbols-outlined text-base mt-0.5">
                            info
                          </span>
                          <p className="text-xs italic leading-tight">
                            This address is used for all scheduled waste
                            collections and route optimizations. Please ensure
                            accuracy for timely service.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="flex items-center justify-end gap-3 pt-2">
                      <button className="px-6 h-10 rounded-lg text-sm font-bold text-[#6a8174] hover:bg-[#f1f4f2] transition-colors">
                        Cancel
                      </button>
                      <button className="px-8 h-10 rounded-lg bg-primary text-white text-sm font-bold shadow-sm hover:bg-[#256e45] transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </section>
                {/* Password Update Card */}
                <section className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-[#f1f4f2] overflow-hidden">
                  <div className="px-6 py-5 border-b border-[#f1f4f2]">
                    <h2 className="text-[#121614] text-xl font-bold leading-tight">
                      Change Password
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-[#121614]">
                          Current Password
                        </label>
                        <input
                          className="rounded-lg border-[#e0e4e2] border-2 focus:border-primary focus:ring-primary h-11 text-sm"
                          placeholder="••••••••"
                          type="password"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-[#121614]">
                          New Password
                        </label>
                        <input
                          className="rounded-lg border-[#e0e4e2] border-2 focus:border-primary focus:ring-primary h-11 text-sm"
                          placeholder="••••••••"
                          type="password"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-[#121614]">
                          Confirm New Password
                        </label>
                        <input
                          className="rounded-lg border-[#e0e4e2] border-2 focus:border-primary focus:ring-primary h-11 text-sm"
                          placeholder="••••••••"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <button className="px-6 h-10 rounded-lg border border-primary text-primary text-sm font-bold hover:bg-primary/5 transition-colors">
                        Update Password
                      </button>
                    </div>
                  </div>
                </section>
                {/* Helpful Footer/Support Section */}
                
              </div>
              {/* Spacer for mobile scrolling */}
              <div className="h-12 lg:hidden"></div>
            </main>
          )}
        </div>
      </div>
    </div>
  );
}
