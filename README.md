
# Real Estate App (Frontend)

## What is my application ?
My web application is a CRUD (create, read, update, delete) platform that allows buyers to browse properties and contact sellers through the provided information. Sellers are also able to add one or multiple properties to the website for buyers to browse and potentially purchase. The application allows for easy communication and management of properties for both buyers and sellers.

## How it was built and what technologies I used ?
My website application was built with a combination of technologies for both the frontend and backend. On the frontend, I used HTML, JavaScript, and the React framework to create the user interface and functionality. I also used the CSS framework Tailwind for styling and the libraries React-Toastify for notifications and React-Router to create a multi-page app. On the backend, I used Java Spring Boot to handle server-side tasks and provide an API for the frontend to interact with. Overall, this combination of technologies allowed me to create a dynamic and interactive website application with a robust backend.

## How to run the project ?
To run the project, you will need to first start the backend server by running the Java Spring Boot files. This will start the REST API and make it available for the frontend to interact with. Once the backend is running, you can then use the frontend to start making requests to the API. Keep in mind that the requests from the frontend will not work if the backend server is not running, so it's important to make sure that the backend is up and running before attempting to use the frontend. You may also need to configure the frontend to point to the correct URL for the backend API, depending on your setup. Once everything is running, you should be able to use the project and interact with it as intended.

## Some challenges that I faced 
One of the biggest challenges I faced while building this project was figuring out how to pass a payload with a delete request and implementing my own patch request. These tasks were not covered in detail by my teacher, so I had to do some research and experimentation to figure out how to get them working correctly. Another challenge I encountered was debugging issues that arose during development. It can be difficult to identify the cause of an error, especially if you are not familiar with the technology you are using. In addition, integrating different technologies and libraries into the project, as well as integrating the frontend and backend components, also presented challenges for me. Overall, building this project was a challenging but rewarding experience, and I learned a lot from the process.

## features you hope to implement in the future.
There are several future features that I may want to consider implementing for my project. One idea is to add a search bar that allows users to search for properties based on specific input, such as location, price, or number of bedrooms. This would make it easier for users to find the properties they are looking for and save them time in the process. Another feature I may want to consider is expanding the location of the properties to include locations beyond Canada. This would allow me to reach a wider audience and potentially attract more buyers or sellers to my platform. Additionally, I may want to consider adding the ability for sellers to create accounts with login and password information, which would allow them to update and manage their properties on the platform more easily. Finally, I would consider allowing sellers to update more information about their properties beyond just the status of being sold or available, such as adding descriptions, adding more photos, or other details that would help buyers get a better understanding of what is being offered. Overall, these features could help improve the user experience and make my platform more useful and attractive to potential buyers and sellers.

# Screenshots of the Web Application frontend

## Home
Home page of the Real Estate app 

![Screenshot 2022-12-21 132159](https://user-images.githubusercontent.com/99833243/208980023-50f88d26-11c8-4edf-ac82-e8ec46c199e3.png)

## Properties Page
On the Properties page, you can browse a variety of properties in Canada, including homes, villas, and buildings.

![Screenshot 2022-12-12 105315](https://user-images.githubusercontent.com/99833243/208979991-0bca2888-e98a-4ddf-b388-0961144bf465.png)

## Add Property Page
On the Add page, you can easily add your property to our website by providing necessary information about yourself as the seller and the property. Whether you're a property owner or a real estate agent, you can use this page to list your properties for sale.

![Screenshot 2022-12-21 132217](https://user-images.githubusercontent.com/99833243/208980042-ad5d12d8-6765-4211-84c1-0f3e793dd3e2.png)

## Update Property Page
On the Update page, you can easily update the status of your property, whether it's sold or available. To do so, simply provide the property's ID and your seller security key. This page is only for property owners who have already listed their properties on our website.

![Screenshot 2022-12-21 132234](https://user-images.githubusercontent.com/99833243/208980062-72072601-5af4-4010-bc91-9cff4038fddb.png)

## Delete Property Page
On the Delete page , you can easily remove your property from our website by providing the property's ID and your seller security key.

![Screenshot 2022-12-21 132249](https://user-images.githubusercontent.com/99833243/208980079-bf9865c6-6f1a-4eae-9113-1bcf45260b47.png)
