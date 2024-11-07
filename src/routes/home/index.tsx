import { useEffect, useState } from "react";
import { getData } from "../../utils/api";




function AuthModal() {
  return (
    <div className="p-4 border max-w-96 rounded absolute h-[500px] absolute z-10 top-0  bg-white">

    <div className="text-center relative">
     <div className="absolute right-1">X</div>
       <div className="pt-10">
       <h1 className="uppercase font-bold">Create Account</h1>
        <p>By clicking Log In. you agree to our terms. Learn how we process your data in our privacy and cookie Policy.
        </p>
       </div>
    </div>
   <form method="post" className="flex flex-col p-4 gap-2">
     <input placeholder="Email" type="email" name="email" id="email" className="border border-gray-500  p-2" />
     <input placeholder="Password" type="password" name="password" id="password" className="border border-gray-500 p-2" />
     <input placeholder="Confirm Password" type="password" name="confirmPassword" id="confirmPassword" className="border border-gray-500 p-2"  />

     <button type="submit" className="bg-gray-800 p-2 text-white font-bold rounded-2xl">Submit</button>
   </form>


   <div className="text-center text-xl uppercase font-bold">
     <h1>Get The App</h1>
   </div>
</div>
  )
}





export default function Home() {

  const [json, setjson] = useState(null)

  console.log(json);
  



  async function getsomeData() {
    const data = await getData()

    

    setjson(data)
  }


   




  useEffect(() => {
      getsomeData()

  }, [])

  if (json === null) {
    return <div>Loading...</div>
  }



  
  return (
    <div className="relative">
   
      <div>
        


       

        <main className="flex gap-12 flex-col items-center h-screen justify-center border border-red-600">
          <h1 className="text-5xl font-bold">Swipe Right</h1>

          <button className="text-white font-bold rounded-3xl border bg-red-600 px-4 py-1">Create Account</button>
        </main>



         {true && <AuthModal />}
      </div>
    </div>
  );
}
