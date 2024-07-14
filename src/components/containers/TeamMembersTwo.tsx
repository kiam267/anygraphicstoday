import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import one from 'public/images/logo/one1.jpg';
import two from 'public/images/teams/two2.jpg';
import three from 'public/images/teams/three.jpg';
import four from 'public/images/teams/four.jpg';
import five from 'public/images/teams/five.jpg';
import six from 'public/images/teams/six.jpg';
import seven from 'public/images/teams/seven.jpg';
import eight from 'public/images/teams/eight.jpg';
import nine from 'public/images/teams/nine.jpg';
import ten from 'public/images/teams/ten.jpg';

const TeamMembersTwo = ({
  serviceName = [one, two, three, four, five, six, seven],
  show = true,
}: {
  serviceName: StaticImageData[];
  show?: boolean;
}) => {
  const [thunkImage, setThunkImage] = useState([one]);

  return (
    <section className="section team-slider-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <h2 className="title title-anim">
                      Our Expert Coverage
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="/contact-us"
                      className="btn btn--primary text-capitalize"
                    >
                      100% Satisfaction
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            speed={800}
            loop={true}
            roundLengths={true}
            centeredSlides={true}
            centeredSlidesBounds={false}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.next-team-s',
              prevEl: '.prev-team-s',
            }}
            className="team-s__slider"
            breakpoints={{
              868: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              576: {
                slidesPerView: 2,
              },
            }}
          >
            {serviceName.map(
              (image: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="team-s__slider-single ">
                    <div className="team-wrap">
                      <Image
                        className="rounded-4"
                        placeholder="blur"
                        src={image}
                        alt="Image"
                        height={600}
                        // width={800}
                        style={{
                          objectFit: 'cover',
                          height: '400px',
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
        <div className="slide-group pt-5">
          <button
            aria-label="previous item"
            className="slide-btn prev-team-s"
          >
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button
            aria-label="next item"
            className="slide-btn next-team-s"
          >
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
        {/* <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default TeamMembersTwo;
