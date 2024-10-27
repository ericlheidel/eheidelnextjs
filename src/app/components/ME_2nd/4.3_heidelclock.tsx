import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5"

export const HeidelClockProjectMobileTwo = () => {
  return (
    <div>
      <div className="w-fit text-left">
        <div className="mb-2 flex flex-row">
          <div className="ml-2 text-xl font-semibold">HeidelClock</div>
          <Link href="https://clock.eheidel.com" target="_blank">
            <div className="my-auto ml-6 flex flex-row">
              <p className="mr-2">Site:</p>
              <IoDocumentText size={25} color="aqua" />
            </div>
          </Link>
          <Link
            href="https://github.com/ericlheidel/HeidelClock"
            target="_blank"
          >
            <div className="my-auto ml-6 flex flex-row">
              <p className="mr-2">GH:</p>
              <FaGithub size={25} color="aqua" />
            </div>
          </Link>
        </div>
        <div className="ml-4 font-semibold">Simple JavaScript/HTML/CSS</div>
        <br></br>
        <div className="ml-6">
          HeidelClock is a simple JavaScript project that displays a
          continuously running 12-hour clock. I created it as a personal
          challenge the summer before starting Nashville Software School, using
          online documentation to learn basic JavaScript without any prior
          experience.
        </div>
      </div>
    </div>
  )
}

export const HeidelClockProjectDesktopTwo = () => {
  return (
    <div>
      <div className="w-fit text-left">
        <div className="mb-2 flex flex-row">
          <div className="ml-2 text-xl font-semibold">HeidelClock</div>
          <Link href="https://clock.eheidel.com" target="_blank">
            <div className="my-auto ml-12 flex flex-row">
              <p className="mr-2">Site:</p>
              <IoDocumentText size={25} color="aqua" />
            </div>
          </Link>
          <Link
            href="https://github.com/ericlheidel/HeidelClock"
            target="_blank"
          >
            <div className="my-auto ml-4 flex flex-row">
              <p className="mr-2">GH:</p>
              <FaGithub size={25} color="aqua" />
            </div>
          </Link>
        </div>
        <div className="ml-4 text-xl font-semibold">
          Simple JavaScript/HTML/CSS
        </div>
        <br></br>
        <div className="ml-6 text-xl">
          HeidelClock is a simple JavaScript project that displays a
          continuously running 12-hour clock. I created it as a personal
          challenge the summer before starting Nashville Software School, using
          online documentation to learn basic JavaScript without any prior
          experience.
        </div>
      </div>
    </div>
  )
}
