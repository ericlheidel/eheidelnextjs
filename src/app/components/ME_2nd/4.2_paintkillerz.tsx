import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5"

export const PaintkillerzProjectMobileTwo = () => {
  return (
    <div className="w-fit text-left">
      <div className="mb-2 flex flex-row">
        <div className="ml-2 text-xl font-semibold">Paintkillerz</div>
        <Link href="https://www.paintkillerz.eheidel.com" target="_blank">
          <div className="my-auto ml-4 flex flex-row">
            <p className="mr-2">Site:</p>
            <IoDocumentText size={25} color="aqua" />
          </div>
        </Link>
        <Link
          href="https://github.com/ericlheidel/epaint-client"
          target="_blank"
        >
          <div className="my-auto ml-2 flex flex-row">
            <p className="mr-2">FE:</p>
            <FaGithub size={25} color="aqua" />
          </div>
        </Link>
        <Link href="https://github.com/ericlheidel/epaint-api" target="_blank">
          <div className="my-auto ml-2 flex flex-row">
            <p className="mr-2">BE:</p>
            <FaGithub size={25} color="aqua" />
          </div>
        </Link>
      </div>
      <div className="ml-4 font-semibold">
        Front-end: <span className="font-normal">ReactJS</span>
        <br />
        Back-end: <span className="font-normal">Python/Django</span>
      </div>
      <br />
      <div className="ml-6">
        My Full-Stack Capstone from Nashville Software School, Paintkillerz is
        an eCommerce platform for browsing and buying professional-grade spray
        paint.
        <br />
        <br />
        Users can create accounts, manage carts, save payment methods, and share
        art within their profiles, as well as view others&apos; artwork.
        <br />
        <br />
        Next steps: making the site mobile-friendly with TailwindCSS and
        rewriting the front-end in Next.js.
      </div>
    </div>
  )
}

export const PaintkillerzProjectDesktopTwo = () => {
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
          My Full-Stack Capstone from Nashville Software School, Paintkillerz is
          an eCommerce platform for browsing and buying professional-grade spray
          paint.
          <br />
          <br />
          Users can create accounts, manage carts, save payment methods, and
          share art within their profiles, as well as view others&apos; artwork.
          <br />
          <br />
          Next steps: making the site mobile-friendly with TailwindCSS and
          rewriting the front-end in Next.js.
        </div>
      </div>
    </div>
  )
}
