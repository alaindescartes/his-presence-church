import Image from "next/image";

const Women = () => {
  return (
    <div>
      <div className="w-full">
        <Image
          src="/women.jpg"
          layout="responsive"
          width={1920}
          height={1080}
          alt="Picture of women smiling"
          priority
          className="w-full h-auto"
        />
      </div>
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-2xl font-serif transform transition duration-500 hover:scale-105">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 animate-fadeIn">
            Women Ministry
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
            The women of HPC walk in unity and friendship. We enjoy coming
            together in small groups, discipleship classes, and serving
            together. Our passion is to pursue wisdom and the presence of the
            Lord. We believe the best in one another. We stand for what is
            honorable and pleasing to God. And we are called to cultivate
            healthy relationships among our generations.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
            So wherever you are in life or your walk in Christ, we have a place
            for you!
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 animate-fadeIn">
            JOIN A WOMEN'S Small Group
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
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
