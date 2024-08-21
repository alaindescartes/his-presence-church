import Image from "next/image";

const Women = () => {
  return (
    <div>
      {/* Header Image Section */}
      <div className="relative w-full h-[500px]">
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold font-serif animate-bounce z-20 md:h-[100px] ">
          HPC | <span className="ml-2">WOMEN</span>
        </h2>
        <Image
          src="/women.jpg"
          layout="fill"
          objectFit="cover"
          alt="Picture of women smiling"
          priority
          className="z-10"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-2xl font-serif transform transition duration-500 hover:scale-105 mt-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Women Ministry
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            The women of HPC walk in unity and friendship. We enjoy coming
            together in small groups, discipleship classes, and serving
            together. Our passion is to pursue wisdom and the presence of the
            Lord. We believe the best in one another. We stand for what is
            honorable and pleasing to God. And we are called to cultivate
            healthy relationships among our generations.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            So wherever you are in life or your walk in Christ, we have a place
            for you!
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            JOIN A WOMEN'S Small Group
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Small Groups offer a safe and supportive space for you to grow in
            your relationship with God and build meaningful relationships with
            other women. We encourage you to join a group today and become a
            part of a community that uplifts and encourages you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Women;
