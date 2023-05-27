import Link from "next/link"
export default function Sign()
{
    return(
        <div className="sign">
           <p> You are Signed up Successfully Thank you !!! <span><Link href={'/home'}>Click here</Link></span></p>
        </div>
    )
}