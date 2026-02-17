// import React from "react";
// import { useState } from "react";
// import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

// export default function WorkerDashboard() {
//   // Simple state to track which view is active
//   const [currentView, setCurrentView] = useState("list"); // 'list' or 'map'
//   const [Dashboardview, setDashboardview] = useState("workertask");
//   let [isOpen, setIsOpen] = useState(false);

//   function open() {
//     setIsOpen(true);
//   }

//   function close() {
//     setIsOpen(false);
//   }

//   return (
//     <div className="flex flex-col h-screen overflow-hidden bg-background-light font-display">
//       {/* GLOBAL HEADER */}
//       <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dde3e0] bg-white px-6 py-3 z-20">
//         <div className="flex items-center gap-4 text-[#121614]">
//           <div className="size-6 text-primary">
//             <svg
//               fill="none"
//               viewBox="0 0 48 48"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
//                 fill="currentColor"
//               ></path>
//             </svg>
//           </div>
//           <div className="flex items-center gap-2">
//             <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
//               Smart Waste
//             </h2>
//             <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
//               Worker
//             </span>
//           </div>
//         </div>
//         <div className="flex flex-1 justify-end gap-6 items-center">
//           <div className="flex items-center gap-3">
//             <button className="flex min-w-21 cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold">
//               <span className="truncate">Worker: John Doe</span>
//             </button>
//             <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-gray-100 text-[#121614]">
//               <span className="material-symbols-outlined">notifications</span>
//             </button>
//           </div>
//           <div
//             className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border border-gray-200"
//             style={{
//               backgroundImage:
//                 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYdMgXsGUfO957pDma-wfByKVXDXZz3CrSAfItGBEST-r6o5eNClmeTG9GUfMYK6q_e_sjsq_muGMTVnVa0Bxit4yO_FyVK7BQkgpcHmugLwF6SxBO3qoZSplRYC49-Px8ZmXroQqngMEnIZPBNMGPRBc1aQMd7rA4T7gddUdJFSvAQ6VN06UJCgbDgpothNnxYMxrRogZjNQNB3N2nfkSboNDm6bqill5U15OwE4CBReOt2yeBsKweTfbl5-d7-lzuFz7e8Zr")',
//             }}
//           ></div>
//         </div>
//       </header>

//       <div className="flex flex-1 overflow-hidden">
//         {/* LEFT SIDEBAR */}
//         <aside className="w-64 bg-white border-r border-[#dde3e0] flex flex-col justify-between p-4 shrink-0">
//           <div className="flex flex-col gap-6">
//             <div className="flex flex-col">
//               <h1 className="text-[#121614] text-base font-semibold">
//                 Worker Dashboard
//               </h1>
//               <p className="text-[#6a8174] text-xs font-normal">
//                 Municipal Waste Management
//               </p>
//             </div>

//             {/* Navigation Menu */}
//             <nav className="flex flex-col gap-1">
//               <div
//                 className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer  ${Dashboardview === "workertask" ? "bg-primary/10 text-primary" : "text-[#121614] hover:bg-gray-50"}`}
//                 onClick={() => setDashboardview("workertask")}
//               >
//                 <span className="material-symbols-outlined">task_alt</span>
//                 <p className="text-sm font-semibold">My Tasks</p>
//               </div>
//               <div
//                 className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer  ${Dashboardview === "taskhistory" ? "bg-primary/10 text-primary" : "text-[#121614] hover:bg-gray-50"}`}
//                 onClick={() => setDashboardview("taskhistory")}
//               >
//                 <span className="material-symbols-outlined">history</span>
//                 <p className="text-sm font-medium">Task History</p>
//               </div>
//               <div className="my-3 border-t border-[#dde3e0]"></div>
//               <div
//                 className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer  ${Dashboardview === "profile" ? "bg-primary/10 text-primary" : "text-[#121614] hover:bg-gray-50"}`}
//                 onClick={() => setDashboardview("profile")}
//               >
//                 <span className="material-symbols-outlined">person</span>
//                 <p className="text-sm font-medium">My Profile</p>
//               </div>
//               <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 cursor-pointer">
//                 <span className="material-symbols-outlined">logout</span>
//                 <p className="text-sm font-medium">Log Out</p>
//               </div>
//             </nav>
//           </div>

//           {/* Shift Status Box */}
//           <div className="bg-background-light p-3 rounded-lg">
//             <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">
//               Shift Status
//             </p>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-primary"></div>
//               <span className="text-xs font-medium">Active Shift</span>
//             </div>
//           </div>
//         </aside>

//         {/* MAIN CONTENT - LIST VIEW */}

//         {Dashboardview === "workertask" && (
//           <main className="flex-1 overflow-y-auto bg-background-light p-6 flex flex-col gap-6">
//             {/* VIEW TOGGLE AND SUMMARY BAR */}
//             <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//               {/* Tabs - with click handlers */}
//               <div className="flex border-b border-[#dde3e0] gap-8">
//                 <button
//                   onClick={() => setCurrentView("list")}
//                   className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${currentView === "list" ? "border-b-primary text-primary" : "border-b-transparent text-[#6a8174] hover:text-primary transition-colors"}`}
//                 >
//                   <p className="text-sm font-bold tracking-[0.015em]">
//                     List View
//                   </p>
//                 </button>
//                 <button
//                   onClick={() => setCurrentView("map")}
//                   className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 hover:text-primary transition-colors ${currentView === "map" ? "border-b-primary text-primary" : "border-b-transparent text-[#6a8174] hover:text-primary transition-colors"}`}
//                 >
//                   <p className="text-sm font-bold tracking-[0.015em]">
//                     Map View
//                   </p>
//                 </button>
//               </div>

//               {/* Summary Bar */}
//               <div className="flex gap-4">
//                 <div className="flex items-center gap-3 bg-white border border-[#dde3e0] px-5 py-3 rounded-xl shadow-sm">
//                   <div className="flex flex-col">
//                     <p className="text-[10px] uppercase font-bold text-[#6a8174]">
//                       Today's Tasks
//                     </p>
//                     <p className="text-xl font-bold">8</p>
//                   </div>
//                   <div className="w-px h-8 bg-gray-200"></div>
//                   <div className="flex flex-col">
//                     <p className="text-[10px] uppercase font-bold text-[#6a8174]">
//                       Completed
//                     </p>
//                     <p className="text-xl font-bold text-primary">2</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {currentView === "list" && (
//               <div className="flex flex-1 gap-6 overflow-hidden">
//                 {/* TASK LIST TABLE */}
//                 <div className="flex-1 flex flex-col min-w-0">
//                   <div className="bg-white border border-[#dde3e0] rounded-xl shadow-sm overflow-hidden flex flex-col">
//                     <div className="overflow-x-auto">
//                       <table className="w-full text-left">
//                         <thead className="bg-gray-50 border-b border-[#dde3e0]">
//                           <tr>
//                             <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
//                               Task ID
//                             </th>
//                             <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
//                               Address
//                             </th>
//                             <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
//                               Waste Type
//                             </th>
//                             <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
//                               Priority
//                             </th>
//                             <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
//                               Status
//                             </th>
//                             <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
//                               Actions
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody className="divide-y divide-[#dde3e0]">
//                           {/* Row 1: Selected Task */}
//                           <tr className="bg-primary/5 border-l-4 border-l-primary">
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
//                               #WT-402
//                             </td>
//                             <td className="px-6 py-4 text-sm text-[#121614]">
//                               123 Maple St, North Hills
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f1f4f2] text-xs font-medium text-[#121614] w-fit">
//                                 <span>♻️</span> Recycle
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="flex items-center gap-1.5 text-xs font-medium">
//                                 <span className="size-2 rounded-full bg-red-500"></span>{" "}
//                                 High
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <span className="text-xs font-medium px-2 py-1 rounded bg-orange-100 text-orange-700">
//                                 In Progress
//                               </span>
//                             </td>
//                             <td className="px-6 py-4">
//                               <Button
//                                 onClick={open}
//                                 className="text-primary font-bold text-sm hover:underline"
//                               >
//                                 Verify
//                               </Button>
//                             </td>
//                           </tr>

//                           {/* Row 2 */}
//                           <tr className="hover:bg-gray-50 transition-colors">
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
//                               #WT-405
//                             </td>
//                             <td className="px-6 py-4 text-sm text-[#121614]">
//                               456 Oak Ave, Sector 4
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f1f4f2] text-xs font-medium text-[#121614] w-fit">
//                                 <span>🗑️</span> Landfill
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="flex items-center gap-1.5 text-xs font-medium">
//                                 <span className="size-2 rounded-full bg-yellow-500"></span>{" "}
//                                 Standard
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600">
//                                 Pending
//                               </span>
//                             </td>
//                             <td className="px-6 py-4">
//                               <button className="text-primary font-bold text-sm hover:underline">
//                                 Start
//                               </button>
//                             </td>
//                           </tr>

//                           {/* Row 3 */}
//                           <tr className="hover:bg-gray-50 transition-colors">
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
//                               #WT-408
//                             </td>
//                             <td className="px-6 py-4 text-sm text-[#121614]">
//                               789 Pine Rd, East Side
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f1f4f2] text-xs font-medium text-[#121614] w-fit">
//                                 <span>♻️</span> Recycle
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="flex items-center gap-1.5 text-xs font-medium">
//                                 <span className="size-2 rounded-full bg-red-500"></span>{" "}
//                                 High
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600">
//                                 Pending
//                               </span>
//                             </td>
//                             <td className="px-6 py-4">
//                               <button className="text-primary font-bold text-sm hover:underline">
//                                 Start
//                               </button>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>

//                 {/* SELECTED TASK SIDE PANEL */}

//                 <Dialog open={isOpen} onClose={close} className="relative z-50">
//                   {/* Dim the background */}
//                   <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

//                   {/* Drawer slides in from the right */}
//                   <div className="fixed inset-0 flex justify-end">
//                     <DialogPanel
//                       transition
//                       className="w-96 bg-white h-full shadow-2xl flex flex-col transform transition duration-300 ease-in-out data-closed:translate-x-full"
//                     >
//                       <div className="p-4 border-b border-[#dde3e0] flex justify-between items-center">
//                         <h3 className="font-bold">Task Details</h3>
//                         <button
//                           onClick={close}
//                           className="text-gray-400 hover:text-gray-600"
//                         >
//                           <span className="material-symbols-outlined">
//                             close
//                           </span>
//                         </button>
//                       </div>

//                       <div className="p-5 flex-1 flex flex-col gap-6">
//                         <div className="flex flex-col gap-1">
//                           <p className="text-[10px] uppercase font-bold text-[#6a8174]">
//                             Assigned Address
//                           </p>
//                           <p className="text-base font-semibold leading-tight">
//                             123 Maple St, North Hills, NY 10001
//                           </p>
//                           <button className="flex items-center gap-1 text-primary text-xs font-bold mt-1">
//                             <span className="material-symbols-outlined text-sm">
//                               directions
//                             </span>
//                             Open in Maps
//                           </button>
//                         </div>

//                         <div className="flex flex-col gap-1">
//                           <p className="text-[10px] uppercase font-bold text-[#6a8174]">
//                             Waste Specs
//                           </p>
//                           <div className="flex items-center justify-between mt-1">
//                             <div className="flex items-center gap-2">
//                               <span className="text-xl">♻️</span>
//                               <span className="text-sm">Recycle Bin</span>
//                             </div>
//                             <span className="text-sm font-medium text-red-500">
//                               High Priority
//                             </span>
//                           </div>
//                         </div>

//                         <div className="bg-background-light p-4 rounded-lg flex flex-col gap-2">
//                           <div className="flex items-center gap-2 text-[#6a8174]">
//                             <span className="material-symbols-outlined text-sm">
//                               sticky_note_2
//                             </span>
//                             <p className="text-[10px] uppercase font-bold">
//                               Worker Notes
//                             </p>
//                           </div>
//                           <p className="text-sm italic text-gray-600">
//                             "Customer mentioned the bin is behind the secondary
//                             wooden gate. Gate code is #4451."
//                           </p>
//                         </div>
//                       </div>

//                       <div className="p-4 bg-gray-50 border-t border-[#dde3e0]">
//                         <button
//                           className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
//                           onClick={() => setCurrentView("map")}
//                         >
//                           <span className="material-symbols-outlined">
//                             play_arrow
//                           </span>
//                           Navigate &amp; Start Task
//                         </button>
//                       </div>
//                     </DialogPanel>
//                   </div>
//                 </Dialog>
//               </div>
//             )}
//             {currentView === "map" && (
//               <main className="flex-1 flex flex-col relative">
//                 {/* View Controls - Toggle at top */}

//                 {/* Map Container */}
//                 <div className="flex-1 relative bg-gray-200 overflow-hidden">
//                   {/* Mock Map Visualization */}
//                   <div
//                     className="absolute inset-0 bg-cover bg-center"
//                     style={{
//                       backgroundImage:
//                         'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_oHeWW3JpGG71zYCfShl9nLB9X9oXaiqkkpKdsYT0bOItVMWgQMf3A8a6vaqN0Rn4iZn4ipVywqj6U3PlaExv1bP2EBLNXE_Q1QXFF95WyeIml5fJYx92Vs910f97w4EjEJgC7TgVFtP2UwgDc7eS39_4xaW2ln9qac39S_2dppQhuXYFEZNf4Igv_7wNdB9rqflnXIDT3P9WogVbwWmPfkphMHKjNAWE53_y1rrqiY3Ga4ZaAIKjFKJMyXAKk5DmDnj-r4ON")',
//                     }}
//                   >
//                     {/* SVG Overlay for Route and Markers */}
//                     <svg
//                       className="absolute inset-0 w-full h-full"
//                       viewBox="0 0 1000 600"
//                     >
//                       {/* Route Line */}
//                       <path
//                         d="M500 300 Q 550 250, 600 280 T 700 220"
//                         fill="none"
//                         stroke="#3b82f6"
//                         strokeDasharray="8 4"
//                         strokeWidth="4"
//                       />

//                       {/* User Location - Blue Dot */}
//                       <circle
//                         cx="500"
//                         cy="300"
//                         fill="#3b82f6"
//                         fillOpacity="0.3"
//                         r="12"
//                       />
//                       <circle
//                         cx="500"
//                         cy="300"
//                         fill="#3b82f6"
//                         r="6"
//                         stroke="white"
//                         strokeWidth="2"
//                       />

//                       {/* Marker 1: PET #1012 - Active Target */}
//                       <g transform="translate(690, 190)">
//                         <path
//                           d="M10 0 C4.477 0 0 4.477 0 10 C0 17.5 10 30 10 30 C10 30 20 17.5 20 10 C20 4.477 15.523 0 10 0 Z"
//                           fill="#2e8a56"
//                         />
//                         <text
//                           fill="white"
//                           fontFamily="Material Symbols Outlined"
//                           fontSize="12"
//                           textAnchor="middle"
//                           x="10"
//                           y="15"
//                         >
//                           recycling
//                         </text>
//                         <rect
//                           fill="white"
//                           height="20"
//                           rx="4"
//                           stroke="#2e8a56"
//                           strokeWidth="1"
//                           width="50"
//                           x="-15"
//                           y="-25"
//                         />
//                         <text
//                           fill="#2e8a56"
//                           fontSize="10"
//                           fontWeight="bold"
//                           textAnchor="middle"
//                           x="10"
//                           y="-11"
//                         >
//                           PET #1012
//                         </text>
//                       </g>

//                       {/* Marker 2: Cardboard #1010 */}
//                       <g transform="translate(300, 150)">
//                         <path
//                           d="M10 0 C4.477 0 0 4.477 0 10 C0 17.5 10 30 10 30 C10 30 20 17.5 20 10 C20 4.477 15.523 0 10 0 Z"
//                           fill="#2e8a56"
//                           fillOpacity="0.6"
//                         />
//                         <text
//                           fill="white"
//                           fontFamily="Material Symbols Outlined"
//                           fontSize="12"
//                           textAnchor="middle"
//                           x="10"
//                           y="15"
//                         >
//                           package_2
//                         </text>
//                       </g>

//                       {/* Marker 3: General #1011 */}
//                       <g transform="translate(850, 450)">
//                         <path
//                           d="M10 0 C4.477 0 0 4.477 0 10 C0 17.5 10 30 10 30 C10 30 20 17.5 20 10 C20 4.477 15.523 0 10 0 Z"
//                           fill="#6b7280"
//                         />
//                         <text
//                           fill="white"
//                           fontFamily="Material Symbols Outlined"
//                           fontSize="12"
//                           textAnchor="middle"
//                           x="10"
//                           y="15"
//                         >
//                           delete
//                         </text>
//                       </g>
//                     </svg>

//                     {/* Search Bar on Map */}
//                     <div className="absolute top-20 left-6 w-full max-w-xs">
//                       <div className="flex w-full items-stretch rounded-xl h-12 bg-white shadow-lg border border-gray-100">
//                         <div className="text-gray-400 flex items-center justify-center pl-4">
//                           <span className="material-symbols-outlined">
//                             search
//                           </span>
//                         </div>
//                         <input
//                           className="form-input flex w-full border-none bg-transparent focus:ring-0 px-4 text-sm"
//                           placeholder="Search task location..."
//                           defaultValue="123 Main Street"
//                         />
//                       </div>
//                     </div>

//                     {/* Floating Map Controls */}
//                     <div className="absolute right-6 top-6 flex flex-col gap-3">
//                       <div className="flex flex-col rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden">
//                         <button className="flex size-11 items-center justify-center hover:bg-gray-50 text-gray-700">
//                           <span className="material-symbols-outlined">add</span>
//                         </button>
//                         <div className="h-px bg-gray-100"></div>
//                         <button className="flex size-11 items-center justify-center hover:bg-gray-50 text-gray-700">
//                           <span className="material-symbols-outlined">
//                             remove
//                           </span>
//                         </button>
//                       </div>
//                       <button className="flex size-11 items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100 text-primary">
//                         <span className="material-symbols-outlined fill-icon">
//                           my_location
//                         </span>
//                       </button>
//                     </div>

//                     {/* Bottom Sheet - Navigation Card Overlay */}
//                     <div className="absolute bottom-6 left-6 right-6 md:left-auto md:w- md:right-6">
//                       <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 md:p-6">
//                         {/* Card Header */}
//                         <div className="flex justify-between items-start mb-4">
//                           <div>
//                             <div className="flex items-center gap-2 mb-1">
//                               <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">
//                                 Active Task
//                               </span>
//                               <span className="text-gray-400 text-xs font-medium">
//                                 ETA: 4 mins
//                               </span>
//                             </div>
//                             <h3 className="text-lg font-bold text-gray-900">
//                               Navigate to: #REQ-1012
//                             </h3>
//                             <p className="text-primary font-semibold text-sm">
//                               PET Bottles (5-10kg)
//                             </p>
//                           </div>
//                           <button className="p-2 hover:bg-gray-100 rounded-full">
//                             <span className="material-symbols-outlined text-gray-400">
//                               expand_more
//                             </span>
//                           </button>
//                         </div>

//                         {/* Card Content */}
//                         <div className="space-y-4">
//                           {/* Address Info */}
//                           <div className="flex items-start gap-3">
//                             <span className="material-symbols-outlined text-gray-400 mt-0.5">
//                               location_on
//                             </span>
//                             <div>
//                               <p className="text-sm font-semibold">
//                                 123 Main Street, Gulberg
//                               </p>
//                               <p className="text-xs text-gray-500">
//                                 Block B, Plot 42-A
//                               </p>
//                             </div>
//                           </div>

//                           {/* Customer Note */}
//                           <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 flex gap-3">
//                             <span className="material-symbols-outlined text-yellow-600 text-sm">
//                               sticky_note_2
//                             </span>
//                             <p className="text-sm text-yellow-800">
//                               <span className="font-bold">Customer Note:</span>{" "}
//                               Bags are kept at the back gate. Please ring twice.
//                             </p>
//                           </div>

//                           {/* Action Buttons */}
//                           <div className="pt-2 flex flex-col gap-3">
//                             <button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
//                               <span className="material-symbols-outlined">
//                                 check_circle
//                               </span>
//                               I Have Collected The Waste
//                             </button>
//                             <p className="text-[11px] text-gray-400 text-center px-4 leading-tight">
//                               Clicking will open the verification form to
//                               finalize the task and calculate the citizen's
//                               earnings.
//                             </p>
//                             <button className="w-full flex items-center justify-center gap-2 text-primary font-bold text-sm hover:underline py-2">
//                               <span className="material-symbols-outlined text-base">
//                                 directions
//                               </span>
//                               Open in Google Maps
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </main>
//             )}
//           </main>
//         )}
//         {Dashboardview === "taskhistory" && (
//           <main className="flex-1 p-6 md:p-10 overflow-x-hidden">
//             {/* Header & Summary Stats */}
//             <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-8">
//               <div>
//                 <h2 className="text-[#121614] text-3xl font-black leading-tight tracking-[-0.033em]">
//                   My Completed Task History
//                 </h2>
//                 <p className="text-[#6a8174] mt-1">
//                   Review your collection performance and earnings.
//                 </p>
//               </div>
//               <div className="flex gap-4">
//                 {/* Summary Card 1 */}
//                 <div className="bg-white p-4 rounded-xl border border-[#dde3e0] shadow-sm min-w-50">
//                   <p className="text-xs font-semibold text-[#6a8174] uppercase tracking-wider">
//                     Total Collected
//                   </p>
//                   <p className="text-2xl font-black text-primary mt-1">
//                     1,250 kg
//                   </p>
//                 </div>
//                 {/* Summary Card 2 */}
//                 <div className="bg-white p-4 rounded-xl border border-[#dde3e0] shadow-sm min-w-50">
//                   <p className="text-xs font-semibold text-[#6a8174] uppercase tracking-wider">
//                     Earnings Generated
//                   </p>
//                   <p className="text-2xl font-black text-primary mt-1">
//                     Rs 3,450
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Filters Bar */}
//             <div className="bg-white p-4 rounded-xl border border-[#dde3e0] shadow-sm flex flex-wrap items-end gap-4 mb-6">
//               <div className="flex-1 min-w-50">
//                 <p className="text-[#121614] text-sm font-medium pb-2">
//                   Search Tasks
//                 </p>
//                 <div className="relative">
//                   <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6a8174] text-[20px]">
//                     search
//                   </span>
//                   <input
//                     className="w-full pl-10 pr-4 py-2 bg-background-light border-2 border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary text-sm"
//                     placeholder="Task ID or Address..."
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="flex-1 min-w-35">
//                 <p className="text-[#121614] text-sm font-medium pb-2">From</p>
//                 <input
//                   className="w-full py-2 bg-background-light border-2 border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary text-sm"
//                   type="date"
//                 />
//               </div>
//               <div className="flex-1 min-w-35">
//                 <p className="text-[#121614] text-sm font-medium pb-2">To</p>
//                 <input
//                   className="w-full py-2 bg-background-light border-2 border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary text-sm"
//                   type="date"
//                 />
//               </div>
//               <div className="flex-1 min-w-35">
//                 <p className="text-[#121614] text-sm font-medium pb-2">
//                   Waste Type
//                 </p>
//                 <select className="w-full py-2 bg-background-light border-2 border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary text-sm">
//                   <option value="all">All Types</option>
//                   <option value="pet">PET Plastic</option>
//                   <option value="paper">Paper/Cardboard</option>
//                   <option value="general">General Waste</option>
//                 </select>
//               </div>
//               <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
//                 <span className="material-symbols-outlined text-[20px]">
//                   filter_list
//                 </span>
//                 Apply Filters
//               </button>
//             </div>

//             {/* History Table Area */}
//             <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse">
//                   <thead>
//                     <tr className="bg-background-light border-b border-[#dde3e0]">
//                       <th className="p-4 text-xs font-bold text-[#6a8174] uppercase">
//                         Date
//                       </th>
//                       <th className="p-4 text-xs font-bold text-[#6a8174] uppercase">
//                         Task ID
//                       </th>
//                       <th className="p-4 text-xs font-bold text-[#6a8174] uppercase">
//                         Address
//                       </th>
//                       <th className="p-4 text-xs font-bold text-[#6a8174] uppercase">
//                         Waste Type
//                       </th>
//                       <th className="p-4 text-xs font-bold text-[#6a8174] uppercase text-center">
//                         Weight
//                       </th>
//                       <th className="p-4 text-xs font-bold text-[#6a8174] uppercase">
//                         Condition
//                       </th>
//                       <th className="p-4 text-xs font-bold text-[#6a8174] uppercase text-right">
//                         Earnings
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-[#dde3e0]">
//                     {/* Row 1 */}
//                     <tr className="hover:bg-[#f8faf9] transition-colors">
//                       <td className="p-4 text-sm font-medium">12 Oct 2023</td>
//                       <td className="p-4 text-sm text-[#6a8174] font-mono">
//                         #SW-2931
//                       </td>
//                       <td className="p-4 text-sm max-w-50 truncate">
//                         122 MG Road, Sector 4
//                       </td>
//                       <td className="p-4 text-sm flex items-center gap-2">
//                         <span className="text-lg">♻️</span> PET Plastic
//                       </td>
//                       <td className="p-4 text-sm font-bold text-center">
//                         5.2 kg
//                       </td>
//                       <td className="p-4">
//                         <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
//                           <span className="material-symbols-outlined text-[14px] fill">
//                             check_circle
//                           </span>
//                           Proper
//                         </span>
//                       </td>
//                       <td className="p-4 text-sm font-black text-right text-primary">
//                         Rs 156.00
//                       </td>
//                     </tr>
//                     {/* Row 2 */}
//                     <tr className="hover:bg-[#f8faf9] transition-colors">
//                       <td className="p-4 text-sm font-medium">12 Oct 2023</td>
//                       <td className="p-4 text-sm text-[#6a8174] font-mono">
//                         #SW-2928
//                       </td>
//                       <td className="p-4 text-sm max-w-50 truncate">
//                         H Block Apartment, Flat 4B
//                       </td>
//                       <td className="p-4 text-sm flex items-center gap-2">
//                         <span className="text-lg">♻️</span> Paper
//                       </td>
//                       <td className="p-4 text-sm font-bold text-center">
//                         3.0 kg
//                       </td>
//                       <td className="p-4">
//                         <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700">
//                           <span className="material-symbols-outlined text-[14px] fill">
//                             warning
//                           </span>
//                           Mixed
//                         </span>
//                       </td>
//                       <td className="p-4 text-sm font-black text-right text-primary">
//                         Rs 45.00
//                       </td>
//                     </tr>
//                     {/* Row 3 */}
//                     <tr className="hover:bg-[#f8faf9] transition-colors">
//                       <td className="p-4 text-sm font-medium">11 Oct 2023</td>
//                       <td className="p-4 text-sm text-[#6a8174] font-mono">
//                         #SW-2899
//                       </td>
//                       <td className="p-4 text-sm max-w-50 truncate">
//                         Shop No. 12, Main Market
//                       </td>
//                       <td className="p-4 text-sm flex items-center gap-2">
//                         <span className="text-lg">🗑️</span> General
//                       </td>
//                       <td className="p-4 text-sm font-bold text-center">
//                         10.0 kg
//                       </td>
//                       <td className="p-4">
//                         <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-red-100 text-red-700">
//                           <span className="material-symbols-outlined text-[14px] fill">
//                             cancel
//                           </span>
//                           Contaminated
//                         </span>
//                       </td>
//                       <td className="p-4 text-sm font-black text-right text-[#6a8174]">
//                         Rs 0.00
//                       </td>
//                     </tr>
//                     {/* Row 4 */}
//                     <tr className="hover:bg-[#f8faf9] transition-colors">
//                       <td className="p-4 text-sm font-medium">11 Oct 2023</td>
//                       <td className="p-4 text-sm text-[#6a8174] font-mono">
//                         #SW-2884
//                       </td>
//                       <td className="p-4 text-sm max-w-50 truncate">
//                         Green Villa, Plot 55
//                       </td>
//                       <td className="p-4 text-sm flex items-center gap-2">
//                         <span className="text-lg">♻️</span> PET Plastic
//                       </td>
//                       <td className="p-4 text-sm font-bold text-center">
//                         8.5 kg
//                       </td>
//                       <td className="p-4">
//                         <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
//                           <span className="material-symbols-outlined text-[14px] fill">
//                             check_circle
//                           </span>
//                           Proper
//                         </span>
//                       </td>
//                       <td className="p-4 text-sm font-black text-right text-primary">
//                         Rs 255.00
//                       </td>
//                     </tr>
//                     {/* Row 5 */}
//                     <tr className="hover:bg-[#f8faf9] transition-colors">
//                       <td className="p-4 text-sm font-medium">10 Oct 2023</td>
//                       <td className="p-4 text-sm text-[#6a8174] font-mono">
//                         #SW-2872
//                       </td>
//                       <td className="p-4 text-sm max-w-50 truncate">
//                         City Park Entrance
//                       </td>
//                       <td className="p-4 text-sm flex items-center gap-2">
//                         <span className="text-lg">♻️</span> Paper
//                       </td>
//                       <td className="p-4 text-sm font-bold text-center">
//                         15.0 kg
//                       </td>
//                       <td className="p-4">
//                         <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
//                           <span className="material-symbols-outlined text-[14px] fill">
//                             check_circle
//                           </span>
//                           Proper
//                         </span>
//                       </td>
//                       <td className="p-4 text-sm font-black text-right text-primary">
//                         Rs 225.00
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               {/* Pagination Footer */}
//               <div className="flex items-center justify-between p-4 border-t border-[#dde3e0] bg-background-light/30">
//                 <p className="text-sm text-[#6a8174]">
//                   Showing Page{" "}
//                   <span className="font-bold text-[#121614]">1 of 5</span> (42
//                   results)
//                 </p>
//                 <div className="flex items-center gap-2">
//                   <button className="size-9 flex items-center justify-center rounded-lg bg-white border border-[#dde3e0] text-primary font-bold shadow-sm">
//                     1
//                   </button>
//                   <button className="size-9 flex items-center justify-center rounded-lg bg-white border border-[#dde3e0] text-[#121614] hover:bg-primary/10 transition-colors">
//                     2
//                   </button>
//                   <button className="size-9 flex items-center justify-center rounded-lg bg-white border border-[#dde3e0] text-[#121614] hover:bg-primary/10 transition-colors">
//                     3
//                   </button>
//                   <button className="px-3 h-9 flex items-center justify-center rounded-lg bg-white border border-[#dde3e0] text-[#121614] hover:bg-primary/10 transition-colors gap-1">
//                     Next
//                     <span className="material-symbols-outlined text-[18px]">
//                       chevron_right
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </main>
//         )}
//         {Dashboardview === "profile" && (
//           <main className="flex-1 p-8 max-w-full overflow-y-scroll">
//             <div className="mb-8">
//               <h1 className="text-4xl font-black leading-tight tracking-tight">
//                 My Account &amp; Work Details
//               </h1>
//               <p className="text-[#6a8174] mt-2">
//                 Manage your personal information and view system-assigned work
//                 details.
//               </p>
//             </div>

//             {/* Profile Form Card */}
//             <div className="bg-white rounded-xl shadow-sm border border-[#dde3e0] overflow-hidden mb-8">
//               {/* Part 1: Official Assignment (Read-Only) */}
//               <div className="bg-background-light p-6 border-b border-[#dde3e0]">
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="material-symbols-outlined text-primary text-xl">
//                     verified_user
//                   </span>
//                   <h2 className="text-lg font-bold">Official Assignment</h2>
//                 </div>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                   <div className="flex flex-col">
//                     <span className="text-[#6a8174] text-xs font-semibold uppercase tracking-wider mb-1">
//                       Worker ID
//                     </span>
//                     <span className="text-sm font-medium">W-07</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-[#6a8174] text-xs font-semibold uppercase tracking-wider mb-1">
//                       Assigned Zone
//                     </span>
//                     <span className="text-sm font-medium">Zone B</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-[#6a8174] text-xs font-semibold uppercase tracking-wider mb-1">
//                       Vehicle Number
//                     </span>
//                     <span className="text-sm font-medium">LHR-7890</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-[#6a8174] text-xs font-semibold uppercase tracking-wider mb-1">
//                       Status
//                     </span>
//                     <div className="flex items-center gap-1.5">
//                       <span className="size-2 rounded-full bg-primary"></span>
//                       <span className="text-sm font-bold text-primary">
//                         Active
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Part 2: Contact Details (Editable) */}
//               <div className="p-6">
//                 <div className="flex items-center gap-2 mb-6">
//                   <span className="material-symbols-outlined text-gray-400 text-xl">
//                     contact_mail
//                   </span>
//                   <h2 className="text-lg font-bold">Your Contact Details</h2>
//                 </div>
//                 <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="flex flex-col gap-1.5">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Full Name
//                     </label>
//                     <input
//                       className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
//                       type="text"
//                       defaultValue="John Doe"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1.5">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Phone Number
//                     </label>
//                     <input
//                       className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
//                       type="tel"
//                       defaultValue="+1 (555) 000-1234"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1.5">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Email Address
//                     </label>
//                     <input
//                       className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
//                       type="email"
//                       defaultValue="john.doe@municipal.gov"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1.5">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Emergency Contact
//                     </label>
//                     <input
//                       className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
//                       type="text"
//                       defaultValue="Jane Doe (+1 555-000-5678)"
//                     />
//                   </div>
//                 </form>
//                 <div className="mt-8 flex items-center gap-4">
//                   <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-sm shadow-sm">
//                     Save Changes
//                   </button>
//                   <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-6 rounded-lg transition-colors text-sm">
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Security Card */}
//             <div className="bg-white rounded-xl shadow-sm border border-[#dde3e0] overflow-hidden">
//               <div className="p-6">
//                 <div className="flex items-center gap-2 mb-6">
//                   <span className="material-symbols-outlined text-gray-400 text-xl">
//                     lock
//                   </span>
//                   <h2 className="text-lg font-bold">Account Security</h2>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="flex flex-col gap-1.5">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Current Password
//                     </label>
//                     <input
//                       className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
//                       placeholder="••••••••"
//                       type="password"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1.5">
//                     <label className="text-sm font-semibold text-gray-700">
//                       New Password
//                     </label>
//                     <input
//                       className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
//                       placeholder="••••••••"
//                       type="password"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1.5">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Confirm New Password
//                     </label>
//                     <input
//                       className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
//                       placeholder="••••••••"
//                       type="password"
//                     />
//                   </div>
//                 </div>
//                 <div className="mt-8">
//                   <button className="bg-gray-100 hover:bg-gray-200 text-[#121614] font-bold py-2.5 px-6 rounded-lg transition-colors text-sm">
//                     Change Password
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </main>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import WorkerHeader from "./Worker/WorkerHeader";
import WorkerSidebar from "./Worker/WorkerSidebar";
import TaskListView from "./Worker/TasklistView";
import TaskHistory from "./Worker/TaskHistory";
import Profile from "./Worker/Profile";

export default function WorkerDashboard() {
  // Which section is active? "workertask", "taskhistory", or "profile"
  const [dashboardView, setDashboardView] = useState("workertask");

  // Worker data – in a real app, you'd fetch this from an API or context
  const worker = {
    name: "John Doe",
    id: "W-07",
    zone: "Zone B",
    vehicle: "LHR-7890",
    status: "Active",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYdMgXsGUfO957pDma-wfByKVXDXZz3CrSAfItGBEST-r6o5eNClmeTG9GUfMYK6q_e_sjsq_muGMTVnVa0Bxit4yO_FyVK7BQkgpcHmugLwF6SxBO3qoZSplRYC49-Px8ZmXroQqngMEnIZPBNMGPRBc1aQMd7rA4T7gddUdJFSvAQ6VN06UJCgbDgpothNnxYMxrRogZjNQNB3N2nfkSboNDm6bqill5U15OwE4CBReOt2yeBsKweTfbl5-d7-lzuFz7e8Zr",
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background-light font-display">
      {/* Global Header */}
      <WorkerHeader worker={worker} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <WorkerSidebar
          dashboardView={dashboardView}
          setDashboardView={setDashboardView}
          worker={worker}
        />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          {dashboardView === "workertask" && <TaskListView worker={worker} />}
          {dashboardView === "taskhistory" && <TaskHistory />}
          {dashboardView === "profile" && <Profile worker={worker} />}
        </div>
      </div>
    </div>
  );
}