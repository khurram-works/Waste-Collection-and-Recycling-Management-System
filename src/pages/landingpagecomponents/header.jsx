import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(){
  
  const navigate = useNavigate();

  const handleregister = () => {
    // login logic here
    navigate("/register");
  };

  const handleLogin = () => {
    // login logic here
    navigate("/login");
  };


  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-solid border-[#f1f4f2] dark:border-[#2a362e] px-4 md:px-10 lg:px-40 py-3">
    <div className="flex items-center justify-between whitespace-nowrap max-w-300 mx-auto">
      <div className="flex items-center gap-3 text-primary">
        <div className="size-8">
          <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
          </svg>
        </div>
        <h2 className="text-[#121614]  text-lg font-bold leading-tight tracking-[-0.015em]">
          Smart Waste Platform
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8 items-center">
        <nav className="hidden md:flex items-center gap-9">
          <a className="text-[#121614]  text-sm font-medium leading-normal hover:text-primary transition-colors" href="#how-it-works">
            How It Works
          </a>
          <a className="text-[#121614]  text-sm font-medium leading-normal hover:text-primary transition-colors" href="#municipalities">
            For Municipalities
          </a>
        </nav>
        <div className="flex gap-2">
          <button className="flex min-w-21 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-transparent border border-[#d1d5db] dark:border-gray-600 text-[#121614]  text-sm font-bold hover:text-white hover:bg-primary transition-all" onClick={handleLogin}>
            Login
          </button>
          <button className="flex min-w-21 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-sm" onClick={handleregister}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header;