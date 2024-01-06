import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const closeOpen = () => {
    setOpen(false);
  };

  const burgerIcon = useMemo(() => {
    return open ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          d="M18 6L6 18M6 6l12 12"
          stroke="#344054"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 12H21M3 6H21M3 18H21"
          stroke="#344054"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }, [open]);

  const navLinksData = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "About",
      to: "/",
    },
    {
      id: 3,
      name: "Menu",
      to: "/",
    },
    {
      id: 4,
      name: "Reservation",
      to: "/reservation",
    },
    {
      id: 5,
      name: "Order online",
      to: "/",
    },
  ];
  const navLinks = navLinksData.map((link) => {
    return (
      <li key={link.id}>
        <Link to={link.to} onClick={closeOpen}>
          <Button size="lg" color="link" type="link">
            {link.name}
          </Button>
        </Link>
      </li>
    );
  });

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-base-white/75 backdrop-blur-md`}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-10 content h-[72px]">
          <Link to={"/"} onClick={closeOpen}>
            <img src={logo} width="147.5" height="40" alt="" />
          </Link>
          <menu className="items-center justify-center hidden gap-8 lg:flex">
            {navLinks}
          </menu>
          <div className="items-center justify-center hidden gap-3 lg:flex">
            <Button size="lg" color="tertiary">
              Log in
            </Button>
            <Button size="lg" color="primary">
              Sign up
            </Button>
          </div>
          <div className="lg:hidden" onClick={handleOpen}>
            <Button type="link" color="link">
              {burgerIcon}
            </Button>
          </div>
        </div>
        <div
          className={`${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-full opacity-0"
          } flex lg:hidden flex-col absolute top-0 pt-[72px] left-0 w-full bg-base-white transition-all z-[-1]`}
        >
          <menu className="flex flex-col gap-6 py-6 content">{navLinks}</menu>
          <hr />
          <div className="flex flex-col gap-3 py-6 content">
            <Button size="lg" color="primary">
              Sign up
            </Button>
            <Button size="lg" color="tertiary">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
