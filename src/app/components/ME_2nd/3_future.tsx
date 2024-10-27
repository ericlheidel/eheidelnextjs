import Link from "next/link"
import { FaHome } from "react-icons/fa"

export default function Future() {
  return (
    <div className="mt-6">
      <div className="md:block hidden">
        <h3 className="text-3xl font-bold text-left p-2">Future</h3>
      </div>
      <Link href="#home">
        <div className="md:hidden flex flex-row justify-between">
          <h3 className="text-3xl font-bold text-left p-2">Future</h3>
          <FaHome size={40} color="aqua" className="mt-auto" />
        </div>
      </Link>
      <div className="mt-2 mb-4 w-full border border-gray-500"></div>
      <h4 className="md:text-xl text-left">
        I am working hard on beginning my journey into the development industry.
        Between applications, networking, attending local meetups and reaching
        out to others, I am also practicing code, learning new languages and
        frameworks, broadening my knowledge and skills, and working on projects,
        as well as continuously working on this website. If you have any advice
        for me, please reach out as I would love to have a conversation.
      </h4>
    </div>
  )
}
