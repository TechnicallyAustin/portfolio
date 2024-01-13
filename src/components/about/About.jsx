import React from 'react'
import {Image, Card, CardFooter, Divider} from "@nextui-org/react"
import Port from "../../assets/port.jpeg"
export default function About() {
    return (
      <div className="w-full h-full flex overflow-y-scroll no-scrollbar">
        <section className="w-full h-full  rounded-lg relative top-6 flex flex-col justify-start gap-3 ">


          <Card
            isFooterBlurred
            className="w-full h-1/4 flex justify-center p-1 "
          >
            <Image
              removeWrapper
              src={Port}
              id="profilePhoto"
              alt="profile photo"
              roundeheight={128}
              width={240}
              className="absolute w-full h-full object-cover"
            />
            <CardFooter
              className="bg-black bg-opacity-20 w-full flex flex-col absolute z-20 bottom-0"
            >
              <p className="w-full text-lg">Austin Johnson</p>
              <p className="w-full">FullStack Developer and IT Expert</p>
            </CardFooter>
          </Card>

          <div id="bio" className="w-full h-3/5 flex flex-col">
            <section className="w-full h-full">
              <article id="bioContent" className="w-full h-full border rounded-lg">
                <p>Short Bio Summary / Animate on Scroll</p>
              </article>
            </section>
          </div>
        </section>
      </div>
    );
}
