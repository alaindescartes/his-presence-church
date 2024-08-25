import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <div className="flex flex-row gap-8 text-center">
          <Link
            href="/who-we-are"
            className="hover:text-orange-400 transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="contact-us"
            className="hover:text-orange-400 transition duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://facebook.com/Wesige.Live"
            className="hover:text-blue-500 transition duration-300"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="w-[40px] h-[40px]"
            />
          </a>
          <a
            href="https://youtube.com/@pastorlive?si=X6uTOGREMtUSFpKD"
            className="hover:text-red-500 transition duration-300"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              size="2x"
              className="w-[40px] h-[40px]"
            />
          </a>
          <a
            href="https://www.instagram.com/p/B-rASNMggx7/?utm_source=ig_web_copy_link"
            className="hover:text-pink-500 transition duration-300"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="w-[40px] h-[40px]"
            />
          </a>
        </div>
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} HIS PRESENCE CHURCH. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
