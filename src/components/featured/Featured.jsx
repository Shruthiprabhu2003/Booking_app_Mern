import "./featured.css"

export const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/976975.jpg?k=788064f0966156befaeb265f0c695d1ba1ae878bd7dad026bb7595d540b8d19d&o=" alt="" className="featureImg" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/682092.jpg?k=89e08026bf3e6c9159ef6d0deada5bf7e655a41320f585273014b504953f1f2e&o=" alt="" className="featureImg" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>152 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/968006.jpg?k=8ec66eac93f95c8f57fedbf37abb1f71641d2a5f612340741b2e853fa02fe937&o=" alt="" className="featureImg" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>64 properties</h2>
                </div>
            </div>
        </div>
    )
}
