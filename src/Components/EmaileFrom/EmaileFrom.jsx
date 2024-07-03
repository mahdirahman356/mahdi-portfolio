import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import Swal from "sweetalert2";

const EmaileFrom = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
       e.preventDefault()
       setLoading(true);
       const name = e.target.name.value
       const email = e.target.email.value
       const message = e.target.message.value
       console.log(name, email, message)
       const serviceID = "service_gdgb5la"
       const templateID = "template_pa7ny4t"
       const publicKey = "bDQrQsLsIbnSHq_Pk"
       const templateParams = {
           from_name: name,
           from_email: email,
           to_name: "Kashim Rahman Mahdi",
           message: message
       }

       emailjs.send(serviceID, templateID, templateParams, publicKey)
       .then((res) => {
          console.log("Email Send successfully", res)
          Swal.fire({
            title: "Success",
            text: "Email sent successfully",
            icon: "success"
          });
          e.target.reset()
          setLoading(false);
       })
       .catch((error) => {
        console.log(error)
        Swal.fire({
            title: "Error",
            text: "Email Sending Error",
            icon: "error"
          });
          setLoading(false);
       })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-6 lg:p-16 mt-8">
                <h3 className="font-bold my-2 md:my-6 flex justify-center text-[#4D869C]"><FiMail className="text-6xl" /></h3>
                <input type="text" placeholder="Your Name" name="name" className="input bg-gray-700 input-bordered w-full mb-4 rounded-lg" />
                <input type="text" placeholder="Your Email" name="email" className="input bg-gray-700 input-bordered w-full mb-4 rounded-lg" />
                <textarea className="textarea bg-gray-700 textarea-lg block w-full textarea-bordered mb-4 text-white" name="message" placeholder="Message"></textarea>
                <button className="btn bg-[#4D869C] w-full rounded-3xl text-white border-none">
                    {loading ? 
                    <span className="loading loading-spinner loading-sm "></span>
                     : "Send"}
                </button>
            </form>
        </div>
    );
};

export default EmaileFrom;