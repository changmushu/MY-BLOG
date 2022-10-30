import SinglePost6 from "../../components/singlePost/SinglePost6"
import ToBar from "../../components/topbar/ToBar"
import "./Single.css"


export default function single() {
  document.documentElement.scrollTop = document.body.scrollTop =0;
  return (
    <>
      <ToBar />
      <div>
        <img className="headerImg" src={require("../../assets/DSC157.jpg")} alt="" />
      </div>
      <div className="single">
        <SinglePost6 />
      </div>
    </>

  )
}

