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
    switch (value) {
      case "women":
        router.push("/women");
        break;
      case "men":
        router.push("/men");
        break;
      case "children":
        router.push("/children");
        break;
      default:
        router.push("/");
        break;
    }
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
        onClick={() => handleRedirection("/faqs")}
      >
        FAQS
      </Button>
      <Button
        className="w-full bg-black text-white hover:bg-gray-800"
        onClick={() => handleRedirection("/who-we-are")}
      >
        WHO WE ARE
      </Button>

      <Button
        className="w-full bg-black text-white hover:bg-gray-800"
        onClick={() => handleRedirection("/giving")}
      >
        GIVING
      </Button>
      <Button
        className="w-full bg-black text-white hover:bg-gray-800"
        onClick={() => handleRedirection("/contact-us")}
      >
        CONTACT US
      </Button>
      <Select
        className="w-full bg-black text-white text-center"
        onValueChange={handleSelectChange}
      >
        <SelectTrigger className="w-full bg-black text-white font-bold">
          <SelectValue placeholder="MINISTRIES " />
        </SelectTrigger>
        <SelectContent className="bg-black text-white">
          <SelectItem value="women">WOMEN</SelectItem>
          <SelectItem value="men">MEN'S</SelectItem>
          <SelectItem value="children">CHILDREN</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default HeaderContents;
