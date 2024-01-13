import React, {useState, useEffect, useContext, useRef} from 'react'
import {Tabs, Tab, Link } from "@nextui-org/react";
import {Navigate} from "react-router-dom";
import Home from '../home/Home';
import About from '../about/About';
import { PageContext } from '../../PageContext';



export default function Footer() {
    const {pages, setPages} = useContext(PageContext)
    const [selected, setSelected] = useState(
      Object.keys(pages).find((page) => pages[page].clicked)
    );

    const tabRef = useRef(null)
    const handleClick = () => {
        tabRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    const togglePage = (selectedTab) => {
      setPages((prevPages) => {
        const updatedPages = Object.keys(prevPages).reduce((acc, page) => {
          acc[page] = {
            ...prevPages[page],
            clicked: page === selectedTab ? !prevPages[page].clicked : false,
          };
          return acc;
        }, {});
        return updatedPages;
      });
      console.log("Handle state APP", selectedTab, pages[selectedTab]);
      
    };


    useEffect(() => {
        setSelected(Object.keys(pages).find((page) => pages[page].clicked))
    },[pages])

    return (
      <footer className="w-full h-20 flex justify-center self-center overflow-y-scroll  items-center px-6 p-3 pt-0">
        <Tabs
          onSelectionChange={(selectedTab) => togglePage(selectedTab)}
          selectedKey={selected}
          isblurred
          variant="underlined"
          color="primary"
          fullWidth={true}
          size="md"
          id="quickLinks"
          className={
            "w-full h-full flex justify-around items-center rounded-lg text-xl bg-opacity-10"
          }
          classNames={{
            tabList: "h-full p-0 ",
            tab: "h-full ",
            cursor: "h-1 bg-opacity-70 bg-foreground",
          }}
        >
          {Object.keys(pages)
            .slice(0, 5)
            .map((page) => {
              return (
                <Tab
                  className="relative z-30"
                  key={`${pages[page].id}`}
                  id={`${pages[page].id}`}
                  fullWidth={true}
                  title={pages[page].label}
                />
              );
            })}
        </Tabs>
      </footer>
    );
}

       