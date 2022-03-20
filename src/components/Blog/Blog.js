/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Title, Container, Overlay } from '../GlobalComponents';
import { BlogCard } from './components';
import { BlogOne, BlogTwo, BlogThree } from '../../assets/images';
import { getNextYear } from '../../utils/dates';
import BlogStyles from './Blog.styles';

const Blog = () => {
  const nextYear = getNextYear();
  return (
    <section css={BlogStyles} className="blog" id="blog">
      <Overlay
        overlay="linear-gradient(120deg, #505add 0%, #df42b1 100%)"
        opacity=".9"
      />
      <Title subtitle="OUR BLOG" title="LATEST NEWS" />
      <Container>
        <BlogCard
          blogImg={BlogOne}
          blogTitle="React Conference"
          blogSpeaker="David Roben"
          blogDate={`March 13, ${nextYear}`}
        />
        <BlogCard
          blogImg={BlogTwo}
          blogTitle="UI UX Conference"
          blogSpeaker="Donna Rosen"
          blogDate={`April 15, ${nextYear}`}
        />
        <BlogCard
          blogImg={BlogThree}
          blogTitle="Backend Conference"
          blogSpeaker="Martha Burke"
          blogDate={`June 28, ${nextYear}`}
        />
      </Container>
    </section>
  );
};

export default Blog;
