import SinglePost1 from "../../components/singlePost/SinglePost1"
import ToBar from "../../components/topbar/ToBar"
import Spotify from "../../components/spotify/Spotify";
import "./Single.css"

export default function single() {
  document.documentElement.scrollTop = document.body.scrollTop =0;
  return (
    <>
      <ToBar />
      <div>
        <img className="headerImg" src={require("../../assets/DSC1504.jpg")} alt="" />
      </div>
      <Spotify />
      <div className="single">
        <SinglePost1 />
      </div>
    </>

  )
}
