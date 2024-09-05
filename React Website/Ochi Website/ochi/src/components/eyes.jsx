import React, { useEffect , useState , useRef} from 'react';

function eyes() {
    
    const [rotate, setRotate] = useState(0);
    useEffect(()=>{

        window.addEventListener("mousemove" ,(e)=>{
            let mouseX = e.clientX;             //To find the coords of the mouse pointer
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);    //atan2 is used to find the angle of the coords of the mouse positions 1st the midpoint of the screen and then the present postion of the mouse pointer , this gives the angle in radians which is converted to deg by multiplying by (180/pi) 
            setRotate(angle-180);
            
        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden"'>
        <div className=' relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-center bg-cover'>
            <div className='  absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] flex gap-10'>
                <div className='w-[15vw] h-[15vw] bg-zinc-200 rounded-full flex items-center justify-center'>
                    <div className='w-2/3 h-2/3 bg-black rounded-full flex items-center justify-center'>
                        <div  style={{transform: `translate(0% ,0%) rotate(${rotate}deg)`}} className='line w-full h-8 '>
                        <div className='w-8 h-8 bg-zinc-200 rounded-full flex items-center'></div>

                        </div>
                    </div>
                </div>

                <div className='w-[15vw] h-[15vw] bg-zinc-200 rounded-full flex items-center justify-center'>
                    <div className='w-2/3 h-2/3 bg-black rounded-full flex items-center justify-center'>
                        <div  style={{transform: ` rotate(${rotate}deg)`}} className='line w-full h-8'>
                        <div className='w-8 h-8 bg-zinc-200 rounded-full flex items-center'></div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default eyes