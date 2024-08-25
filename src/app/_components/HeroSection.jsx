import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-full max-w-full">
      <Image
        src="https://res.cloudinary.com/dmtmat9y5/image/upload/v1724610732/worship_slgqj8.jpg"
        width={1500}
        height={500}
        alt="welcome image of people worshipping"
        priority
        style={{ width: "auto" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold">IGNITING FAITH</h1>
        <h1 className="text-4xl font-bold">INSPIRING LOVE</h1>
        <p className="mt-4">
          <i>
            &quot;Now thanks be to God who always leads us in triumph in Christ,
            and through us diffuses the fragrance of His knowledge in every
            place.&quot; 2 Corinthians 2:14
          </i>
        </p>

        <Button asChild className="mt-6 bg-white text-black hover:bg-slate-400">
          <Link href="#">JOIN US FOR CHURCH</Link>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
