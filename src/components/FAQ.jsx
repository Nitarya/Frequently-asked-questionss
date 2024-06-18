import React from "react";
import Accordian from "./Accordian";

const Faq = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Accordian
        title="Do you prefer Android or IOS?"
        answer="I like to use IOS products"
      />
      <Accordian
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use Tailwing"
      />
      <Accordian
        title="Do you prefer Firebase or Superbase?"
        answer="I like to use Firebase"
      />
    </div>
  );
};

export default Faq;
