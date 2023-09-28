import React from "react";
import { Link } from "react-router-dom"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

export default function App() {
    return (
        <Navbar isBordered>
            <NavbarBrand>
                <Link to="/">
                    <p className="font-bold text-[#232323]">To-Do List</p>  </Link>
            </NavbarBrand>
            <NavbarContent className="sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link color="foreground" to="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link to="/create" aria-current="page">
                        Create
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link to="/tasklist" aria-current="page">
                        Tasklist
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" to="#" variant="flat">
                        Create</Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
