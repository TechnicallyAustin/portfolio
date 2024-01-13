import React from 'react'
import {Divider} from "@nextui-org/react"
export default function Layout({children}) {
    const title = children.type.name
    console.log(children)
    return (
      <div id={""} className="w-full h-full py-6 relative top-6 flex flex-col">
        <header className="w-full h-auto flex flex-col justify-center items-center relative">
          <h1 className="w-full text-xl">{title}</h1>
          <Divider />
        </header>
        <section id="sectionContent" className="w-full h-full flex flex-wrap overflow-y-scroll">
          {children}
        </section>
      </div>
    );
}
