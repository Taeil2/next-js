import Link from 'next/link'

export default function Header(props) {
  return (
    <header>
      <Link href='/'><h1><a>Zenport</a></h1></Link>
      <nav>
        <Link href="/orders">
          <a>Orders</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/shipments">
          <a>Shipments</a>
        </Link>
      </nav>
    </header>
  )
}