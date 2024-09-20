import Image from "next/image"
import resume_1 from "../assets/Eric_Heidel_Resume_JPG_1.jpg"
import resume_2 from "../assets/Eric_Heidel_Resume_JPG_2.jpg"

export default function Resume() {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center">
        <Image
          src={resume_1}
          alt="Page Number 1 of Eric Heidel's Resume"
          width={1000}
          height={1000}
        />
        <Image
          src={resume_2}
          alt="Page Number 2 of Eric Heidel's Resume"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}
