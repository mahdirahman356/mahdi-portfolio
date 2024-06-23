import { LuChevronRightCircle } from "react-icons/lu";

const Projects = () => {
    return (
        <div className="flex justify-start items-center">
        <div className="px-5 md:px-8 lg:px-20 my-16">
            <h2 className="text-3xl font-bold ubuntu mb-8 underline">Projects</h2>

            <div className="mb-8">
            <h2 className="text-2xl font-bold ubuntu mb-3">StepStyle</h2>
            <p className=" text-gray-500 flex items-start gap-2 mb-3">StepStyle is an e-commerce website where users can browse and purchase their favorite shoes. The platform offers a wide range of shoes, detailed product descriptions, user reviews, and a seamless shopping experience.</p>
            <p className=" text-gray-500 flex items-start gap-2 "><span><LuChevronRightCircle className="text-[#4D869C] mt-1 mb-2"/></span>Technologies Used: MERN stack (MongoDB, Express.js, React, Node.js), Tailwind CSS, Firebase for authentication</p>
            <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C] mb-2"/></span>Role: Full-stack developer            </p>
            <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C] mb-2"/></span>Responsive Design</p>
            </div>

            <div className="mb-6">
            <h2 className="text-2xl font-bold ubuntu mb-3">Art Genie</h2>
            <p className=" text-gray-500 flex items-start gap-2 mb-3">Art Genie is an interactive web application that allows users to create their own digital paintings. The platform provides a wide range of tools and features for users to express their creativity and design unique artworks.</p>
            <p className=" text-gray-500 flex items-start gap-2 "><span><LuChevronRightCircle className="text-[#4D869C] mt-1 mb-2"/></span>Technologies Used: MERN stack (MongoDB, Express.js, React, Node.js), Tailwind CSS, Firebase for authentication</p>
            <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C] mb-2"/></span>Role: Full-stack developer            </p>
            <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C] mb-2"/></span>Responsive Design</p>
            </div>
        </div>
    </div>
    );
};

export default Projects;