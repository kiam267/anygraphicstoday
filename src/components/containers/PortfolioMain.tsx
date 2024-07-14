import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import one from 'public/images/teams/one1.jpg';
import two from 'public/images/teams/two2.jpg';
import three from 'public/images/teams/three.jpg';
import four from 'public/images/teams/four.jpg';
import five from 'public/images/teams/five.jpg';
import six from 'public/images/teams/six.jpg';
import seven from 'public/images/teams/seven.jpg';
import eight from 'public/images/teams/eight.jpg';
import nine from 'public/images/teams/nine.jpg';
// import ten from 'public/images/teams/ten.jpg';

// part 2

import SecondOne from 'public/images/teams/secondOne.jpg';
import SecondTwo from 'public/images/teams/secondTwo.jpg';
import secondThree from 'public/images/teams/secondThree.jpg';
import secondFour from 'public/images/teams/secondFour.jpg';
import secondFive from 'public/images/teams/secondFive.jpg';
import secondSix from 'public/images/teams/secondSix.jpg';
import secondSeven from 'public/images/teams/secondSeven.jpg';
import secondEight from 'public/images/teams/secondEight.jpg';
import secondNine from 'public/images/teams/secondNine.jpg';
import secondTen from 'public/images/teams/secondTen.jpg';
import secondEleven from 'public/images/teams/secondEleven.jpg';
// import secondTwelve from 'public/images/teams/secondtwelve.jpg';
import secondThirteen from 'public/images/teams/secondThirteen.jpg';
import secondFourteen from 'public/images/teams/secondFourteen.jpg';
import secondFifteen from 'public/images/teams/secondFifteen.jpg';

SwiperCore.use([Navigation]);

const PortfolioMain = () => {
  const ImagePath: StaticImageData[] = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
  ];
  const SecondImagePath: StaticImageData[] = [
    SecondOne,
    SecondTwo,
    secondThree,
    secondFour,
    secondFive,
    secondSix,
    secondSeven,
    secondEight,
    secondNine,
    secondTen,
    secondEleven,
    // secondTwelve,
    secondThirteen,
    secondFourteen,
    secondFifteen,
  ];

  return (
    <section className="section portfolio-m fade-wrapper">
      <div className="container">
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
              {ImagePath.map((path, index) => (
                <SwiperSlide key={index}>
                  <div className="team-s__slider-single ">
                    <div className="team-wrap">
                      <Image
                        className="rounded-4"
                        src={path}
                        alt="Image"
                        height={600}
                        width={800}
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
        </div>

        <div className="team-r position-relative pt-5 mt-3">
          <div className="team-s__slider-w">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              dir="rtl"
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
              {SecondImagePath.map((path, index) => (
                <SwiperSlide key={index}>
                  <div className="team-s__slider-single ">
                    <div className="team-wrap">
                      <Image
                        className="rounded-4"
                        placeholder="blur"
                        src={path}
                        alt="Image"
                        height={600}
                        width={800}
                        style={{
                          objectFit: 'cover',
                          height: '600px',
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
        </div>
      </div>
    </section>
  );
};

export default PortfolioMain;
