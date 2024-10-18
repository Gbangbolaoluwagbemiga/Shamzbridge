import { useState, useEffect, useRef } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

const Header = () => {
  const Links = ["Hero", "About", "Services", "Footer"];
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = headerRef.current.offsetTop;
      setIsSticky(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToComponent = (id) => {
    scroller.scrollTo(id, {
      duration: 500,
      smooth: "easeInOutQuart",
      offset: -100,
    });
    setOpen(false);
  };

  return (
    <div>
      <div
        ref={headerRef}
        className={`transition-all duration-500 ${
          open ? "h-[20rem]" : "h-16"
        } z-[100] w-full overflow-hidden bg-slate-800 text-white shadow-md ${
          isSticky ? "fixed left-0 right-0 top-0" : ""
        }`}
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex w-full items-center justify-between bg-slate-900 px-5 py-4 md:flex md:px-10  md:pb-2">
          <div className="cursor-pointer pt-2 text-[22px] font-bold text-blue-500">
            <p className="font-bold">Shamzbridge</p>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer text-3xl font-semibold md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`absolute left-0 w-full bg-transparent pb-6 pl-8 text-white opacity-[100] transition-all duration-500 ease-in md:static md:z-auto md:ms-auto md:flex md:w-[30rem] md:items-center md:pb-0 md:pl-0 lg:w-auto ${
              open ? "top-[61px] z-auto" : "-top-[490px] -z-[50]"
            } ${isSticky ? "-z-10" : "z-10"}`}
          >
            {Links.map((link, index) => (
              <li
                key={index}
                className={`my-7 cursor-pointer transition-all duration-300 hover:font-bold sm:text-xl md:text-base lg:text-xl ${
                  link !== "Get In Touch" &&
                  "sm:hover:bg-gray-200 md:hover:bg-transparent"
                } md:my-0 md:ml-8 ${
                  link === "Services" &&
                  "me-3 rounded-md border border-blue-500 bg-blue-600 p-2 text-center text-sm text-white md:me-0 md:py-1 md:hover:bg-blue-700"
                }`}
                onClick={() => scrollToComponent(link.toLowerCase())}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
