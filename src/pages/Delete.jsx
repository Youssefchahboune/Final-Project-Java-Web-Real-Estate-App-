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
        Property Information
      </div>

      <form action="" class="">
        <div class="mx-[11%]">
          <div  class="flex flex-row border w-[95%] h-32 gap-10 pl-10 pt-8 bg-white drop-shadow-md">
            <div class="flex flex-col">
              <label class="text-sm font-thin" htmlFor="">ID</label>
              <input class="border pl-2 w-[80%]" type="text" placeholder='Enter ID' required />
            </div>
            <div class="flex flex-col">
              <label class="text-sm font-thin" htmlFor="" >KEY</label>
              <input class="border pl-2 w-[80%]" type="text" placeholder='Enter KEY' maxLength="6" minLength="6" required/>
            </div>
          </div>
        </div>

        <div class="flex flex-row gap-5 ml-[11%] mt-10">
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