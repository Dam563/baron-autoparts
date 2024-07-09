import { fromJSON } from "postcss";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import card from "../assets/pngs/card.png";
import { Formik } from "formik";

const Checkout = () => {

    return (
        <div>
            <Header
            page="Checkout"
            />
            <div className="flex justify-between my-5 p-2">
                <p className=" py-2 font-bold text-[14px] ml-5">Payment method</p>
                <select name="" id="" className="bg-[#CE1515] text-[14px] text-white py-2 px-3 border border-[#CE1515] rounded-xl">
                    <option value="">Debit Card</option>
                    <option value="">Bank Transfer</option>
                    <option value="">USSD</option>
                </select>
            </div>
            <div className="flex justify-between my-5 p-2">
         <Form/>
         <img src={card} alt="" width={600} height={350} className="hidden lg:block"/>
         </div>
            <div className="mt-[30px] ml-5 sm:ml-[30px]">
                
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;