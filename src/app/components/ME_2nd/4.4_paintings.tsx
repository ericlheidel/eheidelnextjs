import Link from "next/link"
import { IoDocumentText } from "react-icons/io5"

export const PaintingsMobileTwo = () => {
  return (
    <div>
      <div className="w-fit text-left">
        <div className="mb-2 flex flex-row">
          <div className="ml-2 text-xl font-semibold underline">
            My Paintings
          </div>
          <Link href="https://paintings.eheidel.com">
            <div className="my-auto ml-6 flex flex-row">
              <p className="mr-2">Site:</p>
              <IoDocumentText size={25} color="aqua" />
            </div>
          </Link>
        </div>
        <div className="ml-6">
          While not code related, my old paintings showcase my creativity and
          design work. In my free time from touring, I would create these
          painting using painter&apos;s tape, measurement tools, X-acto knives
          and professional grade spray paint. I always loved painting outdoors
          when the weather was nice.
        </div>
      </div>
    </div>
  )
}

export const PaintingsDesktopTwo = () => {
  return (
    <div>
      <div className="w-fit text-left">
        <div className="mb-2 flex flex-row">
          <div className="ml-2 text-xl font-semibold underline">
            My Paintings
          </div>
          <Link href="https://paintings.eheidel.com">
            <div className="my-auto ml-12 flex flex-row">
              <p className="mr-2">Site:</p>
              <IoDocumentText size={25} color="aqua" />
            </div>
          </Link>
        </div>
        <div className="ml-6 text-xl">
          While not code related, my old paintings showcase my creativity and
          design work. In my free time from touring, I would create these
          painting using painter&apos;s tape, measurement tools, X-acto knives
          and professional grade spray paint. I always loved painting outdoors
          when the weather was nice.
        </div>
      </div>
    </div>
  )
}
