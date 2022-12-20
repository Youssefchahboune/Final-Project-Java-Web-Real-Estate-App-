import React from 'react'

function PropertyCard({property}) {


  return (
    <div>
        <div style={{opacity: property.status === "available"?"100%":"35%"}} class="w-72 h-82 border bg-white drop-shadow-lg">
            <div >
                <img class="w-[286px] h-[190px]" src={property.imageURL} alt="property" />
            </div>
            <div class="px-5 py-3">

                {property.status === "available"? 
                <>
                    <div>
                        <span>{property.price}$</span> <br />
                        <span>{property.address} {property.province}</span> <br />
                        <span>{property.beds} Beds - {property.baths} Baths - {property.type}</span> <br />
                        <span>{property.seller.firstName} {property.seller.lastName}</span> <br />
                        <span>{property.seller.phone}</span> <br />
                        <span>{property.seller.email}</span> <br />
                    </div>
                    
                    <hr class="my-3" />
                    
                    <div class="text-center">
                        <span>{property.id}</span>
                    </div>
                </>
                : 
                <div class="h-[195px]">
                    SOLD 

                    <hr class="mt-[132px] my-3" />
                    
                    <div class="text-center">
                        <span>{property.id}</span>
                    </div>
                </div>}

                
            </div>
        </div>
    </div>
  )
}

export default PropertyCard