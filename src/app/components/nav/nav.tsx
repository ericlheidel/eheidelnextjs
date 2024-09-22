"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"

export const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      {/* //+ NON-MOBILE */}
      <div className="hidden md:block">
        <div className="flex flex-row justify-between p-4">
          <div className="ml-12 text-2xl font-semibold">eheidel.com</div>
          <div className="flex flex-row p-6 text-2xl font-semibold">
            <Link href="/resume">
              <div>My Resume</div>
            </Link>
            <Link href="#my_journey">
              <div className="ml-8">My Journey</div>
            </Link>
            <Link href="#my_past">
              <div className="ml-8">My Past</div>
            </Link>
            <Link href="#about_me">
              <div className="ml-8">About Me</div>
            </Link>
            <Link href="#my_skills">
              <div className="ml-8">My Skills</div>
            </Link>
            <Link href="#my_projects">
              <div className="ml-8 mr-12">My Projects</div>
            </Link>
          </div>
        </div>
      </div>

      {/* //+ MOBILE */}
      <div className="md:hidden block absolute right-5 top-3">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-3xl focus:outline-none"
          >
            <RxHamburgerMenu size={40} color="aqua" />
          </button>
          {showDropdown && (
            <div className="absolute right-0 w-44 text-xl bg-white rounded-lg shadow-lg">
              <ul className="py-2">
                <li>
                  <Link
                    href="/resume"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    My Resume
                  </Link>
                </li>
                <li>
                  <Link
                    href="#my_journey"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    My Journey
                  </Link>
                </li>
                <li>
                  <Link
                    href="#my_past"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    My Past
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about_me"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    href="#my_skills"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    My Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="#my_projects"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    My Projects
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
