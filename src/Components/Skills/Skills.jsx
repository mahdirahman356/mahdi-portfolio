import { LuChevronRightCircle } from "react-icons/lu";

const Skills = () => {
    return (
        <div className="flex justify-start items-center">
            <div className="px-5 md:px-8 lg:px-20 my-16">
            <h2 className="text-4xl font-bold ubuntu mb-8 underline">Skills</h2>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold ubuntu mb-3">Front-End Development</h2>
                    <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C]" /></span>HTML, CSS, JavaScript</p>
                    <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C]" /></span>React</p>
                    <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C]" /></span>Tailwind CSS</p>
                    <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C]" /></span>Responsive Design</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold ubuntu mb-3">Back-End Development</h2>
                    <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C]" /></span>Basic knowledge of Next.js</p>
                    <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C]" /></span>Node.js</p>
                    <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C]" /></span>Express.js</p>
                    <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C]" /></span>Authentication and authorization using Firebase</p>
                </div>


                <div className="mb-6">
                    <h2 className="text-2xl font-bold ubuntu mb-3">Database Management</h2>
                    <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C]" /></span>MongoDB</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold ubuntu mb-3">Version Control</h2>
                    <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C]" /></span>Git</p>
                    <p className=" text-gray-500 flex items-center gap-2"><span><LuChevronRightCircle className="text-[#4D869C]" /></span>GitHub</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;