import "./App.css";

function App() {
  const sizes = [
    {
      value: "S",
      label: "S",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "L",
      label: "L",
    },
    {
      value: "XL",
      label: "XL",
    },
  ];
  const optionHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="p-2">
        <form className=" container bg-blue-500 mx-auto  flex justify-center items-start my-20 lg:w-10/12 rounded-lg">
          <div className="flex flex-col gap-4 m-10">
            <div className="sm:flex justify-between gap-4">
              <label className="font-semibold text-xl">PRODUCT-ID:</label>
              <input
                className="rounded-md text-xl"
                type="text"
                name="product-id"
              />
            </div>
            <div className="md:flex justify-between gap-4">
              <label className="font-semibold text-xl">PRODUCT-NAME:</label>
              <input
                className="rounded-md text-xl"
                type="text"
                name=""
                id="product-name"
              />
            </div>
            <div className="bg-red-500 rounded-lg m-6 p-4 space-y-4">
              <div className="md:flex justify-between gap-4">
                <label className="pr-2 font-semibold text-xl">VARITION:</label>
                <input
                  className="rounded-md text-xl"
                  type="text"
                  name=""
                  id="product-name"
                />
              </div>
              <div className="md:flex justify-between gap-4 ">
                <label className="pr-2 font-semibold text-xl">SIZE:</label>
                <select
                  className="rounded-md px-2 text-xl"
                  onChange={optionHandler}
                  name=""
                  id=""
                >
                  {sizes.map((size, idx) => (
                    <option key={idx} value="">
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:flex justify-between gap-4">
                <label className=" pr-2 font-semibold text-xl">QUANTITY:</label>
                <input
                  className="rounded-md text-xl"
                  type="text"
                  name=""
                  id="product-name"
                />
              </div>
              <div className="md:flex justify-between gap-4">
                <label className="pr-2 font-semibold text-xl">PRICE:</label>
                <input
                  className="rounded-md text-xl"
                  type="text"
                  name=""
                  id="product-name"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
