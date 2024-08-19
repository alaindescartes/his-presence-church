import Image from "next/image";

const Children = () => {
  return (
    <div>
      <div className="w-full">
        <Image
          src="/kids.jpg"
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
            HPC kids
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
            At HPC kids (8 weeks-5th grade) we are committed to helping kids
            discover who God has created them to become. We do this by creating
            dynamic programs in safe and fun environments that are age
            appropriate and relevant to their world. Our amazing team of
            volunteers pour into the kids in many different ways to create the
            best hour of the week for the kids!
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-8 animate-fadeIn">
            HPC students
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
            At HPC we aim to ensure that every student is KNOWN by a caring
            adult. Every student understands their VALUE to Christ and His
            kingdom. Every student is CONNECTED to the local church to impact
            their schools, community, and world for Christ. Join the movement
            where: fun is a given, depth is developed, and relationships are
            created to last a lifetime.
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-8 animate-fadeIn">
            Middle school
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
            HPC middle school is full of fun and unique events for 6th- 8th
            graders. We have weekly programs, one-time events, camps, and so
            much more! At middle school, students will laugh, make friends, and
            grow closer to God.
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mb-8 animate-fadeIn">
            High school
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
            HPC high school exist to connect teenagers to God, to each other,
            and to adult leaders who are endowed with tremendous spiritual
            insights and unmatched passion for teenagers! Here you’ll build
            lasting memories of fun, you’ll be trained, challenged, equipped and
            guided in a godly and Christ-centered way to create meaningful
            relationships in a fun and more engaging way!
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mb-6 animate-fadeIn">
            GET INVOLVED Join the Team
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 animate-fadeIn">
            Meeting people and making new friends is easy while doing an
            activity. Whether you want to serve a few times a year or on a
            weekly team, please join us. We promise it will be a memorable
            experience for you while you are doing something fun!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Children;
