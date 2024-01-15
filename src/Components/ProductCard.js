import React from "react";

function ProductCard({image, title, price}) {
  return (
    <div>
      <div className="max-w-sm p-6 pt-14 pb-8 bg-white">
        <div className="relative flex items-center justify-center text-center mb-4 pb-5">
          <div className="bg-slate-100 rounded-full h-28 w-28"></div>
          <img
            src={`/uploads/${image}`} 
            alt=""
            className="absolute right-5 "
            width={150}
          />
        </div>
        <div className="mt-10">
          <h5 className="mb-2 font-bold tracking-tight">{title}</h5>
        </div>
        <div className="flex justify-between mb-3 font-normal text-gray-600">
          <span className="text-lg">${price}</span>
          <div className="bg-primary py-1 text-sm px-2 rounded-lg text-white">
            <span class="material-symbols-outlined">shopping_bag</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
