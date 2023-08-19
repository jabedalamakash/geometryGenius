import React from 'react';

const Result = (props) => {
    return (
        <div className='text-left'>
            
            {props.fntn&&<li> {props.title} {props.fntn}cm&sup2;</li>}
        </div>
    );
};

export default Result;