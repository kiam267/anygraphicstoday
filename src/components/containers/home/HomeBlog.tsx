import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { blogContent } from '@/constant/inedex';
import { useRouter } from 'next/router';



const HomeBlog = () => {
  const router = useRouter();
  return (
    <section className="section blog fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                news & Blog
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Discover Our State-of-the-Art Design Studio and Expert Team
              </h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          {blogContent.map(
            blog =>
              blog.index <= 2 && (
                <div
                  key={blog.index}
                  className="col-12 col-md-6"
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() =>
                    router.push(`/blog/1`)
                  }
                >
                  <div className="blog__single fade-top">
                    <div className="blog__single-thumb topy-tilt">
                      <Image
                        src={blog.image}
                        alt="Image"
                        style={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          objectPosition: 'center 30%',
                        }}
                      />
                    </div>

                    <div className="blog__single-content">
                      <h4>{blog.header}</h4>
                      <div className="blog__single-meta">
                        <Link href="#" className="sub-title">
                          {blog.date}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
