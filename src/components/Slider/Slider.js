"use client";
import React, { useState, useEffect } from "react";
import "./Slider.css";
const Carousel = ({ images, styles: customStyles, type }) => {
  console.log("@@@@customStyles", customStyles);
  console.log("@@@@@type", type);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImagesCount = 4;
  const partialImageOffset = 20; // Amount of partial visibility for the fifth image

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) =>
  //         prevIndex + visibleImagesCount >= images.length
  //           ? 0
  //           : prevIndex + visibleImagesCount
  //       );
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, [images.length]);

  //get length
  const getLength = images?.map((item) =>
    item?.gallery?.map((data) => data?.media?.length)
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleImagesCount >= getLength
        ? 0
        : prevIndex + visibleImagesCount
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? images.length - visibleImagesCount
        : prevIndex - visibleImagesCount
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className={customStyles.carousel}>
          {type === "gallery" &&
            images?.map((profile) =>
              profile?.gallery?.map((item) =>
                item?.media?.map((data, index) => (
                  <div
                    key={index}
                    className={customStyles.carouselslide}
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                      width:
                        index === images.length - 1
                          ? `calc(100% - ${partialImageOffset}px)`
                          : "100%",
                    }}>
                    <img src={data?.url} alt={`Slide ${index + 1}`} />
                  </div>
                ))
              )
            )}
          {type === "testinomials" && (
            <div style={{ display: "flex", width: "888px" }}>
              {" "}
              <div className={customStyles.testimonialMain}>
                <p className={customStyles.teamText} style={{ width: "272px" }}>
                  I really appreciate all of your support in getting our
                  T-shirt’s order ready. You've been right there, helping out
                  wherever and whenever needed for these past few months. Thanks
                  Seema Mohan for all the effort and good co-ordination. Working
                  with you has been a pleasure. I am very appreciative of your
                  assistance and am looking forward to continuing to work
                  together on our future orders. Keep up the GOOD work
                </p>
                <div className={customStyles.testimonialContainer}>
                  <img
                    src="/about.png"
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "24px",
                      background: "lightgray 50% / cover no-repeat",
                    }}
                  />
                  <p
                    className={customStyles.teamText}
                    style={{ color: "#000", textAlign: "right" }}>
                    {" "}
                    MARLENE LAVINA{" "}
                  </p>
                </div>
              </div>
              <div className={customStyles.testimonialMain}>
                <p className={customStyles.teamText} style={{ width: "272px" }}>
                  The Overall experience is Really Good, I noticed Good
                  communication to clarify the Order No. and Category. I love
                  the Sample Review and collection as requested and submitted on
                  time. I especially liked how you spoke up clearly on the stock
                  and the availability on the delivery date. Great Job !!
                </p>
                <div className={customStyles.testimonialContainer}>
                  <img
                    src="/about.png"
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "24px",
                      background: "lightgray 50% / cover no-repeat",
                    }}
                  />
                  <p
                    className={customStyles.teamText}
                    style={{ color: "#000", textAlign: "right" }}>
                    {" "}
                    MARLENE LAVINA{" "}
                  </p>
                </div>
              </div>
              <div className={customStyles.testimonialMain}>
                <p className={customStyles.teamText} style={{ width: "272px" }}>
                  It was an enriching experience to select trophies for an
                  upcoming Award event at the Company. Right from the beginning
                  in understanding the requirement, Quality, uniqueness,
                  material, colours, finish, ratio to the last details of how
                  the print details to appear on trophies, Muzammil was of
                  immense help. he is always available with the best advices.
                  Our queries were answered with utmost importance and on-time
                  replies with on-time delivery. Thanks Muzammil.
                </p>
                <div className={customStyles.testimonialContainer}>
                  <img
                    src="/about.png"
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "24px",
                      background: "lightgray 50% / cover no-repeat",
                    }}
                  />
                  <p
                    className={customStyles.teamText}
                    style={{ color: "#000", textAlign: "right" }}>
                    {" "}
                    MARLENE LAVINA{" "}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button> */}
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
