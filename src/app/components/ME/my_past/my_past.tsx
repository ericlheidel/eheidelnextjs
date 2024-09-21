import Link from "next/link"
import { FaHome } from "react-icons/fa"

export default function MyPast() {
  return (
    <div className="mt-6">
      <div className="md:block hidden">
        <h3 className="text-3xl font-bold text-left p-2">My Past</h3>
      </div>
      <Link href="#home">
        <div className="md:hidden flex flex-row justify-between">
          <h3 className="text-3xl font-bold text-left p-2">My Past</h3>
          <FaHome size={40} color="aqua" className="mt-auto" />
        </div>
      </Link>
      <div className="mt-2 mb-4 w-full border border-gray-500"></div>
      <h4 className="md:text-xl text-left">
        Computers and team settings have been part of my professional life since
        the beginning in 2007 and part of my personal life since I was a child,
        from team sports to writing a simple .exe with Visual Basics 3 as a
        Freshman in high school. In my professional life, I am a seasoned
        touring video engineer with 15+ years of experience working in live
        video production. The post 10 years I have spent touring with Garth
        Brooks and before that, Miranda Lambert and Toby Keith.
        <br></br>
        <br></br>
        Team work, team leading, and reliability within your team is essential.
        Any event, or gig as they say in the industry, your crew is an essential
        part of success. We all rely on one another to complete our
        responsibilities to the fullest extent to deliver the best final product
        possible. If there is a weak link in the chain, the rest of the crew
        must step up to assist and teach the weaker link to become proficient in
        their responsibilities.
        <br></br>
        <br></br>
        Live video production can be a very high pressure situation, especially
        for a video engineer like myself. From a record breaking,{" "}
        <a
          href="https://www.wafb.com/2022/05/01/seismograph-records-earthquake-tiger-stadium-during-garth-brooks-concert/"
          target="_blank"
          className="text-blue-400"
        >
          sold out crowd of 103,000+ at Tiger Stadium at LSU that was seen on
          the school&apos;s seismograph
        </a>
        , to an{" "}
        <a
          href="https://tasteofcountry.com/garth-brooks-ryman-auditorium-sirus-xm/"
          target="_blank"
          className="text-blue-400"
        >
          intimate evening at The Ryman Auditorium in Nashville, TN
        </a>
        , my show must go on, as they say.
        <br></br>
        <br></br>
        Building a mobile video production studio, on-site integration and
        networking, in-show control of camera irises, and programming, deploying
        and operating video servers playing video content during specific
        moments during the concert are all part of the job. Recording and
        monitoring of all cameras and director&apos;s cut are also my
        responsibility. Much like the ever growing world of development.
        Maintaining and repairing equipment is an essential part of the job as
        well because if your equipment isn&apos;t working, neither are you.
        <br></br>
        <br></br>
        The video production industry deals with a constant, quickly evolving
        set of hardware and software that I am responsible for keeping up with,
        learning, programming, and deploying.
      </h4>
    </div>
  )
}
