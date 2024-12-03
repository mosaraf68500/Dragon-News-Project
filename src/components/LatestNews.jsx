import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-base-200 p-2">
        <p className="bg-[#D72050] text-[#FFFFFF] px-3 py-1 font-medium  ">Latest</p>
            <Marquee pauseOnHover={true} speed={80} className="space-x-10">

                <Link to="./news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>

                <Link to="./news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>


                <Link to="./news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>

                <Link to="./news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
            </Marquee>
        </div>
    ); 
};

export default LatestNews;