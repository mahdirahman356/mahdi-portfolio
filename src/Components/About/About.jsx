import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const About = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="px-5 md:px-8 lg:px-20 my-16">
                <h1 className="text-5xl font-bold ubuntu mb-8">Kashim Rahman <span className="text-[#4D869C]">Mahdi</span></h1>
                <h2 className="text-2xl font-bold ubuntu mb-3">About Me</h2>
                <p className=" text-gray-500">Hello! I'm Mahdi, a passionate Full-Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). I am dedicated to creating seamless and efficient web applications that deliver an excellent user experience.</p>
                <h2 className="text-2xl font-bold ubuntu mb-3 mt-12">My Journey</h2>
                <p className=" text-gray-500">My journey into web development began when I decided to turn my passion for coding and technology into a career. Since then, I have immersed myself in learning and building projects that sharpen my skills and deepen my understanding of full-stack development.</p>
                <div className="flex flex-wrap gap-8 md:gap-12 mt-9">
                    <span className="btn p-3 bg-gray-300 rounded-full hover:bg-slate-600"><a href="https://www.linkedin.com/in/mahdirahman356/"><FaLinkedinIn className="text-2xl text-[#4D869C]" /></a></span>
                    <span className="btn p-3 bg-gray-300 rounded-full hover:bg-slate-600"><a href="https://github.com/mahdirahman356/"><FaGithub className="text-2xl text-[#4D869C]" /></a></span>
                    <span className="btn p-3 bg-gray-300 rounded-full hover:bg-slate-600"><a href="https://www.facebook.com/mahdirahman356/"><FaFacebookF className="text-2xl text-[#4D869C]" /></a></span>
                    <span className="btn p-3 bg-gray-300 rounded-full hover:bg-slate-600"><a href="https://www.instagram.com/mahdirahman356/"><FaInstagram className="text-2xl text-[#4D869C]" /></a></span>
                </div>
            </div>
        </div>
    );
};

export default About;