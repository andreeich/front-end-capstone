import logo from "../assets/logo-dark.png";
import Badge from "./Badge";
import Button from "./Button";

function Footer() {
  return (
    <footer className="text-gray-200 bg-gray-950">
      <section className="container flex flex-col md:flex-row content gap-6xl md:gap-7xl pt-6xl md:pt-7xl pb-6xl">
        <section className="flex flex-col w-full max-w-xs gap-3xl md:gap-8">
          <img src={logo} width={147.5} height={40} alt="Little Lemon" />
          <p className="text-text-md/text-md">
            Welcome to our restaurant! We are happy to provide you with healthy
            and delicious dished of all kinds.
          </p>
        </section>
        <nav className="flex gap-3xl md:gap-8">
          <article className="flex flex-col gap-4">
            <header className="text-gray-300 text-text-sm/text-sm font-bold">
              Doorman Navigation
            </header>
            <menu className="flex flex-col gap-lg">
              <li>
                <Button type="link" color="link-dark">
                  Home
                </Button>
              </li>
              <li>
                <Button type="link" color="link-dark">
                  About
                </Button>
              </li>
              <li>
                <Button type="link" color="link-dark">
                  Menu
                </Button>
              </li>
              <li className="flex items-center gap-md">
                <Button type="link" color="link-dark">
                  Reservation
                </Button>
                <Badge color="gray-dark">New</Badge>
              </li>
              <li>
                <Button type="link" color="link-dark">
                  Order Online
                </Button>
              </li>
              <li>
                <Button type="link" color="link-dark">
                  Login
                </Button>
              </li>
            </menu>
          </article>
          <article className="flex flex-col gap-4">
            <header className="text-gray-300 text-text-sm/text-sm font-bold">
              Contact
            </header>
            <menu className="flex flex-col gap-lg">
              <li>
                <Button type="link" color="link-dark">
                  Chicago, st. Some place
                </Button>
              </li>
              <li>
                <Button type="link" color="link-dark">
                  +1 (999) 999 99 99
                </Button>
              </li>
              <li>
                <Button type="link" color="link-dark" className="break-all">
                  support@littlelemon.com
                </Button>
              </li>
            </menu>
          </article>
        </nav>
      </section>
      <section className="container flex flex-col justify-between md:items-center md:flex-row py-5xl md:py-6xl content gap-3xl">
        <menu className="flex items-center gap-3xl md:order-last">
          <li>
            <Button type="link" color="link-dark" aria-label="X">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.9455 23L10.396 15.0901L3.44886 23H0.509766L9.09209 13.2311L0.509766 1H8.05571L13.286 8.45502L19.8393 1H22.7784L14.5943 10.3165L23.4914 23H15.9455ZM19.2185 20.77H17.2398L4.71811 3.23H6.6971L11.7121 10.2532L12.5793 11.4719L19.2185 20.77Z"
                  fill="#98A2B3"
                />
              </svg>
            </Button>
          </li>
          <li>
            <Button type="link" color="link-dark" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_7883_2306)">
                  <path
                    d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                    fill="#98A2B3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7883_2306">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </li>
          <li>
            <Button type="link" color="link-dark" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                  fill="#98A2B3"
                />
                <path
                  d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                  fill="#98A2B3"
                />
                <path
                  d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                  fill="#98A2B3"
                />
              </svg>
            </Button>
          </li>
          <li>
            <Button type="link" color="link-dark" aria-label="Youtube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
              >
                <path
                  d="M23.7609 4.20005C23.7609 4.20005 23.5266 2.54536 22.8047 1.8188C21.8906 0.862549 20.8688 0.857861 20.4 0.801611C17.0438 0.557861 12.0047 0.557861 12.0047 0.557861H11.9953C11.9953 0.557861 6.95625 0.557861 3.6 0.801611C3.13125 0.857861 2.10938 0.862549 1.19531 1.8188C0.473438 2.54536 0.24375 4.20005 0.24375 4.20005C0.24375 4.20005 0 6.14536 0 8.08599V9.90474C0 11.8454 0.239062 13.7907 0.239062 13.7907C0.239062 13.7907 0.473437 15.4454 1.19062 16.1719C2.10469 17.1282 3.30469 17.0954 3.83906 17.1985C5.76094 17.3813 12 17.4375 12 17.4375C12 17.4375 17.0438 17.4282 20.4 17.1891C20.8688 17.1329 21.8906 17.1282 22.8047 16.1719C23.5266 15.4454 23.7609 13.7907 23.7609 13.7907C23.7609 13.7907 24 11.85 24 9.90474V8.08599C24 6.14536 23.7609 4.20005 23.7609 4.20005ZM9.52031 12.1125V5.36724L16.0031 8.75161L9.52031 12.1125Z"
                  fill="#98A2B3"
                />
              </svg>
            </Button>
          </li>
        </menu>
        <p className="text-gray-300 text-text-md/text-md">
          © 2022 Little Lemon. All rights reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
