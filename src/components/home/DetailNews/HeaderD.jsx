import { useContext, useEffect, useState } from "react";
import headerStyles from "./styles/Header.module.css";

const HeaderD = ({ news }) => {
  const [selectedImg, setSelectedImg] = useState();
  useEffect(() => {
    setSelectedImg(news && news?.images[0]);
  }, [news]);
  return (
    <div className="relative">
      <section
        className={headerStyles.breadcrumb}
        style={{
          backgroundImage: `url(${selectedImg && selectedImg})`,
          objectFit: "cover",
        }}
      >
        <div className="container">
          <div className="grid">
            <div>
              <div>
                <h2 className={headerStyles.h2}>{news?.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap space-x-5 justify-center absolute bottom-[0] right-0 z-1 w-full">
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
      </section>
    </div>
  );
};

export default HeaderD;
