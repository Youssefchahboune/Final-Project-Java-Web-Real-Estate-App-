import React from 'react';
import '../App.css';
import Banner from '../components/Banner';

const text = () => {
  
  return <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit nesciunt, doloremque <br />
    corrupti, itaque alias sed, fugiat aliquid reprehenderit consectetur esse <br />
    possimus cum tempora soluta error eaque aut deleniti. Ab?
  </p>
}

function Delete() {
  return (
    <div>
      <Banner Title="DELETE" text={text()} />

      <div class="ml-[11%] py-5 pt-10 text-sm font-thin">
        Seller Information
      </div>

      <form action="" class="">
        <div class="flex justify-center mx-10">
          <div  class="flex flex-row border w-[1000px] h-32 gap-20 pl-20 pt-8 bg-white drop-shadow-md">
            <div class="flex flex-col">
              <label htmlFor="">ID</label>
              <input class="border pl-2" type="text" placeholder='Enter ID' />
            </div>
            <div class="flex flex-col">
              <label htmlFor="" >KEY</label>
              <input class="border pl-2" type="text" placeholder='Enter KEY' />
            </div>
          </div>
        </div>

        <div class="flex flex-row gap-5 ml-36 mt-10">
          <div>
            <button type="submit" class="px-7 py-1 bg-black text-white">Delete</button>
          </div>
          <div>
            <button type="reset" class="px-5 py-1 bg-[lightgray] text-white">Clear</button>
          </div>
        </div>
      </form>

      
    </div>
  )
}

export default Delete