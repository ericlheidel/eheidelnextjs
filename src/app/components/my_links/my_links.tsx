import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5"

export const MyLinks = () => {
  return (
    <div>
      <div className={`flex flex-row justify-evenly text-4xl`}>
        <div>
          <FaGithub size={50} color="aqua" />
        </div>
        <div>
          <FaLinkedin size={50} color="aqua" />
        </div>
        <Link href="/resume">
          <div className="my-auto mr-2 hover:color:red">
            <IoDocumentText
              size={50}
              color="aqua"
              className="hover:color-light-blue"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
