// Header.js
"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import HeaderContents from "./HeaderContents";
import HeaderLargeScreen from "./HeaderLargerScreen";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => setIsOpen(false);

  return (
    <>
      {/* Large Screen Header */}
      <div className="hidden lg:block">
        <HeaderLargeScreen />
      </div>

      {/* Mobile Screen Header */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="p-1 absolute z-50 m-2 animate-pulse font-extrabold bg-black">
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-center font-sans font-bold text-slate-400">
                HIS PRESENCE CHURCH
              </SheetTitle>
              <SheetDescription>
                <HeaderContents closeSheet={closeSheet} />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Header;
