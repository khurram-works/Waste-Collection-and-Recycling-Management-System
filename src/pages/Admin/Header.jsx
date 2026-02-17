import React from "react";

const Header = () => (
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
);

export default Header;
