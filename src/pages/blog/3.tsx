import React from 'react';
import Layout from '@/components/layout/Layout';
import BlogSingleBanner from '@/components/layout/banner/BlogSingleBanner';
import BlogDetailsMain from '@/components/containers/blog/BlogDetailsMain';
import { useRouter } from 'next/router';
import { blogContent } from '@/constant/inedex';
const BlogSingle = () => {
  const router = useRouter();
  const ID: number = 3;


  return (
    <Layout header={2} footer={1} video={0}>
      {blogContent.map(blog => {
        if (blog.index === ID) {
          return (
            <div key={blog.index}>
              <BlogSingleBanner hedaer={blog.header} />
              <BlogDetailsMain content={blog} />
            </div>
          );
        }
      })}
   
    </Layout>
  );
};

export default BlogSingle;
