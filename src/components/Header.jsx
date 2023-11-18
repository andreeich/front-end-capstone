import { useMemo, useState } from "react";

import Button from "./Button";

import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
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

  return (
    <header className={`relative z-50 bg-base-white`}>
      <div className="container">
        <div className="flex items-center justify-between gap-10 content bg-base-white h-[72px]">
          <img src={logo} width="147.5" height="40" alt="" />
          <menu className="items-center justify-center hidden gap-8 lg:flex">
            <li>
              <Button size="lg" color="link" type="link">
                Home
              </Button>
            </li>
            <li>
              <Button size="lg" color="link" type="link">
                About
              </Button>
            </li>
            <li>
              <Button size="lg" color="link" type="link">
                Menu
              </Button>
            </li>
            <li>
              <Button size="lg" color="link" type="link">
                Reservation
              </Button>
            </li>
            <li>
              <Button size="lg" color="link" type="link">
                Order online
              </Button>
            </li>
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
          <menu className="flex flex-col gap-6 py-6 content">
            <li>
              <Button size="lg" type="link" color="link">
                Home
              </Button>
            </li>
            <li>
              <Button size="lg" type="link" color="link">
                About
              </Button>
            </li>
            <li>
              <Button size="lg" type="link" color="link">
                Menu
              </Button>
            </li>
            <li>
              <Button size="lg" type="link" color="link">
                Reservation
              </Button>
            </li>
            <li>
              <Button size="lg" type="link" color="link">
                Order online
              </Button>
            </li>
          </menu>
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
