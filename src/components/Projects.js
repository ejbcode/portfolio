import React from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectsStyle = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10rem;
`;
const ProjectStyle = styled.article`
  h3 {
    font-size: 2.8rem;
    font-weight: 400;
  }

  .project-img {
    width: 100%;
    height: auto;
  }

  .project-description {
    margin: 10px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        background-color: var(--colorTxt2);
        padding: 5px 8px;
        margin-bottom: 8px;
        margin-right: 5px;
      }
    }

    .project-links {
    }

    .project-links a:first-child {
      margin-right: 10px;
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
  }
`;

const Projects = ({ projects }) => {
  console.log(projects.nodes);
  return (
    <ProjectsStyle>
      <p>projects</p>
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
    </ProjectsStyle>
  );
};

export default Projects;
