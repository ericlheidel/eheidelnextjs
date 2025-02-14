import React from "react"
import Image from "next/image"
import { color1 } from "../../utility"
import MyLinks from "./components/my_links/my_links"
// import MyJourney from "./components/ME/my_journey/my_journey"
// import MyPast from "./components/ME/my_past/my_past"
// import AboutMe from "./components/ME/about_me/about_me"
// import MyProjects from "./components/ME/my_projects/my_projects"
import MySkills from "./components/ME/my_skills/my_skills"
import { Nav } from "./components/nav/nav"
import Present from "./components/ME_2nd/1_present"
import Past from "./components/ME_2nd/2_past"
import Future from "./components/ME_2nd/3_future"
import Projects from "./components/ME_2nd/4_projects"

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
              src="/assets/my_image.jpg"
              alt="Image of Eric Heidel"
              width={250}
              height={250}
              priority
              unoptimized
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
          id="present"
          className="md:w-1/2 w-[95%] h-fit text-center leading-relaxed"
        >
          <Present />
        </div>
        <div id="past" className="md:w-1/2 w-[95%] mt-6 h-fit text-center">
          <Past />
        </div>
        <div id="future" className="md:w-1/2 w-[95%] mt-6 h-fit text-center">
          <Future />
        </div>
        <div id="projects" className="md:w-1/2 w-[95%] mt-6 h-fit text-center">
          <Projects />
        </div>
        <div id="skills" className="md:w-1/2 w-[95%] mt-6 h-fit text-center">
          <MySkills />
          <div className="mt-6 mb-4 w-full border border-gray-500"></div>
        </div>
        <footer className="mt-2">
          <p className="text-center">Created by Eric Heidel, 2024</p>
          <p className="mt-2 text-center">Created with NextJS</p>
          <p className="mt-2 text-center">Deployed with Nginx</p>
          <p className="mt-2 text-center">Styled with TailwindCSS</p>
        </footer>
      </div>
    </>
  )
}
