import Link from "next/link"
import { FaHome } from "react-icons/fa"
import { MySkillsCodingMobile, MySkillsOtherMobile } from "./my_skills_mobile"
import {
  MySkillsCodingDesktop,
  MySkillsOtherDesktop,
} from "./my_skills_desktop"

export default function MySkillsCoding() {
  return (
    <div>
      <div className="mt-6">
        <div className="md:block hidden">
          <h3 className="text-3xl font-bold text-left p-2">My Skills</h3>
        </div>
        <Link href="#home">
          <div className="md:hidden flex flex-row justify-between">
            <h3 className="text-3xl font-bold text-left p-2">My Skills</h3>
            <FaHome size={40} color="aqua" className="mt-auto" />
          </div>
        </Link>

        {/* ⬇️ MY SKILLs --> //rr CODING ⬇️ */}
        <div className="mt-2 mb-2 w-full border border-gray-500"></div>
        <div className="w-fit">
          <h4 className="mt-4 mb-4 ml-4 text-2xl font-semibold text-left">
            Software Engineering
          </h4>
        </div>
        <div className="md:hidden">
          <MySkillsCodingMobile />
        </div>
        <div className="md:block hidden">
          <MySkillsCodingDesktop />
        </div>
        {/* ⬆️ MY SKILLs --> //rr CODING ⬆️ */}

        {/* ⬇️ MY SKILLs --> //mm OTHER ⬇️ */}
        <div className="w-full">
          <div className="mt-4 mb-2 w-full border border-gray-500"></div>
          <h4 className="mt-4 mb-2 ml-4 text-2xl font-semibold text-left">
            Video Engineering
          </h4>
        </div>
        <div className="md:hidden block">
          <MySkillsOtherMobile />
        </div>
        <div className="md:block hidden">
          <MySkillsOtherDesktop />
        </div>
        {/* ⬆️ MY SKILLs --> //mm OTHER ⬆️ */}
      </div>
    </div>
  )
}
