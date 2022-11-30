import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import "swiper/css/controller";
import "swiper/css/pagination";

const Advertisement = () => {
  const { data = [] } = useQuery({
    queryKey: ["ad"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_SERVER_API}/ad`, {
        headers: {
          authorization: `bearar ${localStorage.getItem("access-token")}`,
        },
      }).then((res) => res.json()),
  });

  console.log(data);
  return (
    <>
      {data?.length !== 0 && (
        <div className="w-1/2 my-10 mx-auto">
          <h1 className="text-3xl font-poppins text-center my-10">
            Advertisement
          </h1>
          <Swiper
            slidesPerView={1}
            loop={true}
            grid={{ colum: 3 }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className={`grid grid-cols-2`}
            autoplay={{ delay: 2000 }}>
            {data?.map((adProd, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full bg-white/30 h-full">
                  <div className="lg:w-1/2 w-4/5 mx-auto">
                    <img src={adProd?.productImg} className="w-full" alt="" />
                    <div className="text-center my-5">
                      <h2 className="text-xl font-poppins">{adProd?.name}</h2>
                      <div className="my-3">
                        <p className="font-poppins">
                          Resale Price: ${adProd?.resalePrice}
                        </p>
                        <p className="font-poppins">
                          Original Price: ${adProd?.originalPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Advertisement;
