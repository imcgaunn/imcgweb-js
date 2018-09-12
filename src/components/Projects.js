import React from "react";
import {connect} from "react-redux";
import fetch from "isomorphic-fetch";
import {doFetchProjectsAsync} from "../actions/projects";

const githubHostName = "api.github.com";
const myUserName = "imcgaunn";

const fetchProjects = username => {
  const url = `https://${githubHostName}/users/${username}/repos`;
  return fetch(url).then(resp => {
    return resp.json();
  });
};

const ProjectsPage = props => {
  return (
    <div>
      <p> this is a great paragraph boiiiii </p>
      <button className={'testProjectsButton'} onClick={props.fetchMyProjects}>FETCH ME DADDY</button>
      <ul>
        {props.projects.take(10).map((proj, index) => {
          console.log(proj.get('url'));
          return (
          <li key={index}>
            <a href={proj.get('url')}>{proj.get('url')}</a>
            <p>last updated at: {proj.get('pushed_at')}</p>
          </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMyProjects: () => {
      dispatch(doFetchProjectsAsync(myUserName))
    }
  }
};

const ConnectedProjectsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPage);

export { fetchProjects, ConnectedProjectsPage };
