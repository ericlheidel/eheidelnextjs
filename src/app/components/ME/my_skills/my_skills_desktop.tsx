import Image from "next/image"
import {
  codingSkills,
  computerSkills,
  otherSkills,
} from "../../../../../utility"

export const MySkillsCodingDesktop = () => {
  return (
    <div className="">
      <div className="grid grid-cols-5 gap-2 gap-y-12 place-items-center">
        {codingSkills.map((skill) => {
          return (
            <Image
              key={skill.id}
              src={`${skill.src}`}
              alt={`${skill.name} icon`}
              width={110}
              height={110}
            />
          )
        })}
      </div>
    </div>
  )
}

export const MySkillsComputerDesktop = () => {
  return (
    <div className="">
      <div className="grid grid-cols-5 gap-2 gap-y-12 place-items-center">
        {computerSkills.map((skill) => {
          return (
            <Image
              key={skill.id}
              src={`${skill.src}`}
              alt={`${skill.name} icon`}
              width={110}
              height={110}
            />
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
            <Image
              key={skill.id}
              src={`${skill.src}`}
              alt={`${skill.name} icon`}
              width={110}
              height={110}
            />
          )
        })}
      </div>
    </div>
  )
}
