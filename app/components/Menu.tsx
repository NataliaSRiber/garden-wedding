'use client'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { routes } from '../api/routes'

export default function Menu() {
  const currentRoute = usePathname()

  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    // scroll lock quando o menu mobile é aberto.
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [open])

  function changeCurrentPageTextColor(route: string) {
    if (route === currentRoute) {
      return 'text-white font-black'
    }
    return 'text-white'
  }

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-7 cursor-pointer text-3xl md:hidden"
      >
        {open && <AiOutlineClose color="white" />}
        {!open && <GiHamburgerMenu color="white" />}
      </div>
      <ul
        className={`fixed left-0 z-[-1] w-ful pb-12 pl-9 transition-all duration-[1000ms] ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 text-lg ${
          open ? 'top-20 h-full bg-black opacity-95 w-[90%]' : 'top-[-100%] h-full w-[90%]'
        }`}
      >
        {routes.map(({ name, route }, index) => (
          <li key={index} className="lg:text-2xl md:text:xl my-7 font-medium md:my-0 md:ml-8">
            <Link
              href={route}
              onClick={() => setOpen(!open)}
              className={`${changeCurrentPageTextColor(
                route,
              )} hover:text-emerald-600`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}