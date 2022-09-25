import ToBar1 from "../../components/topbar/ToBar1";
import Posts1 from "../../components/posts/Posts1"
import "./About.css"

export default function about() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    return (
        <>
            <div>
                <ToBar1 />
            </div>

            <div className="about">
                <Posts1 />
            </div>
        </>
    )
}