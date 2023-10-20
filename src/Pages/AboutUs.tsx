import lola from "../assets/lola.jpg";
import Chatbot from "../components/Chatbot";
import Yinka from "../assets/Yinka.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="">
        <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="flex flex-col items-start gap-8 lg:gap-24">
            <div className="flex max-w-[592px] flex-col items-start gap-8 lg:gap-14">
              <h2 className="font-bold text-3xl md:text-5xl">Meet Our Ceo</h2>
              <p className="flex-col text-[#808080] max-[479px]:text-sm">
                Meet our CEO, Omolola Akinola, the driving force behind our real
                estate success. With 10 years of industry expertise, Lola is a
                visionary leader who has steered our company to new heights.
                Their unwavering commitment to excellence inspires our entire
                team to deliver outstanding results. Discover the visionary
                shaping our future.
              </p>
            </div>
            <div className="grid place-items-start gap-10 max-[991px]:gap-x-8 max-[767px]:gap-y-12 grid-cols-1 lg:grid-cols-2">
              <img
                src={lola}
                alt=""
                className="inline-block h-full w-full object-cover rounded-2xl"
              />
              <div className="flex w-full flex-col items-start gap-5 border border-solid border-black p-20 rounded-2xl">
                <h2 className="font-bold text-3xl md:text-5xl">Our Mission</h2>
                <p className="flex-col text-[#808080] max-[479px]:text-sm">
                  At Tulet Oaks, our mission is to transform your dreams of
                  finding the perfect home into reality. We are dedicated to
                  providing unparalleled real estate solutions that go beyond
                  transactions, focusing on building lasting relationships with
                  our clients. Our commitment to excellence drives us to offer
                  innovative and tailored services, ensuring that every step of
                  your real estate journey is smooth and successful. We strive
                  to be the trusted partner you can rely on, offering expertise,
                  integrity, and a personal touch. Our mission is to set new
                  industry standards, continuously improving and adapting to
                  meet the evolving needs of our clients.
                  <br />
                  <br />
                  With a passionate team and a client-centric approach, we aim
                  to make your real estate experience exceptional, enjoyable,
                  and stress-free. Your dream home is our mission, and your
                  satisfaction is our success.
                </p>
                <div className="flex  justify-end ">
                  <h1 className="text-xl font-bold justify-end ml-28 ">
                    Omolola Akinola
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Chatbot />
      </section>

      <section>
        <div className="py-12 md:py-16  mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">
            <div className="flex-col flex items-start gap-2">
              <div>
                <div className="flex-col flex items-start">
                  <div className="flex-col flex items-start gap-2">
                    <p className="flex-col text-[#808080] text-sm sm:text-xl">
                      Co-Founder
                    </p>
                    <h1 className="font-bold text-4xl md:text-6xl mb-5 md:mb-6 lg:mb-8">
                      Yinka Rahman
                    </h1>
                    <p className="flex-col text-[#808080] text-sm sm:text-xl">
                      A Geospatial Engineer and Real Estate Developer, he brings
                      to the table over a decade of extensive experience in the
                      real estate sector. His professional journey is marked by
                      a unique combination of technical acumen and an innate
                      understanding of the real estate industry. With a
                      background in geospatial engineering, he specializes in
                      harnessing the power of advanced geographic information
                      systems (GIS) and geospatial data to revolutionize
                      decision-making processes within the real estate domain.
                      His expertise is invaluable in assessing land use, zoning
                      regulations, and environmental factors. This, in turn,
                      minimizes risks and maximizes returns on investments. This
                      ability to integrate geospatial technology with real
                      estate development has made him a critical player in
                      shaping urban landscapes and planning for sustainable,
                      future-proof cities.
                    </p>
                  </div>
                  <div className="mb-8 mt-8 h-px w-full bg-black"></div>

                  <div className="flex items-center justify-start gap-4 flex-wrap mb-6 md:mb-10 lg:mb-12">
                    <a
                      href="#"
                      className="flex max-w-full items-center justify-center gap-2.5 text-center text-sm font-bold uppercase text-black"
                    >
                      <p>All Achievements</p>
                      <img
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg"
                        alt=""
                        className="inline-block"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[320px] overflow-hidden  rounded-md">
              <img src={Yinka} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
