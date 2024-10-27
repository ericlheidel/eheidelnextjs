import Link from "next/link"
import { FaHome } from "react-icons/fa"

export default function Past() {
  return (
    <div className="mt-6">
      <div className="md:block hidden">
        <h3 className="text-3xl font-bold text-left p-2">Past</h3>
      </div>
      <Link href="#home">
        <div className="md:hidden flex flex-row justify-between">
          <h3 className="text-3xl font-bold text-left p-2">Past</h3>
          <FaHome size={40} color="aqua" className="mt-auto" />
        </div>
      </Link>
      <div className="mt-2 mb-4 w-full border border-gray-500"></div>
      <h4 className="md:text-xl text-left">
        Computers and team environments have always been a part of my life,
        personally and professionally. With over 15 years in live video
        production as a engineer, I have spent the last decade touring with
        Garth Brooks, working previously with Miranda Lambert, Tame Impala,
        Peter Frampton, Alice Cooper, and Brad Paisley among many, many others.
        Teamwork plays a vital role, everyone must rely on one another to
        deliver day in and day out.
        <br></br>
        <br></br>
        High stakes events like a{" "}
        <a
          href="https://www.wafb.com/2022/05/01/seismograph-records-earthquake-tiger-stadium-during-garth-brooks-concert/"
          target="_blank"
          className="text-[#1BFFFF]"
        >
          103,000+ record crowd at LSU Tiger Stadium
        </a>{" "}
        to intimate evenings{" "}
        <a
          href="https://tasteofcountry.com/garth-brooks-ryman-auditorium-sirus-xm/"
          target="_blank"
          className="text-[#1BFFFF]"
        >
          at the Ryman Auditorium
        </a>{" "}
        all require technical knowhow and teamwork. My responsibilities include
        everything from building and deploying mobile production studios and
        video servers to controlling camera operations and ensuring a seamless
        show for the audience. Like web and software development, I am required
        to constantly adapt to and learn new tech to be up to speed with the
        industry.
      </h4>
    </div>
  )
}
