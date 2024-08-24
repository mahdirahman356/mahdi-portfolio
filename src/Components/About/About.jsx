import { BiDownload } from "react-icons/bi";
import reresume from "../../assets/file/Mahdi_Resume_14_Jun_24.pdf"
const About = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="px-5 md:px-8 lg:px-20 my-16">
                <h1 className="text-5xl font-bold ubuntu mb-3">Kashim Rahman <span className="text-[#4D869C]">Mahdi</span></h1>
                <p className="font-semibold mb-8 text-[#4D869C]">Full Stack Web Developer</p>

                <h2 className="text-2xl font-bold ubuntu mb-3">About Me</h2>
                <p className=" text-gray-500 mb-9">Hello! I'm Mahdi, a Full-Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). I focus on building web applications that deliver great user experiences.My goal is to continually enhance my skills, stay updated with industry trends, and contribute to impactful projects.</p>

                <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-2xl font-bold ubuntu">Download Resume</h2>
                    <span className="btn p-3 bg-gray-300 border-none rounded-full hover:bg-slate-600"><a href={reresume} download><BiDownload className="text-2xl text-[#4D869C]" /></a></span>
                    </div>
            </div>
        </div>
    );
};

export default About;