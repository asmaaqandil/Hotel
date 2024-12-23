import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "framer-motion"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "548edae3-0de1-4292-8c39-2ec5be3987e4");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("FromSubmited successfuly")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };



  return (
    <motion.div
    initial={{ opacity: 0 , y:-100}}
    transition={{duration: 1.5}}
    whileInView={{ opacity: 1 , y:0}}
    viewport={{once: true}}

     className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
       <h1
        className="text-2xl sm:text-4xl font-bold md:text-2xl text-yellow-500 text-center"
        style={{
          color: '#FFD700',
          textShadow: `
            1px 1px 0 #000, 
            2px 2px 0 #000, 
            3px 3px 5px rgba(0, 0, 0, 0.5)
          `,
        }}
      >
        Contact{' '}
        <span className="underline underline-offset-4 decoration-1 font-light text-black">
          With Us
        </span>
      </h1>
      <p className="text-black max-w-80 text-center mb-8 pt-3 mx-auto">
       let's Contact With Us Now
      </p>

    <form onSubmit={onSubmit}  className='max-w-2xl mx-auto text-black pt-8'>
     <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>
            Your Name
          <input className='w-full border border-yellow-600 rounded py-3 px-4 mt-2 ' type="text" name='Name' placeholder='Your Name...' required/>
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
          <input className='w-full border border-yellow-600 rounded py-3 px-4 mt-2 ' type="email" name='Email' placeholder='Your Email...' required/>
        </div>
     </div>
     <div className='my-6 text-left'>
        Message
        <textarea className='w-full border border-yellow-600 rounded py-3 px-4 mt-2 resize-none '
         name=" Message" placeholder="your Message..." required ></textarea>
     </div>
     <button className='bg-black text-yellow-600 py-2 px-12 mb-10 rounded hover:text-black hover:bg-yellow-500 duration-500'>{result ? result : "Send Message" }</button>
    </form>








    </motion.div>
  )
}

export default Contact
