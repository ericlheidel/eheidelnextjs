// "use client"

// import clsx from "clsx"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { IoMdHome } from "react-icons/io"
// import { IoDocumentText } from "react-icons/io5"

// const navLinks = [
//   { name: "Home", href: "/", icon: IoMdHome },
//   { name: "Resume", href: "/resume", icon: IoDocumentText },
// ]

export const Nav = () => {
  // const pathname = usePathname()

  return (
    <div>
      <div>Do I need a NavBar?</div>
    </div>
    //   <div className="flex flex-row">
    //     {navLinks.map((link) => {
    //       const LinkIcon = link.icon
    //       return (
    //         <Link
    //           key={link.name}
    //           href={link.href}
    //           className={clsx(
    //             "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-800 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
    //             {
    //               "bg-cyan-500 text-blue-600": pathname === link.href,
    //             }
    //           )}
    //         >
    //           <LinkIcon className="w-6" />
    //           <p className="hidden md:block">{link.name}</p>
    //         </Link>
    //       )
    //     })}
    //   </div>
  )
}
