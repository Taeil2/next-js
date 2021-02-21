import Link from 'next/link'

export default function Header(props) {
  return (
    <header>
      <Link href='/'><h1><a>Zenport</a></h1></Link>
    </header>
  )
}