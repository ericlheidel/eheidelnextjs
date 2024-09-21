import Image from "next/image"

export default function Resume() {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center">
        <Image
          src={"/assets/Eric_Heidel_Resume_JPG_1.jpg"}
          alt="Page Number 1 of Eric Heidel's Resume"
          width={1000}
          height={1000}
        />
        <Image
          src={"/assets/Eric_Heidel_Resume_JPG_2.jpg"}
          alt="Page Number 2 of Eric Heidel's Resume"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}
