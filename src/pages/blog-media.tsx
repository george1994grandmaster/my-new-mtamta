import { FC } from "react";
import starComplete from "../assets/img/starComplete.svg";
import blogMediaBanner from "../assets/img/blogMediaBanner.png";
import BlogBanner from "../components/scroll-trigger-animation/blog-banner";

const BlogMedia: FC = () => {
  return (
    <>
      <div className="main-banner-wrapper p-relative ai-center">
        <div className="left-border-fixed"></div>
        <div className="right-border-fixed"></div>
        <div className="certificate-top-star">
          <img src={starComplete} alt="top-star" />
        </div>
        <div className="certificate-bottom-star">
          <img src={starComplete} alt="top-star" />
        </div>
        <div className="blog-media-img">
          <img src={blogMediaBanner} alt="blog-media-banner" />
        </div>
      </div>
      <div className="horizontal-border"></div>
      <div className="bright-wrapper">
        <BlogBanner/>
      </div>
    </>
  )
}

export default BlogMedia;