import Link from "next/link"
import { FaHome } from "react-icons/fa"
import {
  MySkillsCodingMobile,
  MySkillsComputerMobile,
  MySkillsOtherMobile,
} from "./my_skills_mobile"
import {
  MySkillsCodingDesktop,
  MySkillsComputerDesktop,
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
          <h4 className=" mt-4 mb-2 text-2xl text-left">Coding</h4>
        </div>
        <h4 className="md:text-xl text-left ">This is My Coding Skills</h4>
        <div className="md:hidden block">
          <MySkillsCodingMobile />
        </div>
        <div className="md:block hidden">
          <MySkillsCodingDesktop />
        </div>
        {/* ⬆️ MY SKILLs --> //rr CODING ⬆️ */}

        {/* ⬇️ MY SKILLs --> //gg COMPUTER ⬇️ */}
        <div className="w-full">
          <div className="mt-4 mb-2 w-full border border-gray-500"></div>
          <h4 className="mb-2 text-2xl text-left">Computer</h4>
        </div>
        <h4 className="md:text-xl text-left ">This is My Coding Skills</h4>
        <div className="md:hidden block">
          <MySkillsComputerMobile />
        </div>
        <div className="md:block hidden">
          <MySkillsComputerDesktop />
        </div>
        {/* ⬆️ MY SKILLs --> //gg COMPUTER ⬆️ */}

        {/* ⬇️ MY SKILLs --> //mm OTHER ⬇️ */}
        <div className="w-full">
          <div className="mt-4 mb-2 w-full border border-gray-500"></div>
          <h4 className="mb-2 text-2xl text-left">Other</h4>
        </div>
        <h4 className="md:text-xl text-left">This is My Other Skills</h4>
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
