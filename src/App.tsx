import { useEffect} from "react";

import { fetchDataFromApi } from "./utils/api";

function App() {

  useEffect(() =>{
    apiTesting();
  },[])

  const apiTesting = () =>{
    fetchDataFromApi("/movie/popular").then((res:unknown) =>{
      console.log(res);
    });
  }

  return (
    <div>Hello MoivePot</div>
  )
}

export default App
