import React from "react";
import Logo from "./Logo";
import SearchButton from "./SearchButton";
import ProfileButton from "./ProfileButton";
import CartButton from "./CartButton";
import NavMenu from "./NavMenu";
import Container from "./Container";

function Header() {
  return (
    <header>
      <Container className="py-5">
        <div className="flex justify-between">
          <Logo />
          <div className="flex items-center gap-5">
            <SearchButton />
            <ProfileButton />
            <CartButton />
          </div>
        </div>
      </Container>
      <NavMenu />
    </header>
  );
}

export default Header;
