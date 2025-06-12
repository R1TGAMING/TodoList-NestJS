import React from "react";
import TrashButton from "../Buttons/TrashButton";

interface taskProps {
  children: React.ReactNode;
  className?: string;
  index: number;
}

const Task: React.FC<taskProps> = ({ children, className, index }) => {
  return (
    <div
      className={
        "bg-slate-100 font-bold flex py-5 w-full px-5 text-center justify-between rounded-xl shadow-lg shadow-slate-300 " +
        className
      }
    >
      <div>{index}</div>

      <div>{children}</div>

      <div>
        <ul>
          <li>
            <TrashButton />
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Task;
