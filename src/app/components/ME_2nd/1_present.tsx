import Link from "next/link"
import { FaHome } from "react-icons/fa"

export default function Present() {
  return (
    <div className="mt-6">
      <div className="md:block hidden">
        <h3 className="text-3xl font-bold text-left p-2">Present</h3>
      </div>
      <Link href="#home">
        <div className="md:hidden flex flex-row justify-between">
          <h3 className="text-3xl font-bold text-left p-2">Present</h3>
          <FaHome size={40} color="aqua" className="mt-auto" />
        </div>
      </Link>
      <div className="mt-2 mb-4 w-full border border-gray-500"></div>
      <h4 className="md:text-xl text-left">
        In November of 2023, I began a six-month Full-Stack Bootcamp with
        Nashville Software School. I chose this full-time program to deeply
        immerse myself into coding, team development environments and to build
        my knowledge and skills. The first half of the program focused on
        front-end (ReactJS, HTML, CSS, JavaScript) and the second half focused
        on back-end (Python and Django). After completing the program in May of
        2024, I continued learning NSS&apos;s C#/.NET back-end curriculum.
        <br></br>
        <br></br>
        Since then I have also:
        <ol className="ml-5 list-disc">
          <li className="mt-2">
            Written a C#/.NET API for my ReactJS/JSON server capstone and
            deployed the project on a virtual machine
          </li>
          <li className="mt-2">
            Begun learning NextJS and rewriting the ReactJS portion of that
            project
          </li>
          <li className="mt-2">Deployed my Full-Stack Python/Django project</li>
        </ol>
      </h4>
    </div>
  )
}
