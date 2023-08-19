"use client"


import Image from 'next/image';
import React, { useState } from 'react';
import Result from './Result';
import Box from './Box';

import tri from "@/public/images/triangle.png";
import rect from "@/public/images/rectangle.png";
import paral from "@/public/images/parallelogram.png";
import penta from "@/public/images/pentagon.png";
import rhom from "@/public/images/rhombus.png";
import ellip from "@/public/images/ellipse.png";



const Function = () => {

   const [valueb,setValueb]=useState()
   const [valueh,setValueh]=useState()
   const[triangle,setTriangle]=useState()

   const [valuew,setValuew]=useState()
   const [valuel,setValuel]=useState()
   const[rectangle,setRectangle]=useState()

    const [parallelogram,setParallelogram]=useState()
     const [rhombus,setRhombus]=useState()
     const [pentagon,setPentagon]=useState()
   const [ellipsee,setEllipsee]=useState()


            const handleGram=() => {
                setParallelogram(10*12);
            }

            const handleBus=() => {
                setRhombus(0.5*16*8);
            }

            const handlegon=() => {
                setPentagon(0.5*6*10);
            }

            const handlesee=() => {
                setEllipsee(3.1416*4*10);
            }

            const handletri=(e) => {
               setValueb( e.target.value);
            }


            const handleTriangle=(e) => {
                 setValueh(e.target.value); 
            }


            const submitTriangle=()=>{
                setTriangle(0.5*valueb*valueh);
                setValueb("");
                setValueh("");
                
            }


            const handlerec=(e) => {
                setValuew( e.target.value);
             }
 
 
             const handleangle=(e) => {
                  setValuel(e.target.value); 
             }
 
 
             const submitRectangle=()=>{
                 setRectangle(valuew*valuel);
                 setValuew("");
                 setValuel("");         
             }







    return (
        <main className='container mx-auto'>
             <div className='flex flex-col sm:flex-row '>



            <div className='w-full px-5 sm:px-0 mx-auto sm:mr-10'>

            <div className='grid place-content-evenly gap-10 grid-cols-1 sm:grid-cols-3 mb-20'>

                <div className='text-center border p-10  hover:bg-pink-300  rounded'>

                    <Box img={tri} desc="Area (A) = 0.5 x b x h" title="Triangle"/>

                    <div className='flex justify-center p-5 '>
                    <input required  min='0' type="number" value={valueb} placeholder='b' onChange={handletri} className='w-[20%] h-10 border text-center' />cm
                    <input required  min='0' type="number"  value={valueh} onChange={handleTriangle} placeholder='h' className='w-[20%] border h-10 text-center' />cm
                    </div>
                    <button onClick={submitTriangle} className='bg-[#1090D8] px-3 py-2 rounded text-white'>Calculate</button>
                       
                </div>


                <div className='text-center border hover:bg-lime-300 p-10 rounded'>
                   
                    <Box img={rect} desc="Area (A) = w x l" title="TRectangle"/>
                    <div className='flex justify-center p-5 '>
                    <input type="number" required  min='0' value={valuew} onChange={handlerec} placeholder='w' className='w-[20%] border h-10 text-center' />cm
                    <input type="number" required  min='0' value={valuel} onChange={handleangle} placeholder='l'  className='w-[20%] border h-10 text-center' />cm
                    </div>
                    <button onClick={submitRectangle}  className='bg-[#1090D8] px-3 py-2 rounded text-white'>Calculate</button>
                       
                </div>

                <div className='text-center hover:bg-indigo-200 border p-10 rounded'>

                    <Box img={paral} title="Parallelogram" desc="Area (A) = b*h" desc2="b=10cm, h=12cm "/> 
                    <button onClick={handleGram} className='bg-[#1090D8] px-3 py-2 rounded text-white'>Calculate</button>
                       
                </div>


                <div className='text-center hover:bg-sky-400 border p-10 rounded'>

                    <Box img={rhom} title="Rhombus" desc="Area (A) = 0.5*d1*d2" desc2="d1 = 16cm, d2 = 8cm "/>
                    <button onClick={handleBus}  className='bg-[#1090D8] px-3 py-2 rounded text-white'>Calculate</button>
                       
                </div>


                <div className='text-center border hover:bg-rose-400 p-10  rounded'>

                    <Box img={penta} title="Pentagon" desc="Area (A) = 0.5*p*b" desc2="p = 6cm, b = 10cm "/>
                    
                    <button onClick={handlegon}  className='bg-[#1090D8] px-3 py-2 rounded text-white'>Calculate</button>
                       
                </div>
                

                <div className='text-center border p-10 hover:bg-stone-500 rounded'>

                    <Box img={ellip} title="Ellipse" desc="Area (A) =  πab" desc2="a = 10cm, b = 4cm "/>
                    
                    <button onClick={handlesee} className='bg-[#1090D8] px-3 py-2 rounded text-white'>Calculate</button>
                       
                </div>



                </div>

            </div>


            <div className='sm:w-1/3 w-full  px-5 sm:px-0 h-full mb-10 sm:mb-0'>   
            <div className=' sm:border rounded border  border-slate-600'>
                <h3 className=' border-b mt-10 w-[30%]  mx-auto'>Area Calculation</h3>
                <ol className='list-decimal text-xl p-10 list-inside' >

                    <Result title="Triangle:" fntn={triangle}/>
                    <Result title="Rectangle:" fntn={rectangle}/>
                    <Result title="Parallelogram:" fntn={parallelogram}/>
                    <Result title="Rhombus:" fntn={rhombus}/>
                    <Result title="Pentagon:"  fntn={pentagon}/>
                    <Result title="Ellipse:"    fntn={ellipsee}/> 

                </ol>

            </div>
            </div>


        </div>
        </main>
       
    );
};

export default Function;