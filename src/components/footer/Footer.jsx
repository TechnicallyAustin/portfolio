import React, {useState, useEffect, useContext} from 'react'
import {Tabs, Tab, Link } from "@nextui-org/react";
import {Navigate} from "react-router-dom";
import Home from '../home/Home';
import About from '../about/About';
import { PageContext } from '../../PageContext';



export default function Footer() {
    const [selected, setSelected] = useState("home")
    const {pages, setPages} = useContext(PageContext)


    const handleState = (selectedTab) => {
        console.log("Handle state APP", selectedTab, pages[selectedTab])
    }

    const togglePagev1 = (selectedTab) => {
        setPages(prevPages => (
            {
            ...prevPages,
            [selectedTab]: {
                ...prevPages[selectedTab],
                clicked: !prevPages[selectedTab].clicked
            } 

        }))
         console.log("Handle state APP", page, pages[page]);
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



    return (
      <footer className="w-full h-20 flex justify-center self-center items-center px-6 p-3 pt-0">
        <Tabs
        onSelectionChange={(selectedTab) => togglePage(selectedTab)}
          isblurred
          variant="bordered"
          color="warning"
          fullWidth={true}
          size="md"
          id="quickLinks"
          className="w-full h-full flex justify-around items-center rounded-lg text-lg"
        >
          {Object.keys(pages).slice(0,5).map((page) => {

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

       