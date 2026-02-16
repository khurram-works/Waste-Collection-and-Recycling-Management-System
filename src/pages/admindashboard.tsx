import React from "react";
import { useState } from "react";


export default function AdminDashboard() {
  const [AdminDashboard, setAdminDashboard] = useState("admin");
  return (
    // Main Page Wrapper
    <div className="bg-[#f6f8f7] min-h-screen font-sans text-[#121614]">
      {/* // Navigation / Top Header */}
      <header className="sticky top-0 z-50 w-full border-b border-solid border-[#dde3e0] bg-white px-6 py-3">
        <div className="flex items-center justify-between mx-auto max-w-360">
          {/* Logo Section */}
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
            <div className="flex flex-col">
              <h2 className="text-lg font-bold leading-tight tracking-tight">
                Smart Waste Platform
              </h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary w-fit">
                Admin Portal
              </span>
            </div>
          </div>

          {/* User Profile Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#121614] hidden sm:block">
                Officer Sarah Mitchell
              </span>
              <button className="flex items-center justify-center rounded-full h-10 w-10 bg-[#f1f4f2] text-[#121614] border border-[#dde3e0] overflow-hidden">
                <span className="material-symbols-outlined">person</span>
              </button>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9W8uQ2CcLNAIJUklFjz2mTLcxdbl7naAozO7wqDwMOktVxCexaQbca4F-rXsP-5zvfc_G5gwVue_67ThV497TduUKc5LHXLCwz43t_WiN8VtD-B6sIBh2chY_1da0i3DP4o5AYdi9WLbciNLUq_ZtCQEjfmqY91UHNYCEq9EFYMhVcgJTXK0mKw5hoy4aWzNpoVPxy7tGNhMw3_eXmkzdm0HHD9tYnjekEXSSa2jB5qWbqn65h9GmD-Q6xeIhLPeEULJHisGE")',
              }}
            ></div>
          </div>
        </div>
      </header>

      <div className="flex max-w-360 mx-auto">
        {/* // Sidebar Navigation */}
        <aside className="w-64 fixed h-[calc(100vh-64px)] overflow-y-auto border-r border-[#dde3e0] bg-white hidden lg:flex flex-col justify-between p-4">
          <div className="flex flex-col gap-4">
            <p className="text-[#6a8174] text-xs font-bold uppercase tracking-widest px-3">
              Navigation
            </p>
            <nav className="flex flex-col gap-1">
              {/* Active Link */}
              <a
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-bold ${AdminDashboard === "admin" ? "bg-[#f1f4f2] text-primary" : "text-[#121614] hover:bg-[#f1f4f2] transition-colors"}`}
                onClick={() => setAdminDashboard("admin")}
              >
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm">Dashboard</p>
              </a>
              {/* Inactive Links */}
              <a
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-bold ${AdminDashboard === "manage" ? "bg-[#f1f4f2] text-primary" : "text-[#121614] hover:bg-[#f1f4f2] transition-colors"}`}
                onClick={() => setAdminDashboard("manage")}
              >
                <span className="material-symbols-outlined">task_alt</span>
                <p className="text-sm">Request Management</p>
              </a>
              <a
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-bold ${AdminDashboard === "worker" ? "bg-[#f1f4f2] text-primary" : "text-[#121614] hover:bg-[#f1f4f2] transition-colors"}`}
                onClick={() => setAdminDashboard("worker")}
              >
                <span className="material-symbols-outlined">engineering</span>
                <p className="text-sm">Worker Management</p>
              </a>
              <a
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-bold ${AdminDashboard === "report" ? "bg-[#f1f4f2] text-primary" : "text-[#121614] hover:bg-[#f1f4f2] transition-colors"}`}
                onClick={() => setAdminDashboard("report")}
              >
                <span className="material-symbols-outlined">analytics</span>
                <p className="text-sm">Reports</p>
              </a>

              <div className="my-4 border-t border-[#dde3e0]"></div>

              <a
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-bold ${AdminDashboard === "setting" ? "bg-[#f1f4f2] text-primary" : "text-[#121614] hover:bg-[#f1f4f2] transition-colors"}`}
                onClick={() => setAdminDashboard("setting")}
              >
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm">System Settings</p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">logout</span>
                <p className="text-sm font-medium">Log Out</p>
              </a>
            </nav>
          </div>

          {/* System Status Indicator */}
          <div className="p-3 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-primary uppercase">
                Status
              </span>
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            </div>
            <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg uppercase tracking-wide">
              System Active
            </button>
          </div>
        </aside>

        {/* // Main Content Area */}
        {AdminDashboard === "admin" && (
          <main className="flex-1 lg:ml-64 p-6 min-h-screen">
            {/* Quick Actions Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#121614] mb-4">
                Operations Overview
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-bold text-sm rounded-lg hover:bg-[#256e45] transition-shadow shadow-sm">
                  <span className="material-symbols-outlined text-lg">
                    add_circle
                  </span>
                  Manage New Requests
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#121614] border border-[#dde3e0] font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-lg">
                    assignment_ind
                  </span>
                  Assign Pending Tasks
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#121614] border border-[#dde3e0] font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-lg">
                    description
                  </span>
                  Generate Report
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#121614] border border-[#dde3e0] font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-lg">
                    person_add
                  </span>
                  Add New Worker
                </button>
              </div>
            </div>

            {/* // Stats Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
                <p className="text-[#6a8174] text-sm font-semibold uppercase tracking-wider">
                  Total Requests Today
                </p>
                <div className="flex items-end gap-2">
                  <p className="text-[#121614] text-3xl font-bold leading-tight">
                    47
                  </p>
                  <span className="mb-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                    12 Pending
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
                <p className="text-[#6a8174] text-sm font-semibold uppercase tracking-wider">
                  Active Workers
                </p>
                <div className="flex items-end gap-2">
                  <p className="text-[#121614] text-3xl font-bold leading-tight">
                    14/18
                  </p>
                  <span className="mb-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                    On Duty
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
                <p className="text-[#6a8174] text-sm font-semibold uppercase tracking-wider">
                  Recycling Rate
                </p>
                <div className="flex items-end gap-2">
                  <p className="text-[#121614] text-3xl font-bold leading-tight">
                    68%
                  </p>
                  <span className="mb-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    Of Total Waste
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
                <p className="text-[#6a8174] text-sm font-semibold uppercase tracking-wider">
                  Incentives Paid
                </p>
                <div className="flex items-end gap-2">
                  <p className="text-[#121614] text-3xl font-bold leading-tight">
                    Rs 8,250
                  </p>
                  <span className="mb-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    This Week
                  </span>
                </div>
              </div>
            </div>

            {/* // Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Bar Chart */}
              <div className="bg-white rounded-xl border border-[#dde3e0] p-6 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-[#121614] text-lg font-bold">
                      Pickup Requests This Week
                    </h3>
                    <p className="text-[#6a8174] text-sm font-medium">
                      320 Total (Last 7 Days)
                    </p>
                  </div>
                  <button className="text-primary text-sm font-bold">
                    View Data
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-4 items-end h-48 px-2">
                  {/* Note: In React, 'style' takes an object, not a string */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-[#f1f4f2] rounded-t border-t-2 border-primary"
                      style={{ height: "45%" }}
                    ></div>
                    <span className="text-[#6a8174] text-[11px] font-bold">
                      MON
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-[#f1f4f2] rounded-t border-t-2 border-primary"
                      style={{ height: "60%" }}
                    ></div>
                    <span className="text-[#6a8174] text-[11px] font-bold">
                      TUE
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-primary/20 rounded-t border-t-2 border-primary"
                      style={{ height: "85%" }}
                    ></div>
                    <span className="text-[#6a8174] text-[11px] font-bold">
                      WED
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-primary rounded-t"
                      style={{ height: "100%" }}
                    ></div>
                    <span className="text-primary text-[11px] font-black">
                      THU
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-[#f1f4f2] rounded-t border-t-2 border-primary"
                      style={{ height: "55%" }}
                    ></div>
                    <span className="text-[#6a8174] text-[11px] font-bold">
                      FRI
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-[#f1f4f2] rounded-t border-t-2 border-primary"
                      style={{ height: "30%" }}
                    ></div>
                    <span className="text-[#6a8174] text-[11px] font-bold">
                      SAT
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-[#f1f4f2] rounded-t border-t-2 border-primary"
                      style={{ height: "40%" }}
                    ></div>
                    <span className="text-[#6a8174] text-[11px] font-bold">
                      SUN
                    </span>
                  </div>
                </div>
              </div>

              {/* Donut Chart */}
              <div className="bg-white rounded-xl border border-[#dde3e0] p-6 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-[#121614] text-lg font-bold">
                      Waste Type Distribution
                    </h3>
                    <p className="text-[#6a8174] text-sm font-medium">
                      Volume by categorization
                    </p>
                  </div>
                  <button className="text-primary text-sm font-bold">
                    Settings
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 py-2">
                  <div className="relative flex items-center justify-center w-40 h-40">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        className="text-[#f1f4f2]"
                        cx="80"
                        cy="80"
                        fill="transparent"
                        r="70"
                        stroke="currentColor"
                        strokeWidth="20"
                      ></circle>
                      <circle
                        className="text-primary"
                        cx="80"
                        cy="80"
                        fill="transparent"
                        r="70"
                        stroke="currentColor"
                        strokeDasharray="440"
                        strokeDashoffset="110"
                        strokeWidth="20"
                      ></circle>
                      <circle
                        className="text-emerald-300"
                        cx="80"
                        cy="80"
                        fill="transparent"
                        r="70"
                        stroke="currentColor"
                        strokeDasharray="440"
                        strokeDashoffset="300"
                        strokeWidth="20"
                      ></circle>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-2xl font-bold">68%</span>
                      <span className="text-[10px] text-[#6a8174] font-bold uppercase">
                        Recyclable
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="size-3 rounded-full bg-primary"></span>
                        <span className="text-[#121614] font-medium">
                          PET (Plastic)
                        </span>
                      </div>
                      <span className="font-bold">42%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="size-3 rounded-full bg-emerald-300"></span>
                        <span className="text-[#121614] font-medium">
                          Cardboard
                        </span>
                      </div>
                      <span className="font-bold">26%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="size-3 rounded-full bg-[#f1f4f2]"></span>
                        <span className="text-[#121614] font-medium">
                          Paper
                        </span>
                      </div>
                      <span className="font-bold">15%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="size-3 rounded-full bg-slate-300"></span>
                        <span className="text-[#121614] font-medium">
                          Metal
                        </span>
                      </div>
                      <span className="font-bold">12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* // Recent Activity Table */}
            <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-[#dde3e0] flex justify-between items-center">
                <h3 className="text-[#121614] text-lg font-bold">
                  Recent Activity
                </h3>
                <button className="text-primary text-sm font-bold flex items-center gap-1">
                  View Audit Log{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] text-[#6a8174] text-xs font-bold uppercase tracking-wider">
                      <th className="px-6 py-3">Time</th>
                      <th className="px-6 py-3">User/Action</th>
                      <th className="px-6 py-3">Details</th>
                      <th className="px-6 py-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dde3e0]">
                    <tr className="hover:bg-[#f8fafc] transition-colors">
                      <td className="px-6 py-4 text-sm text-[#6a8174] font-medium">
                        10:30 AM
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                            WA
                          </div>
                          <div className="text-sm">
                            <p className="font-bold text-[#121614]">
                              Worker Ali
                            </p>
                            <p className="text-[#6a8174] text-xs">
                              Field Verification
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#121614] font-medium">
                        Verified #REQ-1012 (PET, 5kg)
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8fafc] transition-colors">
                      <td className="px-6 py-4 text-sm text-[#6a8174] font-medium">
                        09:15 AM
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                            CS
                          </div>
                          <div className="text-sm">
                            <p className="font-bold text-[#121614]">
                              Citizen Sara
                            </p>
                            <p className="text-[#6a8174] text-xs">
                              New Request
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#121614] font-medium">
                        Submitted new pickup request #REQ-1025
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8fafc] transition-colors">
                      <td className="px-6 py-4 text-sm text-[#6a8174] font-medium">
                        08:45 AM
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs">
                            SYS
                          </div>
                          <div className="text-sm">
                            <p className="font-bold text-[#121614]">System</p>
                            <p className="text-[#6a8174] text-xs">Automation</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#121614] font-medium">
                        Daily operations report generated and archived
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          System
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        )}
        {AdminDashboard === "manage" && (
          <main className="flex-1 flex flex-col pl-60 bg-[#f6f8f7] overflow-hidden">
            <div className="p-8 flex-1 overflow-y-auto">
              {/* Page Heading */}
              <div className="mb-6">
                <h1 className="text-[#121614] text-3xl font-black leading-tight tracking-tight">
                  All Pickup Requests
                </h1>
              </div>

              {/* Tabs */}
              <div className="mb-6 bg-white rounded-xl shadow-sm border border-[#e5e7eb]">
                <div className="flex border-b border-[#dde3e0] px-4">
                  <a
                    className="flex items-center justify-center border-b-[3px] border-[#2e8a57] text-[#2e8a57] px-6 py-4"
                    href="#"
                  >
                    <p className="text-sm font-bold">All</p>
                  </a>
                  <a
                    className="flex items-center justify-center border-b-[3px] border-transparent text-[#6a8174] px-6 py-4 hover:bg-[#f1f4f2]/50 transition-colors"
                    href="#"
                  >
                    <p className="text-sm font-bold">⚠️ Pending (12)</p>
                  </a>
                  <a
                    className="flex items-center justify-center border-b-[3px] border-transparent text-[#6a8174] px-6 py-4 hover:bg-[#f1f4f2]/50 transition-colors"
                    href="#"
                  >
                    <p className="text-sm font-bold">🔄 Assigned</p>
                  </a>
                  <a
                    className="flex items-center justify-center border-b-[3px] border-transparent text-[#6a8174] px-6 py-4 hover:bg-[#f1f4f2]/50 transition-colors"
                    href="#"
                  >
                    <p className="text-sm font-bold">✅ Completed</p>
                  </a>
                </div>

                {/* Advanced Filter Bar */}
                <div className="p-4 grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-3">
                    <label className="flex items-stretch bg-[#f6f8f7] rounded-lg border border-[#dde3e0] focus-within:border-[#2e8a57] px-3 h-10 transition-all">
                      <span className="material-symbols-outlined text-[#6a8174] self-center mr-2">
                        search
                      </span>
                      <input
                        className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-[#6a8174]"
                        placeholder="Search ID, citizen or address..."
                      />
                    </label>
                  </div>
                  <div className="col-span-3 flex gap-2">
                    <input
                      className="bg-[#f6f8f7] border-[#dde3e0] rounded-lg text-sm h-10 focus:ring-[#2e8a57] focus:border-[#2e8a57] flex-1"
                      type="date"
                    />
                    <span className="self-center text-[#6a8174]">-</span>
                    <input
                      className="bg-[#f6f8f7] border-[#dde3e0] rounded-lg text-sm h-10 focus:ring-[#2e8a57] focus:border-[#2e8a57] flex-1"
                      type="date"
                    />
                  </div>
                  <div className="col-span-2">
                    <select className="w-full bg-[#f6f8f7] border-[#dde3e0] rounded-lg text-sm h-10 focus:ring-[#2e8a57] focus:border-[#2e8a57]">
                      <option>All Waste Types</option>
                      <option>♻️ Recycling</option>
                      <option>🗑️ Landfill</option>
                      <option>☢️ Hazardous</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <select className="w-full bg-[#f6f8f7] border-[#dde3e0] rounded-lg text-sm h-10 focus:ring-[#2e8a57] focus:border-[#2e8a57]">
                      <option>All Zones</option>
                      <option>North District</option>
                      <option>Central Park</option>
                      <option>South Harbor</option>
                    </select>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <button className="bg-[#2e8a57]/10 text-[#2e8a57] border border-[#2e8a57]/20 hover:bg-[#2e8a57]/20 font-bold px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        filter_list
                      </span>
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Bulk Action Panel */}
              <div className="mb-4 bg-[#2e8a57]/10 border border-[#2e8a57]/20 rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-[#2e8a57]">
                    2 requests selected
                  </span>
                  <div className="h-6 w-px bg-[#2e8a57]/20"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#121614] uppercase tracking-wider">
                      Bulk Action:
                    </span>
                    <select className="bg-white border-[#2e8a57]/30 rounded-lg text-xs h-8 py-0 focus:ring-[#2e8a57]">
                      <option>Assign to Worker...</option>
                      <option>Mark as Verified</option>
                      <option>Archive Requests</option>
                    </select>
                    <button className="bg-[#2e8a57] text-white text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-opacity-90">
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              {/* // MASTER REQUESTS TABLE */}
              <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#f8faf9] border-b border-[#e5e7eb]">
                      <th className="p-4 w-10">
                        <input
                          className="rounded border-gray-300 text-[#2e8a57] focus:ring-[#2e8a57]"
                          type="checkbox"
                        />
                      </th>
                      <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">
                        Request ID
                      </th>
                      <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">
                        Submitted
                      </th>
                      <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">
                        Citizen
                      </th>
                      <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">
                        Address/Zone
                      </th>
                      <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">
                        Waste Type
                      </th>
                      <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">
                        Status
                      </th>
                      <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e7eb]">
                    {/* Row 1 Selected */}
                    <tr className="bg-[#2e8a57]/5 hover:bg-[#2e8a57]/10 transition-colors">
                      <td className="p-4">
                        <input
                          defaultChecked
                          className="rounded border-gray-300 text-[#2e8a57] focus:ring-[#2e8a57]"
                          type="checkbox"
                        />
                      </td>
                      <td className="p-4 font-bold text-sm">#REQ-1023</td>
                      <td className="p-4 text-sm">Oct 24, 09:12 AM</td>
                      <td className="p-4 text-sm">David Chen</td>
                      <td className="p-4 text-sm">122 Oak St, North Zone</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1.5 text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-full w-fit font-medium">
                          <span className="text-base leading-none">♻️</span>{" "}
                          Recycling
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full w-fit">
                          <span className="size-1.5 rounded-full bg-yellow-800"></span>{" "}
                          Pending
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="bg-[#2e8a57] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                          Manage
                        </button>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <input
                          className="rounded border-gray-300 text-[#2e8a57] focus:ring-[#2e8a57]"
                          type="checkbox"
                        />
                      </td>
                      <td className="p-4 font-bold text-sm">#REQ-1022</td>
                      <td className="p-4 text-sm">Oct 24, 08:45 AM</td>
                      <td className="p-4 text-sm">Elena Rodriguez</td>
                      <td className="p-4 text-sm">45 Harbor Dr, East Zone</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1.5 text-sm bg-orange-50 text-orange-700 px-2 py-1 rounded-full w-fit font-medium">
                          <span className="text-base leading-none">🗑️</span>{" "}
                          Landfill
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full w-fit">
                          <span className="size-1.5 rounded-full bg-blue-800"></span>{" "}
                          Assigned
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="border border-gray-200 text-[#121614] text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-gray-50">
                          Manage
                        </button>
                      </td>
                    </tr>

                    {/* Row 3 Selected */}
                    <tr className="bg-[#2e8a57]/5 hover:bg-[#2e8a57]/10 transition-colors">
                      <td className="p-4">
                        <input
                          defaultChecked
                          className="rounded border-gray-300 text-[#2e8a57] focus:ring-[#2e8a57]"
                          type="checkbox"
                        />
                      </td>
                      <td className="p-4 font-bold text-sm">#REQ-1021</td>
                      <td className="p-4 text-sm">Oct 23, 04:30 PM</td>
                      <td className="p-4 text-sm">Michael Scott</td>
                      <td className="p-4 text-sm">1725 Slough Ave, Central</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1.5 text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-full w-fit font-medium">
                          <span className="text-base leading-none">♻️</span>{" "}
                          Recycling
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-green-100 text-green-800 px-2.5 py-1 rounded-full w-fit">
                          <span className="size-1.5 rounded-full bg-green-800"></span>{" "}
                          Verified
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="border border-gray-200 text-[#121614] text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-gray-50">
                          Manage
                        </button>
                      </td>
                    </tr>

                    {/* More Rows */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <input
                          className="rounded border-gray-300 text-[#2e8a57] focus:ring-[#2e8a57]"
                          type="checkbox"
                        />
                      </td>
                      <td className="p-4 font-bold text-sm">#REQ-1020</td>
                      <td className="p-4 text-sm">Oct 23, 02:15 PM</td>
                      <td className="p-4 text-sm">Sarah Miller</td>
                      <td className="p-4 text-sm">88 Maple Lane, South</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1.5 text-sm bg-orange-50 text-orange-700 px-2 py-1 rounded-full w-fit font-medium">
                          <span className="text-base leading-none">🗑️</span>{" "}
                          Landfill
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-green-100 text-green-800 px-2.5 py-1 rounded-full w-fit">
                          <span className="size-1.5 rounded-full bg-green-800"></span>{" "}
                          Verified
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="border border-gray-200 text-[#121614] text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-gray-50">
                          Manage
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Page Controls */}
                <div className="p-4 flex items-center justify-between border-t border-[#e5e7eb]">
                  <p className="text-sm text-[#6a8174]">
                    Showing 1-10 of 47 requests
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                      <button
                        className="p-1 rounded hover:bg-gray-100 disabled:opacity-30"
                        disabled
                      >
                        <span className="material-symbols-outlined">
                          chevron_left
                        </span>
                      </button>
                      <button className="size-8 rounded bg-[#2e8a57] text-white font-bold text-sm">
                        1
                      </button>
                      <button className="size-8 rounded hover:bg-gray-100 text-sm font-medium">
                        2
                      </button>
                      <button className="size-8 rounded hover:bg-gray-100 text-sm font-medium">
                        3
                      </button>
                      <button className="size-8 rounded hover:bg-gray-100 text-sm font-medium">
                        ...
                      </button>
                      <button className="size-8 rounded hover:bg-gray-100 text-sm font-medium">
                        5
                      </button>
                      <button className="p-1 rounded hover:bg-gray-100">
                        <span className="material-symbols-outlined">
                          chevron_right
                        </span>
                      </button>
                    </div>
                    <div className="h-6 w-px bg-gray-200"></div>
                    <button className="text-[#2e8a57] text-sm font-bold flex items-center gap-1 hover:underline">
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      Export to CSV
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* // INDIVIDUAL REQUEST DRAWER (FIXED OVERLAY) */}
            <div className="absolute top-11 right-0 h-full w-100 bg-white shadow-2xl border-l border-[#e5e7eb] flex flex-col z-30 transform transition-transform">
              <div className="p-6 border-b border-[#e5e7eb] flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-black">Manage Request</h2>
                  <p className="text-[#2e8a57] font-bold text-sm">#REQ-1023</p>
                </div>
                <button className="size-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Citizen Details */}
                <section>
                  <h3 className="text-xs font-bold text-[#6a8174] uppercase tracking-widest mb-4">
                    Citizen Information
                  </h3>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="size-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-lg text-[#2e8a57]">
                      DC
                    </div>
                    <div>
                      <p className="font-bold">David Chen</p>
                      <p className="text-sm text-[#6a8174]">
                        +1 (555) 012-3456
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f6f8f7] p-3 rounded-lg border border-[#dde3e0]">
                    <p className="text-xs text-[#6a8174] mb-1">
                      Pickup Location
                    </p>
                    <p className="text-sm font-medium">
                      122 Oak Street, Apt 4B, North Zone, City Center 90210
                    </p>
                  </div>
                </section>

                {/* Waste Photo & Comments */}
                <section>
                  <h3 className="text-xs font-bold text-[#6a8174] uppercase tracking-widest mb-4">
                    Waste Verification
                  </h3>
                  <div
                    className="aspect-video w-full rounded-lg bg-gray-200 mb-3 bg-cover bg-center overflow-hidden border border-gray-200"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYtVl6FcUiUTqJ7GKwtj3comtEm28Dj_OLwtndpvplhqD1RsgiUrC3v8oaySKJGFuyUDylvTJrnRdWSfXhOnMXSRiA183Pm6-l1sFXpnF9C2FQmSo8ZgI6TlmXmVc4Ze675FrxZS3TiFuh9aLPmR-6f8rtNa-UtfpUKpUWGYR9_Rz2SJGtaQbsTIAAhlqNoOqIvIQFiGDa-yuvMcnLs9KKrUGLtvDdLIDJf3umTxviEZSj_Xgb2JQPsYexQLYgnRgWSDxtHTES")',
                    }}
                  >
                    <div className="w-full h-full bg-black/20 flex items-end p-3">
                      <button className="bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded shadow flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">
                          zoom_in
                        </span>
                        Enlarge Photo
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "Large cardboard boxes from furniture delivery. All
                    flattened and ready."
                  </p>
                </section>

                {/* Assignment Tools */}
                <section className="space-y-4">
                  <h3 className="text-xs font-bold text-[#6a8174] uppercase tracking-widest">
                    Assignment Tools
                  </h3>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Assign to Worker
                    </label>
                    <select className="w-full border-[#dde3e0] rounded-lg text-sm h-11 focus:ring-[#2e8a57] focus:border-[#2e8a57]">
                      <option>Select available worker...</option>
                      <option>🟢 John Doe (2.4km away)</option>
                      <option>🟢 Sarah Connor (3.1km away)</option>
                      <option>🟡 Mike Ross (On break)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Select Route
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="border-2 border-[#2e8a57] bg-[#2e8a57]/5 rounded-lg py-3 flex flex-col items-center gap-1 transition-all">
                        <span className="text-2xl">♻️</span>
                        <span className="text-xs font-bold text-[#2e8a57]">
                          Recycling
                        </span>
                      </button>
                      <button className="border-2 border-gray-100 rounded-lg py-3 flex flex-col items-center gap-1 hover:border-gray-200 transition-all">
                        <span className="text-2xl opacity-40 grayscale">
                          🗑️
                        </span>
                        <span className="text-xs font-bold text-gray-400">
                          Landfill
                        </span>
                      </button>
                    </div>
                  </div>
                </section>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-[#e5e7eb] space-y-3">
                <button className="w-full bg-[#2e8a57] text-white font-black py-4 rounded-xl shadow-lg shadow-[#2e8a57]/20 hover:bg-opacity-95 transition-all">
                  Approve & Assign
                </button>
                <button className="w-full border border-red-500 text-red-600 font-bold py-3 rounded-xl hover:bg-red-50 transition-all text-sm">
                  Reject Request
                </button>
              </div>
            </div>
          </main>
        )}
        {AdminDashboard === "worker" && (
          <>
            <main className="flex-1 overflow-y-auto bg-background-light pl-60">
              <div className="max-w-6xl mx-auto p-8">
                {/* Page Heading & Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div>
                    <h1 className="text-[#121614] text-3xl font-black leading-tight tracking-[-0.033em]">
                      Municipal Workforce
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                      Manage and assign waste management staff across city
                      zones.
                    </p>
                  </div>
                  <button className="flex min-w-40 cursor-pointer items-center justify-center gap-2 rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold leading-normal shadow-sm hover:bg-primary/90 transition-all">
                    <span className="material-symbols-outlined">add</span>
                    <span>Add New Worker</span>
                  </button>
                </div>
                {/* Stats Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white flex flex-col gap-2 rounded-xl p-6 border border-[#dde3e0] shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-sm font-medium">
                        Active Workers
                      </p>
                      <span className="material-symbols-outlined text-primary text-lg">
                        check_circle
                      </span>
                    </div>
                    <p className="text-[#121614] text-3xl font-bold">14</p>
                  </div>
                  <div className="bg-white flex flex-col gap-2 rounded-xl p-6 border border-[#dde3e0] shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-sm font-medium">
                        On Duty Now
                      </p>
                      <span className="material-symbols-outlined text-blue-500 text-lg">
                        electric_bolt
                      </span>
                    </div>
                    <p className="text-[#121614] text-3xl font-bold">12</p>
                  </div>
                  <div className="bg-white flex flex-col gap-2 rounded-xl p-6 border border-[#dde3e0] shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-sm font-medium">
                        Zones Covered
                      </p>
                      <span className="material-symbols-outlined text-orange-500 text-lg">
                        map
                      </span>
                    </div>
                    <p className="text-[#121614] text-3xl font-bold">6</p>
                  </div>
                </div>
                {/* Search & Filter Bar */}
                <div className="bg-white p-4 rounded-xl border border-[#dde3e0] mb-6 flex flex-col md:flex-row gap-4 items-center shadow-sm">
                  <div className="flex-1 w-full relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      search
                    </span>
                    <input
                      className="w-full h-11 pl-11 pr-4 rounded-lg bg-background-light border-none text-[#121614] placeholder-gray-400 focus:ring-2 focus:ring-primary/50 text-sm font-normal"
                      placeholder="Search workers by name or ID..."
                      defaultValue=""
                    />
                  </div>
                  <div className="w-full md:w-64 relative">
                    <select className="w-full h-11 pl-4 pr-10 rounded-lg bg-background-light border-none text-sm font-medium text-[#121614] appearance-none focus:ring-2 focus:ring-primary/50">
                      <option>Status: All</option>
                      <option>Status: Active</option>
                      <option>Status: Inactive</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
                {/* Workers Table */}
                <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-[#dde3e0] bg-gray-50">
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Worker ID
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Full Name
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Contact
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Assigned Zone
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Today's Tasks
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#dde3e0]">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-semibold text-gray-600">
                            W-07
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                                AR
                              </div>
                              <span className="text-sm font-bold text-[#121614]">
                                Ali Raza
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            +92 300 1234567
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            Zone 4 (Central)
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                              <span className="size-1.5 rounded-full bg-green-600"></span>
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-1.5 w-24">
                              <div className="flex justify-between text-[10px] font-bold text-gray-500">
                                <span>4/8</span>
                                <span>50%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-primary h-1.5 rounded-full"
                                  style={{ width: "50%" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-1.5 text-gray-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-xl">
                                  edit
                                </span>
                              </button>
                              <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
                                <span className="material-symbols-outlined text-xl">
                                  more_vert
                                </span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                          <td className="px-6 py-4 text-sm font-semibold text-gray-600">
                            W-09
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-xs">
                                SK
                              </div>
                              <span className="text-sm font-bold text-[#121614]">
                                Salman Khan
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            +92 321 9876543
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            Unassigned
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-red-100 text-red-700">
                              <span className="size-1.5 rounded-full bg-red-600"></span>
                              Inactive
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-1.5 w-24">
                              <div className="flex justify-between text-[10px] font-bold text-gray-500">
                                <span>0/0</span>
                                <span>0%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-gray-400 h-1.5 rounded-full"
                                  style={{ width: "0%" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-1.5 text-gray-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-xl">
                                  edit
                                </span>
                              </button>
                              <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
                                <span className="material-symbols-outlined text-xl">
                                  more_vert
                                </span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-semibold text-gray-600">
                            W-12
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                                HS
                              </div>
                              <span className="text-sm font-bold text-[#121614]">
                                Hamza Shahid
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            +92 345 5550123
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            Zone 2 (North)
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                              <span className="size-1.5 rounded-full bg-green-600"></span>
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-1.5 w-24">
                              <div className="flex justify-between text-[10px] font-bold text-gray-500">
                                <span>7/8</span>
                                <span>87%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-primary h-1.5 rounded-full"
                                  style={{ width: "87.5%" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-1.5 text-gray-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-xl">
                                  edit
                                </span>
                              </button>
                              <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
                                <span className="material-symbols-outlined text-xl">
                                  more_vert
                                </span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 flex items-center justify-between bg-gray-50 border-t border-[#dde3e0]">
                    <span className="text-xs font-medium text-gray-500">
                      Showing 1 to 3 of 14 workers
                    </span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 border border-[#dde3e0] rounded-lg text-xs font-bold bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50">
                        Previous
                      </button>
                      <button className="px-3 py-1.5 border border-[#dde3e0] rounded-lg text-xs font-bold bg-white text-gray-600 hover:bg-gray-50">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <aside className="w-96 shrink-0 border-l border-[#dde3e0] bg-white flex flex-col h-full shadow-2xl relative z-10">
              <div className="p-6 border-b border-[#dde3e0] flex items-center justify-between">
                <div>
                  <h2 className="text-[#121614] text-lg font-bold">
                    Manage Worker
                  </h2>
                  <p className="text-sm text-primary font-bold">
                    Ali Raza (W-07)
                  </p>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Section 1: Official Assignment */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-gray-400 text-sm">
                      badge
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                      Official Assignment
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-600">
                        Assigned Zone
                      </label>
                      <div className="relative">
                        <select className="w-full h-10 pl-3 pr-10 rounded-lg bg-background-light border-none text-sm font-medium focus:ring-2 focus:ring-primary/50 appearance-none">
                          <option>Zone 4 (Central)</option>
                          <option>Zone 1 (South)</option>
                          <option>Zone 2 (North)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                          unfold_more
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-600">
                        Vehicle No.
                      </label>
                      <input
                        className="w-full h-10 px-3 rounded-lg bg-background-light border-none text-sm font-medium focus:ring-2 focus:ring-primary/50"
                        type="text"
                        defaultValue="ABC-1234"
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background-light rounded-lg">
                      <div>
                        <p className="text-sm font-bold text-gray-700">
                          Account Status
                        </p>
                        <p className="text-[10px] text-gray-500">
                          Toggle worker active/inactive
                        </p>
                      </div>
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary cursor-pointer">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition shadow-sm"></span>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section 2: Performance Details */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-gray-400 text-sm">
                      trending_up
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                      Performance &amp; Details
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-[#dde3e0]">
                      <p className="text-[10px] font-bold text-gray-400 uppercase">
                        Tasks Completed
                      </p>
                      <p className="text-xl font-black text-gray-700 mt-1">
                        1,248
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-[#dde3e0]">
                      <p className="text-[10px] font-bold text-gray-400 uppercase">
                        Avg. Rating
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-orange-500">
                        <p className="text-xl font-black">4.8</p>
                        <span className="material-symbols-outlined text-base">
                          star
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-xs font-bold text-primary uppercase mb-2">
                      Attendance Summary
                    </p>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-600">Month: October 2023</span>
                      <span className="font-bold">96%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                  </div>
                </section>
              </div>
              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-[#dde3e0] bg-gray-50/50 space-y-3">
                <button className="w-full h-11 bg-primary text-white font-bold rounded-lg shadow-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">
                    save
                  </span>
                  <span>Save Changes</span>
                </button>
                <div className="flex gap-3">
                  <button className="flex-1 h-10 bg-white border border-[#dde3e0] text-gray-600 font-bold text-sm rounded-lg hover:bg-gray-50 transition-all">
                    Cancel
                  </button>
                  <button className="flex-1 h-10 text-red-600 font-bold text-sm hover:bg-red-50 rounded-lg transition-all">
                    Deactivate Account
                  </button>
                </div>
              </div>
            </aside>
          </>
        )}
        {AdminDashboard === "report" && (
          <main className="flex-1 overflow-y-auto bg-background-light pl-60">
            <div className="max-w-300 mx-auto p-8">
              {/* PageHeading Component */}
              <div className="mb-8">
                <h1 className="text-[#121614] text-4xl font-black leading-tight tracking-[-0.033em]">
                  Reports &amp; Analytics
                </h1>
                <p className="text-[#6a8174] text-base font-normal leading-normal">
                  Monitor city-wide recycling performance and financial metrics.
                </p>
              </div>
              {/* REPORT CONTROLS CARD */}
              <section className="bg-white rounded-xl shadow-sm border border-[#dde3e0] p-6 mb-8">
                <div className="flex flex-wrap items-end gap-6">
                  <div className="flex flex-col gap-2 flex-1 min-w-50">
                    <label className="text-[#121614] text-sm font-bold">
                      From Date
                    </label>
                    <div className="relative">
                      <input
                        className="w-full h-12 rounded-lg border-[#dde3e0] bg-white text-[#121614] focus:ring-primary focus:border-primary px-4"
                        type="date"
                        defaultValue="2023-10-01"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-50">
                    <label className="text-[#121614] text-sm font-bold">
                      To Date
                    </label>
                    <div className="relative">
                      <input
                        className="w-full h-12 rounded-lg border-[#dde3e0] bg-white text-[#121614] focus:ring-primary focus:border-primary px-4"
                        type="date"
                        defaultValue="2023-10-31"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-[1.5] min-w-60">
                    <label className="text-[#121614] text-sm font-bold">
                      Report Type
                    </label>
                    <select className="w-full h-12 rounded-lg border-[#dde3e0] bg-white text-[#121614] focus:ring-primary focus:border-primary px-4">
                      <option>System Summary Report</option>
                      <option>Financial Incentives Audit</option>
                      <option>Collection Efficiency Trends</option>
                      <option>Waste Composition Analysis</option>
                    </select>
                  </div>
                  <div className="flex gap-2 min-w-fit">
                    <button className="h-12 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        auto_graph
                      </span>
                      Generate
                    </button>
                    <button className="h-12 px-4 border border-[#dde3e0] text-[#121614] font-semibold rounded-lg hover:bg-background-light transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-xl">
                        picture_as_pdf
                      </span>
                    </button>
                    <button className="h-12 px-4 border border-[#dde3e0] text-[#121614] font-semibold rounded-lg hover:bg-background-light transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-xl">
                        file_download
                      </span>
                    </button>
                  </div>
                </div>
              </section>
              {/* KPI METRIC ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                {/* Metric Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0] flex items-center justify-between">
                  <div>
                    <p className="text-[#6a8174] text-sm font-medium mb-1">
                      Total Recycled
                    </p>
                    <h3 className="text-2xl font-black text-[#121614]">
                      1,250 kg
                    </h3>
                    <p className="text-primary text-xs font-bold mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        trending_up
                      </span>
                      +12.5% vs last month
                    </p>
                  </div>
                  <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      recycling
                    </span>
                  </div>
                </div>
                {/* Metric Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0] flex items-center justify-between">
                  <div>
                    <p className="text-[#6a8174] text-sm font-medium mb-1">
                      Incentives Paid
                    </p>
                    <h3 className="text-2xl font-black text-[#121614]">
                      Rs 15,400
                    </h3>
                    <p className="text-primary text-xs font-bold mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        trending_up
                      </span>
                      +5.2% vs last month
                    </p>
                  </div>
                  <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      payments
                    </span>
                  </div>
                </div>
                {/* Metric Card 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0] flex items-center justify-between">
                  <div>
                    <p className="text-[#6a8174] text-sm font-medium mb-1">
                      Avg. Collection Time
                    </p>
                    <h3 className="text-2xl font-black text-[#121614]">
                      2.8 hrs
                    </h3>
                    <p className="text-orange-500 text-xs font-bold mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        trending_down
                      </span>
                      -0.4 hrs improvement
                    </p>
                  </div>
                  <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      timer
                    </span>
                  </div>
                </div>
                {/* Metric Card 4 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0] flex items-center justify-between">
                  <div>
                    <p className="text-[#6a8174] text-sm font-medium mb-1">
                      Citizen Participation
                    </p>
                    <h3 className="text-2xl font-black text-[#121614]">
                      312 users
                    </h3>
                    <p className="text-primary text-xs font-bold mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        trending_up
                      </span>
                      +24 new this week
                    </p>
                  </div>
                  <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      person_add
                    </span>
                  </div>
                </div>
              </div>
              {/* CENTRAL CHARTS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Line Chart Placeholder */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0]">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-[#121614]">
                      Pickup Requests Trend
                    </h3>
                    <span className="text-xs text-[#6a8174] font-medium">
                      Last 7 Days
                    </span>
                  </div>
                  <div className="w-full h-64 bg-background-light rounded-lg relative overflow-hidden flex items-end px-4 pb-4 gap-2">
                    {/* Abstract chart illustration */}
                    <div className="flex-1 bg-primary/40 rounded-t h-[40%]"></div>
                    <div className="flex-1 bg-primary/40 rounded-t h-[60%]"></div>
                    <div className="flex-1 bg-primary/40 rounded-t h-[55%]"></div>
                    <div className="flex-1 bg-primary/40 rounded-t h-[80%]"></div>
                    <div className="flex-1 bg-primary rounded-t h-[95%]"></div>
                    <div className="flex-1 bg-primary/40 rounded-t h-[70%]"></div>
                    <div className="flex-1 bg-primary/40 rounded-t h-[85%]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 px-3 py-1 rounded shadow text-xs font-bold border border-primary/20">
                        Data Visualization Active
                      </div>
                    </div>
                  </div>
                </div>
                {/* Donut Chart Placeholder */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0]">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-[#121614]">
                      Waste Composition
                    </h3>
                    <span className="text-xs text-[#6a8174] font-medium">
                      Global Distribution
                    </span>
                  </div>
                  <div className="flex items-center gap-8 h-64">
                    <div className="relative size-48 rounded-full border-12 border-primary flex items-center justify-center">
                      <div className="absolute inset-0 border-12 border-primary/20 rounded-full border-r-transparent border-b-transparent rotate-45"></div>
                      <div className="text-center">
                        <p className="text-3xl font-black text-[#121614]">
                          74%
                        </p>
                        <p className="text-[10px] text-[#6a8174] uppercase tracking-widest font-bold">
                          Recyclable
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-primary"></div>
                        <p className="text-xs text-[#6a8174] font-bold flex-1">
                          PET Plastics
                        </p>
                        <p className="text-xs font-black text-[#121614]">42%</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-primary/60"></div>
                        <p className="text-xs text-[#6a8174] font-bold flex-1">
                          Cardboard
                        </p>
                        <p className="text-xs font-black text-[#121614]">28%</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-primary/30"></div>
                        <p className="text-xs text-[#6a8174] font-bold flex-1">
                          Glass
                        </p>
                        <p className="text-xs font-black text-[#121614]">18%</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-[#dde3e0]"></div>
                        <p className="text-xs text-[#6a8174] font-bold flex-1">
                          Metal
                        </p>
                        <p className="text-xs font-black text-[#121614]">12%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* DATA TABS CARD */}
              <div className="bg-white rounded-xl shadow-sm border border-[#dde3e0] overflow-hidden">
                <div className="border-b border-[#dde3e0] px-6">
                  <div className="flex gap-8">
                    <button className="py-4 border-b-2 border-primary text-primary text-sm font-bold">
                      Top Recycling Citizens
                    </button>
                    <button className="py-4 border-b-2 border-transparent text-[#6a8174] text-sm font-medium hover:text-primary transition-colors">
                      Worker Efficiency
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-[#6a8174] text-xs font-bold uppercase tracking-wider">
                          <th className="pb-4 px-2">Rank</th>
                          <th className="pb-4 px-2">Citizen Name</th>
                          <th className="pb-4 px-2">Total Recycled (kg)</th>
                          <th className="pb-4 px-2 text-right">
                            Total Earned (Rs)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#dde3e0]">
                        <tr className="text-[#121614] hover:bg-background-light transition-colors">
                          <td className="py-4 px-2 font-black text-primary">
                            01
                          </td>
                          <td className="py-4 px-2 flex items-center gap-3">
                            <div className="size-8 rounded-full bg-background-light flex items-center justify-center font-bold text-xs">
                              AS
                            </div>
                            Arjun Sharma
                          </td>
                          <td className="py-4 px-2 font-medium">145.50 kg</td>
                          <td className="py-4 px-2 text-right font-black">
                            Rs 1,820.00
                          </td>
                        </tr>
                        <tr className="text-[#121614] hover:bg-background-light transition-colors">
                          <td className="py-4 px-2 font-black text-primary">
                            02
                          </td>
                          <td className="py-4 px-2 flex items-center gap-3">
                            <div className="size-8 rounded-full bg-background-light flex items-center justify-center font-bold text-xs">
                              PK
                            </div>
                            Priya Kapoor
                          </td>
                          <td className="py-4 px-2 font-medium">132.20 kg</td>
                          <td className="py-4 px-2 text-right font-black">
                            Rs 1,650.50
                          </td>
                        </tr>
                        <tr className="text-[#121614] hover:bg-background-light transition-colors">
                          <td className="py-4 px-2 font-black text-primary">
                            03
                          </td>
                          <td className="py-4 px-2 flex items-center gap-3">
                            <div className="size-8 rounded-full bg-background-light flex items-center justify-center font-bold text-xs">
                              RJ
                            </div>
                            Rohan Joshi
                          </td>
                          <td className="py-4 px-2 font-medium">118.45 kg</td>
                          <td className="py-4 px-2 text-right font-black">
                            Rs 1,480.00
                          </td>
                        </tr>
                        <tr className="text-[#121614] hover:bg-background-light transition-colors">
                          <td className="py-4 px-2 font-black text-primary">
                            04
                          </td>
                          <td className="py-4 px-2 flex items-center gap-3">
                            <div className="size-8 rounded-full bg-background-light flex items-center justify-center font-bold text-xs">
                              MV
                            </div>
                            Meera Varma
                          </td>
                          <td className="py-4 px-2 font-medium">95.10 kg</td>
                          <td className="py-4 px-2 text-right font-black">
                            Rs 1,188.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <a
                      className="text-primary text-sm font-bold hover:underline flex items-center gap-1"
                      href="#"
                    >
                      View Full Performance Report
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
