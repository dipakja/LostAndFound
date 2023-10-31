import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/Shubham.jpg";
import userTwoImg from "../public/img/git.jpg";
import userThreeImg from "../public/img/Shivam03.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
               {/* <Mark>Developers</Mark> */}
            Hey, My name is Shubham Gatthewar. I am a full stack Developer
            </p>

            <Avatar
              image={userOneImg}
              name="Shubham Gatthewar"
              title="Full stack Developer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
             Hey, My name is Dipak Jadhav.I am DevOps Enthujisatic and a Web Developer.I am Microsoft Learn Student Ambassador.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dipak Jadhav"
              title="Web Developer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Hey,My name is Shivam Gajjalwar.I am a Web Developer Explorer.
            </p>

            <Avatar
              image={userThreeImg}
              name="Shivam Gajjalwar"
              title="Web Developer"
            />
          </div>
        </div>
      </div>
    </Container>
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