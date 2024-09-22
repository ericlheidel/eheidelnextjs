import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5"

export const HeidelClockDiv = () => {
  return (
    <div>
      <div className="w-fit text-left">
        <div className="mb-2 flex flex-row">
          <div className="ml-2 text-xl font-semibold">HeidelClock</div>
          <Link href="https://heidelclock.netlify.app" target="_blank">
            <div className="my-auto ml-12">
              <IoDocumentText size={25} color="aqua" />
            </div>
          </Link>
          <Link
            href="https://github.com/ericlheidel/HeidelClock"
            target="_blank"
          >
            <div className="my-auto ml-6">
              <FaGithub size={25} color="aqua" />
            </div>
          </Link>
        </div>
        <div className="ml-4 font-semibold">Simple JavaScript/HTML/CSS</div>
        <br></br>
        <div className="ml-6">
          HeidelClock is just a simple JavaScript project to display a
          constantly running 12-hour clock. Although, at the time of writing the
          project, it seemed anything but simple. I wrote this during the summer
          before I started Nashville Software School. I chose to write this as a
          personal challenge, utilizing docs online to try and learn very basic
          JS that I, at the time, had no what I was doing.
        </div>
      </div>
    </div>
  )
}
