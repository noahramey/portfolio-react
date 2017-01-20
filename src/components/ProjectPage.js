import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import projects from '../data/projects';

export default class ProjectPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const project = projects.filter((project) => project.id === id)[0];
    if (!project) {
      return <NotFoundPage/>;
    }
    return (
      <div className="project-full">
        <div className="project">
          <header>
            <h2 className="name">{project.name}</h2>
          </header>
          <section className="description">
            <p>{project.description}</p>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">Back to the index</Link>
        </div>
      </div>
    );
  }
}
