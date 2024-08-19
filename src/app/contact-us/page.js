import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mb-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
        CONTACT US
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
        HIS PRESENCE CHURCH
      </h2>
      <p className="text-center text-gray-600 mb-6">
        1145 St.Albert Trail, St.Albert, AB
      </p>
      <div className="text-center mb-6">
        <Button asChild>
          <Link
            href="https://www.google.com/maps?q=1145+St+Albert+Trail,+Edmonton,+AB,+Canada"
            className="text-white bg-black hover:bg-blue-700 px-4 py-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            DIRECTIONS
          </Link>
        </Button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">OFFICE HOURS</h2>
        <p className="text-gray-600">MONDAY TO FRIDAY 9AM-4PM</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">PHONE</h2>
        <p className="text-gray-600">XXX-XXXX-XXXX</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">EMAIL</h2>
        <p className="text-gray-600">hisPresenceChurch@gmail.com</p>
      </div>

      <form className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <textarea
          name="subject"
          placeholder="Subject"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          rows="4"
        ></textarea>

        <Button className="w-full bg-black hover:bg-tomato-600 text-white font-semibold py-3 rounded">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
