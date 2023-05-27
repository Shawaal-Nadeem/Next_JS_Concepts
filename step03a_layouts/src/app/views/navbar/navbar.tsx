import Link from "next/link"
import Style from './navbar.module.css';
export default function Navbar()
{
    return (
        <header className={Style.header}>
        <nav>
        <h1>Shawaal Nadeem</h1>
          <ul>
           <Link href={'/'}><li>Home</li></Link>
           <Link href={'/about'}><li>About</li></Link>
           <Link href={'/contact'}><li>Contact</li></Link>
          </ul>
        </nav>
      </header>
    )
}