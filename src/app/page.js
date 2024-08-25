import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className=" mt-3 flex flex-row justify-around animate-bounce-continuous">
        <div className="flex justify-center items-center flex-col p-3">
          <h1 className="text-center text-3xl font-semibold">SUNDAY SERVICE</h1>
          <p className="text-orange-400">11:00AM</p>
        </div>
        <div className="flex justify-center items-center flex-col p-3">
          <h1 className="text-center text-3xl font-semibold">LOCATION</h1>
          <p className="text-blue-400"> 1145 St.Albert Trail in St.Albert</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">CONNECT WITH US</h1>
        <div className="flex justify-center space-x-8">
          <span className="text-4xl text-blue-600 hover:text-blue-800 transition duration-300 ">
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-[60px] h-[60px] hover:scale-110"
            />
          </span>
          <span className="text-4xl text-pink-500 hover:text-pink-700 transition duration-300">
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-[60px] h-[60px] hover:scale-110"
            />
          </span>
          <span className="text-4xl text-red-600 hover:text-red-800 transition duration-300">
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-[60px] h-[60px] hover:scale-110"
            />
          </span>
        </div>
      </div>

      <div className="mt-8 p-3">
        <h1 className="text-3xl font-semibold mb-6 text-center">OUR PASTOR</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="flex-shrink-0 lg:mr-6 mb-4 lg:mb-0">
            <Image
              src="https://res.cloudinary.com/dmtmat9y5/image/upload/v1724610726/Live_niq3zm.jpg"
              width={300}
              height={300}
              alt="Pastor Live"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col text-left pl-3 pr-3">
            <p className="mb-4 text-lg leading-relaxed font-serif">
              Meet lead Pastor Live Wesige, the founder of His Presence Church.
              He is a dedicated servant of God with a lifelong commitment to
              spiritual leadership and community building. Pastor Live&apos;s
              journey in faith began at a nightclub in Kigali back in 1999,
              where his profound encounter with God set the course for his
              future. Since then, he has devoted over two decades to ministry,
              touching lives and nurturing faith across continents. He is a
              visionary leader, a sought after conference speaker, published
              author, life coach, and family man who carries a dynamic anointing
              and a vibrant prophetic edge whose reach goes beyond the walls of
              His Presence Church through his social media platforms.
            </p>
            <i className="block text-gray-700 text-sm italic border-l-4 border-orange-400 bg-gray-100 p-4 rounded-md">
              I pray you stand on the word not with the world, thus choose a
              church on the basis of your doctrinal convictions not for social
              reasons. - Pastor Live
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
