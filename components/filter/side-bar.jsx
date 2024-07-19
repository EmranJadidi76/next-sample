import { useState } from "react";

const colours = [
  { key: "White", value: "bg-white" },
  { key: "Black", value: "bg-black" },
  { key: "Blue", value: "bg-blue-500" },
  { key: "Red", value: "bg-red-600" },
  { key: "Purple", value: "bg-violet-600" },
  { key: "Pastel", value: "bg-violet-200" },
  { key: "Green", value: "bg-green-500" },
];

const Sidebar = () => {
  const [isTypeOpen, setIsTypeOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isInseamOpen, setIsInseamOpen] = useState(true);
  const [iscolourOpen, setColourOpen] = useState(true);

  const toggleType = () => setIsTypeOpen(!isTypeOpen);
  const toggleSize = () => setIsSizeOpen(!isSizeOpen);
  const toggleInseam = () => setIsInseamOpen(!isInseamOpen);
  const toggleColour = () => setColourOpen(!iscolourOpen);

  return (
    <div className="w-64 p-4 space-y-4  bg-white">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-md font-bold">Type</h2>
          <button onClick={toggleType} className="text-xl font-bold">
            {isTypeOpen ? "-" : "+"}
          </button>
        </div>
        {isTypeOpen && (
          <div className="mt-2 space-y-2">
            {[
              "Athletic Shorts",
              "Liner Shorts",
              "Chino Shorts",
              "Sweat Shorts",
              "Cargo Shorts",
              "Board Shorts",
              "Base Layers",
            ].map((type) => (
              <div key={type} className="flex items-center gap-2">
                <input type="checkbox" id={type} />
                <label className="text-sm" htmlFor={type}>
                  {type}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-md font-bold">Size</h2>
          <button onClick={toggleSize} className="text-xl font-bold">
            {isSizeOpen ? "-" : "+"}
          </button>
        </div>
        {isSizeOpen && (
          <div className="mt-2 space-y-2">
            <div className="grid grid-cols-4 gap-2">
              {["28", "29", "30", "31", "32", "33", "34", "36", "38", "40"].map(
                (size) => (
                  <button key={size} className="border text-xs p-2">
                    {size}
                  </button>
                )
              )}
            </div>
            <hr className="border-t-2 border-gray-100 border-dashed my-4" />
            <div className="grid grid-cols-4 gap-2 mt-2">
              {["XS", "S", "M", "L", "XL", "2XL", "XXL", "XXXL"].map((size) => (
                <button key={size} className="border text-xs p-2">
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-ms font-bold">Inseam</h2>
          <button onClick={toggleInseam} className="text-xl font-bold">
            {isInseamOpen ? "-" : "+"}
          </button>
        </div>
        {isInseamOpen && (
          <div className="mt-2 space-y-2">
            <div className="grid grid-cols-4 gap-2">
              {['3"', '5"', '6"', '7"', '8"', '9"', '10"', '21"'].map(
                (inseam) => (
                  <button key={inseam} className="border text-xs p-2">
                    {inseam}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-ms font-bold">Clour</h2>
          <button onClick={toggleColour} className="text-xl font-bold">
            {iscolourOpen ? "-" : "+"}
          </button>
        </div>
        {iscolourOpen && (
          <div className="mt-2 space-y-2">
            <div className="grid grid-cols-2 gap-4">
              {colours.map((colour, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`rounded-full w-5 h-5 ${colour.value} border-2`}
                  ></div>
                  <h2 className="text-sm font-semibold text-gray-600">
                    {colour.key}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
