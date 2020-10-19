import React from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Projects = ({ projects }) => {
  console.log(projects.nodes);
  return (
    <div>
      <p>projects</p>
      {projects.nodes.map((project, i) => (
        <div key={i}>
          <h2> {project.frontmatter.title}</h2>
          <MDXRenderer>{project.body}</MDXRenderer>
          <Img fluid={project.frontmatter.image.childImageSharp.fluid} />
          <ul>
            {project.frontmatter.techs.map((tek) => (
              <li key={tek}>{tek}</li>
            ))}
          </ul>
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
      ))}
    </div>
  );
};

export default Projects;
