import Image from "next/image";
import AuthForm from "./components/AuthForm";


export default function Home() {
    return (
      <div className="
       flex
       flex-col
       min-h-full
       items-center
       justify-center
       py-12
       sm:px-6
       lg:px-8
         bg-gray-100
      ">
                 {/* <div>
                  <Image
                  alt="ig-house"
                  height="500"
                  width="500"
                  className="mx-auto w-auto"
                  src="/images/screen-opening1.png"
                  />

                 </div> */}
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                 <Image 
                  alt="logo"
                  height="55"
                  width="55"
                  className="mx-auto  w-auto"
                  src="/images/ig-logo.png"


                  
                 />
                 {/* create p with text: sign in to your account with mt-6 text-center-text-3xl font-bold -tracking-tight and text gray 900*/}
                    {/* <p className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Enjoy your house 
                    </p>  */}
                  

                  <Image alt="ig-text" height="200" width="200" className="mx-auto w-auto" src="/images/ig-text.png"/>
                 
          
            </div>

              {/* Auth form  component*/}
              <AuthForm/>

      
      </div>
    )
  }
  