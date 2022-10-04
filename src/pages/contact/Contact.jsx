import ToBar1 from "../../components/topbar/ToBar1";
import Posts2 from "../../components/posts/Posts2"
import "./Contact.css"

export default function Contact() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    return (
        <>
            <div>
                <ToBar1 />
            </div>

            <div className="contact">
                <Posts2 />
            </div>
        </>
    )
}