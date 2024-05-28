import React from "react";
import classNames from "utils/classNames";

const FieldIntro: React.FC<{
  title: string;
  intro?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ title, intro, children, className = "" }) => {
  return (
    <div className={classNames(className, "w-full")}>
      <h1 className="text-base md:text-lg font-medium">{title}</h1>
      {intro && <span className="text-xs text-gray">{intro}</span>}
      <div className="mt-3">{children}</div>
    </div>
  );
};

export default FieldIntro;
