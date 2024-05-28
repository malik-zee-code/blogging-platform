import React from "react";

const StepIntro: React.FC<{ title: string; intro: string }> = ({ title, intro }) => {
  return (
    <div className="w-full">
      <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
      {intro && <span className="">{intro}</span>}
    </div>
  );
};

export default StepIntro;
