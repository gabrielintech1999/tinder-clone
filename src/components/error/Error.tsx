import { useRouteError, Link } from "react-router-dom"

interface UseRouteError {
  status: number;
  statusText: string;
}

export default function Error() {

    const error = useRouteError() as UseRouteError
    console.log(error);
    
  return (
    <div className="flex justify-center items-center h-screen flex-col">
         Ops something went wrong
         <h1 className="text-red-600 font-bold">{error.statusText}</h1>
         <h2><Link to={"/"} className="text-blue-600 font-bold">Back To home Page</Link></h2>
         <h2>{error.status}</h2>
    </div>
  )
}
