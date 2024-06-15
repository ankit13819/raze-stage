import styles from "./page.module.css";
import { profile } from "@/dummy";

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

export default async function Home({ params }) {
  // const data = await getData({ params });

  return (
    <main className={styles.mainSection}>
      <div className={styles.publishedSection}>
        {/*cover section */}
        <div className={styles.coverMain}>
          <div className={styles.cover}>
            <img src="/bg.jpg" alt="cover image" className={styles.coverImg} />
          </div>
          <img src={profile[0]?.avatar?.url} className={styles.avatar} />

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
            <div className={styles.laungage}>
              <p>English</p>
              <img
                src="/laungageDropdown.svg"
                style={{ height: "14px", width: "14px" }}
              />
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
                <a key={socialItem._id} href={socialItem?.url} target="_blank">
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
                <div className={styles.offeringContainer} key={offering._id}>
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
                    <div key={offer._id} style={{ background: offer?.bgColor }}>
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
                          <span className={styles.middleDot}>&#x1F784; </span>
                          {certificate?.date}
                        </p>
                      </div>
                      <div className={styles.linkCertificate}>
                        <a style={{ display: "flex", gap: "8px" }}>
                          <img src="/Link.svg" />
                          <p className={styles.linkurl}>{certificate?.url}</p>
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
                          <span className={styles.middleDot}>&#x1F784; </span>
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
      </div>
    </main>
  );
}
