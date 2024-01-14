import React from 'react'
import {Divider} from "@nextui-org/react"
import Footer from '../components/footer/Footer';
export default function Layout({children}) {
    const title = children.type.name
    console.log(children)
    return (
      <div id={""} className="w-full h-full relative flex flex-col">
        <header className="w-full h-auto flex flex-col justify-center items-center relative">
          <h1 className="w-full text-xl">{title}</h1>
          <Divider />
        </header>
        <section id="sectionContent" className="w-full h-5/6 flex flex-wrap overflow-y-scroll">
          {children}
        </section>
      </div>
    );
}
