import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import banneronethumb from 'public/images/main-logo.jpg';
import star from 'public/images/star.png';
import videoframe from 'public/images/video-frame.png';
import YoutubeEmbed from '@/components/youtube/YoutubeEmbed';

gsap.registerPlugin(ScrollTrigger);
const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll('.g-ban-one').length >
          0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.banner',
            start: 'center center',
            end: '+=100%',
            scrub: true,
            pin: false,
          },
        });

        tl.set('.g-ban-one', {
          y: '-10%',
        });

        tl.to('.g-ban-one', {
          opacity: 0,
          scale: 2,
          y: '100%',
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                  Graphic{' '}
                  <span className="text-stroke">
                    Design
                  </span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i>{' '}
                    on Demand
                  </span>
                </h1>
                <div className="banner__content-inner">
                  <p>
                    Transform your brand's visual identity
                    today! Experience the appeal of
                    tailor-made graphic designs, delivered
                    the same day. Whether your project is
                    small or large, our dedicated team is
                    ready 24/7 to bring your vision to life.
                    Experience unparalleled service quality
                    that stands out. Transform your brand
                    and captivate your audience with our
                    exceptional graphic design solutions.
                  </p>
                  <div className="cta section__content-cta row ">
                    <div className="single col-md-5 col-12">
                      <i
                        className="fa-solid fa-pen-nib fs-4 d-flex justify-content-start  fw-bold"
                        style={{
                          color: '#FF7425',
                        }}
                      ></i>
                      <p className="fw-5 ">
                        Same Day Design & Delivery
                      </p>
                    </div>
                    <div className="single col-md-5 col-12">
                      <i
                        className="fa-solid fa-text-slash fs-5 d-flex justify-content-start fw-bold"
                        style={{
                          color: '#FF7425',
                        }}
                      ></i>

                      <p className="fw-5 ">
                        {' '}
                        No Upfront Charge{' '}
                      </p>
                    </div>
                    <div className="single col-md-5 col-12">
                      <i
                        className="fa-solid fa-file fs-5 d-flex justify-content-start  fw-bold"
                        style={{
                          color: '#FF7425',
                        }}
                      ></i>

                      <p className="fw-5">
                        {' '}
                        High Resolution Files{' '}
                      </p>
                    </div>
                    <div className="single col-md-5 col-12">
                      <i
                        className="fa-solid fa-handshake fs-5 d-flex justify-content-start  fw-bold"
                        style={{
                          color: '#FF7425',
                        }}
                      ></i>

                      <p className="fw-5 ">
                        {' '}
                        Free Consultation{' '}
                      </p>
                    </div>

                    <div className="navbar__options pt-3">
                      <div className="navbar__mobile-options d-sm-flex">
                        <Link
                          href="tel:+16286005017"
                          className="btn btn--secondary text-black"
                        >
                          Call:  +1-628-600-5017
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={banneronethumb}
          loading="lazy"
          placeholder="blur"
          alt="Image"
          className="banner-one-thumb d-none d-sm-block g-ban-one"
        />
        <Image src={star} alt="Image" className="star" />
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:info@anygraphicstoday.com">
            mail : info@anygraphicstoday.com
          </Link>
          <Link href="tel:+16286005017 ">
            Call : +1-628-600-5017{' '}
          </Link>
        </div>
        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link
            href="https://www.instagram.com/anygraphicstoday"
            target="_blank"
          >
            instagram
          </Link>
          <Link
            href="https://www.linkedin.com/company/any-graphics-today/"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link
            href="https://www.facebook.com/AnyGraphicsToday"
            target="_blank"
          >
            facebook
          </Link>
        </div>
        <button
          className="video-frame video-btn"
          onClick={() => setVideoActive(true)}
        >
          <Image src={videoframe} alt="Image" priority />
          <i className="fa-sharp fa-solid fa-play"></i>
        </button>
        <div className="lines d-none d-lg-flex">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
      <div
        className={
          (videoActive ? ' video-zoom-in' : ' ') +
          ' video-backdrop'
        }
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && (
              <YoutubeEmbed embedId="fSv6UgCkuTU" />
            )}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneBanner;
