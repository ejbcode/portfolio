import React from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

const ProjectStyle = styled.article`
  .project-item {
    border: green 3px dashed;
  }

  .project-description {
    border: blue 3px dashed;
    margin: 10px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      li {
        font-weight: 400;
        background-color: var(--colorTxt2);
        padding: 5px 8px;
        margin-bottom: 8px;
        margin-right: 5px;
      }
    }

    .project-links {
      margin: 15px 0;
    }

    .project-links a:first-child {
      margin-right: 10px;
    }
  }

  :nth-child(even) {
    background: red;
  }
  :nth-child(odd) {
    background: pink;
  }
`;

const Projects = ({ projects }) => {
  console.log(projects.nodes);
  return (
    <div>
      <p>projects</p>
      {projects.nodes.map((project, i) => (
        <ProjectStyle className="portfolio_item" key={i}>
          <div className="project-item">
            <Img fluid={project.frontmatter.image.childImageSharp.fluid} />
          </div>
          <div className="project-description">
            <h2> {project.frontmatter.title}</h2>
            <MDXRenderer>{project.body}</MDXRenderer>

            <ul>
              {project.frontmatter.techs.map((tek) => (
                <li key={tek}>{tek}</li>
              ))}
            </ul>
            <div className="project-links">
              <a
                href={project.frontmatter.livedemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.frontmatter.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </div>
        </ProjectStyle>
      ))}
    </div>
  );
};

export default Projects;
