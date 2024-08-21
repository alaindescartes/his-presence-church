"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Children = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full relative">
        <h1 className="text-center absolute bottom-8 left-1/2 transform -translate-x-1/2 text-6xl text-white font-mono animate-bounce drop-shadow-lg">
          HPC Kids
        </h1>
        <Image
          src="/kids.jpg"
          layout="responsive"
          width={1920}
          height={1080}
          alt="Picture of children smiling"
          priority
          className="w-full h-auto object-cover rounded-b-lg shadow-xl"
        />
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 flex-col p-10 md:p-20 mt-4 text-white rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4">
          ABOUT HPC KIDS
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          At HPC Kids (8 weeks - 5th grade), we are committed to helping kids
          discover who God has created them to become. We do this by creating
          dynamic programs in safe and fun environments that are age-appropriate
          and relevant to their world. Our amazing team of volunteers pour into
          the kids in many different ways to create the best hour of the week
          for kids!
        </p>
      </div>

      <div className="bg-white text-gray-900 flex-col p-10 md:p-24 mt-8 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4">
          JOIN US!
        </h1>
        <p className="text-lg md:text-xl font-semibold leading-relaxed">
          Kids Ministry is available for kids ages
          <span className="font-extrabold"> 8 Weeks - 5th Grade</span> at the
          following services:
        </p>
        <p className="flex flex-col mt-6 space-y-2 text-lg md:text-xl font-semibold">
          <span>Saturdays 5:00pm</span>
          <span>Sundays 8:15am | 9:45am | 11:30am</span>
        </p>
      </div>

      <div className="bg-white text-gray-900 flex flex-col items-center justify-center p-10 md:p-20 mt-8 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          FIRST TIME FAMILY?
        </h1>
        <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 text-center">
          Preregistering your child for kids' ministry allows you to save time
          during check-in, ensuring a quick and hassle-free drop-off. It also
          gives you peace of mind knowing that we have all the necessary
          information to provide the best experience for your child.
        </p>

        <div className="w-[400px] h-[300px] mt-4 mb-10">
          <img
            src="/baby.jpg"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            alt="Baby"
          />
        </div>
        <Button
          className="bg-black hover:bg-slate-400 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          onClick={() => router.push("/children/register")}
        >
          PREREGISTER HERE
        </Button>
      </div>
    </div>
  );
};

export default Children;
