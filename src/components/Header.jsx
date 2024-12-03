
import moment from "moment";
import image from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-4">
      
      <div > <img className="w-[300px] " src={image} alt="" />
      
      </div>

      <h1 className="text-gray-500 font-semibold py-2">Journalism Without Fear or Favour</h1>

      <p className="text-gray-500 font-semibold">{moment().format('dddd, MMMM Do YYYY')} </p>
     
            
        </div>
    );
};

export default Header;