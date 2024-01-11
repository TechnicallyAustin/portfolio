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
      <footer className="w-full h-28 flex justify-center self-center overflow-y-scroll items-center px-6 p-3 pt-0">
        <Tabs
          onSelectionChange={(selectedTab) => togglePage(selectedTab)}
          selectedKey={selected}
          isblurred
          variant="light"
          color="warning"
          fullWidth={true}
          size="md"
          id="quickLinks"
          className="w-full h-full flex justify-around items-center rounded-lg text-xl"
        >
          {Object.keys(pages).map((page) => {
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

       