import { FaHome, FaUsers, FaMoneyBillWave, FaBuilding } from "react-icons/fa";

const Offer = () => {
  return (
    <section className="bg-orange-300 bg-cover bg-center text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            What we <span className="text-[#2d6ae0]">Offer</span>
          </h2>
          <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
            <p className="text-white">
              Our Exceptional Qualities that make us unique
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch">
          <div className="rounded-xl bg-orange-600 p-8 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="mr-4 rounded-md bg-indigo-600 px-4 py-2 font-semibold uppercase">
                Property Listings
              </p>
              <div className="flex flex-col items-center justify-center ">
                <FaHome className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
            <div className="flex max-w-lg flex-col items-start gap-3">
              <p className="text-xl font-semibold">Explore Your Options</p>
              <p className="text-white">
                Discover a wide range of properties in our listings, from cozy
                apartments to luxurious estates. We provide detailed
                information, high-quality images, and virtual tours to help you
                explore your options effortlessly.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-orange-600 p-8 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="mr-4 rounded-md bg-indigo-600 px-4 py-2 font-semibold uppercase">
                Expert Guidance
              </p>
              <div className="flex flex-col items-center justify-center text-[#2d6ae0]">
                <FaUsers className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
            <div className="flex max-w-lg flex-col items-start gap-3">
              <p className="text-xl font-semibold">Your Trusted Advisors</p>
              <p className="text-white">
                Our experienced real estate professionals are here to guide you
                through every step of the buying or selling process. From market
                insights to negotiation strategies, we've got you covered
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-orange-600 p-8 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="mr-4 rounded-md bg-indigo-600 px-4 py-2 font-semibold uppercase">
                Financing Solutions
              </p>
              <div className="flex flex-col items-center justify-center text-[#2d6ae0]">
                <FaMoneyBillWave className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
            <div className="flex max-w-lg flex-col items-start gap-3">
              <p className="text-xl font-semibold">Secure Your Investment</p>
              <p className="text-white">
                We offer financing solutions to make your real estate dreams a
                reality. Whether you're a first-time buyer or an experienced
                investor, our financial experts will help you secure the right
                mortgage and financing options.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-orange-600 p-8 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="mr-4 rounded-md bg-indigo-600 px-4 py-2 font-semibold uppercase">
                Property Management
              </p>
              <div className="flex flex-col items-center justify-center text-[#2d6ae0]">
                <FaBuilding className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
            <div className="flex max-w-lg flex-col items-start gap-3">
              <p className="text-xl font-semibold">Care for Your Investment</p>
              <p className="text-white">
                For property owners, we provide professional property management
                services. From tenant screening to maintenance, we ensure your
                investment is well-maintained and profitable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
