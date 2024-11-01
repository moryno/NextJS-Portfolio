import { CONTACT } from "@/utils/data/personal-data"
import Link from "next/link"

const Contact = () => {
  return (
    <article>
        <div className="border-t border-stone-900 pb-20">
            <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">
                    {CONTACT.address}
                </p>
                <p className="my-4">
                    {CONTACT.phoneNo}
                </p>
                <Link href={"#"} className="border-b">
                    {CONTACT.email}
                </Link>
            </div>
        </div>
    </article>
  )
}

export default Contact