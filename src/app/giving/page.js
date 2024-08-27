"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Giving = () => {
  const router = useRouter();
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg shadow-xl font-serif text-center">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 animate-fadeIn">
        GIVING at HPC
      </h1>
      <div className="mb-8 p-6 border-l-4 border-indigo-400 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="text-lg text-gray-800">
          Do you want to join us in our mission of Igniting faith and inspiring
          love, as we are committed to loving people to real life in Jesus
          Christ? Your generosity enables us to help more and more people
          experience that life-changing relationship. We are truly grateful for
          your donation and hope the convenience and simplicity of online giving
          will be helpful to you.
        </p>
        <p className="text-lg text-gray-800 mt-4">
          Financial giving can be divided up into two categories: tithes and
          offerings. The Bible teaches us that we worship the Lord with our
          tithe, which is ten percent of our income contributed to the church on
          a regular basis. When we feel called to give over and above our tithe,
          we do so as an offering.
        </p>
      </div>
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 animate-fadeIn">
        Ways To Give
      </h2>
      <div className="mb-8 p-6 border-l-4 border-blue-400 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="text-lg text-gray-800">
          We have several options for you to choose from that make giving to our
          church easy, safe, and secure. You can opt to give online through
          smart giving, or during one of our services.
        </p>
        <p className="text-lg text-gray-800 mt-4">
          We are truly grateful for your donation and hope the convenience and
          simplicity of online giving will be helpful to you. You can use our
          secure portal below to quickly and easily give online.
        </p>
      </div>
      <div className="mb-8 p-6 border-l-4 border-purple-400 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-gray-900">Give Online</h3>
        <Button
          className="mt-4 bg-black hover:bg-blue-700 text-white py-2 px-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse"
          style={{ animationDuration: "2s" }}
          onClick={() => router.push("/checkout")}
        >
          Give Now
        </Button>
      </div>
      <div className="mb-8 p-6 border-l-4 border-red-400 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-gray-900">
          Give In Service
        </h3>
        <p className="text-lg text-gray-800 mt-4">
          If you prefer, you can give during a weekend service by filling out
          the envelope located on your seat and placing it in the offering
          containers at each entrance of the auditorium. You can use this
          envelope to give by cash or check.
        </p>
        <p className="text-lg text-gray-800 mt-4">
          If you prefer to give by mail, please note that our mailing address
          is:
        </p>
        <p className="text-lg text-gray-900 font-semibold">
          70 Edgefield Way, St.Albert, Alberta, T8N 8A6
        </p>
      </div>
    </div>
  );
};

export default Giving;
