import Image from "next/image";

const Men = () => {
  return (
    <div>
      <div className="relative w-full h-[500px]">
        <Image
          src="https://res.cloudinary.com/dmtmat9y5/image/upload/v1724613118/men2_m8gl1d.jpg"
          fill
          alt="Picture of women smiling"
          priority
          className="object-cover"
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
            power to be a force for positive change, whether it&apos;s leading
            with integrity in the workplace, nurturing strong and loving
            families, or building stronger, more connected neighborhoods. But
            this kind of impact doesn&apos;t just materialize overnight.
            It&apos;s a journey that requires intentionality and commitment.
            That&apos;s why we&apos;re here to support and challenge you to step
            up and get involved. Through meaningful connections, growth
            opportunities, and real-world application, our men&apos;s ministry
            is dedicated to helping you make strategic decisions that align with
            your purpose and calling in Christ.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
            So wherever you are in life or your walk in Christ, we have a place
            for you!
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 animate-fadeIn">
            JOIN A MEN&apos;S Group
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
