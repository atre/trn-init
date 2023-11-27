import { App } from "cdktf";
import { Init } from "./src/init";

const config = {
  initRepo: {
    name: "trn-init",
    visibility: "public",
    hasProjects: true,
    hasIssues: true,
    collaborator: {
      username: "dromix",
      permission: "admin",
    },
  },
  componentsRepo: {
    name: "trn-components",
    visibility: "public",
    hasProjects: true,
    hasIssues: true,
    collaborator: {
      username: "dromix",
      permission: "admin",
    },
  },
  azureRepo: {
    name: "trn-azure",
    visibility: "public",
    hasProjects: true,
    hasIssues: true,
    collaborator: {
      username: "dromix",
      permission: "admin",
    },
  },
  awsRepo: {
    name: "trn-aws",
    visibility: "public",
    hasProjects: true,
    hasIssues: true,
    collaborator: {
      username: "dromix",
      permission: "admin",
    },
  },
};

const app = new App();

new Init(app, "init", config);

app.synth();
