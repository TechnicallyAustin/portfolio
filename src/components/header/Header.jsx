import React,{useState} from 'react'
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

export default function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   const {pages} = props

    return (
      <header className="w-full h-16 flex justify-between items-center">
        <Navbar
          className="w-full h-full flex justify-center items-center"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarBrand
            className="w-full h-full flex items-center"
            justify="start"
          >
            <h1 className="text-2xl w-full h-auto flex justify-start items-center">Technically Austin</h1>
          </NavbarBrand>

          <NavbarItem className="w-auto h-16" justify="end">
            <NavbarMenuToggle
              className="w-full h-full"
              aria-label={isMenuOpen ? "Close menu" : "open menu"}
            />
          </NavbarItem>

          <NavbarMenu className="dark text-foreground bg-background">
            {pages.map((page, index) => (
              <NavbarMenuItem key={`${page.id}`}>
                <Link color="foreground" className="w-full" href={`#${page.id}`} size="lg">
                  {page.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </header>
    );
}
