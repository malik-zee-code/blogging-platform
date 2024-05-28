"use client";

import Image from "next/image";
import React, { MouseEventHandler, ReactNode } from "react";
import classNames from "utils/classNames";

type IconButtonT = {
  type: "submit" | "reset" | "button" | undefined;
  icon: string | ReactNode;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const IconButton: React.FC<IconButtonT> = ({
  onClick,
  type,
  icon,
  className = "",
  ...attributes
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(className, " text-white")}
      {...attributes}
    >
      {typeof icon === "string" ? (
        <Image src={icon} alt="" className="" width={0} height={0} />
      ) : (
        <span>{icon}</span>
      )}
    </button>
  );
};

export default IconButton;
