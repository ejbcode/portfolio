import React from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectsStyle = styled.section``;
const ProjectStyle = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10rem;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 2.8rem;
    font-weight: 400;
  }
  .project-item {
    width: 100%;
  }

  .project-item img {
    width: 100%;
  }

  .project-description {
    font-size: 2rem;
    p {
      margin-bottom: 2rem;
    }
    h3 {
      font-size: 3rem;
      font-weight: 700;
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

    .project-links a {
      font-size: 2rem;
    }

    .project-links a:first-child {
      margin-right: 2.5rem;
    }
  }

  :nth-child(even) {
    flex-direction: row-reverse;
    .project-img {
    }
    .project-img img {
    }
  }
  :nth-child(odd) {
    .project-img {
    }
  }

  @media (min-width: 768px) {
    .project-item {
      width: 35%;
    }
    .project-description {
      width: calc(65% - 20px);
    }
  }
`;

const Projects = ({ projects }) => {
  console.log(projects.nodes);
  return (
    <div className="section-container ">
      <h2 className="section-title">Projects</h2>
      {projects.nodes.map((project, i) => (
        <ProjectStyle key={i}>
          <div className="project-item">
            <Img fluid={project.frontmatter.image.childImageSharp.fluid} />
          </div>
          <div className="project-description">
            <h3> {project.frontmatter.title}</h3>
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
                <FaExternalLinkAlt />
                Live Demo
              </a>
              <a
                href={project.frontmatter.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Repository
              </a>
            </div>
          </div>
        </ProjectStyle>
      ))}
    </div>
  );
};

export default Projects;
