import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export const PaintkillerzDiv = () => {
  return (
    <div>
      <div className="w-fit text-left">
        <div className="mb-2 flex flex-row">
          <div className="ml-2 text-xl font-semibold">Paintkillerz</div>
          <Link
            href="https://github.com/ericlheidel/epaint-client"
            target="_blank"
          >
            <div className="my-auto ml-8 flex flex-row">
              <p className="mr-2">FE:</p>
              <FaGithub size={25} color="aqua" />
            </div>
          </Link>
          <Link
            href="https://github.com/ericlheidel/epaint-api"
            target="_blank"
          >
            <div className="my-auto ml-6 flex flex-row">
              <p className="mr-2">BE:</p>
              <FaGithub size={25} color="aqua" />
            </div>
          </Link>
        </div>
        <div className="ml-4 font-semibold">
          Front-end: ReactJS<br></br>Back-end: C#/.NET
        </div>
        <br></br>
        <div className="ml-6">
          This is my Nashville Software School Full-Stack Capstone Project.
          Software School.
          <br></br>
          <br></br>Paintkillerz is an eCommerce site where users can browse and
          purchase professional-grade spray paint.
          <br></br>
          <br></br>
          Users can create an account, login, create a cart, add paint(s) to
          their cart, add payments options to their account, and purchase what
          they have added to their cart. Users can also add image of their own
          art to their profile as well as browse other users&apos; art.
          <br></br>
          <br></br>I have not yet deployed Paintkillerz, but it is on my long
          todo list. My focus shifted to C#/.NET, DigitalOcean Droplets, and
          learning how to deploy projects on my own, and now, NextJS.
        </div>
      </div>
    </div>
  )
}
