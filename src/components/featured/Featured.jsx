import useFetch from "../../hooks/usefetch"
import "./featured.css"

export const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,london,madrid")

    return (
        <div className="featured">
            {loading ? "Loading please wait" : 
            <><div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/976975.jpg?k=788064f0966156befaeb265f0c695d1ba1ae878bd7dad026bb7595d540b8d19d&o=" alt="" className="featureImg" />
                <div className="featuredTitles">
                    <h1>Berlin</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>
                <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/600x600/682092.jpg?k=89e08026bf3e6c9159ef6d0deada5bf7e655a41320f585273014b504953f1f2e&o=" alt="" className="featureImg" />
                    <div className="featuredTitles">
                        <h1>London</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/600x600/968006.jpg?k=8ec66eac93f95c8f57fedbf37abb1f71641d2a5f612340741b2e853fa02fe937&o=" alt="" className="featureImg" />
                    <div className="featuredTitles">
                        <h1>Madrid</h1>
                        <h2>{data[2]} properties</h2>
                    </div>
                </div></>}
        </div>
    )
}
