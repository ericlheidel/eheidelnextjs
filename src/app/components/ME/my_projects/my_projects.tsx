import Link from "next/link"
import { FaHome } from "react-icons/fa"
import { MyProjectsMobile } from "./my_projects_mobile"
import { MyProjectsDesktop } from "./my_projects_desktop"

export default function MyProjects() {
  return (
    <div>
      <div className="mt-6">
        <div className="md:block hidden">
          <h3 className="text-3xl font-bold text-left p-2">My Projects</h3>
        </div>
        <Link href="#home">
          <div className="md:hidden flex flex-row justify-between">
            <h3 className="text-3xl font-bold text-left p-2">My Projects</h3>
            <FaHome size={40} color="aqua" className="mt-auto" />
          </div>
        </Link>
        <div className="mt-2 mb-4 w-full border border-gray-500"></div>
        <div className="md:hidden block">
          <MyProjectsMobile />
        </div>
        <div className="md:block hidden">
          <MyProjectsDesktop />
        </div>
      </div>
    </div>
  )
}
