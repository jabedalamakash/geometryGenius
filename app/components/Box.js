import React from 'react';
import Image from 'next/image';

const Box = (props) => {
    return (
        <div>
            <Image
                    src={props.img}
                    height={400}
                    width={400}
                    alt={props.title}
                    className='text-center object-center mb-5 '
                    />
                    <p className='text-2xl font-bold mb-5'>{props.title}</p>
                    <p className='mb-5'>{props.desc}</p>
                    <p className='mb-5'>{props.desc2}</p>
        </div>
    );
};

export default Box;