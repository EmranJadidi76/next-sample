"use client";

import QuickView from "@/components/products/quick-view";
import Image from "next/image";
import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/filter/side-bar";

export default function Home() {
  const handleFilterChange = () => {};

  return (
    <main>
      <div className="p-6 bg-gray-50">
        <div className="flex gap-4">
          <Sidebar />

          <div className="grid grid-cols-4 gap-4">
            {[
              "p1.jpg",
              "p2.jpg",
              "p3.jpg",
              "p4.jpg",
              "p5.jpg",
              "p6.jpg",
              "p7.jpg",
              "p8.jpg",
              "p9.jpg",
              "p10.jpg",
            ].map((image, index) => (
              <div
                key={index}
                className="relative flex justify-center pb-2 rounded-sm bg-white shadow-sm"
              >
                <div>
                  <div className="relative">
                    <Image
                      key={index}
                      src={`/assets/images/${image}`}
                      className="object-cover rounded-t-md"
                      width={400}
                      height={300}
                      alt={image}
                    />
                    <div className="absolute top-2 right-2 cursor-pointer">
                      <HeartIcon aria-hidden="true" className="h-6 w-6" />
                    </div>

                    <div className="absolute top-2 left-2 cursor-pointer">
                      <Dialog>
                        <DialogTrigger asChild>
                          <EyeIcon aria-hidden="true" className="h-6 w-6" />
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[700px]">
                          <DialogHeader>
                            <DialogTitle>
                              {" "}
                              Slim Fit Waffled Polo Shirt
                            </DialogTitle>
                          </DialogHeader>
                          <QuickView />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <div className="px-2">
                    <h2 className="text-xs text-gray-600 font-semibold mt-4">
                      Slim Fit Waffled Polo Shirt
                    </h2>

                    <h2 className="text-xs text-gray-600 mt-2">$ 36.99</h2>

                    <div className="flex gap-1 mt-2">
                      <div className="rounded-full w-2 h-2 bg-violet-500"></div>
                      <div className="rounded-full w-2 h-2 bg-green-500"></div>
                      <div className="rounded-full w-2 h-2 bg-blue-500"></div>
                    </div>

                    <button className="w-full py-2 mt-4 text-center bg-black rounded-md">
                      <h4 className="text-white text-xs">Add To Card</h4>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
