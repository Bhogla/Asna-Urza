import { useState } from "react"; 
 
 export default function ContactForm() { 
   const [status, setStatus] = useState(""); 
 
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
     e.preventDefault(); 
     const form = e.target as HTMLFormElement; 
     const data = new FormData(form); 
 
     const response = await fetch("https://formspree.io/f/xgvylrzy", { 
       method: "POST", 
       body: data, 
       headers: { 
         Accept: "application/json", 
       }, 
     }); 
 
     if (response.ok) { 
       setStatus("Thanks for your message!"); 
       form.reset(); 
     } else { 
       setStatus("Oops! There was a problem."); 
     } 
   }; 
 
   return ( 
     <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-10"> 
       <h2 className="text-2xl font-bold mb-2 text-center">Get in Touch</h2> 
       <p className="text-center mb-6 text-gray-500"> 
         We'd love to hear from you. Fill out the form below. 
       </p> 
       <form onSubmit={handleSubmit} className="space-y-4"> 
         <input 
           type="text" 
           name="name" 
           placeholder="Your Name" 
           required 
           className="w-full p-3 border rounded" 
         /> 
         <input 
           type="tel" 
           name="phone" 
           placeholder="Your Phone Number" 
           required 
           className="w-full p-3 border rounded" 
         />
         <input 
           type="text" 
           name="city" 
           placeholder="Your City" 
           required 
           className="w-full p-3 border rounded" 
         /> 
         <textarea 
           name="message" 
           placeholder="Your Message" 
           required 
           className="w-full p-3 border rounded" 
         /> 
         <button 
           type="submit" 
           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" 
         > 
           Send 
         </button> 
         {status && <p className="text-green-600 mt-4">{status}</p>} 
       </form> 
     </div> 
   ); 
 }