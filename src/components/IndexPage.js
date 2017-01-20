import React from 'react';
import { Link } from 'react-router';
import ProjectPreview from './ProjectPreview';
import projects from '../data/projects';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="project-selector">
          {projects.map(projectData => <ProjectPreview key={projectData.id} {...projectData} />)}
        </div>
      </div>
    );
  }
}
