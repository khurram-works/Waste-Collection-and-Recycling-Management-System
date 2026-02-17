import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  
  const navigate = useNavigate();

  const handleregister = () => {
    // login logic here
    navigate("/register");
  };

  return (
    <section className="relative bg-white  py-16 md:py-24">
      <div className="max-w-300 mx-auto px-6 lg:px-40">
        <div className="@container">
          <div className="flex flex-col items-center justify-center text-center gap-8">
            <div className="flex flex-col gap-4 max-w-200">
              <h1 className="text-[#121614] text-4xl md:text-6xl font-bold leading-tight tracking-[-0.033em]">
                Turn Your Recyclables into Rewards.
              </h1>
              <h2 className="text-gray-600  text-base md:text-xl font-normal leading-relaxed">
                A digital platform connecting citizens, municipal workers, and
                the city for efficient waste collection. Help the planet and
                your wallet.
              </h2>
            </div>
            <button className="flex min-w-50 cursor-pointer items-center justify-center rounded-lg h-12 md:h-14 px-8 bg-primary text-white text-lg font-bold shadow-lg hover:scale-105 transition-transform" onClick={handleregister}>
              <span>Start Earning →</span>
            </button>
            <div className="w-full mt-12 rounded-2xl overflow-hidden aspect-16/7 relative shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
              <img
                alt="Recycling bins in a clean modern city environment"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy9Wx-9PzzvlqqMO67z_9qbFQWVe4Nk5ehlElsScUmzdAEaeXT4MkvOsuMHX3AWiHf_XyczW5mgH-hlZNdy7Df1PaOLBpL2YGhZz6AKJk_G63d_DInYtAvyZAZ0GU_NazBT6POvNT9_V3uVMrEg18HFpw6CEWMDbofan1R4Jma6GXsbWl8tFc-KIR7K-JljLDZtf5HkH4WS0HYbLrk3_KRTzIdBX0b1VN_9pJQ98oaXatpNurX7xpexsmbAblPtWbSa1vUQ2oS"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
