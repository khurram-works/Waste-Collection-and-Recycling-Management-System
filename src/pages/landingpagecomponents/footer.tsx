import React from "react";

function Footer() {
  return (
    <footer className="bg-white  border-t border-gray-100  py-12">
      <div className="max-w-300 mx-auto px-6 text-center">
        <div className="flex justify-center gap-4 text-primary mb-6">
          <span className="material-symbols-outlined">eco</span>
          <span className="material-symbols-outlined">public</span>
          <span className="material-symbols-outlined">compost</span>
        </div>
        <p className="text-gray-500  text-sm font-medium">
          © 2025 Smart Waste Platform. All rights reserved. Built for a
          sustainable future.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
