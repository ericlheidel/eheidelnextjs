import Image from "next/image"
import { codingSkills, otherSkills } from "../../../../../utility"

export const MySkillsCodingDesktop = () => {
  return (
    <div className="">
      <div className="grid grid-cols-5 gap-2 gap-y-12 place-items-center">
        {codingSkills.map((skill) => {
          return (
            <div key={skill.id} className="relative inline-block group">
              <a href={`${skill.url}`} target="_blank">
                <Image
                  key={skill.id}
                  src={`${skill.src}`}
                  alt={`${skill.name} icon`}
                  width={110}
                  height={110}
                  priority
                  unoptimized
                  className="m-4"
                />
              </a>
              <span className="absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 bg-black text-white text-center text-lg font-semibold rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.title}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const MySkillsOtherDesktop = () => {
  return (
    <div className="">
      <div className="grid grid-cols-5 gap-2 gap-y-12 place-items-center">
        {otherSkills.map((skill) => {
          return (
            <div key={skill.id} className="relative inline-block group">
              <a href={`${skill.url}`} target="_blank">
                <Image
                  key={skill.id}
                  src={`${skill.src}`}
                  alt={`${skill.name} icon`}
                  width={110}
                  height={110}
                  priority
                  unoptimized
                  className="m-4"
                />
              </a>
              <span className="absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 bg-black text-white text-center text-lg font-semibold rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.title}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
