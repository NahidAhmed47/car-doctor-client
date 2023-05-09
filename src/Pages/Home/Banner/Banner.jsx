import React from "react";
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full md:h-[70vh]">
        <img
          src={banner1}
          className="w-full"
        />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center">
            <div className="w-[460px] space-y-7 ml-16 ">
                <h1 className="text-6xl font-bold text-white ">Affordable Price For Car Servicing</h1>
                <p className="text-slate-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex  gap-5">
                <button className="btn btn-secondary">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest project</button>
                </div>
            </div>
            <div className="absolute flex justify-end items-end transform -translate-y-1/2 bottom-0 right-5 gap-8 ">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full md:h-[70vh]">
        <img
          src={banner2}
          className="w-full"
        />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center">
            <div className="w-[460px] space-y-7 ml-16 ">
                <h1 className="text-6xl font-bold text-white ">Affordable Price For Car Servicing</h1>
                <p className="text-slate-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex  gap-5">
                <button className="btn btn-secondary">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest project</button>
                </div>
            </div>
        <div className="absolute flex justify-end items-end transform -translate-y-1/2 bottom-0 right-5 gap-8">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full md:h-[70vh]">
        <img
          src={banner3}
          className="w-full"
        />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center">
            <div className="w-[460px] space-y-7 ml-16 ">
                <h1 className="text-6xl font-bold text-white ">Affordable Price For Car Servicing</h1>
                <p className="text-slate-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex  gap-5">
                <button className="btn btn-secondary">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest project</button>
                </div>
            </div>
        <div className="absolute flex justify-end items-end transform -translate-y-1/2 bottom-0 right-5 gap-8">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full md:h-[70vh]">
        <img
          src={banner4}
          className="w-full"
        />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center">
            <div className="w-[460px] space-y-7 ml-16 ">
                <h1 className="text-6xl font-bold text-white ">Affordable Price For Car Servicing</h1>
                <p className="text-slate-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex  gap-5">
                <button className="btn btn-secondary">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest project</button>
                </div>
            </div>
        <div className="absolute flex justify-end items-end transform -translate-y-1/2 bottom-0 right-5 gap-8">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
