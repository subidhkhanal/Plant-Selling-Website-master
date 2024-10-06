import React from "react";

const ContactUs = () => {
  document.title = "Contact Us";
  return (
    <div className="">
      <>
        <section className="back">
          <div className="overlay-back"></div>
          <h1>Contact</h1>
          <h2>Home / Contact</h2>
        </section>
        <div className="margin"></div>
      </>{" "}
      <div className="m-auto text-center bg-gray-100 py-10 px-6 mx-4 rounded-lg sm:mx-20 md:mx-28">
        <h1
          className="text-3xl lg:text-5xl font-semibold"
          style={{ color: "#81c408" }}
        >
          Get in touch
        </h1>
        <div className=" rounded w-10/12 h-96 mx-auto my-8">
          <iframe
            className="rounded w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2607.786672815803!2d-81.344128!3d43.146158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eee0055555555%3A0xe0a2efb50aaa419d!2sCrunican%20Orchards!5e1!3m2!1sen!2sus!4v1728217560071!5m2!1sen!2sus"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="lg:flex lg:justify-between mx-2 md:mx-9 xl:mx-24">
          <form action="" className="lg:w-6/12">
            <input
              className="w-full outline-none my-3 py-4 px-4 rounded-lg"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full outline-none my-3 py-4 px-4 rounded-lg"
              type="text"
              placeholder="Your Email"
            />
            <textarea
              className="w-full outline-none my-3 py-4 px-4 rounded-lg"
              cols="30"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            <input
              className="w-full outline-none my-3 py-4 px-4 font-semibold border border-orange-400 rounded-lg bg-white duration-500 input-contact"
              type="submit"
            />
          </form>
          <div className="lg:w-5/12">
            <div className="bg-white my-4 rounded-lg flex items-center py-6 px-2">
              <span className="text-3xl ml-4" style={{ color: "#81c408" }}>
                <i className="fa fa-location-dot"></i>
              </span>
              <div className="flex flex-col items-start justify-start ml-6">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "#45595b" }}
                >
                  Address
                </h2>
                <span className="w-fit" style={{ color: "#45595b" }}>
                  23778 Richmond St. N. London ON
                </span>
              </div>
            </div>
            <div className="bg-white my-4 rounded-lg flex items-center py-6 px-2">
              <span className="text-3xl ml-4" style={{ color: "#81c408" }}>
                <i className="fa fa-envelope"></i>
              </span>
              <div className="flex flex-col items-start justify-start ml-6">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "#45595b" }}
                >
                  Mail Us
                </h2>
                <span className="w-fit" style={{ color: "#45595b" }}>
                  ashishgautam0014@gmail.com
                </span>
              </div>
            </div>
            <div className="bg-white my-4 rounded-lg flex items-center py-6 px-2">
              <span className="text-3xl ml-4" style={{ color: "#81c408" }}>
                <i className="fa fa-phone"></i>
              </span>
              <div className="flex flex-col items-start justify-start ml-6">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "#45595b" }}
                >
                  Telephone
                </h2>
                <span className="w-fit" style={{ color: "#45595b" }}>
                  519-666-0286
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
