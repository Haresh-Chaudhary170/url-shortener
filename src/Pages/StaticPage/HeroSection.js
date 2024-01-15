import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className="h-[90vh]">
    <div className="flex pt-24">
      <div className="flex-1">
        <div className="px-14 pt-28 ">
          <h1 className="text-5xl font-bold leading-[140%]">
            Plants will make <br /> your life better
          </h1>
          <p className="mb-10 pr-20 text-lg">
            Create incredible plant design for your offices or apastaments.
            Add fresness to your new ideas.
          </p>
          <Link
            to="#about"
            className="w-36 flex items-center justify-center text-xl bg-primary text-white py-4 px-8 rounded-lg"
          >
            <span className="">Explore</span>
            <span className="material-symbols-outlined ml-2">south_east</span>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <div className="p-24">
          <img src="/images/home.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection