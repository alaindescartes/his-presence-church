import Image from "next/image";

const Men = () => {
  return (
    <div>
      <div className="w-full">
        <Image
          src="/men.jpg"
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
            MEN MINISTRY
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
            At HPC, we recognize that men are dynamic and driven, equipped with
            the unique potential to influence and shape the future of our homes,
            businesses and communities. We believe that every man carries the
            power to be a force for positive change, whether it’s leading with
            integrity in the workplace, nurturing strong and loving families, or
            building stronger, more connected neighborhoods. But this kind of
            impact doesn’t just materialize overnight. It’s a journey that
            requires intentionality and commitment.That’s why we’re here to
            support and challenge you to step up and getinvolved. Through
            meaningful connections, growth opportunities, and real-world
            application, our men’s ministry is dedicated to helping you make
            strategic decisions that align with your purpose and calling in
            Christ.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
            So wherever you are in life or your walk in Christ, we have a place
            for you!
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 animate-fadeIn">
            JOIN A MEN'S Group
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
            Whether married, single, older or younger, all men are welcome to
            join us weekly and be challenged to grow deeper in intellect,
            relationships and faith.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Men;
