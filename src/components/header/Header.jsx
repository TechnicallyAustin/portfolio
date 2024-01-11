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
            <h1 className="text-2xl w-full h-full flex justify-start items-center">Technically Austin</h1>
          </NavbarBrand>

          <NavbarItem className="w-auto h-16 flex justify-end items-center" justify="end">
            <NavbarMenuToggle
              className="w-full h-full"
              aria-label={isMenuOpen ? "Close menu" : "open menu"}
            />
          </NavbarItem>

          <NavbarMenu className="dark text-foreground bg-background flex justify-around items-center">
            {Object.keys(pages).map((page, index) => (
              <NavbarMenuItem key={`${pages[page].id}`}>
                <Link color="foreground" className="w-full text-2xl" href={`#${pages[page].id}`} size="lg">
                  {pages[page].label}
                </Link>
              </NavbarMenuItem>
           ))} 
          </NavbarMenu>
        </Navbar>
      </header>
    );
}
