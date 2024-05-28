"use client";

import Image from "next/image";
import React, { MouseEventHandler, ReactNode } from "react";
import classNames from "utils/classNames";

type ButtonT = {
  type: "submit" | "reset" | "button" | undefined;
  text: string;
  icon?: string | ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button: React.FC<ButtonT> = ({
  onClick,
  type,
  icon,
  text,
  className = "",
  disabled = false,
  ...attributes
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classNames(className, " px-3 py-2 border-none rounded-md bg-archo-black min-w-0 ")}
      {...attributes}
    >
      {typeof icon === "string" ? (
        <Image src={icon} alt="" className="mx-2" unoptimized height={0} width={0} />
      ) : (
        <span className="text-purple font-semibold text-xl flex items-center ">{icon}</span>
      )}{" "}
      {text}
    </button>
  );
};

export default Button;
