import React, {useState} from 'react'
import {
  Divider,
  Tabs,
  Tab,
  Link,
  Button,
} from "@nextui-org/react";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
      const pages = [
        {
          id: "home",
          label: "Home",
          content: "home content",
        },
        {
          id: "about",
          label: "About",
          content: "about content",
        },
        {
          id: "projects",
          label: "Projects",
          content: "project content",
        },
        {
          id: "resume",
          label: "Resume",
          content: "resume content",
        },
        {
          id: "contact",
          label: "Contact",
          content: "contact content",
        },
      ];
  return (
    <div id="app" className="dark bg-background text-foreground sans w-full min-h-screen h-screen flex flex-col gap-2 shadow-lg">
      <Header pages={pages}/>
      <Divider/>




      <main className="w-full h-full px-6">
        <section className="w-full h-full border rounded-lg">
          <header className='w-full h-auto'>
            <h1 className='text-lg'>Main Section Header</h1>
          </header>
        </section>
      </main>

      <Footer pages={pages}/>
    </div>
  );
}
