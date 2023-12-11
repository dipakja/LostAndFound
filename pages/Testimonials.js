import Image from "next/image";
import React from "react";
import Container from "../components/container";

import ShubhamImg from "../public/img/Shubham.jpg";
import gitImg from "../public/img/git.jpg";
import Shivam03 from "../public/img/Shivam03.jpg";
import Navbar from '../components/navbar';
import Footer from '../components/footer';



const Testimonials  = () => {

  return (
   <div>
<Navbar />

<Container>
 
 <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
   <div className="lg:col-span-2 xl:col-auto">
     <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
       <p className="text-2xl leading-normal ">
          {/* <Mark>Developers</Mark> */}
       Hey, My name is Shubham Gatthewar. I am a third year IT engineering Student.I am a web Developer
       </p>

       <Avatar
         image={ShubhamImg}
         name="Shubham Gatthewar"
         title="Full stack Developer"
       />
     </div>
   </div>
   <div className="">
     <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
       <p className="text-2xl leading-normal ">
      Hey, My name is Dipak Jadhav. I am a third year IT engineering Student. I am a web Developer and DevOps Enthusiast.
       </p>

       <Avatar
         image={gitImg}
         name="Dipak Jadhav"
         title="Web Developer"
       />
     </div>
   </div>
   <div className="">
     <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
       <p className="text-2xl leading-normal ">
         Hey,My name is Shivam Gajjalwar.I am a third year IT engineering Student.I am a Web Developer Explorer.
       </p>

       <Avatar
         image={Shivam03}
         name="Shivam Gajjalwar"
         title="Web Developer"
       />
       
     </div>
   </div>
 </div>
</Container>


    


  <footer />
   </div>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );

}

export default Testimonials;