import React,{useState, useContext} from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { PageContext } from '../../PageContext';




export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {pages, setPages} = useContext(PageContext)

      const togglePage = (selectedLink) => {
        setPages((prevPages) => {
          const updatedPages = Object.keys(prevPages).reduce((acc, page) => {
            acc[page] = {
              ...prevPages[page],
              clicked: page === selectedLink ? !prevPages[page].clicked : false,
            };
            return acc;
          }, {});
          return updatedPages;
        });
        console.log("Handle state APP", selectedLink, pages[selectedLink]);
      };


    

    return (
      <header className="w-full h-20 flex justify-between items-center">
        <Navbar
          className="w-full h-full flex justify-center items-center"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarBrand
            className="w-full h-full flex items-center"
            justify="start"
          >
            <h1 className="text-xl w-full h-full flex justify-start items-center">TA</h1>
          </NavbarBrand>


          {/*<NavbarContent className="dark text-foreground bg-background flex items-center w-auto justify-end">
            {Object.keys(pages).slice(5).map((page, index) => (
              <NavbarItem key={`${pages[page].id}`}  className=''>
                <p id={pages[page].id} color="foreground" className="" size="lg">
                  {pages[page].label}
                </p>
              </NavbarItem>
           ))} 
            </NavbarContent> */}
        </Navbar>
      </header>
    );
}
