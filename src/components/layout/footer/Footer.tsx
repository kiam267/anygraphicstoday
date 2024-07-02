import React, {
  HtmlHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/footer_logo.png';
import { Toaster, toast } from 'alert';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, userEmail] = useState('');

  const handelSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const userEmail = email;
    if (!email) {
      return toast.error('email is required');
    }
    const response = await fetch('/api/subscriber', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail,
      }),
    });

    if (response.ok) {
      toast.success('Email sent successfully');
    } else {
      toast.error('Error sending email');
    }
  };

  return (
    <footer
      className="footer section pb-0"
      style={{
        backgroundImage:
          "url('/images/footer/footer-bg.png')",
      }}
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={logo} alt="Image" width={300} />
              </Link>
              <div className="footer__single-meta">
                <div className="row">
                  <div className="col-12">
                    <div className="">
                      <i className="fa-sharp fa-solid fa-location-dot pe-2 pb-sm-1 pb-lg-4"></i>
                      <span>
                        Texas, Florida, California, Chicago,
                        New York, Atlanta
                      </span>
                    </div>
                  </div>

                  <Link
                    href="tel:+16286005017"
                    className="col-6"
                  >
                    <i className="fa-sharp fa-solid fa-phone-volume"></i>
                     +1-628-600-5017
                  </Link>
                  <Link href="mailto:info@anygraphicstoday.com">
                    <i className="fa-sharp fa-solid fa-envelope"></i>
                    info@anygraphicstoday.com
                  </Link>
                </div>
              </div>
              <div className="footer__cta text-start">
                <Link
                  href="/contact-us"
                  className="btn btn--secondary"
                >
                  Call Designer Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Company</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/advertisement-policy">
                      Advertisement Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer">
                      Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms">
                      Terms{' '}
                      <span className="text-lowercase">
                        of
                      </span>{' '}
                      Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Subscribe our newsletter</h5>
              </div>
              <div className="footer__single-content">
                <p>
                  Welcome to Our Graphic Design Agency! We
                  specialize in assisting businesses with
                  branding and marketing.
                </p>
                <div className="footer__single-form">
                  <form
                    action="#"
                    method="post"
                    onSubmit={handelSubmit}
                  >
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                        onChange={e =>
                          userEmail(e.target.value)
                        }
                      />
                      <button
                        type="submit"
                        className="subscribe"
                      >
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p
                      style={{
                        fontSize: '13px',
                      }}
                    >
                      Copyright &copy;
                      <span id="copyYear">
                        {currentYear}
                      </span>
                      Any Graphics Today . All Rights
                      Reserved. Designed by{' '}
                      <a href="https://www.fixwebsiteissues.com/">
                        WevTEC.
                      </a>
                       
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link
                      href="https://www.facebook.com/AnyGraphicsToday"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="https://twitter.com/anygraphics2day"
                      target="_blank"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    {/* <Link href="https://www.pinterest.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link> */}
                    <Link
                      href="https://www.instagram.com/anygraphicstoday"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
