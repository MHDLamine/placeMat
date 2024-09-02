import React from "react";
import ProfileIndicator from "./ProfileIndicator";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  return (
    <nav
      className="border-b shadow-md flex justify-between items-center p-4"
      style={{ backgroundColor: "#242a2f" }}
    >
      <ProfileIndicator />
      <LogoutButton />
    </nav>
  );
};

export default Navbar;
