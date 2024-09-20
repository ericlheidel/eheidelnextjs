import Image from "next/image"
import { color1 } from "../../utility"
import my_image from "./assets/my_image.jpg"
import { MyLinks } from "./components/my_links/my_links"
import { AboutMe } from "./components/ME/about_me/about_me"
import MyJourney from "./components/ME/my_journey/my_journey"
import MyPast from "./components/ME/my_past/my_past"
import MySkills from "./components/ME/my_skills/my_skills"
import MyProjects from "./components/ME/my_projects/my_projects"
import { Nav } from "./components/nav/nav"

export default function Home() {
  return (
    <>
      <Nav />
      <div
        id="home"
        className={`p-6 w-full min-h-screen flex flex-col bg-${color1} items-center`}
      >
        <div className="mx-auto text-center">
          <div>
            <Image
              src={my_image}
              alt="Vite logo"
              width={250}
              height={250}
              className="rounded-3xl mb-4 mx-auto"
            />
            <h1 className="text-4xl font-semibold mb-4">Eric Heidel</h1>
            <h2 className="text-2xl mb-4">
              Full-Stack<br></br>Web and Software Developer
            </h2>
            <MyLinks />
          </div>
        </div>
        <div
          id="my_journey"
          className="md:w-1/2 w-[95%] h-fit text-center leading-relaxed"
        >
          <MyJourney />
        </div>
        {/* <div className="mt-6 w-full border border-gray-500 test"></div> */}
        <div id="my_past" className="md:w-1/2 w-[95%] mt-6 h-fit text-center">
          <MyPast />
        </div>
        {/* <div className="mt-6 w-full border border-gray-500 test"></div> */}
        <div id="about_me" className="md:w-1/2 w-[95%] mt-6 h-fit text-center">
          <AboutMe />
        </div>
        {/* <div className="mt-6  w-full border border-gray-500"></div> */}
        <div
          id="my_skills"
          className="md:w-1/2 w-[95%] mt-6 h-fit text-center test"
        >
          <MySkills />
        </div>
        {/* <div className="mt-6  w-full border border-gray-500"></div> */}
        <div
          id="my_projects"
          className="md:w-1/2 w-[95%] mt-6 h-fit text-center test"
        >
          <MyProjects />
        </div>
        {/* <div className="mt-6  w-full border border-gray-500"></div> */}
      </div>
    </>
  )
}
