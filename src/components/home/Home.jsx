import React from 'react'
import HomeIcon from "../../assets/AJIcon.png"
import {Image} from "@nextui-org/react"

export default function Home() {
    return (
        <section className='w-full h-full bg-background text-foreground'>
            <header className='w-full h-auto p-3 relative z-20 top-20 flex flex-col gap-8 shadow-xl rounded-xl'>
                <div className='w-full h-auto flex flex-col gap-2'>
                <h1 className='w-full h-auto text-3xl'>Hey, I'm Austin Johnson </h1>
                <h2 className='w-full h-auto text-xl'>Full Stack Developer and IT Expert.</h2>
                </div>


                <div className='w-full h-auto flex flex-col gap-4 relative z-20'>
                    <h3 className='w-full h-auto '>Passionate about building modern user experiences and performative web apps.</h3>
                    <h4 className='w-full h-auto text-sm'>
                        Portland. Seattle. Los Angeles. Phoenix. Atlana
                    </h4>
                </div>
            </header>

        </section>
    )
}
