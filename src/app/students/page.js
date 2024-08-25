"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Student = () => {
  const router = useRouter();
  return (
    <div>
      {/* Header Section with Image */}
      <div className="relative w-full h-[500px]">
        <h2 className="absolute inset-0 flex items-center justify-center sm:justify-end sm:items-end sm:pb-4 text-white text-3xl sm:text-5xl font-bold font-serif animate-bounce z-10 md:h-[100px] ">
          HPC | <span className="ml-2">STUDENTS</span>
        </h2>
        <Image
          src="https://res.cloudinary.com/dmtmat9y5/image/upload/v1724610734/students_evzyeo.jpg"
          alt="Students"
          fill
          quality={100}
          className="z-0 object-cover"
          priority
        />
      </div>

      {/* Navigation Links */}
      <div className="bg-gray-800 p-7 flex flex-row justify-around items-center">
        <Link
          href="#middle"
          className="text-lg font-bold text-white hover:text-orange-500 transition duration-300"
        >
          MIDDLE SCHOOL
        </Link>
        <Link
          href="#highschool"
          className="text-lg font-bold text-white hover:text-orange-500 transition duration-300"
        >
          HIGH SCHOOL
        </Link>
      </div>

      {/* Introduction Section */}
      <div className="bg-gray-900 p-10 md:p-20 text-white">
        <h1 className="text-5xl mb-6 font-bold">What is HPC Students?</h1>
        <p className="text-lg leading-relaxed">
          We exist so that every student is{" "}
          <span className="font-bold">KNOWN</span> by a caring adult. Every
          student understands their <span className="font-bold">VALUE</span> to
          Christ and His Kingdom. Every student is{" "}
          <span className="font-bold">CONNECTED</span> to the local church to
          impact their schools, community, and world for Christ. Join the
          movement: where fun is a given, depth is developed, and relationships
          are created to last a lifetime.
        </p>
      </div>

      {/* Join the Team Section */}
      <div className="bg-white p-10 md:p-20">
        <h1 className="text-5xl mb-6 font-bold text-gray-900">Join the Team</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Meeting people and making new friends is easy while doing an activity.
          Whether you want to serve a few times a year or on a weekly team,
          please join us. We promise it will be a memorable experience for you
          while you are doing something fun!
        </p>
      </div>

      {/* Middle School Section */}
      <div className="p-10 md:p-20 mt-4 bg-sky-500" id="middle">
        <h1 className="text-5xl mb-6 font-bold text-white">MIDDLE SCHOOL</h1>
        <p className="text-lg leading-relaxed text-white">
          A year at Middle School is full of fun and unique events for 6th-8th
          graders. We have weekly programs, one-time events, camps, and so much
          more! At Middle School, students will laugh, make friends, and grow
          closer to God.
        </p>
      </div>

      {/* High School Section */}
      <div className="p-10 md:p-20 bg-green-500" id="highschool">
        <h1 className="text-5xl mb-6 font-bold text-white">HIGH SCHOOL</h1>
        <p className="text-lg leading-relaxed text-white">
          High School exists to connect teenagers to God, to each other, and to
          adult leaders who are passionate about teenagers! Join us where having
          fun is a given, depth is developed, and relationships are created to
          last a lifetime.
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="p-10 text-center bg-gray-100">
        <Button
          onClick={() => router.push("/contact-us")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};

export default Student;
