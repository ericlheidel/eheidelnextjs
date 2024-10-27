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
    <div>
      {/* //+ NON-MOBILE */}
      <div className="hidden md:block">
        <div className="flex flex-row justify-between p-4">
          <div className="p-6 ml-12 text-2xl font-semibold">eheidel.com</div>
          <div className="flex flex-row p-6 text-2xl font-semibold">
            <Link href="https://resume.eheidel.com">
              <div>Resume</div>
            </Link>
            <Link href="#present">
              <div className="ml-8">Present</div>
            </Link>
            <Link href="#past">
              <div className="ml-8">Past</div>
            </Link>
            <Link href="#future">
              <div className="ml-8">Future</div>
            </Link>
            <Link href="#projects">
              <div className="ml-8">Projects</div>
            </Link>
            <Link href="#skills">
              <div className="ml-8 mr-12">Skills</div>
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
                    href="https://resume.eheidel.com"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    href="#present"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    Present
                  </Link>
                </li>
                <li>
                  <Link
                    href="#past"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    Past
                  </Link>
                </li>
                <li>
                  <Link
                    href="#future"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    Future
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#skills"
                    className="block px-2 py-4 text-xl text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                  >
                    Skills
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
