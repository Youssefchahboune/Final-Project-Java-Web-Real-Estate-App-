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

function Update() {
  return (
    <div>
      <Banner Title="UPDATE" text={text()} />
    </div>
  )
}

export default Update