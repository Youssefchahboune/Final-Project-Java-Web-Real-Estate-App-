import React from 'react'

function PropertyCard(props) {
  return (
    <div>
        <div class="w-72 h-82 border">
            <div >
                <img class="w-[286px] h-[190px]" src={props.url} alt="property image" />
            </div>
            <div class="px-5 py-3">

                <div>
                    <span>{props.price}$</span> <br />
                    <span>{props.address} {props.province}</span> <br />
                    <span>{props.beds} Beds - {props.baths} Baths - {props.type}</span> <br />
                    <span>{props.firstName} {props.lastName}</span>
                    <span>{props.Phone}</span> <br />
                    <span>{props.email}</span> <br />  
                </div>
                
                <hr class="my-3" />

                <div class="text-center">
                    <span>{props.id}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard