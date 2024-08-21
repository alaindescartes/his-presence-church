"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const HeaderContents = ({ closeSheet }) => {
  const router = useRouter();

  const handleSelectChange = (value) => {
    // Close the sheet
    closeSheet();

    // Redirect based on the selected value
    router.push(value);
  };

  const handleRedirection = (url) => {
    router.push(url);
    closeSheet();
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <Button
        className="w-full bg-black text-white hover:bg-gray-800"
        onClick={() => handleRedirection("/")}
      >
        HOME
      </Button>
      <Button
        className="w-full bg-black text-white hover:bg-gray-800"
        onClick={() => handleRedirection("/giving")}
      >
        GIVING
      </Button>

      <Select
        className="w-full bg-black text-white text-center"
        onValueChange={handleSelectChange}
      >
        <SelectTrigger className="w-full bg-black text-white font-bold">
          <SelectValue placeholder="ABOUT US" />
        </SelectTrigger>
        <SelectContent className="bg-black text-white">
          <SelectItem value="/who-we-are">WHO WE ARE</SelectItem>
          <SelectItem value="/faqs">FAQS</SelectItem>
          <SelectItem value="/contact-us">CONTACT US</SelectItem>
        </SelectContent>
      </Select>

      <Select
        className="w-full bg-black text-white text-center"
        onValueChange={handleSelectChange}
      >
        <SelectTrigger className="w-full bg-black text-white font-bold">
          <SelectValue placeholder="MINISTRIES " />
        </SelectTrigger>
        <SelectContent className="bg-black text-white">
          <SelectItem value="/women">WOMEN</SelectItem>
          <SelectItem value="/men">MEN'S</SelectItem>
          <SelectItem value="/children">CHILDREN</SelectItem>
          <SelectItem value="/students">STUDENTS</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default HeaderContents;
