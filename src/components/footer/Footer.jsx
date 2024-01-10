import React from 'react'
import {Tabs, Tab, Link } from "@nextui-org/react";

export default function Footer(props) {
    const {pages} = props
    console.log(pages)
    return (
        <footer className="w-full h-20 flex justify-center self-center items-center px-6 p-3">
        <Tabs isblurred variant="bordered" color="warning" fullWidth={true} size="md" id="quickLinks" className="w-full h-full flex justify-around items-center rounded-lg text-lg">
            {pages.map((page) => {
               return <Tab key={`${page.id}`} fullWidth={true} className="" title={page.label}></Tab>
            })}
        </Tabs>
      </footer>
    )
}
