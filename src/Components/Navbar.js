import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class=" py-6 fixed bg-white w-full px-64 shadow z-50">
        <div class=" sm:px-6 lg:px-8">
          <div class="flex justify-between">
            <div class="flex gap-1 flex-shrink-0 items-center">
              <img src="/images/leaf.svg" width={20} height={20} alt="" />
              <span className="text-primary font-black text-lg tracking-tighter	">
                PLANTEX
              </span>
            </div>

            <div class=" sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <Link to="/" class=" rounded-md px-3 py-2 text-lg text-primary">
                  Home
                </Link>
                <Link to="#" class=" rounded-md px-3 py-2 text-lg">
                  About
                </Link>
                <Link to="#" class=" rounded-md px-3 py-2 text-lg">
                  Products
                </Link>
                <Link to="#" class=" rounded-md px-3 py-2 text-lg">
                  FAQs
                </Link>
                <Link to="#" class=" rounded-md px-3 py-2 text-lg">
                  Contact Us
                </Link>
                <Link to="/url-shortener" class="px-3 py-2 text-lg bg-primary text-white hover:bg-white hover:text-primary p-2 border border-primary rounded-lg">
                  Url Shortner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
