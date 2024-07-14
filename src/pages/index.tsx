import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/layout/Layout';

const HomeOneBanner = dynamic(
  () => import('@/components/layout/banner/HomeOneBanner'),
  { ssr: false }
);

const Agency = dynamic(
  () => import('@/components/containers/home/Agency'),
  { ssr: false }
);
import PortfolioText from '@/components/containers/home/PortfolioText';
import HomeOffer from '@/components/containers/home/HomeOffer';
import HomeBlog from '@/components/containers/home/HomeBlog';
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
