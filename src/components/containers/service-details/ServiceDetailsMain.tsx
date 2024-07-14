import React, { Fragment } from 'react';
import Image, { StaticImageData } from 'next/image';

import thumbtwo from 'public/images/service/thumb-two.png';
import HeaderImage from 'public/images/service/thumb-two.png';
import Link from 'next/link';

import TeamMembersTwo from '../TeamMembersTwo';

interface ServiceDetailsMain {
  blogData: any;
  path: any;
  miniPath: any;
  serviceName?: any;
}
const ServiceDetailsMain = ({
  blogData,
  path,
  miniPath,
  serviceName,
}: ServiceDetailsMain) => {
  return (
    <section className="mb-5 service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                {blogData.map(
                  (
                    blog: any,
                    index: React.Key | null | undefined
                  ) => {
                    return (
                      <>
                        {index === 0 && (
                          // poster fade-top
                          <div className="poster">
                            <Image src={path} alt="Image" />
                          </div>
                        )}
                        {!blog.areaHalfWidth &&
                        !blog.workStep ? (
                          <div
                            className="details-group section__cta text-start"
                            key={index}
                          >
                            <h3 className="title-anim">
                              {blog.title}
                            </h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: blog.des,
                              }}
                            />
                          </div>
                        ) : null}
                      </>
                    );
                  }
                )}
                <div className="footer__cta text-start pt-4">
                  <Link
                    href="/contact-us"
                    className="btn btn--secondary"
                  >
                    book a designer now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TeamMembersTwo
        serviceName={serviceName}
        show={false}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                {blogData.map(
                  (blog: any, index: number) =>
                    blog.areaHalfWidth &&
                    !blog.workStep && (
                      <div
                        className="section__content-cta"
                        key={index}
                      >
                        <div className="row gaper align-items-center gap-y-3">
                          {index % 2 === 0 ? (
                            <div className="col-12 col-lg-5 my-2 my-md-5 py-4">
                              <div className="poster-small">
                                <Image
                                  src={
                                    blog.image || miniPath
                                  }
                                  alt="Image"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="col-12 col-lg-7  my-2 my-md-5">
                              <div className="details-group">
                                <h3 className="title-anim">
                                  {blog.title}
                                </h3>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: blog.des,
                                  }}
                                />
                              </div>
                            </div>
                          )}

                          {index % 2 === 0 ? (
                            <div className="col-12 col-lg-7  my-2 my-md-5">
                              <div className="details-group">
                                <h3 className="title-anim">
                                  {blog.title}
                                </h3>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: blog.des,
                                  }}
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="col-12 col-lg-5  my-2 my-md-5">
                              <div className="poster-small">
                                <Image
                                  src={
                                    blog.image || miniPath
                                  }
                                  alt="Image"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                )}
                <div className="footer__cta text-start py-5">
                  <Link
                    href="/contact-us"
                    className="btn btn--secondary"
                  >
                    call a designer now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsMain;
