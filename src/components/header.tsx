import Link from "next/link";
import { Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
// import * as actions from '@/actions';
// import {auth} from '@/auth';
import HeaderAuth from "@/components/header-auth";
import SearchInput from "@/components/search-input";

const Header = () => {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href='/' className="font-bold">Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {
          <HeaderAuth /> 
        }
      </NavbarContent>
    </Navbar>
  )

}

export default Header;