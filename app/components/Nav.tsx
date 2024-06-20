import Link from 'next/link'
import Menu from './Menu'

export default function Nav() {
  return (
    <section className="fixed top-0 z-10 w-full shadow-md">
      <div className="items-center justify-between bg-black opacity-80 px-7 py-5 md:flex md:px-10">
        <div className="mr-1 pt-2 text-3xl text-gray-100">
          <div className="flex cursor-pointer items-center text-2xl font-bold">
            <Link href="/">
              <span>Logo</span>
            </Link>
          </div>
        </div>
        <Menu />
     </div>
    </section>
  )
}
