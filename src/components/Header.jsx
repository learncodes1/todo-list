import React from "react";
import { Link } from "react-router-dom"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem,  Button } from "@nextui-org/react";
 
export default function App() {
    return (
        <Navbar isBordered>
            <NavbarBrand>
                To-Do 
                <p className="font-bold text-inherit">&nbsp; Let's Go!</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" to="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link to="/create" aria-current="page">
                        create
                    </Link>
                </NavbarItem>         
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link to="/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" to="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
