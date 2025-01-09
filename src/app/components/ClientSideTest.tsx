"use client"
import { usePathname, useSearchParams ,useRouter } from 'next/navigation';
  

 

export default function ClientSideTest( ) {

   const router = useRouter()

  const pathName = usePathname()

  const id = useSearchParams().get("id")

 
  const handleClick =() =>
  {
    router.push("/") 
    // back , refresh , replace , foward are some of the router methods
    console.log("pathname" , pathName);
    console.log("id" , id)
    

  }


  return (
    <button onClick={handleClick}>clientsidetest</button>
  )
}

 