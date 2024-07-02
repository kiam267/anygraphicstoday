import React from 'react';
import Link from 'next/link';

const CtaTwo = () => {
  return (
    <section className="cta-two section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11 position-relative">
            <div
              className="cta-two-wrapper bg-img layer rounded-5"
              style={{
                backgroundImage:
                  "url('/images/footer_up_.jpg')",
                height: '400px',
              }}
            ></div>
            <div className="cta-two-wrapper bg-img  position-absolute top-0">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="cta-two__content">
                    <span>Hello !</span>
                    <h2 className="title-anim">
                      ready to work with us?
                    </h2>
                    <h5>
                      <Link href="tel:+16286005017">
                        call: +1-628-600-5017{' '}
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-lg-3 ">
                  <div className="text-start text-lg-end">
                    <Link
                      href="/contact-us"
                      className="btn btn--tertiary"
                    >
                      start a project
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTwo;
