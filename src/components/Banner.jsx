import React from 'react';
import '../App.css';
import background from '../bg.jpg';



function Banner(props) {
  return (
    <div style={{ backgroundImage: `url(${background})` }} class="text-center h-[210px] bg-no-repeat bg-center bg-cover ">
        <div class="backdrop-brightness-[75%] backdrop-blur-sm w-[100%] h-[100%]">
            <h1 class="text-white center text-5xl pt-10 font-semibold">{props.Title}</h1>
            <p class="text-white text-xs py-6 font-thin">
                {props.text}
            </p>
        </div>
        
    </div>
  )
}

export default Banner