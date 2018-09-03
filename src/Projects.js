import React from "react";
import https from "https";
import fetch from "isomorphic-fetch";

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
    </div>
  );
};

export { fetchProjects, ProjectsPage };
