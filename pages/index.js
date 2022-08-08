import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
  <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-6">
    <div>
    <Image class="mx-auto h-12 w-auto" src={"/assets/logo.png"} alt="" height={500} width={500} />
     
      <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">AWARD</h1>
      <p className="mt-2 text-center text-sm text-gray-600">
        Enter your email address<br />
        to sign in and continue
      </p>
    </div>
      
      <div className="rounded shadow-sm -space-y-px">
        <div>
 
          <input id="email-address" name="email" type="email"  required 
          className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        
      </div>

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => {
          if (email !== "admin@gmail.com") {
            alert("Email Address is not exists");
          } else {
            router.push("/awards");
          }
        }}>
          
          Sign in
        </button>
      </div>

  </div>
</div>
  );
}
