import Link from "next/link"
import { FaHome } from "react-icons/fa"

export const AboutMe = () => {
  return (
    <div>
      <div className="mt-6">
        <div className="md:block hidden">
          <h3 className="text-3xl font-bold text-left p-2">About Me</h3>
        </div>
        <Link href="#home">
          <div className="md:hidden flex flex-row justify-between">
            <h3 className="text-3xl font-bold text-left p-2">About Me</h3>
            <FaHome size={40} color="aqua" className="mt-auto" />
          </div>
        </Link>
        <div className="mt-2 mb-4 w-full border border-gray-500"></div>
        <h4 className="md:text-xl text-left ">
          I am from the town of Signal Mountain located in Chattanooga, TN. I
          currently live in Nashville, TN and have been here since 2009.
          Previous to moving to Nashville, I attended and graduated from The
          University of Tennessee at Knoxville with a Bachelors in Arts for
          Speech Communications. After college I moved to Washington, DC for
          about two years where I began a crash course, trial-by-fire, video
          production learning experience. I quickly grew from sorting cables to
          being an engineer. Once I moved to Nashville, TN, I began my touring
          experience.
          <br></br>
          <br></br>I am very engineering-minded, but I also have a creative
          side. I have a new found excitement for coding and development.
          Completing tasks and seeing the results in realtime while working with
          computers is incredibly fulfilling to me.
          <br></br>
          <br></br>I have a large collection of LEGO and enjoy building a set
          here and there when I have the time. It is a fun hobby that satisfies
          my engineering side. I find it enjoyable to follow a set of
          instructions to create a final product.
          <br></br>
          <br></br>
          Although I haven’t done it in a while, I was very big into painting. I
          would create geometric designs on thin wood using spray paint and
          painters tape. Again, a fun hobby that achieves that step by step
          process that I enjoy.{" "}
          <a href="/paintings" className="text-blue-400">
            Feel free to check out some of my old paintings
          </a>
          .
        </h4>
      </div>
    </div>
  )
}