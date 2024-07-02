import React, { FormEventHandler, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import phone1 from 'public/images/phone.png';
import mail from 'public/images/mail.png';
import location from 'public/images/location.png';
import time from 'public/images/time.png';
import calculation from '@/lib/calculation';
import { useRouter } from 'next/router';

const ContactMain = () => {
  const [buttonApprove, setButtonApprove] = useState(false);
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('+1');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const calculationViaApproveSubmitButton = (e: any) => {
    const finalNumber =
      calculation.firstNumber + calculation.secondNumber;
    const approveSignal = calculation.getCalculation(
      Number(e.target.value),
      finalNumber
    );

    setButtonApprove(approveSignal);
  };

  // Handeler
  const router = useRouter();

  const submitHandeler:
    | React.FormEventHandler<HTMLFormElement>
    | undefined = async e => {
    e.preventDefault();

    const userFirstname = userName;
    const userMessage = message;
    const phoneNumber = phone;

    e.preventDefault();
    const sendWelcomeEmail = async () => {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userFirstname,
          phoneNumber,
          userMessage,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Email sent successfully:', data);
        return router.push('/thank-you');
      } else {
        console.error('Error sending email:', data);
      }
    };

    await sendWelcomeEmail();
  };
  return (
    <section className="section contact-m fade-wrapper py-1">
      <div className="container">
        <div className="row gaper py-4">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper justify-content-center">
                {/* <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div> */}
                <div className="col-12 col-lg-12 col-xxl-8">
                  <div className="contact-main__form  fade-top">
                    <h3>Leave A Message</h3>
                    <form
                      onSubmit={submitHandeler}
                      action="#"
                      method="post"
                      className="section__content-cta"
                    >
                      <div className="group-wrapper">
                        <div className="group-input ">
                          <input
                            type="text"
                            name="contact-name"
                            value={userName}
                            onChange={e =>
                              setUserName(e.target.value)
                            }
                            id="contactName"
                            placeholder="Name"
                          />
                        </div>
                        <div className="group-input ">
                          <input
                            type="text"
                            name="contact-phone"
                            value={phone}
                            onChange={e =>
                              setPhone(e.target.value)
                            }
                            id="contactEmail"
                            placeholder="phone"
                          />
                        </div>
                      </div>
                      {/* <div className="group-input drt">
                        <select
                          className="subject"
                          value={subject}
                          onChange={e =>
                            setSubject(e.target.value)
                          }
                        >
                          <option data-display="Subject">
                            Subject
                          </option>
                          <option value="Account">
                            Account
                          </option>
                          <option value="Service">
                            Service
                          </option>
                          <option value="Pricing">
                            Pricing
                          </option>
                          <option value="Support">
                            Support
                          </option>
                        </select>
                      </div> */}
                      <div className="group-input ">
                        <textarea
                          value={message}
                          onChange={e =>
                            setMessage(e.target.value)
                          }
                          name="contact-message"
                          id="contactMessage"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="d-flex  align-items-center justify-content-center gap-3 mt-2">
                        <div>
                          <span
                            className="text-white fw-bold "
                            dangerouslySetInnerHTML={{
                              __html:
                                calculation.firstNumber,
                            }}
                          ></span>
                        </div>
                        <div className=" p-3">
                          <span className="text-white fw-bold ">
                            +
                          </span>
                        </div>
                        <div>
                          <span
                            className="text-white fw-bold "
                            dangerouslySetInnerHTML={{
                              __html:
                                calculation.secondNumber,
                            }}
                          ></span>
                        </div>
                        <div>
                          <span className="text-white fw-bold ">
                            =
                          </span>
                        </div>
                        <div className="mt-1">
                          <input
                            onChange={
                              calculationViaApproveSubmitButton
                            }
                            accept="number"
                            type="text"
                            className="text-white fw-bold rounded-4 border py-3 px-2  "
                            style={{
                              background: 'none',
                              maxWidth: '100px',
                              width: '40%',
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-cta d-flex justify-content-center">
                        <button
                          disabled={!buttonApprove}
                          style={{
                            border: !buttonApprove
                              ? '2px solid #fff'
                              : '',
                            color: !buttonApprove
                              ? '#fff'
                              : '',
                          }}
                          type="submit"
                          className="btn btn--primary"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone1} alt="Image" />
              </div>
              <div className="content">
                <h4>Phone</h4>
                <p>
                  <Link href="tel:+16286005017">
                     +1-628-600-5017
                  </Link>
                </p>
                {/* <p>
                  <Link href="tel:197-90-56-780">Fax : +18882073469</Link>
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto:info@anygraphicstoday.com">
                    info@anygraphicstoday.com
                  </Link>
                </p>
                {/* <p>
                  <Link href="mailto:info.company@gmail.com">
                    Info.company@yahoo.com
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h4>Service Coverage</h4>
                <p>
                  <Link href="#">
                    Texas, Florida, California, Chicago, New
                    York, Atlanta and Other US States
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Image" />
              </div>
              <div className="content">
                <h4>Working Hours</h4>
                <p>Sun - Thu 09 am - 08 pm</p>
                <p>Fri - Sat 10 am - 06 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
