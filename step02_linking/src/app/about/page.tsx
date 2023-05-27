import Link from "next/link"
export default function About()
{
return(
<div>
    <header>
      <nav>
      <h1>Shawaal Nadeem</h1>
        <ul>
         <Link href={'/'}><li>Home</li></Link>
         <Link href={'/about'}><li>About</li></Link>
         <Link href={'/contact'}><li>Contact</li></Link>
        </ul>
      </nav>
    </header>
    <div className="pageIntro">This is About Page.</div>
    <footer>
    footer
    </footer>
    </div>
    )
}