import Image from "next/image"
import {
  codingSkills,
  computerSkills,
  otherSkills,
} from "../../../../../utility"

export const MySkillsCodingMobile = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {codingSkills.map((skill) => {
          return (
            <Image
              key={skill.id}
              src={`${skill.src}`}
              alt={`${skill.name} icon`}
              width={75}
              height={75}
              priority
              unoptimized
            />
          )
        })}
      </div>
    </div>
  )
}

export const MySkillsComputerMobile = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {computerSkills.map((skill) => {
          return (
            <Image
              key={skill.id}
              src={`${skill.src}`}
              alt={`${skill.name} icon`}
              width={75}
              height={75}
              priority
              unoptimized
            />
          )
        })}
      </div>
    </div>
  )
}

export const MySkillsOtherMobile = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {otherSkills.map((skill) => {
          return (
            <Image
              key={skill.id}
              src={`${skill.src}`}
              alt={`${skill.name} icon`}
              width={100}
              height={75}
              priority
              unoptimized
            />
          )
        })}
      </div>
    </div>
  )
}
