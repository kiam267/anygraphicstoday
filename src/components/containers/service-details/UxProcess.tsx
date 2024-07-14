import React, { useState } from 'react';

const UxProcess = ({
  stepWorkData = null,
}: {
  stepWorkData?: any;
}) => {
  const [imgTab, setImgTab] = useState<number>(0);

  return (
    <section className="section ux-process bg-tertiary fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <a href="/portfolio">
                <span className="sub-title">
                  Check Our Portfolio
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
              <h2 className="title title-anim">
                How We Work
              </h2>
            </div>
          </div>
        </div>
        <h6 className="text-start pb-3 fst-italic text-white">
          {stepWorkData === null
            ? ''
            : stepWorkData.map(
                (
                  step: any,
                  index: React.Key | null | undefined
                ) =>
                  step.workStep &&
                  step.tab === -1 && (
                    <span key={index}>{step.headers}</span>
                  )
              )}
        </h6>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              {stepWorkData === null
                ? ''
                : stepWorkData.map(
                    (step: any, index: number) =>
                      step.workStep &&
                      step.tab >= 0 && (
                        <div
                          key={index}
                          className={
                            'service-f-single fade-top ' +
                            (imgTab == step.tab
                              ? ' service-f-single-active'
                              : ' ')
                          }
                        >
                          <div className="single-item">
                            <div className="intro-btn">
                              <h4>{step.title}</h4>
                            </div>
                          </div>
                          <div className="single-item p-single p-sm body-cn">
                            <p>{step.des}</p>
                          </div>
                          <button
                            className="toggle-service-f"
                            onClick={() =>
                              setImgTab(
                                imgTab === 0 ? -1 : step.tab
                              )
                            }
                          ></button>
                        </div>
                      )
                  )}

              {stepWorkData === null
                ? ''
                : stepWorkData.map(
                    (
                      step: any,
                      index: React.Key | null | undefined
                    ) =>
                      step.workStep &&
                      step.tab === -2 && (
                        <h6
                          key={index}
                          className="text-center pb-3 fst-italic text-white w-75 d-block m-auto mt-5 "
                          dangerouslySetInnerHTML={{
                            __html: step.headers,
                          }}
                        />
                      )
                  )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UxProcess;
