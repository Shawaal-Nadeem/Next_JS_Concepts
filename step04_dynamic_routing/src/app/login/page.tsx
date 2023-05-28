import Link from "next/link"
export default function Login()
{
    return(
        <div className="login">
           <p> You are Logged in Successfully Thank you !!! <span><Link href={'/home'}>Click here</Link></span></p>
        </div>
    )
}