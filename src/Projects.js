import React from "react";
import https from "https";

const githubHostName = "api.github.com";
const myUserName = "imcgaunn";

const fetchProjects = username => {
  console.log("fetching projects");
  const requestOptions = {
    hostname: githubHostName,
    path: `/users/${username}/repos`,
    method: "GET",
    port: 443,
    headers: {
      'User-Agent': 'coolagent'
    },
  };
  https.request(requestOptions, res => {
    const { statusCode } = res;
    let rawData = "";

    res.setEncoding("utf8");
    res.on("data", chunk => {
      rawData += chunk;
    });
    res.on("end", () => {
      try {
        console.log(rawData);
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
    res.on("error", e => {
      console.error(`Got error: ${e.message}`);
    });
  });
};

fetchProjects("imcgaunn");

console.log("nice");

export { fetchProjects };
