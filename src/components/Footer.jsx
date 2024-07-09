import playstore from "../assets/pngs/playstore.png";
import appstore from "../assets/pngs/appstore.png";
import facebook from "../assets/pngs/facebook.png";
import instagram from "../assets/pngs/instagram.png";
import linkedin from "../assets/pngs/linkedin.png";
import x from "../assets/pngs/x.png";
const Footer = () => {
    return(
        <div className="bg-[#161616] text-[#ffffff] pl-5 pb-5">
            <div className="flex gap-[20px] pt-3 mb-3">
            <div>
                <h4 className="text-[#CE1515] mb-3">Products</h4>
                <p>Motorcycles</p>
                <p className="pt-2">Tyres</p>
                <p className="pt-2">Exhaust</p>
            </div>
            <div>
                <h4 className="text-[#CE1515] mb-3">Contact Us</h4>
                <p>Blog</p>
                <p className="pt-2">About Us</p>
            </div>
            </div>
            <div className="border border-[#CCCCCC] my-5 mr-5 "></div>
            <div className="flex gap-3 pt-2">
                <img src={playstore} alt="" width={86} height={37} />
                <img src={appstore} alt="" width={86} height={37} />
            </div>
            <div className="flex gap-3 pt-5 mb-3">
                <img src={instagram} alt="" width={20} height={20}/>
                <img src={facebook} alt="" width={20} height={20}/>
                <img src={linkedin} alt="" width={20} height={20}/>
                <img src={x} alt="" width={20} height={20}/>
            </div>
            <p className="text-[12px] border-b-[1px] border-[#CCCCCC] w-[200px] pt-3">Terms of service and Privacy Policy</p>
        </div>
    );
}

export default Footer;