import React, { useState, createContext, useContext } from "react";
import { Divider, Tabs, Tab, Link, Button } from "@nextui-org/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { PageContext } from "./PageContext";


export default function App() {

  const [pages, setPages] = useState({

    "home": {
      clicked: false,
      id: "home",
      label: "Home",
      content: <Home />
    },
   "about": {
      clicked: false,
      id: "about",
      label: "About",
      content: <About />
    },
    "projects": {
      clicked: false,
      id: "projects",
      label: "Projects",
      content: "Project page Content"
    },
    "resume": {
      clicked: false,
      id: "resume",
      label: "Resume",
      content: "Resume page Content"
    },
    "contact": {
      clicked: false,
      id: "contact",
      label: "Contact",
      content: "Contact page Content"
    },
    "photos": {
      clicked: false,
      id: "photos",
      label: "Photos",
      content: "Photos page Content"
    },
    "blog": {
      clicked: false,
      id: "blog",
      label: "Blog",
      content: "Blog page Content"
    }
    })


    
  return (
    <PageContext.Provider value={{ pages, setPages }}>
      <div
        id="app"
        className="dark bg-background text-foreground sans w-full min-h-screen h-screen flex flex-col gap-2 shadow-lg"
      >
        <Header pages={pages} />
        <Divider className="bg-opacity-30" />

        <main className="w-full h-full px-6">
          {pages["home"].clicked && <Home />}
          {pages["about"].clicked && <About />}
          {pages["projects"].clicked && <Home />}
          {pages["resume"].clicked && <Home />}
          {pages["contact"].clicked && <Home />}
          {pages["photos"].clicked && <Home />}
          {pages["blog"].clicked && <Home />}

          <Router>
            <Routes>
              <Route path="/" element={""} />
              <Route path="/about" element={<About />} />
              <Route path="/photos" element={""} />
              <Route path="/blog" element={""} />
            </Routes>
          </Router>
        </main>

        <Footer />
      </div>
    </PageContext.Provider>
  );
}
