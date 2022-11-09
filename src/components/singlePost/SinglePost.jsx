import "./SinglePost.css"

export default function SinglePost() {
    return (
        
        <div>
            
            
            <div className="singlePost">
                <h1 className="singlePostTitle">
                    【Olympus35-S】第一台胶片相机
                </h1>
                <h2 className="singlePostTitleline">———</h2>

                <p className="singlePostDesc">Olympus35-S于1955年推出，是第一款提供快速倒带杆的日本相机。它首先配备了D.Zuiko 45mm f/3.5镜头。较晚的型号有E.Zuiko 48mm f/2.8或G. Zuiko 45mm f/1.9。而我手上的是G. Zuiko 42mm f/2.0。它配备了Seikosha-MX 的快门。
                </p>
                <div className="singlePostWrapper">
                    <img className="singlePostImg" src={require("../../assets/DSC_4807.jpg")} alt="" />
                </div>
                <p className="singlePostDesc">第一个奥林巴斯35-S于1955年推出。日本相机业从少年时期走向成熟，生产出与西德同等质量的相机，并超过了这一时期。
                </p>
                <div className="singlePostWrapper">
                    <img className="singlePostImg" src={require("../../assets/000030.jpg")} alt="" />
                </div>
                <p className="singlePostDesc"> A basic rangefinder, no fireworks, nice to hold and use. Controls are on the lens barrel, leaving the top bare. So-so lens, yet perfect for the casual user. On the bottom of the barrel is the external sync port, by the mode selector. Smallish finder, dim. Spool rewind crank pops out by pushing a tiny slide, assume to save user’s fingernails.
                </p>
                <div className="singlePostWrapper">
                    <img className="singlePostImg" src={require("../../assets/000039.jpg")} alt="" />
                </div>
                <p className="singlePostDesc">基础的测距，全金属质感，拿着很舒服，快门都是在镜头上控制。但由于时间过于久远，相机的黄斑已经黯淡，为了能保证对焦，我在取景器前安装了一片蓝色透片。黄斑一下清晰明了了起来。
                </p>
                <div className="singlePostWrapper">
                    <img className="singlePostImgTwo" src={require("../../assets/000006.jpg")} alt="" />
                    <img className="singlePostImgTwo" src={require("../../assets/70400029.jpg")} alt="" />
                </div>
                <div className="singlePostWrapper">
                    <img className="singlePostImg" src={require("../../assets/70400002.jpg")} alt="" />
                </div>
                <h2 className="singlePostTitlelineunder">——</h2>

            </div>
        </div>

    )
}
