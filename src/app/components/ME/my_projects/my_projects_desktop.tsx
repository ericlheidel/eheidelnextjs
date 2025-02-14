import { FaGithub } from "react-icons/fa"
import Link from "next/link"
import { IoDocumentText } from "react-icons/io5"

export const OmgShoesProjectDesktop = () => {
  return (
    <div>
      <div className="w-fit text-left">
        <div className="mb-2 flex flex-row">
          <div className="ml-2 text-xl font-semibold">OMG Shoes</div>
          <Link href="https://www.omgshoes.eheidel.com" target="_blank">
            <div className="my-auto ml-12 flex flex-row">
              <p className="mr-2">Site:</p>
              <IoDocumentText size={25} color="aqua" />
            </div>
          </Link>
          <Link
            href="https://github.com/ericlheidel/OmgShoesCSharp"
            target="_blank"
          >
            <div className="my-auto ml-4 flex flex-row">
              <p className="mr-2">GH:</p>
              <FaGithub size={25} color="aqua" />
            </div>
          </Link>
        </div>
        <div className="ml-4 text-xl font-semibold">
          Front-end: <div className="inline font-normal">ReactJS</div>
          <br></br>Back-end: <div className="inline font-normal">C#/.NET</div>
        </div>
        <p className="ml-4 italic text-pink-400">
          **this version is not mobile friendly
        </p>
        <br></br>
        <div className="ml-6 text-xl">
          Originally my front-end (JSON server) Capstone Project during my time
          in Nashville Software School. <br></br>
          <br></br>After completing the bootcamp and working through the C#/.NET
          curriculum, I wrote a new API for this project.
          <br></br>
          <br></br>
          OMG Shoes is a community where users can keep track of their sneaker
          collection and communicate with other users about their collections.
          <br></br>
          <br></br>I deployed this project on my own using a virtual machine.
          There is a full write-up in the{" "}
          <Link
            href="https://github.com/ericlheidel/OmgShoesCSharp/blob/main/README.md"
            target="_blank"
          >
            <p className="inline text-[#1BFFFF]">README.md.</p>
            <br></br>
          </Link>
          <br></br>Also, I am currently working on rewriting the Front-end of
          this project in NextJS. Link coming soon. For now, feel free to check
          out{" "}
          <Link
            href="https://github.com/ericlheidel/OmgShoesNextjs"
            target="_blank"
          >
            <p className="inline text-[#1BFFFF]">the repo.</p>
          </Link>
          <p className="text-pink-400 italic text-base">
            **this version is mobile friendly
          </p>
        </div>
      </div>
    </div>
  )
}

export const PaintkillerzProjectDesktop = () => {
  return (
    <div>
      <div className="w-fit text-left">
        <div className="mb-2 flex flex-row">
          <div className="ml-2 text-xl font-semibold">Paintkillerz</div>
          <Link href="https://www.paintkillerz.eheidel.com" target="_blank">
            <div className="my-auto ml-12 flex flex-row">
              <p className="mr-2">Site:</p>
              <IoDocumentText size={25} color="aqua" />
            </div>
          </Link>
          <Link
            href="https://github.com/ericlheidel/epaint-client"
            target="_blank"
          >
            <div className="my-auto ml-4 flex flex-row">
              <p className="mr-2">FE:</p>
              <FaGithub size={25} color="aqua" />
            </div>
          </Link>
          <Link
            href="https://github.com/ericlheidel/epaint-api"
            target="_blank"
          >
            <div className="my-auto ml-4 flex flex-row">
              <p className="mr-2">BE:</p>
              <FaGithub size={25} color="aqua" />
            </div>
          </Link>
        </div>
        <div className="ml-4 text-xl font-semibold">
          Front-end: <div className="inline font-normal">ReactJS</div>
          <br></br>Back-end:{" "}
          <div className="inline font-normal">Python/Django</div>
        </div>
        <br></br>
        <div className="ml-6 text-xl">
          This is my Nashville Software School Full-Stack Capstone Project.
          <br></br>
          <br></br>Paintkillerz is an eCommerce site where users can browse and
          purchase professional-grade spray paint.
          <br></br>
          <br></br>
          Users can create an account, login, create a cart, add paint(s) to
          their cart, add payments options to their account, and purchase what
          they have added to their cart. Users can also add images of their own
          art to their profile as well as browse other users&apos; art.
          <br></br>
          <br></br>My next moves with this project will be styling it
          mobile-friendly with TailwindCSS. I would also like to rewrite the
          ReactJS with Next.js after I complete the Next.js version of my OMG,
          Shoes... project.
        </div>
      </div>
    </div>
  )
}

export const HeidelClockProjectDesktop = () => {
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
          HeidelClock is just a simple JavaScript project to display a
          constantly running 12-hour clock. Although, at the time of writing the
          project, it seemed anything but simple. I wrote this during the summer
          before I started Nashville Software School. I chose to write this as a
          personal challenge, utilizing docs online to try and learn very basic
          JS when I, at the time, had no idea what I was doing.
        </div>
      </div>
    </div>
  )
}
