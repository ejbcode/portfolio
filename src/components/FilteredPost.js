import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  .blurs {
    width: 100%;
  }
  @media (min-width: 768px) {
    .blurs {
      width: 48%;
    }
  }
`;

const LatestPostsStyles = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 0.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: var(--colorTxt3);
  position: relative;
  background: rgba(255, 255, 255, 0.01);
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
`;

const FilteredPost = ({ posts, title = 'Recent Post' }) => (
  <section id="blog" className="section-container ">
    <h2 className="section-title"> {title} </h2>
    <PostsGrid>
      {posts.length < 1 && <h3>No Results</h3>}
      {posts.map(post => (
        <div className="blurs" key={post.id}>
          <Link to={post.slug} key={post.id}>
            <LatestPostsStyles key={post.id}>
              <div className="content">
                <h3>{post.frontmatter.title}</h3>
                <p className="datetime">
                  {post.frontmatter.date} - {post.fields.readingTime.text}
                </p>
                <p className="excerpt">{post.frontmatter.excerpt}</p>
              </div>
              <div className="footer-post">
                <ul>
                  {post.frontmatter.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </LatestPostsStyles>
          </Link>
        </div>
      ))}
    </PostsGrid>
  </section>
);
export default FilteredPost;

FilteredPost.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
};
