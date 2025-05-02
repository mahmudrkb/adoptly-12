
import { useState,useEffect } from 'react';

const SectionsTitles = ({heading,subheading}) => {
    return (
       <div className='flex overflow-hidden'>
         <div className='text-center   lg:mx-auto my-8 md:w-5/12 '>
           <p className='text-teal-300 mb-2'>--- {subheading} ---</p>
           <h3 className='text-3xl dark:text-white uppercase border-y'>{heading}</h3>
           
        </div>
       </div>
        
    );
};

export default SectionsTitles;


// const Counter =()=>{
//    const [count,setCount]=useState(0)
//    useEffect(()=>{
//       setInterval(()=>{
//          setCount(count+1)
//       },1000)
//    },[])
// return( 
//    <h1>{count}</h1>
// )
// }
// export default Counter