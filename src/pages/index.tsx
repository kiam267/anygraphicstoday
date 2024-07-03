import React from 'react';
import Layout from '@/components/layout/Layout';
import HomeOneBanner from '@/components/layout/banner/HomeOneBanner';
import Agency from '@/components/containers/home/Agency';
import PortfolioText from '@/components/containers/home/PortfolioText';
import HomeOffer from '@/components/containers/home/HomeOffer';
import HomeTestimonial from '@/components/containers/home/HomeTestimonial';
import HomeBlog from '@/components/containers/home/HomeBlog';
import HomeSponsor from '@/components/containers/home/HomeSponsor';
import NextPage from '@/components/containers/home/NextPage';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import Head from 'next/head';

const HomeDark = () => {
  return (
    <Layout header={1} footer={1} video={true}>
      <Head>
        <meta
          name="title"
          content="Top Local Designers for Custom Graphic Branding | Any Graphic Today"
        />

        <meta
          name="description"
          content="Elevate Your Brand with Top Local Graphic Designers at No Upfront Fee. 24/7 Exceptional Design Solutions Near You for Branding"
        />
      </Head>
      <HomeOneBanner />
      <Agency />
      <PortfolioText />
      <HomeOffer />
      <HomeBlog />
      <CtaTwo />
    </Layout>
  );
};

export default HomeDark;
