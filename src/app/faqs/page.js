import Link from "next/link";

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Frequently Asked Questions
      </h1>

      <div className="mb-6 p-4 bg-white border-l-4 border-blue-500 rounded shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">
          How do I get to the church?
        </h2>
        <p className="mt-2 text-gray-600">
          Our Sunday morning services are held at 1145 St. Albert Trail in St.
          Albert. We meet in a meeting room called Imarae inside of Holiday Inn
          Express. Friendly greeters will be waiting for your arrival.{" "}
          <Link
            href="https://www.google.com/maps?q=1145+St+Albert+Trail,+Edmonton,+AB,+Canada"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for a map.
          </Link>
        </p>
      </div>

      <div className="mb-6 p-4 bg-white border-l-4 border-green-500 rounded shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">
          What can I expect when I come?
        </h2>
        <p className="mt-2 text-gray-600">
          There is service on Sunday from: 11:00 A.M. You can expect service to
          run about an hour and a half. Come a bit earlier to relax and enjoy
          our FREE coffee or tea at our coffee corner. This area is open 30 min
          before each service, and immediately following the service. No drinks
          allowed into the service unless it&apos;s in a spill-proof cup.
        </p>
      </div>

      <div className="mb-6 p-4 bg-white border-l-4 border-yellow-500 rounded shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">
          Do I have to give money?
        </h2>
        <p className="mt-2 text-gray-600">
          No. While scripture encourages tithes and offerings, it&apos;s not
          mandatory. If you decide to give, you can do it at the Giving Stations
          in the church lobby, via text, e-transfer, or by mail. For further
          details visit the online giving page at{" "}
          <Link
            href="https://www.HPConline.org"
            className="text-blue-500 underline"
          >
            www.HPConline.org.
          </Link>
        </p>
      </div>

      <div className="mb-6 p-4 bg-white border-l-4 border-red-500 rounded shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">
          Do I have to participate in any way?
        </h2>
        <p className="mt-2 text-gray-600">
          Yes. Our worship service is contemporary and upbeat, but there is no
          pressure to participate in any specific way. However, it is encouraged
          to sing along during praise and worship.
        </p>
      </div>

      <div className="p-4 bg-white border-l-4 border-purple-500 rounded shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">What do I wear?</h2>
        <p className="mt-2 text-gray-600">
          There is no dress code. Whether you&apos;re in a suit or shorts and a
          T-shirt, you won&apos;t feel out of place. Our main focus is on your
          presence, not fashion!
        </p>
      </div>
    </div>
  );
};

export default FAQ;
