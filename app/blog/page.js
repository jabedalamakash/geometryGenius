import Link from 'next/link';
import React from 'react';

const page = () => {


    const data=[
        {
            id:"1",
            title:"1. What is DOM and what is the purpose of DOM?",
            desc:"- DOM means Document Object Model. It treats XML or HTML document as tree structure and is used by JavaScript to maipulate HTML element."

        },

        {
            id:"2",
            title:"2. How will you select HTML elements using DOM? Name the DOM methods.",
            desc:"- Using document.getElementsByTagName(), document.getElementsByClassName(), document.getElementById() etc."

        },

        {
            id:"3",
            title:"3. What is event bubble?",
            desc:"- Event bubble is running a JS event in HTML elements in upward or downward way."

        },

        {
            id:"4",
            title:"4. What is a callback function and why will you use it?",
            desc:"- It's a kind of recursive function. It calls another function within a function."

        }


    ];



    return (
        <div className='container mx-auto'>

        <Link href="/"><button className='bg-[#1090D8] text-white text-center text-xl font-bold px-14 py-5 rounded-lg'>Go Back</button></Link>
        <div className='w-[80%] mx-auto'>
        <h1 className='text-center mb-20 text-5xl'>Document Object Model (DOM)</h1>

        {data.map((article)=>(
            <div className='mb-5 text-xl'>
                <ol className=''>
                <li className='mb-2' key={article.id}>{article.title}</li>
                <p key={article.id}>{article.desc}</p>
                </ol>
            </div>

        )
        )}

        </div>

        </div>
    );
};

export default page;