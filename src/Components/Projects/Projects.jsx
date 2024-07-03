import { LuChevronRightCircle } from "react-icons/lu";

const Projects = () => {
    return (
        <div className="flex justify-start items-center">
        <div className="px-5 md:px-8 lg:px-20 my-16">
            <h2 className="text-4xl font-bold ubuntu mb-16 underline">Projects</h2>
        
          {/* project 1 */}
           <div className="p-8 rounded-2xl shadow-2xl mb-20">
           <div className="mb-8">
            <h2 className="text-3xl font-bold ubuntu mb-3 ">ElectroEvo</h2>
            <p className=" text-gray-500 flex items-start gap-2 mb-3">ElectroEvo helps users manage and troubleshoot electronic device issues. Users can post problems, share solutions, and give recommendations, making it easier to find alternative products and make informed decisions.</p>

            <h2 className="text-xl font-bold ubuntu mb-3">Technology Used</h2>
            <div className="">
            <p className=" text-gray-500 flex items-start gap-2"><span><LuChevronRightCircle className="text-[#4D869C] mt-1 mb-2"/></span>MongoDB, Express.js, React, Node.js, Tailwind CSS, Firebase for authentication</p>
            <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C] mb-2"/></span>Responsive Design</p>
            </div>
            </div>
            <h2 className="text-xl font-bold ubuntu mb-3">Links</h2>
            <div className="">
            <a href="https://github.com/mahdirahman356/electro-evo" className=" flex items-start gap-2 text-[#4D869C] underline"><span><LuChevronRightCircle className="text-[#4D869C] mt-1 mb-2"/></span>GitHub Code</a>
            <a href="https://electroevo-89e11.web.app/" className="flex items-center gap-2 text-[#4D869C] underline"><span><LuChevronRightCircle className="text-[#4D869C] mb-2"/></span>Live Side</a>
            </div>
           </div>
          {/* project 2 */}
           <div className="p-8 rounded-2xl shadow-2xl mb-20">
           <div className="mb-8">
            <h2 className="text-3xl font-bold ubuntu mb-3 ">Bistro Boss</h2>
            <p className=" text-gray-500 flex items-start gap-2 mb-3">This project is a food ordering platform where users can order meals and make payments online. Admins can manage the menu by adding, updating, and deleting items. and more features I have added</p>

            <h2 className="text-xl font-bold ubuntu mb-3">Technology Used</h2>
            <div className="">
            <p className=" text-gray-500 flex items-start gap-2"><span><LuChevronRightCircle className="text-[#4D869C] mt-1 mb-2"/></span>MongoDB, Express.js, React, Node.js, Tailwind CSS, Firebase for authentication</p>
            <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C] mb-2"/></span>Responsive Design</p>
            </div>
            </div>
            <h2 className="text-xl font-bold ubuntu mb-3">Links</h2>
            <div className="">
            <a href="https://github.com/mahdirahman356/bistro-boss" className=" flex items-start gap-2 text-[#4D869C] underline"><span><LuChevronRightCircle className="text-[#4D869C] mt-1 mb-2"/></span>GitHub Code</a>
            <a href="https://bistro-boss-2aeff.web.app/" className="flex items-center gap-2 text-[#4D869C] underline"><span><LuChevronRightCircle className="text-[#4D869C] mb-2"/></span>Live Side</a>
            </div>
           </div>

           {/* project 3 */}
           <div className="p-8 rounded-2xl shadow-2xl mb-20">
           <div className="mb-8">
            <h2 className="text-3xl font-bold ubuntu mb-3 ">Alphabet Clash</h2>
            <p className=" text-gray-500 flex items-start gap-2 mb-3">Alphabet Clash is a fun typing speed game where users click on random letters to earn points. It helps improve typing speed and accuracy in an engaging way.</p>

            <h2 className="text-xl font-bold ubuntu mb-3">Technology Used</h2>
            <div className="">
            <p className=" text-gray-500 flex items-start gap-2 "><span><LuChevronRightCircle className="text-[#4D869C] mt-1 mb-2"/></span>HTML, CSS, JAVASCRIPT</p>
            <p className=" text-gray-500 flex items-center gap-2 "><span><LuChevronRightCircle className="text-[#4D869C] mb-2"/></span>Responsive Design</p>
            </div>
            </div>
            <h2 className="text-xl font-bold ubuntu mb-3">Links</h2>
            <div className="">
            <a href="https://github.com/mahdirahman356/Alphabet-clash" className=" flex items-start gap-2 text-[#4D869C] underline"><span><LuChevronRightCircle className="text-[#4D869C] mt-1 mb-2"/></span>GitHub Code</a>
            <a href="https://mahdirahman356.github.io/Alphabet-clash/" className="flex items-center gap-2 text-[#4D869C] underline"><span><LuChevronRightCircle className="text-[#4D869C] mb-2"/></span>Live Side</a>
            </div>
           </div>
        </div>
    </div>
    );
};

export default Projects;