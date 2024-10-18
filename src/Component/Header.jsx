import { useState, useEffect, useRef } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

const Header = () => {
  const Links = ["About", "Hero", "Partners", "Community"];
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
        className={`transition-all duration-700 ${
          open && "h-full"
        } z-[100] w-full  overflow-hidden bg-green-500 text-black shadow-md ${
          isSticky ? "fixed left-0 right-0 top-0" : ""
        }`}
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
      >
        <div className=" w-full items-center justify-between bg-green-900 px-5 py-4 md:flex md:px-10 md:py-0 md:pb-2">
          <div className="z-[100] cursor-pointer pt-2 text-[22px] font-bold text-[#AE2C5D]">
            <p className="font-bold">Shamzbridge</p>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 z-[100] cursor-pointer text-3xl font-[600px] text-white md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`absolute left-0 w-full bg-stone-900 pb-6 pl-8 text-white opacity-[100] transition-all duration-500 ease-in md:static md:z-auto md:ms-auto md:flex md:w-[30rem] md:items-center md:pb-0 md:pl-0 lg:w-auto ${
              open ? "top-[60px]" : "-top-[490px] -z-[50]"
            } ${isSticky ? "-z-10" : "z-10"}`}
          >
            {Links.map((link, index) => (
              <li
                key={index}
                className={`my-7 cursor-pointer transition-all duration-300 hover:font-bold sm:text-xl md:text-base lg:text-xl ${
                  link !== "Get In Touch" &&
                  "sm:hover:bg-gray-200 md:hover:bg-[transparent]"
                } md:my-0 md:ml-8 ${
                  link === "Community" &&
                  "me-3 rounded-md border bg-[#AE2C5D] p-2 text-center text-sm text-white md:me-0 md:py-1 md:hover:bg-[#AE2C5D]"
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
