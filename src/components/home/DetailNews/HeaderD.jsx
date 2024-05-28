import { useContext, useEffect, useState } from "react";

const HeaderD = ({ news }) => {
  const [selectedImg, setSelectedImg] = useState();

  useEffect(() => {
    setSelectedImg(news && news?.images[0]);
  }, [news]);

  return (
    <div className="relative mt-10">
      <section
        className="relative"
        style={{ height: "auto", textAlign: "center", position: "relative" }}
      >
        <div
          style={{
            width: "100%",
            height: "300px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {selectedImg && (
            <img
              src={selectedImg}
              alt="Main Image"
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
            <h2 className="mb-4 text-lg break-words w-[80%] font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-3xl dark:text-white">
              {news?.title}
            </h2>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap space-x-5 justify-center ">
        {news?.images?.map((e, i) => (
          <div
            className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[8rem] max-h-[8rem] mt-4"
            key={i}
          >
            <img
              src={e}
              alt={i}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => setSelectedImg(e)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderD;
