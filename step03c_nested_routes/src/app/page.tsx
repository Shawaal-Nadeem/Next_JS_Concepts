import Link from "next/link"
export default function Login() {
  return (
    <div className="main">
    <div>
      <h2>Are you already User ? <span><Link href={'/login'}>Log in</Link></span></h2>
      <h2>Are you a new User ? <span><Link href={'/sign-up'}>Sign Up</Link></span></h2>
    </div>
    </div>
  )
}
