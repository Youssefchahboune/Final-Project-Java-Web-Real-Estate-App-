import React from 'react';
import '../App.css';
import background from '../bg.jpg';

function home() {
  return (
    <div>
      <div class="flex justify-center -space-x-40 mt-10 mx-5 py-[6%]">
        <div class="bg-white w-[600px]">
          <img src={background} alt="bgimage" />
        </div>
        <div class=" bg-black w-[500px] opacity-[85%] mt-40 py-10 px-10">
          <h1 class="text-white text-5xl font-semibold">Real Estate</h1>
          <p class="text-white text-xs py-10 text-justify">
            Welcome to our real estate website! Here, you can browse a variety of homes,villas and buildings 
            for sale. If you're a property owner, you can easily add, update, or remove your listings. 
            Our website makes it easy for you to find the perfect home, whether you're a buyer or a seller. 
            Thank you for visiting!
          </p>
          <div class="text-white flex flex-row gap-8">
            <a class="bg-[#3d3d3d] px-5 py-1 text-sm rounded-sm" href="/properties">Properties</a>
            
            <a class="bg-[#4a4a4a] pl-5 py-1 text-sm rounded-sm" href="/Add">Add <span class="mx-2">+</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home