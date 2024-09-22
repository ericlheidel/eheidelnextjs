import { HeidelClockDiv } from "./specific_projects/heidelclock"
import { OmgShoesDiv } from "./specific_projects/omg_shoes"
import { PaintkillerzDiv } from "./specific_projects/paintkillerz"

export const MyProjectsMobile = () => {
  return (
    <>
      <div>
        <OmgShoesDiv />
        <div className="mt-2 mb-2 w-full border border-gray-500"></div>
      </div>
      <div>
        <PaintkillerzDiv />
        <div className="mt-2 mb-2 w-full border border-gray-500"></div>
      </div>
      <div>
        <HeidelClockDiv />
      </div>
    </>
    // <div>
    //   <div className="w-fit text-left">
    //     <div className="mb-2 flex flex-row">
    //       <div className="ml-2 text-xl font-semibold">OMG, Shoes...</div>
    //       <Link href="https://www.omgshoes.eheidel.com" target="_blank">
    //         <div className="my-auto ml-12">
    //           <IoDocumentText size={25} color="aqua" />
    //         </div>
    //       </Link>
    //       <div className="my-auto ml-6">
    //         <FaGithub size={25} color="aqua" />
    //       </div>
    //     </div>
    //     {/* <div className="mb-2 w-full border border-gray-500"></div> */}
    //     <div className="ml-4 font-semibold">
    //       Front-end: ReactJS<br></br>Back-end: C#/.NET
    //     </div>
    //     <br></br>
    //     <div className="ml-6">
    //       Originally my front-end (JSON server) Capstone Project during my time
    //       in Nashville Software School. <br></br>
    //       <br></br>After completing the bootcamp and working through the C#/.NET
    //       curriculum, I wrote a new API for this project.
    //       <br></br>
    //       <br></br>
    //       OMG, Shoes... is a community where users can keep track of their
    //       sneaker collection and communicate with other users of their
    //       collections.<br></br>
    //       <br></br>I deployed this project on my own using a virtual machine.
    //       Full write-up in the{" "}
    //       <Link href="https://github.com/ericlheidel/OmgShoesCSharp/blob/main/README.md">
    //         <p className="text-blue-400">README.md.</p>
    //         <br></br>Also, I am currently working on rewriting the Front-end of
    //         this project in NextJS. Link coming soon.
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  )
}
