import React from "react";

function Card({ number, title, description }) {
  return (
    <div>
      <div className="max-w-sm p-6 pt-14 pb-8 bg-white border border-gray-200 rounded-xl shadow">
        <span className="p-4 rounded-xl bg-primary text-white text-2xl">{number}</span>
        <div className="mt-10">
          <h5 className="mb-2 font-bold tracking-tight">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
