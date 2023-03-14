
import {useState, useEffect} from 'react'


// const [name, setname]=useState('Dev');

const useFetch=(url)=>{
    const [mydata, setMyData] = useState(null)

// Hooks to show loading 
const [isPending,setIsPending]=useState(true)

// hook to display error
const [error, setError]=useState(null)
  useEffect(() => {

    const abortCont=new AbortController();


    setTimeout(() => {
     fetch(url,{signal: abortCont.signal})
     .then(res =>{
       
       if(!res.ok){
         throw Error()
       }
       
         return res.json();
       
      
     })
     .then(data=>{
        setMyData(data);
      setIsPending(false)
     })
     .catch(err =>{  // to catch any kind of network error

      if(err.name==="AbortError"){
        console.log('fetch aborted')
      }
      else{
       setError(err.message);
       setIsPending(false)
      }
     })
    });


    return()=>abortCont.abort();
   },[url]);

   return {mydata, isPending, error}
}
 
export default useFetch

