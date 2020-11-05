import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PostsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  display: grid;
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 20px;
  align-items: stretch;
`;

const LatestPostsStyles = styled.article`
  height: 100%;
  border-radius: 0.6rem 0.6rem 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: #5d5e5e;
  position: relative;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  .footer-post {
    color: #141414;
    padding: 0 0.7rem;
  }

  .content {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
  }

  .datetime {
    font-size: 1.4rem;
    color: var(--gray);
  }
  p {
    color: white;
  }
  a {
    color: white;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      background-color: var(--colorTxt2);
      padding: 2px 7px;
      margin-bottom: 8px;
      margin-right: 8px;
    }
  }

  @media (min-width: 768px) {
    .image-container {
    }
    .content {
    }
  }
`;

const ImgStyle = styled(Img)`
  object-fit: cover;
  width: 100%;
  max-height: 135px;
`;

const LatestPost = ({ posts }) => (
  <section id="blog" className="section-container ">
    <h2 className="section-title">Recent post</h2>
    <PostsGrid>
      {posts.map((post) => (
        <Link to={post.slug} key={post.id}>
          <LatestPostsStyles key={post.id}>
            <div className="image-container">
              <ImgStyle fluid={post.frontmatter.image?.childImageSharp.fluid} />
            </div>
            <div className="content">
              <h3>{post.frontmatter.title}</h3>
              <p className="datetime">
                {post.frontmatter.date} - {post.fields.readingTime.text}
              </p>
              <p className="excerpt">{post.frontmatter.excerpt}</p>
            </div>
            <div className="footer-post">
              <ul>
                {post.frontmatter.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </LatestPostsStyles>
        </Link>
      ))}
    </PostsGrid>
  </section>
);

export default LatestPost;
