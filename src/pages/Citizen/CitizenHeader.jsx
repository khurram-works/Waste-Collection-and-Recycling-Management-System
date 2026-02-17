import React from "react";

const CitizenHeader = ({ user }) => {
  return (
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
          <span className="truncate">Welcome, {user.name}</span>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
          style={{ backgroundImage: `url("${user.avatarUrl}")` }}
        ></div>
      </div>
    </header>
  );
};

export default CitizenHeader;