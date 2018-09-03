import { fetchProjects } from "./Projects";
import { fromJS, Map } from "immutable";

it("can return a json list of projects", () => {
  fetchProjects("imcgaunn")
    .then(data => {
      const immutableData = fromJS(data);
      immutableData.map(proj => {
        const interestingData = Map({
          url: proj.get('html_url'),
          pushed_at: proj.get('pushed_at')
        });
        console.log(interestingData);
      });
    })
    .catch(err => {
      console.error(err);
    });
});
