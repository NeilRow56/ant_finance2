import Image from 'next/image'
import Link from 'next/link'

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Image src="/logo2.svg" alt="logo" height={36} width={36} />

        <p className="ml-2.5 text-2xl font-semibold text-white">Ant Finance</p>
      </div>
    </Link>
  )
}
