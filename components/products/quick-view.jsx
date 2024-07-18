import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
    InformationCircleIcon,
    ShoppingBagIcon,
  } from "@heroicons/react/24/outline";


function QuickView() {
  return (
    <div className="flex justify-center my-5">
        <div className="card w-1/3 border-2 border-gray-200 flex columns-2 shadow-md">
          <div className="flex space-x-4 w-full p-4">
            <Image
              src="/assets/images/hmgoepprod.png"
              width={100}
              height={100}
              alt="boot"
              className="mb-12 w-fit h-fit shadow-md"
            />

            <div className="w-full">
              <h1 className="text-gray-600 font-semibold">
                Crumpled shirt resort Regular Fit
              </h1>

              <h2 className="text-gray-600 text-sm">599 CZK</h2>
              <h2 className="text-gray-500 text-[10px]">Grey-beige</h2>

              <div className="flex space-x-2 my-4">
                {["1.png", "2.png", "3.png", "4.png"].map((image, index) => (
                  <Image
                    key={index}
                    src={`/assets/images/${image}`}
                    className={`w-fit ${
                      index === 2 ? "border-2 border-gray-400" : ""
                    }`}
                    width={45}
                    height={45}
                    alt={image}
                  />
                ))}
              </div>

              <div className="my-2">
                <h1 className="text-xs font-semibold">Sizes</h1>
                <div className="grid grid-cols-5 gap-3 mt-2">
                  {["XS", "S", "M", "L", "XL"].map((size, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center p-2 bg-gray-200 rounded-sm"
                    >
                      <h2 className="text-xs text-gray-800">{size}</h2>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-2 my-2 text-center bg-black rounded-md">
                <h4 className="text-white text-xs">Add To Card</h4>
              </button>

              <div className="flex items-center gap-1 my-2">
                <ShoppingBagIcon aria-hidden="true" className="h-3 w-3" />
                <h2 className="text-xs text-gray-600">Find in store</h2>
              </div>

              <div className="flex items-center gap-1 my-2">
                <InformationCircleIcon aria-hidden="true" className="h-3 w-3" />
                <h2 className="text-xs text-gray-600">Members with Plus status get free online returns.</h2>
              </div>

              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm font-semibold">
                      Descriptions
                    </AccordionTrigger>
                    <AccordionContent>
                      <h2 className="text-gray-600 text-xs">
                        {" "}
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </h2>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-sm font-semibold">
                      Materials
                    </AccordionTrigger>
                    <AccordionContent>
                      <h2 className="text-gray-600 text-xs">
                        Polyester 99%, Elastane 1%
                      </h2>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-sm font-semibold">
                      Care Guid
                    </AccordionTrigger>
                    <AccordionContent>
                      <h2 className="text-gray-600 text-xs">
                        You too can help the environment and contribute to the
                        sustainability of fashion. Bring unwanted clothes or
                        household textiles to any H&M store. This allows you to
                        carry them on, use them or recycle them.
                      </h2>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default QuickView;