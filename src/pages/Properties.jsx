import React from 'react';
import '../App.css';
import Banner from '../components/Banner';
import PropertyCard from '../components/PropertyCard';
const text = () => {
  
  return <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit nesciunt, doloremque <br />
    corrupti, itaque alias sed, fugiat aliquid reprehenderit consectetur esse <br />
    possimus cum tempora soluta error eaque aut deleniti. Ab?
  </p>
}

function properties() {
  return (
    <div>
      <Banner Title="PROPERTIES" text={text()} />

      <div class="flex flex-wrap px-5 py-5 gap-5 justify-center">
    
        <PropertyCard
        url="https://media.istockphoto.com/id/165303023/photo/modern-home-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=Dpceb6aMXZjzMxt4Ecf_DgZLvcMY1eLVzWdmkiGEBDo="
        price="500,000"
        address="2293 rue dollard Longueuil"
        province="QC"
        beds="3"
        baths="2"
        type="House"
        firstName="Youssef"
        lastName="Chahboune"
        phone="(450)-674-0774"
        email="Chahbouney2000@outlook.fr"
        id="123450"
        />

        <PropertyCard
        url="https://i.pinimg.com/736x/c4/e0/9f/c4e09faee7f7653a76d940f5d36a7d7c.jpg"
        price="500,000"
        address="2293 rue dollard Longueuil"
        province="QC"
        beds="3"
        baths="2"
        type="House"
        firstName="Youssef"
        lastName="Chahboune"
        phone="(450)-674-0774"
        email="Chahbouney2000@outlook.fr"
        id="123450"
        />

        <PropertyCard
        url="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        price="500,000"
        address="2293 rue dollard Longueuil"
        province="QC"
        beds="3"
        baths="2"
        type="House"
        firstName="Youssef"
        lastName="Chahboune"
        phone="(450)-674-0774"
        email="Chahbouney2000@outlook.fr"
        id="123450"
        />

<PropertyCard
        url="https://images.unsplash.com/photo-1562596133-06ae520e8c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmljZSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        price="500,000"
        address="2293 rue dollard Longueuil"
        province="QC"
        beds="3"
        baths="2"
        type="House"
        firstName="Youssef"
        lastName="Chahboune"
        phone="(450)-674-0774"
        email="Chahbouney2000@outlook.fr"
        id="123450"
        />

<PropertyCard
        url="https://media.istockphoto.com/id/165303023/photo/modern-home-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=Dpceb6aMXZjzMxt4Ecf_DgZLvcMY1eLVzWdmkiGEBDo="
        price="500,000"
        address="2293 rue dollard Longueuil"
        province="QC"
        beds="3"
        baths="2"
        type="House"
        firstName="Youssef"
        lastName="Chahboune"
        phone="(450)-674-0774"
        email="Chahbouney2000@outlook.fr"
        id="123450"
        />

        <PropertyCard
        url="https://i.pinimg.com/736x/c4/e0/9f/c4e09faee7f7653a76d940f5d36a7d7c.jpg"
        price="500,000"
        address="2293 rue dollard Longueuil"
        province="QC"
        beds="3"
        baths="2"
        type="House"
        firstName="Youssef"
        lastName="Chahboune"
        phone="(450)-674-0774"
        email="Chahbouney2000@outlook.fr"
        id="123450"
        />

        <PropertyCard
        url="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        price="500,000"
        address="2293 rue dollard Longueuil"
        province="QC"
        beds="3"
        baths="2"
        type="House"
        firstName="Youssef"
        lastName="Chahboune"
        phone="(450)-674-0774"
        email="Chahbouney2000@outlook.fr"
        id="123450"
        />

      <PropertyCard
        url="https://images.unsplash.com/photo-1562596133-06ae520e8c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmljZSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        price="500,000"
        address="2293 rue dollard Longueuil"
        province="QC"
        beds="3"
        baths="2"
        type="House"
        firstName="Youssef"
        lastName="Chahboune"
        phone="(450)-674-0774"
        email="Chahbouney2000@outlook.fr"
        id="123450"
        />


      </div>

    </div>
  )
}

export default properties