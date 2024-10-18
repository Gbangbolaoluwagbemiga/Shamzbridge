const Footer = () => {
  return (
    <footer className="footer bg-slate-900 py-10 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-6 flex flex-col items-center">
          <h3 className="text-2xl font-bold">Shamzbridge</h3>
          <p className="mt-2 text-center">
            Building a brighter future through innovative HR solutions.
          </p>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <h4 className="mb-2 text-lg font-semibold">Quick Links</h4>
            <ul>
              <li>
                <a
                  href="#about"
                  className="transition duration-150 hover:text-blue-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition duration-150 hover:text-blue-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition duration-150 hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-semibold">Contact Us</h4>
            <p>Email: info@shamzbridge.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Shamzbridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
