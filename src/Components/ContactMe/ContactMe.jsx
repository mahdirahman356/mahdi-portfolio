import { BiDownload } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import reresume from "../../assets/file/Mahdi_Resume_14_Jun_24.pdf"
import EmaileFrom from "../EmaileFrom/EmaileFrom";
const ContactMe = () => {
    return (
        <div className="flex justify-start items-center">
            <div className="px-5 md:px-8 lg:px-20 my-16">
                <h2 className="text-4xl font-bold ubuntu mb-3 underline">Contact</h2>
                <p className=" text-gray-500 mb-8">You can reach me via email at <span className="text-blue-500 font-semibold">mahdi.rahman356@gmail.com</span> or download my resume below.</p>
                <div className="mb-8">
                    
                    <h2 className="text-xl font-bold ubuntu mb-6">My Social Media Links</h2>
                    <div className="flex flex-wrap gap-8 md:gap-12">
                        <span className="btn p-3 bg-gray-300 border-none rounded-full hover:bg-slate-600"><a href="https://www.linkedin.com/in/mahdirahman356/"><FaLinkedinIn className="text-2xl text-[#4D869C]" /></a></span>
                        <span className="btn p-3 bg-gray-300 border-none rounded-full hover:bg-slate-600"><a href="https://github.com/mahdirahman356/"><FaGithub className="text-2xl text-[#4D869C]" /></a></span>
                        <span className="btn p-3 bg-gray-300 border-none rounded-full hover:bg-slate-600"><a href="https://www.facebook.com/mahdirahman356/"><FaFacebookF className="text-2xl text-[#4D869C]" /></a></span>
                        <span className="btn p-3 bg-gray-300 border-none rounded-full hover:bg-slate-600"><a href="https://www.instagram.com/mahdirahman356/"><FaInstagram className="text-2xl text-[#4D869C]" /></a></span>
                    </div>

                    <h2 className="text-xl font-bold ubuntu mb-6 mt-8">Download Resume</h2>
                    <span className="btn p-3 bg-gray-300 border-none rounded-full hover:bg-slate-600"><a href={reresume} download><BiDownload className="text-2xl text-[#4D869C]" /></a></span>

                    <h2 className="text-xl font-bold ubuntu mt-20">Send Email in Here</h2>
                    <EmaileFrom></EmaileFrom>

                </div>
            </div>
        </div>
    );
};

export default ContactMe;