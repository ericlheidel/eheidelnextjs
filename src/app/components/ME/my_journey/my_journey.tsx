import Link from "next/link"
import { FaHome } from "react-icons/fa"

export default function MyJourney() {
  return (
    <div className="mt-6">
      <div className="md:block hidden">
        <h3 className="text-3xl font-bold text-left p-2">My Journey</h3>
      </div>
      <Link href="#home">
        <div className="md:hidden flex flex-row justify-between">
          <h3 className="text-3xl font-bold text-left p-2">My Journey</h3>
          <FaHome size={40} color="aqua" className="mt-auto" />
        </div>
      </Link>
      <div className="mt-2 mb-4 w-full border border-gray-500"></div>
      <h4 className="md:text-xl text-left ">
        My Journey In November of 2023 I decided to start a journey that had
        been on my mind for years. I began a six month, Full-Stack Bootcamp with
        Nashville Software School. I chose the intensive six month option that
        they offer because I wanted to immerse myself in this new experience of
        learning how to code and how to work in a development specific team
        setting. The front-end portion of the program consisted of ReactJS,
        HTML, CSS, and JavaScript for the first three months. The second three
        months of the program focused on back-end. Nashville Software School
        offers two different options for the back-end language. One being Python
        and Django, the other being C# and .NET. I chose the Python and Django
        route for my journey. The program was amazing and solidified what I
        already knew, I want to be a developer.
        <br></br>
        <br></br>I completed the program in May of 2024. After completing the
        program, I immediately began working and learning through their C# and
        .NET curriculum. Once that was completed, I revised my capstone project
        from the first half of the program. The original version of the capstone
        included a ReactJS front-end and a simple JSON server for the back-end
        and database. I then wrote a C#/.NET Api for my front-end capstone and
        rewrote the front-end to communicate with my new API. My next step was
        to learn more about deployment. I chose to host my project on a virtual
        machine. That was a great learning experience in and of itself. I am
        currently learning NextJS and rewriting my ReactJS capstone. I have been
        unable to pull myself away from the computer in my free time since
        completing the program. I just can’t get enough.
        <br></br>
        <br></br>My current and future plans are to complete the NextJS version
        of my project, and deploy it on my virtual machine. I also want to take
        my back-end capstone, which has a Python/Django API, and rewrite the
        ReactJS to NextJS and get it deployed.
      </h4>
    </div>
  )
}
