import React, { useRef } from 'react'
import Card from './Card'
function Foreground() {
  const ref = useRef(null)
    const data = [
        {
            desc:"This is first widget",
            filesize:"4.2MB",
            close: false,
            tag:{isopen:true, tagtitle:"Download Now",tagColor:"green"}
        },   
           {
            desc:"This is Second widget",
            filesize:"1.6MB",
            close: true,
            tag:{isopen:true, tagtitle:"Download Now",tagColor:"blue"}
        }
    ]
  return (
    <div>
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-10'>
   {data.map((item,index)=>{
   
   return  <> <Card data={item} reference={ref} /> </>
   })}
    </div>
    </div>
  )
}

export default Foreground
