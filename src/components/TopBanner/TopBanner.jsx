import { FaSearch } from "react-icons/fa"
import { IoMdNotificationsOutline } from "react-icons/io"
import { useState } from "react"
import "./TopBanner.css"

const TopBanner = ({ searchinput, userinput }) => {

  return (
    <div className="flex items-center justify-between mt-4 px-6">
      <div className="flex gap-36">
        <h1 className="font-bold text-2xl text-gray-500">Referal Dashboard</h1>
        <div className="search-cont flex items-center gap-1">
          <FaSearch className="h-6 w-6 text-blue-800 stroke-3"/>
          <input type="search" placeholder="search here..." value={userinput} onChange={searchinput}/>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="text-white bg-blue-600 px-8 py-2 rounded-lg text-xl font-bold">Search</button>
        <IoMdNotificationsOutline className="h-6 w-6"/>
        <div className="flex">
            <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg" alt="man" className="h-10 w-10"/>
            <div>
                <p>Name</p>
                <select>
                    <option>Admin</option>
                    <option>Student</option>
                </select>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopBanner
