"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeaderLargeScreen = () => {
  const router = useRouter();
  const [selectedAbout, setSelectedAbout] = useState("");
  const [selectedMinistries, setSelectedMinistries] = useState("");

  const handleRedirection = async (url) => {
    await router.push(url);
  };

  // Handler for select changes
  const handleSelectChange = async (value, type) => {
    await router.push(value);
    // Reset the select value to show the placeholder after navigation
    if (type === "about") {
      setSelectedAbout("");
    } else if (type === "ministries") {
      setSelectedMinistries("");
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center space-x-4">
        <span>
          <Image
            src="/Logo.jpg"
            width={80}
            height={20}
            alt="logo"
            className="object-contain"
          />
        </span>
        <span className="text-xl font-bold">HIS PRESENCE CHURCH</span>
      </div>

      <div className="flex gap-4 items-center">
        <Button onClick={() => handleRedirection("/")}>HOME</Button>
        <Button onClick={() => handleRedirection("/giving")}>GIVING</Button>

        <Select
          className="bg-black text-white"
          value={selectedAbout}
          onValueChange={(value) => handleSelectChange(value, "about")}
        >
          <SelectTrigger className="bg-black text-white p-2 font-bold">
            <SelectValue placeholder="ABOUT US" />
          </SelectTrigger>
          <SelectContent className="bg-black text-white">
            <SelectItem value="/who-we-are">WHO WE ARE</SelectItem>
            <SelectItem value="/faqs">FAQS</SelectItem>
            <SelectItem value="/contact-us">CONTACT US</SelectItem>
          </SelectContent>
        </Select>

        <Select
          className="bg-black text-white"
          value={selectedMinistries}
          onValueChange={(value) => handleSelectChange(value, "ministries")}
        >
          <SelectTrigger className="bg-black text-white p-2 font-bold">
            <SelectValue placeholder="MINISTRIES" />
          </SelectTrigger>
          <SelectContent className="bg-black text-white">
            <SelectItem value="/women">WOMEN</SelectItem>
            <SelectItem value="/men">MEN&apos;S</SelectItem>
            <SelectItem value="/children">CHILDREN</SelectItem>
            <SelectItem value="/students">STUDENTS</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HeaderLargeScreen;
