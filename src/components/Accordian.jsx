import React, { useState } from "react";

const Accordian = () => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  return (
    <div className="py-2">
      <button className="flex justify-between w-full">
        <span>This is the title</span>
        <span>+</span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordianOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 "
        } `}
      >
        <div>This is the answer</div>
      </div>
    </div>
  );
};

export default Accordian;
