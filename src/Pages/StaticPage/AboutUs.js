import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="h-[90vh]">
      <div className="flex flex-row-reverse">
        <div className="flex-1">
          <div className="p-12 ">
            <h1 className="text-5xl font-bold leading-[140%]">
              Who we really are & <br />
              why choose us
            </h1>
            <p className="mb-10 pr-20 text-lg">
              We have over 4000+ unbiased reviews and our customers trust our
              plant process and delivery service every time
            </p>
            <ul className="">
              <li className="flex gap-2 items-center justify-start my-3">
                <span class="material-symbols-outlined text-primary text-regular">
                  check_box
                </span>{" "}
                <span>We always deliver on time.    </span>
              </li>
              <li className="flex gap-2 items-center justify-start my-3">
                <span class="material-symbols-outlined text-primary text-regular">
                  check_box
                </span>{" "}
                <span>We give you guides to protect and care for your plants.</span>
              </li>
              <li className="flex gap-2 items-center justify-start my-3">
                <span class="material-symbols-outlined text-primary text-regular">
                  check_box
                </span>{" "}
                <span>We always come over for a check-up after sale.</span>
              </li>
              <li className="flex gap-2 items-center justify-start my-3">
                <span class="material-symbols-outlined text-primary text-regular">
                  check_box
                </span>{" "}
                <span>100% money back guaranteed.</span>
              </li>
            </ul>
            <Link
              to="#about"
              className="w-36 flex items-center justify-center text-xl text-primary mt-16"
            >
              <span className="">Shop Now</span>
              <span className="material-symbols-outlined ml-2">south_east</span>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="p-24 ">
            <img src="/images/about.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
