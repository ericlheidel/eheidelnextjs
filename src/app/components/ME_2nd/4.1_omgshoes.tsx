import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5"

export const OmgShoesProjectMobileTwo = () => {
  return (
    <div className="w-fit text-left">
      <div className="mb-2 flex flex-row">
        <div className="ml-2 text-xl font-semibold underline">
          OMG, Shoes...
        </div>
        <Link href="https://www.omgshoes.eheidel.com" target="_blank">
          <div className="my-auto ml-6 flex flex-row">
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
      <div className="ml-4 font-semibold">
        Front-end: <span className="font-normal">ReactJS</span>
        <br />
        Back-end: <span className="font-normal">C#/.NET</span>
      </div>
      <p className="ml-4 italic text-pink-400">
        **currently not mobile-friendly
      </p>
      <br />
      <div className="ml-6">
        My front-end capstone from Nashville Software School, &apos;OMG,
        Shoes...&apos; lets users manage their sneaker collection and connect
        with others. Originally built with a JSON server back-end, I later
        upgraded it with a C#/.NET API and deployed it on a virtual machine.
        Detailed write-up in the{" "}
        <Link
          href="https://github.com/ericlheidel/OmgShoesCSharp/blob/main/README.md"
          target="_blank"
        >
          <span className="text-[#1BFFFF]">README.md</span>
        </Link>
        .
        <br />
        <br />
        I&apos;m now rewriting the front-end in NextJS (repo{" "}
        <Link
          href="https://github.com/ericlheidel/OmgShoesNextjs"
          target="_blank"
        >
          <span className="text-[#1BFFFF]">here</span>
        </Link>
        ).{" "}
      </div>
    </div>
  )
}

export const OmgShoesProjectDesktopTwo = () => {
  return (
    <div>
      <div className="w-fit text-left">
        <div className="mb-2 flex flex-row">
          <div className="ml-2 text-xl font-semibold underline">
            OMG, Shoes...
          </div>
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
          **currently not mobile friendly
        </p>
        <br></br>
        <div className="ml-6 text-xl">
          My front-end capstone from Nashville Software School, &apos;OMG,
          Shoes...&apos; lets users manage their sneaker collection and connect
          with others. Originally built with a JSON server back-end, I later
          upgraded it with a C#/.NET API and deployed it on a virtual machine.
          Detailed write-up in the{" "}
          <Link
            href="https://github.com/ericlheidel/OmgShoesCSharp/blob/main/README.md"
            target="_blank"
          >
            <p className="inline text-[#1BFFFF]">README.md.</p>
          </Link>
          <br />
          <br />
          I&apos;m now rewriting the front-end in NextJS (repo{" "}
          <Link
            href="https://github.com/ericlheidel/OmgShoesNextjs"
            target="_blank"
          >
            <span className="text-[#1BFFFF]">here</span>
          </Link>
          <Link
            href="https://github.com/ericlheidel/OmgShoesNextjs"
            target="_blank"
          ></Link>
          ).{" "}
        </div>
      </div>
    </div>
  )
}
