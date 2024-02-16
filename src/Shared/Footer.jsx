import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Swal from "sweetalert2";
import logo from "../assets/footer-logo.png";

const Footer = () => {
  const socialIcons = [
    {
      pic: <FaFacebook />,
      link: "https://www.facebook.com/",
    },
    {
      pic: <FaTwitter />,
      link: "https://twitter.com/",
    },
    {
      pic: <RiInstagramFill />,
      link: "https://www.instagram.com/",
    },
  ];

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid) {
      setTimeout(() => {
        Swal.fire({
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
        });
      }, []);
      setEmail("");
    }
  };

  return (
    <div className="footer px-5 lg:px-0 py-7  lg:py-16">
      <div className="container mx-auto">
        <div className="pb-7 lg:pb-8 mb-5 lg:mb-8 flex flex-col lg:flex-row justify-between gap-8 lg:gap-3 items-center border-b border-b-lightGray">
          <div className="max-w-authWidth">
            <img className="mb-5 lg:mb-6" src={logo} alt="logo" />
            <p className="text-base font-normal mb-5 lg:mb-8">
              Empowering property owners with seamless tools and insights for
              efficient real estate management.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.length > 0 &&
                socialIcons.map((data, index) => (
                  <Link
                    target="_blank"
                    to={data.link}
                    key={index}
                    className="border border-slate-200 text-primary  hover:text-white rounded-full h-10 w-10 flex justify-center items-center transition duration-600 ease-in-out hover:bg-primary"
                  >
                    {data.pic}
                  </Link>
                ))}
            </div>
          </div>
          <div className="max-w-authWidth">
            <p className="text-2xl font-bold mb-2">Subscribe</p>
            <p className="text-base font-normal mb-6">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <form
              className="hidden mb-4 w-full lg:flex items-center gap-2 border border-slate-200 rounded-full bg-slate-50 py-2 pl-6 pr-2"
              onSubmit={handleEmailSubmit}
            >
              <input
                className={`bg-transparent w-full ${
                  isEmailValid ? "" : "border-red-500"
                }`}
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit">Subscribe</button>
            </form>

            <form className="block lg:hidden" onSubmit={handleEmailSubmit}>
              <input
                className={`year mb-4 ${isEmailValid ? "" : "border-red-500"}`}
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit" className="w-full mb-4">
                Subscribe
              </button>
            </form>

            <p className="text-xs text-slate-950">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>
        <div className="font-medium text-sm flex flex-col lg:flex-row justify-between gap-5 lg:gap-6 items-center ">
          <p>© 2023 RETracker. All rights reserved.</p>
          <div className=" flex items-center gap-6">
            <Link to="#">Privacy Policy</Link>
            <Link to="#"> of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
