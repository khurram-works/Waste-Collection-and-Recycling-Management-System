import React from "react";
import { useNavigate } from "react-router-dom";

function CallToAction() {

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
    <section className="py-20 bg-primary/5 ">
      <div className="max-w-300 mx-auto px-6 lg:px-40 text-center">
        <h2 className="text-[#121614] text-3xl md:text-4xl font-bold mb-10">
          Join the movement for a cleaner city.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex min-w-60 cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-white  border-2 border-primary text-primary text-base font-bold hover:bg-primary hover:text-white transition-all" onClick={handleLogin}>
            <span >Login to Your Account</span>
          </button>
          <button className="flex min-w-60 cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-all" onClick={handleregister}>
            <span >Create a Free Citizen Account</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
