import React, { useEffect } from "react";
import "./Home.css";
import ShapeDivider from "./ShapeDivider";
import logotype from "./images/Logos/IAAU - LOGO - type only - white on transparent.png";
import Button from "./Button.js";
import Aos from "aos";
import "aos/dist/aos.css";
import Services from "./Services";
import CatchBanner from "./CatchBanner";
import QualityService from "./QualityService";
import Testimonials from "./Testimonials";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-in-sine", delay: 50 });
  });
  return (
    <div className="Home container-fluid">
      <div className="hero">
        <div className="heading-logo">
          <img
            class="pt-5 img-fluid"
            src={logotype}
            alt="It all adds up logotype"
          />
        </div>
        <div className="mt-5">
          <Button type="book a consultation" link="/Contact" />
        </div>
        <ShapeDivider />
      </div>
      <div className="container-fluid service-intro mt-4">
        <div className="row">
          <h1 data-aos="fade-right" className="heading-title mt-5">
            Based on the Northern Beaches
          </h1>
          <h4
            data-aos="fade-right"
            data-aos-delay="200"
            className="service-quote"
          >
            over 15 years experience
            <br /> in bookkeeping
          </h4>
          <p data-aos="fade-right" className="description">
            providing businesses with accurate records of their transactions and
            sales revenue
          </p>
          <p data-aos="fade-right" className="description">
            whilst running their payrolls in an efficient and timely manner
          </p>
        </div>
      </div>
      <Services />
      <CatchBanner />
      <div className="advertise-banner" data-aos="fade-zoom-up">
        <hr className="title-divider divider-top" />
        <h2 className="sub-title">Get a FREE consultation</h2>
        <p className="catch">
          Do you want your work/life balance back?
          <br />
          Then look no further!
        </p>
        <div className="mt-5">
          <Button type="book a consultation" link="/Contact" />
        </div>
      </div>
      <QualityService />
      <Testimonials />
    </div>
  );
}