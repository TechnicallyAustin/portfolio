import React,{useState, useContext, useRef} from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Switch
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

    const handleClick = (e) => {
        setIsMenuOpen(!isMenuOpen)
        togglePage(e.target.id)
    }



    return (
      <header className="w-full h-16 flex justify-between items-center shadow-lg">
        <Navbar
          className="w-full h-full flex justify-center items-center"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarBrand
            className="w-full h-full flex items-center"
            justify="start"
          >
            <h1 className="text-2xl w-full h-full flex justify-start items-center">
              TA
            </h1>
          </NavbarBrand>

          <NavbarItem
            className="w-auto h-16 flex justify-end items-center"
            justify="end"
          >
            <NavbarMenuToggle
              className="w-full h-full"
              aria-label={isMenuOpen ? "Close menu" : "open menu"}
            />
          </NavbarItem>

          <NavbarMenu className="dark text-foreground bg-background h-full flex justify-around items-center">
            {Object.keys(pages).slice(0,5).map((page, index) => (
              <NavbarMenuItem key={`${pages[page].id}`}>
                <Link
                  id={pages[page].id}
                  color="foreground"
                  className="h-auto w-full text-2xl"
                  onClick={(selectedLink) => handleClick(selectedLink)}
                  size="lg"
                >
                  {pages[page].label}
                </Link>
              </NavbarMenuItem>
            ))}
            <section className='w-full h-1/6 flex justify-center items-center gap-4'>
                <article className="w-1/2 h-full flex justify-center items-center border">
                    <p className='w-full h-full'>Photo Portfolio</p>
                </article>
                <article className="w-1/2 h-full flex justify-center items-center border">
                    <p className='w-full h-full'>Personal Blog </p>
                </article>
                <article className="w-1/2 h-full flex justify-center items-center border">
                    <p className='w-full h-full'>Notion Pages </p>
                </article>
            </section>

            <Switch color="primary" defaultSelected className='self-end'>Dark Mode Toggle</Switch>
          </NavbarMenu>
        </Navbar>
      </header>
    );
}
