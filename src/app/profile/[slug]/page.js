"use client";
import styles from "./page.module.css";
import { profile } from "@/dummy";
import Carousel from "../../../components/Slider/Slider";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
const socialMediaIcons = {
  Facebook: "/Facebook.png",
  Instagram: "/Instagram.png",
  Twitter: "/Twitter.png",
  Youtube: "/Youtube.png",
  LinkedIn: "/LinkedIn.png",
};

const socialMediaColorIcons = {
  Facebook: "/facebook-bg.png",
  Twitter: "/twitter-bg.png",
  Instagram: "/instagram.jpg",
  LinkedIn: "/linkedin-bg.png",
};

async function getData({ params }) {
  // const res = await fetch(
  //   `https://stage.api.raze.co.in/profiles/${params.slug}`
  // );
  // const response = await res.json();
  // return response;
}

export default function Home({ params }) {
  const [isMobile, setIsMobile] = useState(true);
  const [seeMore, setSeeMore] = useState(true);
  const text = profile[0]?.about?.text;
  console.log("#####text", text.substring(0, 139));
  console.log("Seeeeeemore", seeMore && text.substring(0, 139));
  // const data = await getData({ params });

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div>
      {isMobile ? (
        <div className={styles.mobileView}>
          <div className={styles.userDetail}>
            <img
              src="/bg.jpg"
              style={{
                width: "430px",
                height: "72px",
                background: "lightgray 50% / cover no-repeat",
              }}
            />
            <div className={styles.userAvatar}>
              <img
                src="/Ellipse.png"
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            <div className={styles.selectLaungage}>
              <p>English</p>
              <img src="/dropdown.png" />
            </div>

            <div className={styles.userContactDetail}>
              <h5 style={{ width: "320px" }}>OffiNeeds</h5>
              <p>Offineeds.com</p>
              <div style={{ display: "flex", gap: "12px" }}>
                <img src="/HiddenCom.png" />
                <img src="/Hidden.png" />
              </div>
              <div className={styles.cityTime}>
                <p>Bangaluru</p>
                <span className={styles.middleDot}>&#x1F784;</span>
                <p>10AM - 7PM</p>
              </div>
              <div className={styles.socialMain}>
                {profile?.map((item) =>
                  item?.social?.map((socialItem) => (
                    <a
                      key={socialItem._id}
                      href={socialItem?.url}
                      target="_blank">
                      <img
                        src={socialMediaIcons[socialItem.name]}
                        alt={socialItem?.name}
                        style={{ width: "24px", height: "24px" }}
                      />
                    </a>
                  ))
                )}
              </div>
              <div className={styles.messageContainer}>
                <div
                  className={styles.messageBox}
                  style={{ padding: "2px 110px" }}>
                  <button className={styles.messageBtn}>Message</button>
                </div>
                <div
                  className={styles.messageLogo}
                  style={{ width: "28px", height: "28px", paddinLeft: "0px" }}>
                  <img src="/msgLogo.svg" />
                </div>
              </div>
            </div>
          </div>
          {/* About Section */}
          <div className={styles.aboutMainMobile}>
            <div className={styles.aboutContainerMobile}>
              {" "}
              <div
                className={styles.aboutMobileText}
                style={{ width: "313px" }}>
                <p> About</p>
              </div>
              <div className={styles.aboutImageContainerBox}>
                <img src={profile[0]?.about?.media?.url} alt="media-image" />
              </div>
              <div className={styles.aboutShareMobile}>
                <div className={styles.timestamp}>
                  <p>01 : 23</p>
                </div>
                <div className={styles.download}>
                  <img
                    src="/Download.png"
                    alt="download"
                    style={{ height: "16px", width: "16px" }}
                  />
                </div>
                <div className={styles.share}>
                  <img
                    src="/ShareAlt.png"
                    style={{ height: "16px", width: "16px" }}
                  />
                </div>
              </div>
              <div className={styles.aboutDescMobile}>
                {seeMore ? <p>{text.substring(0, 139)}...</p> : <p>{text}</p>}
                <button
                  onClick={handleSeeMore}
                  className={
                    seeMore ? styles.seeMoreMobilebtn : styles.seeLessMobilebtn
                  }>
                  {seeMore ? "See More" : "See Less"}
                </button>
              </div>
            </div>

            <div className={styles.mediaContainer}>
              {profile?.map((item) =>
                item?.social?.map((socialItem) => (
                  <a
                    key={socialItem._id}
                    href={socialItem?.url}
                    target="_blank">
                    <img
                      src={socialMediaColorIcons[socialItem.name]}
                      alt={socialItem?.name}
                      style={{ width: "28px", height: "28px" }}
                    />
                  </a>
                ))
              )}
            </div>
          </div>

          {/*decks section */}
          <div className={styles.aboutMain}>
            <div className={styles.aboutContainer}>
              {" "}
              <div className={styles.AboutTextContainer}>
                <p> Decks</p>
              </div>
              <div className={styles.mobileContainer}>
                <div className="swiper-container">
                  <Swiper spaceBetween={15} slidesPerView={"auto"}>
                    {profile?.map((decks) =>
                      decks?.decks?.map((deck) => (
                        <SwiperSlide key={deck?._id} style={{ width: "46%" }}>
                          <div className="swiper-slide-content">
                            <div className="page_decksImageContainerBox__e_iN1">
                              <img src={deck?.url} alt={deck?.title} />
                            </div>
                            <div className="page_decksShareContainer__OY3xu">
                              <div className="page_duration__ar9xP">
                                <p>{deck?.title}</p>
                              </div>
                              <div className="page_download__eA98Y">
                                <img
                                  src="/Download.png"
                                  alt="download"
                                  style={{ height: "16px", width: "16px" }}
                                />
                              </div>
                              <div className="page_share__WEjk7">
                                <img
                                  src="/ShareAlt.png"
                                  style={{ height: "16px", width: "16px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <main className={styles.mainSection}>
          <div className={styles.publishedSection}>
            {/*cover section */}
            <div className={styles.coverMain}>
              <div className={styles.cover}>
                <img
                  src="/bg.jpg"
                  alt="cover image"
                  className={styles.coverImg}
                />
              </div>
              <img src={profile[0]?.avatar?.url} className={styles.avatar} />

              <div>
                <div className={styles.laungage}>
                  <p>English</p>
                  <img
                    src="/laungageDropdown.svg"
                    style={{ height: "14px", width: "14px" }}
                  />
                </div>
                {/*offineeds section */}
                <div className={styles.offineedMain}>
                  <div className={styles.offineedsContainer}>
                    {" "}
                    <div className={styles.textOffineed}>
                      <h5>Offineeds</h5>
                      <a href={profile[0]?.website} target="_blank">
                        <p>Offineeds.com</p>
                      </a>
                      <div className={styles.hidden}>
                        <img src="/HiddenCom.png" />
                        <img src="/Hidden.png" style={{ marginLeft: "5px" }} />
                      </div>
                      <div className={styles.cityTime}>
                        <p>Bangaluru</p>
                        <span className={styles.middleDot}>&#x1F784;</span>
                        <p>10AM - 7PM</p>
                      </div>
                      <div className={styles.socialMain}>
                        {profile?.map((item) =>
                          item?.social?.map((socialItem) => (
                            <a
                              key={socialItem._id}
                              href={socialItem?.url}
                              target="_blank">
                              <img
                                src={socialMediaIcons[socialItem.name]}
                                alt={socialItem?.name}
                                style={{ width: "28px", height: "28px" }}
                              />
                            </a>
                          ))
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.messageContainer}>
                    <div className={styles.messageBox}>
                      <button className={styles.messageBtn}>Message</button>
                    </div>
                    <div className={styles.messageLogo}>
                      <img src="/msgLogo.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About Section */}
            <div className={styles.aboutMain}>
              <div className={styles.aboutContainer}>
                {" "}
                <div className={styles.AboutTextContainer}>
                  <p> About</p>
                </div>
                <div className={styles.aboutImageContainerBox}>
                  <img src={profile[0]?.about?.media?.url} alt="media-image" />
                </div>
                <div className={styles.aboutShareContainer}>
                  <div className={styles.duration}>
                    <p>01 : 23</p>
                  </div>
                  <div className={styles.download}>
                    <img
                      src="/Download.png"
                      alt="download"
                      style={{ height: "16px", width: "16px" }}
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      src="/ShareAlt.png"
                      style={{ height: "16px", width: "16px" }}
                    />
                  </div>
                </div>
                <div className={styles.aboutText}>
                  <p>{profile[0]?.about?.text}</p>
                </div>
              </div>

              <div className={styles.mediaContainer}>
                {profile?.map((item) =>
                  item?.social?.map((socialItem) => (
                    <a
                      key={socialItem._id}
                      href={socialItem?.url}
                      target="_blank">
                      <img
                        src={socialMediaColorIcons[socialItem.name]}
                        alt={socialItem?.name}
                        style={{ width: "28px", height: "28px" }}
                      />
                    </a>
                  ))
                )}
              </div>
            </div>

            {/*decks section */}
            <div className={styles.aboutMain}>
              <div className={styles.aboutContainer}>
                {" "}
                <div className={styles.AboutTextContainer}>
                  <p> Decks</p>
                </div>
                <div className={styles.container}>
                  {profile?.map((decks) =>
                    decks?.decks?.map((deck) => (
                      <div key={deck?._id}>
                        <div className={styles.decksImageContainerBox}>
                          <img src={deck?.url} alt={deck?.title} />
                        </div>
                        <div className={styles.decksShareContainer}>
                          <div className={styles.duration}>
                            <p>{deck?.title}</p>
                          </div>
                          <div className={styles.download}>
                            <img
                              src="/Download.png"
                              alt="download"
                              style={{ height: "16px", width: "16px" }}
                            />
                          </div>
                          <div className={styles.share}>
                            <img
                              src="/ShareAlt.png"
                              style={{ height: "16px", width: "16px" }}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/*offering section */}

            <div className={styles.secondPage}>
              <div className={styles.offeringMain}>
                <div className={styles.AboutTextContainer}>
                  <p> Offerings</p>
                </div>
                <div className={styles.container}>
                  {profile?.map((offering) => (
                    <div
                      className={styles.offeringContainer}
                      key={offering._id}>
                      {offering?.offerings?.map((offer) => (
                        <div key={offer._id} style={{ background: "#ebf4ff" }}>
                          {offer?.media?.map((media) => (
                            <div>
                              <img src={media?.url} />
                            </div>
                          ))}

                          <div className={styles.offeringTextContainer}>
                            <p>{offer.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/*client section */}
              <div className={styles.offeringMain}>
                <div className={styles.AboutTextContainer}>
                  <p> Clients</p>
                </div>
                <div className={styles.container}>
                  {profile?.map((client) => (
                    <div className={styles.clientContainer}>
                      {client?.clients?.map((offer) => (
                        <div
                          key={offer._id}
                          style={{ background: offer?.bgColor }}>
                          <div>
                            <img src={offer?.url} />
                          </div>

                          <div className={styles.offeringTextContainer}>
                            <p>{offer.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Affiliations and certifications */}
              <div className={styles.certificationMain}>
                <div className={styles.certificationTextContainer}>
                  <p>Affiliations and certifications</p>
                </div>
                <div className={styles.wtoExcellenceMain}>
                  {profile?.map((item) =>
                    item?.certificates?.map((certificate) => (
                      <div className={styles.wtoBoxContainer}>
                        <img
                          src="/wto.png"
                          style={{
                            width: "46px",
                            height: "46px",
                            background: "lightgray 50% / cover no-repeat ",
                          }}
                        />
                        <div className={styles.wtoTextBox}>
                          <h5>{certificate?.title}</h5>
                          <div className={styles.worldText}>
                            <p>
                              {certificate?.description}{" "}
                              <span className={styles.middleDot}>
                                &#x1F784;{" "}
                              </span>
                              {certificate?.date}
                            </p>
                          </div>
                          <div className={styles.linkCertificate}>
                            <a style={{ display: "flex", gap: "8px" }}>
                              <img src="/Link.svg" />
                              <p className={styles.linkurl}>
                                {certificate?.url}
                              </p>
                            </a>
                          </div>

                          <div className={styles.wtoImgContainer}>
                            {certificate?.media?.map((data) => (
                              <img src={data?.url} />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Active Geographies */}
              <div className={styles.offeringMain}>
                <div className={styles.AboutTextContainer}>
                  <p>Active Geographies</p>
                </div>
                <div className={styles.geoGraphImgContainer}>
                  {profile?.map((geography) =>
                    geography?.geographies?.map((item) => (
                      <div
                        className={styles.geoImgBox}
                        style={{ backgroundColor: item?.bgColor }}>
                        <img src={item?.url} />
                        <div className={styles.geoTextContainer}>
                          <p>{item?.title}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/*Achievements Section */}
            <div className={styles.secondPage}>
              <div className={styles.offeringMain}>
                <div className={styles.AboutTextContainer}>
                  <p> Achievements</p>
                </div>
              </div>

              {/* Affiliations and certifications */}
              <div className={styles.certificationMain}>
                <div className={styles.wtoExcellenceMain}>
                  {profile?.map((item) =>
                    item?.achievements?.map((certificate) => (
                      <div className={styles.wtoBoxContainer}>
                        <img
                          src={certificate?.url}
                          style={{
                            width: "46px",
                            height: "46px",
                            background: "lightgray 50% / cover no-repeat ",
                          }}
                        />
                        <div className={styles.wtoTextBox}>
                          <h5>{certificate?.title}</h5>
                          <div className={styles.worldText}>
                            <p>
                              {certificate?.organisation}{" "}
                              <span className={styles.middleDot}>
                                &#x1F784;{" "}
                              </span>
                              {certificate?.date}
                            </p>
                          </div>
                          <div style={{ width: "830px" }}>
                            {" "}
                            <p className={styles.achiveDesc}>
                              {certificate?.description}
                            </p>
                          </div>

                          <div className={styles.wtoImgContainer}>
                            {certificate?.media?.map((data) => (
                              <img src={data?.url} />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/*In the News */}
            <div className={styles.secondPage}>
              <div className={styles.offeringMain}>
                <div className={styles.AboutTextContainer}>
                  <p>In the news</p>
                </div>
              </div>

              {/* Affiliations and certifications */}
              <div className={styles.certificationMain}>
                <div className={styles.wtoExcellenceMain}>
                  {profile?.map((item) =>
                    item?.news?.map((certificate) => (
                      <div className={styles.wtoBoxContainer}>
                        <img
                          src={certificate?.logourl}
                          style={{
                            width: "46px",
                            height: "46px",
                            background: "lightgray 50% / cover no-repeat ",
                          }}
                        />
                        <div className={styles.wtoTextBox}>
                          <h5>{certificate?.title}</h5>
                          <div className={styles.authorMainBox}>
                            <p>{certificate?.organisation}</p>
                            <span className={styles.middleDot}>&#x1F784;</span>
                            <p>{certificate?.author}</p>
                            <span className={styles.middleDot}>&#x1F784;</span>
                            <p> {certificate?.date}</p>
                          </div>
                          <div style={{ width: "830px" }}>
                            {" "}
                            <p className={styles.achiveDesc}>
                              {certificate?.description}
                            </p>
                          </div>

                          <div className={styles.linkCertificate}>
                            <a style={{ display: "flex", gap: "8px" }}>
                              <img src="/Link.svg" />
                              <p className={styles.linkurl}>
                                {certificate?.url}
                              </p>
                            </a>
                          </div>

                          <div className={styles.wtoImgContainer}>
                            {certificate?.media?.map((data) => (
                              <img src={data?.url} />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* gallery */}
            <div className={styles.secondPage}>
              <div className={styles.offeringMain}>
                <div className={styles.AboutTextContainer}>
                  <p>Gallery</p>
                </div>
                <Carousel
                  images={profile}
                  styles={{
                    carousel: styles.carousel,
                    carouselslide: styles.carouselslide,
                  }}
                  type="gallery"
                />
              </div>
            </div>

            {/*Team */}
            <div className={styles.secondPage}>
              <div className={styles.offeringMain}>
                <div className={styles.AboutTextContainer}>
                  <p>Team</p>
                </div>
                <div className={styles.teamContainer}>
                  {profile?.map((geography) =>
                    geography?.geographies?.map((item) => (
                      <div className={styles.teamImgBox}>
                        <div
                          style={{
                            width: "115px",
                            height: "42px",
                            borderRadius: "4px 4px 0px 0px",
                            background: "#EBF4FF",
                          }}>
                          {" "}
                          <img src={item?.url} />
                        </div>
                        <div className={styles.teamDesc}>
                          <p className={styles.teamText}>Team member 1</p>

                          <p
                            style={{ color: "#8c8c8c", marginLeft: "12px" }}
                            className={styles.teamText}>
                            LinkedIn url
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/*Testimonials*/}
            <div className={styles.secondPage}>
              <div className={styles.offeringMain}>
                <div className={styles.AboutTextContainer}>
                  <p>Testimonials</p>
                </div>

                <Carousel
                  teams={profile}
                  styles={{
                    testimonialMain: styles.testimonialMain,
                    teamText: styles.teamText,
                    testimonialContainer: styles.testimonialContainer,
                  }}
                  type="testinomials"
                />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
