import React from 'react'

function feature() {
  return (
    <div className='w-full py-[8vw] '>
        <div className='w-full px-20 border-b-[1px] border-zinc-500 pb-10'>
            <h1 className='text-6xl font-["neue"] tracking-tight'>Featured projects</h1>
        </div>

        <div className='cards w-full flex gap-8 mt-10 px-20'>
        

            <div className="card w-1/2 h-[80vh] relative " >
                <h1 className='absolute  z-[10] text-[9vw] font-["founders"] tracking-tight left-full -translate-x-1/2 top-[50%] -translate-y-1/2 text-[#CDEA68] '>
                {'FYDE'.split('').map((item,index) =>(
                <span>{item}</span>
                ))}
                </h1>
                <div className="w-full h-full bg-green-600  rounded-xl overflow-hidden">
                    <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt=""  className='w-full h-full bg-cover position-center'/>
                </div>
            </div>
            <div className="card w-1/2 h-[80vh] relative " >
            <h1 className='absolute  z-[10] text-[9vw] font-["founders"] tracking-tight right-full translate-x-1/4 top-1/2 -translate-y-1/2 text-[#CDEA68] '>
            {'VISE'.split('').map((item,index) =>(
                <span>{item}</span>
            ))}
            </h1>
                <div className="w-full h-full  rounded-xl overflow-hidden">
                    <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" className='w-full h-full bg-cover' />
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default feature