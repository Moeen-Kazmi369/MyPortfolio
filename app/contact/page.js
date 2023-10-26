import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/nav";
import { Card } from "@/components/card";
import Contact from "@/components/contactbtn";
import ContactBtn from "@/components/contactbtn";

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/chronark_",
    label: "Twitter",
    handle: "@chronark_",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:dev@chronark.com",
    label: "Email",
    handle: "dev@chronark.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/chronark",
    label: "Github",
    handle: "chronark",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl relative from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center mt-20 px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-0 md:mt-10 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card key={s.handle}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full fixed translate-x-[1000px] z-20 top-20 right-0 text-zinc-100 overflow-x-hidden md:w-1/2">
        <div
          className="px-6 overflow-hidden bg-black py-52 md:py-24 md:px-14 js-form-wrapper"
          style={{ transform: "translate(0px, 0px)" }}
        >
          <form
            className="lama-form lama-form lama-form-contact js-form-inner transform"
            style={{ transform: "translate(0px, 0px)" }}
            novalidate=""
          >
            <input type="hidden" name="action" value="llContactForm" />{" "}
            <div className="relative pl-6 mb-8 form-text text--lg js-form-text">
              <span className="hidden brochure">
                Be surprised and inspired. More than 70 different e-bikes from
                13 top brands. Request our e-bike brochure below.{" "}
              </span>
              <span className="hidden zakelijk">
                Looking for more information about a lease bike or shared bike
                for business use? Request our business e-bike brochure below.{" "}
              </span>
              <span className="contact">
                Do you have a question about an e-bike or anything related? Feel
                free to ask us. We will get in touch with you.{" "}
              </span>
              <span className="hidden shopping">
                Make an appointment to look at a beautiful e-bike. We take all
                the time you need, so that you can make the right choice.{" "}
              </span>
              <span className="hidden service">
                With a beautiful e-bike comes excellent service. We offer
                maintenance and service for all e-bikes purchased at E-bike
                Store.{" "}
              </span>
              <span className="hidden trial">
                Would you like to test a (high speed) e-bike for a longer period
                of time? For example for commuting? This is possible for seven
                days.{" "}
              </span>
              <span className="hidden event">
                As an organisation you are affiliated with Lease a Bike and you
                are probably about to let your employees experience the benefits
                of a lease bike. We can well imagine that your employees have
                questions about the lease bicycle scheme or simply want to test
                a number of bicycles first.{" "}
              </span>
            </div>
            <div className="w-full js-form-field js-form-subject">
              <div className="form-field subject flex flex-col w-full">
                <label>Subject</label>
                <div className="flex items-end w-full select-field">
                  <select
                    className="w-full parsley-success focus:ring-0"
                    name="subject"
                  >
                    <option value="contact" data-subject="contact">
                      Contact
                    </option>
                    <option value="shopping" data-subject="shopping">
                      Personal shopping
                    </option>
                    <option value="service" data-subject="service">
                      Service &amp; repair
                    </option>
                    <option value="brochure" data-subject="brochure">
                      Request e-bike brochure
                    </option>
                    <option value="zakelijk" data-subject="zakelijk">
                      Request lease bike brochure
                    </option>
                    <option value="trial" data-subject="trial">
                      Request 7 days e-bike trial
                    </option>
                  </select>
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="w-full pt-10 js-form-field js-form-store">
              <div className="form-field store flex flex-col w-full">
                <label>TO WHICH STORE DO YOU WANT TO ASK THIS QUESTION?</label>
                <div className="flex items-end w-full select-field">
                  <select
                    className="w-full parsley-success focus:ring-0"
                    name="store"
                  >
                    <option value="Alkmaar" data-subject="Alkmaar">
                      Alkmaar
                    </option>
                    <option value="Amsterdam" data-subject="Amsterdam">
                      Amsterdam
                    </option>
                    <option value="Hoorn" data-subject="Hoorn">
                      Hoorn
                    </option>
                  </select>
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="w-full pt-10 js-form-field js-form-company hidden">
              <div className="form-field company flex flex-col">
                <label for="">Bedrijf</label>
                <div className="relative flex items-end w-full">
                  <input
                    role="presentation"
                    autocomplete="off"
                    className="w-full focus:border-white/50 focus:ring-0"
                    type="text"
                    name="company"
                    id="company"
                    data-parsley-trigger="change"
                    data-parsley-required="false"
                  />
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                  <div className="js-form-line absolute left-0 h-0.0625 scale-x-100 bg-white right-8 orign-left"></div>
                </div>
              </div>
            </div>
            <div className="w-full pt-10 js-form-field js-form-name">
              <div className="form-field name flex flex-col">
                <label for="">Name</label>
                <div className="relative flex items-end w-full">
                  <input
                    role="presentation"
                    autocomplete="off"
                    className="w-full focus:border-white/50 focus:ring-0"
                    type="text"
                    name="name"
                    id="name"
                    data-parsley-trigger="change"
                    data-parsley-required="true"
                  />
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                  <div className="js-form-line absolute left-0 h-0.0625 scale-x-100 bg-white right-8 orign-left"></div>
                </div>
              </div>
            </div>
            <div className="w-full pt-10 js-form-field js-form-phone">
              <div className="form-field phone flex flex-col">
                <label for="">Phone</label>
                <div className="relative flex items-end w-full">
                  <input
                    role="presentation"
                    autocomplete="off"
                    className="w-full focus:border-white/50 focus:ring-0"
                    type="text"
                    name="phone"
                    id="phone"
                    data-parsley-trigger="change"
                    data-parsley-required="true"
                  />
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                  <div className="js-form-line absolute left-0 h-0.0625 scale-x-100 bg-white right-8 orign-left"></div>
                </div>
              </div>
            </div>
            <div className="w-full pt-10 js-form-field js-form-email">
              <div className="form-field email flex flex-col">
                <label for="">E-mail</label>
                <div className="relative flex items-end w-full">
                  <input
                    role="presentation"
                    autocomplete="off"
                    className="w-full focus:border-white/50 focus:ring-0"
                    type="email"
                    name="email"
                    id="email"
                    data-parsley-trigger="change"
                    data-parsley-required="true"
                  />
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                  <div className="js-form-line absolute left-0 h-0.0625 scale-x-100 bg-white right-8 orign-left"></div>
                </div>
              </div>
            </div>
            <div className="w-full pt-10 js-form-field js-form-address hidden">
              <div className="form-field address flex flex-col">
                <label for="">Address</label>
                <div className="relative flex items-end w-full">
                  <input
                    role="presentation"
                    autocomplete="off"
                    className="w-full focus:border-white/50 focus:ring-0"
                    type="text"
                    name="address"
                    id="address"
                    data-parsley-trigger="change"
                    data-parsley-required="false"
                  />
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                  <div className="js-form-line absolute left-0 h-0.0625 scale-x-100 bg-white right-8 orign-left"></div>
                </div>
              </div>
            </div>
            <div className="w-full pt-10 js-form-field js-form-postal hidden">
              <div className="form-field postal flex flex-col">
                <label for="">Postal code</label>
                <div className="relative flex items-end w-full">
                  <input
                    role="presentation"
                    autocomplete="off"
                    className="w-full focus:border-white/50 focus:ring-0"
                    type="text"
                    name="postal"
                    id="postal"
                    data-parsley-trigger="change"
                    data-parsley-required="false"
                  />
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                  <div className="js-form-line absolute left-0 h-0.0625 scale-x-100 bg-white right-8 orign-left"></div>
                </div>
              </div>
            </div>
            <div className="w-full pt-10 js-form-field js-form-city hidden">
              <div className="form-field city flex flex-col">
                <label for="">Residence</label>
                <div className="relative flex items-end w-full">
                  <input
                    role="presentation"
                    autocomplete="off"
                    className="w-full focus:border-white/50 focus:ring-0"
                    type="text"
                    name="city"
                    id="city"
                    data-parsley-trigger="change"
                    data-parsley-required="false"
                  />
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                  <div className="js-form-line absolute left-0 h-0.0625 scale-x-100 bg-white right-8 orign-left"></div>
                </div>
              </div>
            </div>
            <div className="w-full pt-10 js-form-field js-form-date hidden">
              <div className="form-field date flex flex-col">
                <label for="">Preferred date</label>
                <div className="relative flex items-end w-full">
                  <input
                    role="presentation"
                    autocomplete="off"
                    className="w-full focus:border-white/50 focus:ring-0"
                    type="date"
                    name="date"
                    id="date"
                    data-parsley-trigger="change"
                    data-parsley-required="false"
                  />
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                  <div className="js-form-line absolute left-0 h-0.0625 scale-x-100 bg-white right-8 orign-left"></div>
                </div>
              </div>
            </div>
            <div className="w-full pt-10 js-form-field js-form-event-date hidden">
              <div className="form-field preferred_date flex flex-col w-full">
                <label>Preferred date</label>
                <div className="flex items-end w-full select-field">
                  <select
                    className="w-full parsley-success focus:ring-0"
                    name="preferred_date"
                  >
                    <option value="" data-subject=""></option>
                    <option
                      value="27 september 16.00 to 20.00 uur"
                      data-subject="27 september 16.00 to 20.00 uur"
                    >
                      27 september 16.00 to 20.00 uur
                    </option>
                    <option
                      value="29 september 16.00 to 20.00 uur"
                      data-subject="29 september 16.00 to 20.00 uur"
                    >
                      29 september 16.00 to 20.00 uur
                    </option>
                    <option
                      value="18 oktober 16.00 to 20.00 uur"
                      data-subject="18 oktober 16.00 to 20.00 uur"
                    >
                      18 oktober 16.00 to 20.00 uur
                    </option>
                    <option
                      value="20 oktober 16.00 to 20.00 uur"
                      data-subject="20 oktober 16.00 to 20.00 uur"
                    >
                      20 oktober 16.00 to 20.00 uur
                    </option>
                    <option
                      value="15 november 16.00 to 20.00 uur"
                      data-subject="15 november 16.00 to 20.00 uur"
                    >
                      15 november 16.00 to 20.00 uur
                    </option>
                    <option
                      value="17 november 16.00 to 20.00 uur"
                      data-subject="17 november 16.00 to 20.00 uur"
                    >
                      17 november 16.00 to 20.00 uur
                    </option>
                  </select>
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="w-full pt-10 js-form-field js-form-bike-type hidden">
              <div className="form-field bike_type flex flex-col w-full">
                <label>Interesse leasefiets</label>
                <div className="flex items-end w-full select-field">
                  <select
                    className="w-full parsley-success focus:ring-0"
                    name="bike_type"
                  >
                    <option value="" data-subject=""></option>
                    <option value="E-bike" data-subject="E-bike">
                      E-bike
                    </option>
                    <option value="Cargo-bike" data-subject="Cargo-bike">
                      Cargo-bike
                    </option>
                    <option value="Speed pedelec" data-subject="Speed pedelec">
                      Speed pedelec
                    </option>
                  </select>
                  <div className="form-field__circle js-form-check">
                    <div className="form-field__circle__inner"></div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="w-full pt-10 js-form-field js-form-message">
              <div className="form-field message flex flex-col">
                <label for="">Message</label>
                <textarea
                  className="px-5 py-4 focus:ring-0"
                  name="message"
                  rows="6"
                  data-parsley-trigger="change"
                ></textarea>
              </div>{" "}
            </div>
            <div className="hidden w-full pt-10 js-form-field js-form-pdf">
              <input
                type="hidden"
                value=""
                name="pdf"
                data-parsley-required="false"
              />
            </div>
            <div className="hidden w-full pt-10 js-form-field js-form-bikename">
              <input
                type="hidden"
                value=""
                name="bike"
                data-parsley-required="false"
              />
            </div>
            <div className="flex justify-end w-full">
              <button
                type="submit"
                className="submit-form-button bg-red relative inline-block cursor-pointer pl-10 pr-16 py-2.8 text-14 mt-10 rounded-full overflow-hidden button border border-red js-button js-cursor-color js-cursor-grow js-submit-form-button"
                data-cursor-color="#FFFFFF"
              >
                <span className="flex font-bold tracking-wider uppercase js-button-text text-10">
                  <div className="js-submit-text">Send request </div>

                  <div className="hidden js-submit-sending">Sending </div>
                </span>
                <div className="absolute overflow-hidden transform -translate-y-1/2 js-button-animate right-8 top-1/2">
                  <svg
                    className="w-auto h-3"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m7 11 6-5-6-5M0 6h13" stroke="#fff"></path>
                  </svg>
                </div>
              </button>
            </div>
          </form>{" "}
        </div>

        <div className="hidden px-6 form__thankyou md:px-14 md:py-36 js-thankyou">
          <div className="hidden js-form-thankyou-brochure">
            <div className="flex flex-col col-start-2 col-end-14 md:col-start-3 md:col-end-13">
              <div
                className="text-red font-medium mb-1 md:mb-3 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Brochure
              </div>

              <div
                className="text-white heading--4 font-medium mb-2 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Thank you
              </div>
            </div>

            <div className="col-start-2 col-end-13 mt-2 md:col-start-3 md:col-end-13">
              <div
                className="text-white text--md  opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                <p>Please find in your mailbox our latest e-bike brochure.</p>
              </div>
            </div>
          </div>
          <div className="hidden js-form-thankyou-business">
            <div className="flex flex-col col-start-2 col-end-14 md:col-start-3 md:col-end-13">
              <div
                className="text-red font-medium mb-1 md:mb-3 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Business
              </div>

              <div
                className="text-white heading--4 font-medium mb-2 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Thank you
              </div>
            </div>

            <div className="col-start-2 col-end-13 mt-2 md:col-start-3 md:col-end-13">
              <div
                className="text-white text--md  opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                <p>Please find in your mailbox our latest business brochure.</p>
              </div>
            </div>
          </div>
          <div className="hidden js-form-thankyou-contact">
            <div className="flex flex-col col-start-2 col-end-14 md:col-start-3 md:col-end-13">
              <div
                className="text-red font-medium mb-1 md:mb-3 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Contact
              </div>

              <div
                className="text-white heading--4 font-medium mb-2 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Thank you
              </div>
            </div>

            <div className="col-start-2 col-end-13 mt-2 md:col-start-3 md:col-end-13">
              <div
                className="text-white text--md  opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                <div className="page" title="Page 9">
                  <div className="layoutArea">
                    <div className="column">
                      <p>
                        Thank you for filling in the contact form. We will
                        contact you as soon as possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden js-form-thankyou-shopping">
            <div className="flex flex-col col-start-2 col-end-14 md:col-start-3 md:col-end-13">
              <div
                className="text-red font-medium mb-1 md:mb-3 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Personal shopping
              </div>

              <div
                className="text-white heading--4 font-medium mb-2 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Thank you
              </div>
            </div>

            <div className="col-start-2 col-end-13 mt-2 md:col-start-3 md:col-end-13">
              <div
                className="text-white text--md  opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                <p>
                  Thank you for filling in the Personal Shopping form. We will
                  contact you as soon as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden js-form-thankyou-service">
            <div className="flex flex-col col-start-2 col-end-14 md:col-start-3 md:col-end-13">
              <div
                className="text-red font-medium mb-1 md:mb-3 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Service &amp; onderhoud
              </div>

              <div
                className="text-white heading--4 font-medium mb-2 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Thank you
              </div>
            </div>

            <div className="col-start-2 col-end-13 mt-2 md:col-start-3 md:col-end-13">
              <div
                className="text-white text--md  opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                <p>
                  Thank you for filling in the form. We will contact you as soon
                  as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden js-form-thankyou-trial">
            <div className="flex flex-col col-start-2 col-end-14 md:col-start-3 md:col-end-13">
              <div
                className="text-red font-medium mb-1 md:mb-3 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                7 days e-bike trial
              </div>

              <div
                className="text-white heading--4 font-medium mb-2 opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Thank you
              </div>
            </div>

            <div className="col-start-2 col-end-13 mt-2 md:col-start-3 md:col-end-13">
              <div
                className="text-white text--md  opacity-0 transform translate-y-8 md:translate-y-16 js-text-fade"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                <p>
                  Thank you for filling in the form. We will contact you as soon
                  as possible.
                </p>
              </div>
            </div>
          </div>

          <a
            className="js-close-popup mt-11 bg-red relative inline-block cursor-pointer pl-7 pr-15 js-animate-arrow pt-3 pb-3 text-14 rounded-full overflow-hidden button js-button js-cursor-grow js-cursor-color border border-red"
            data-cursor-color="#FFFFFF"
            title="Afsluiten"
          >
            <div className="flex font-bold tracking-wider uppercase js-button-text text-10">
              <span>Afsluiten</span>
            </div>

            <div className="absolute overflow-hidden transform -translate-y-1/2 js-button-animate right-7 top-1/2">
              <svg
                className="w-auto h-3"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m7 11 6-5-6-5M0 6h13" stroke="#fff"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full py-8 flex justify-center items-center">
       <ContactBtn/>
      </div>
    </div>
  );
}
