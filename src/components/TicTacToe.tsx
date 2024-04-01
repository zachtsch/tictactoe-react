import React, { useState } from 'react';

type Play = 'X' | 'O' | number

function chunk(ar:Play[]) : Play[][]{
    let out : Play[][] = [];
    console.log('ar',ar)
    ar = [...ar].reverse();
    [...Array(3)].forEach((_,r)=>{
        out.push([]);
        [...Array(3)].forEach(_=>{
            out[r].push(ar.pop() as Play);
        })
    })
    console.log('out',out)
    return out;
}

function Game({}) : JSX.Element{
    const [next,setNext] = useState('X')
    return (<></>);
}

function Rect({disp} : {disp : 'X' | 'O' | '_'}){
    return (<div className='rect'>
    {chunk([...Array(10)].map((_,i)=>i))}
    </div>)
}