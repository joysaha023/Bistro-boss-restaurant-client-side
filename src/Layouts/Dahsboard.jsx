import React from "react";
import { FaBook, FaHome, FaList, FaUser, FaUtensils } from "react-icons/fa";
import {
  FaBars,
  FaCalendar,
  FaCalendarCheck,
  FaCartPlus,
  FaEnvelope,
  FaPhone,
  FaUsers,
} from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";
import useAdmin from "../Hooks/useAdmin";

const Dahsboard = () => {
  const [cart] = useCarts();

  //Todo : get admin value forom the database
  const [isAdmin] = useAdmin();
  console.log(isAdmin)
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/managebookings">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers /> All Users
                </NavLink>
              </li>
              <div className="divider"></div>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaCartPlus /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdRateReview /> Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mybookings">
                  <FaCalendarCheck /> My Bookings
                </NavLink>
              </li>
              <div className="divider"></div>
            </>
          )}

          {/* Shared Navlink */}
          {/* <li>
            <NavLink to="/dashboard/userhome">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartPlus /> My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <MdRateReview /> Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mybookings">
              <FaCalendarCheck /> My Bookings
            </NavLink>
          </li>
          <div className="divider"></div> */}
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaBars /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dahsboard;
