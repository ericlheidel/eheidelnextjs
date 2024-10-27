import Link from "next/link"
import { FaHome } from "react-icons/fa"
import {
  OmgShoesProjectDesktopTwo,
  OmgShoesProjectMobileTwo,
} from "./4.1_omgshoes"
import {
  PaintkillerzProjectDesktopTwo,
  PaintkillerzProjectMobileTwo,
} from "./4.2_paintkillerz"
import {
  HeidelClockProjectDesktopTwo,
  HeidelClockProjectMobileTwo,
} from "./4.3_heidelclock"
import { PaintingsDesktopTwo, PaintingsMobileTwo } from "./4.4_paintings"

export default function Projects() {
  return (
    <div className="mt-6">
      <div className="md:block hidden">
        <h3 className="text-3xl font-bold text-left p-2">Projects</h3>
      </div>
      <Link href="#home">
        <div className="md:hidden flex flex-row justify-between">
          <h3 className="text-3xl font-bold text-left p-2">Projects</h3>
          <FaHome size={40} color="aqua" className="mt-auto" />
        </div>
      </Link>
      <div className="mt-2 mb-4 w-full border border-gray-500"></div>
      <div className="md:hidden block">
        <OmgShoesProjectMobileTwo />
        <div className="mt-2 mb-4 w-full border border-gray-500"></div>
        <PaintkillerzProjectMobileTwo />
        <div className="mt-2 mb-4 w-full border border-gray-500"></div>
        <HeidelClockProjectMobileTwo />
        <div className="mt-2 mb-4 w-full border border-gray-500"></div>
        <PaintingsMobileTwo />
        <div className="mt-2 mb-4 w-full border border-gray-500"></div>
      </div>
      <div className="md:block hidden">
        <OmgShoesProjectDesktopTwo />
        <div className="mt-2 mb-4 w-full border border-gray-500"></div>
        <PaintkillerzProjectDesktopTwo />
        <div className="mt-2 mb-4 w-full border border-gray-500"></div>
        <HeidelClockProjectDesktopTwo />
        <div className="mt-2 mb-4 w-full border border-gray-500"></div>
        <PaintingsDesktopTwo />
        <div className="mt-2 mb-4 w-full border border-gray-500"></div>
      </div>
    </div>
  )
}
