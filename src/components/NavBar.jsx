"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const { data: session, status } = useSession();
  
  const navMenu = () => {
    return (
      <>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/services"}>Services</Link></li>
        <li><Link href={"/blogs"}>Blogs</Link></li>
        <li><Link href={"/my-bookings"}>My Bookings</Link></li>
      </>
    );
  };

  return (
    <div className="navbar bg-base-100 px-2 sm:px-4 md:px-6">
      {/* Mobile menu - visible on all screens but different behavior */}
      <div className="navbar-start gap-1 sm:gap-2">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm sm:btn-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-48 sm:w-52 p-2 shadow">
            {navMenu()}
            {/* Mobile auth */}
            <div className="border-t mt-2 pt-2">
              {status == "authenticated" ? (
                <>
                  <li><button onClick={() => signOut()}>Log Out</button></li>
                </>
              ) : (
                <>
                  <li><Link href={"/register"}>Register</Link></li>
                  <li><Link href={"/login"}>Login</Link></li>
                </>
              )}
            </div>
          </ul>
        </div>
        
        <Link href={"/"} className="flex-shrink-0">
          <Image src={"/assets/logo.svg"} width={80} height={65} className="sm:w-[107px] sm:h-[87px] w-[70px] h-[57px]" alt="brand logo" />
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-0 lg:gap-1">{navMenu()}</ul>
      </div>

      <div className="navbar-end gap-1 sm:gap-2">
        <ul className="hidden sm:flex menu menu-horizontal px-1 items-center">
          {status == "authenticated" ? (
            <div className="flex items-center gap-2">
              <li>
                <div className="avatar">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full">
                    <Image src={session?.user?.image} width={40} height={40} alt="user-logo" />
                  </div>
                </div>
              </li>
              <li><button className="btn btn-sm btn-outline btn-error" onClick={() => signOut()}>Log Out</button></li>
            </div>
          ) : (
            <div className="flex gap-1">
              <li><Link href={"/register"} className="btn btn-ghost btn-sm">Register</Link></li>
              <li><Link href={"/login"} className="btn btn-primary btn-sm">Login</Link></li>
            </div>
          )}
        </ul>
        
        <button className="btn btn-outline btn-sm sm:btn-md">Appointment</button>

        {/* Mobile auth icon */}
        <div className="sm:hidden">
          {status == "authenticated" ? (
            <div className="avatar">
              <div className="w-8 h-8 rounded-full">
                <Image src={session?.user?.image} width={32} height={32} alt="user" />
              </div>
            </div>
          ) : (
            <Link href={"/login"} className="btn btn-primary btn-xs">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
}