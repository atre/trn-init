import { Construct } from "constructs";
import {
  GithubRepository,
  GithubRepositoryProps,
} from "trn-components/lib/github/repository";
import { RepositoryConfig } from "@cdktf/provider-github/lib/repository";
import { TerraformStack } from "cdktf";
import { GithubProvider } from "@cdktf/provider-github/lib/provider";

export interface InitProps {
  initRepo: RepositoryConfig & GithubRepositoryProps;
  componentsRepo: RepositoryConfig & GithubRepositoryProps;
  azureRepo: RepositoryConfig & GithubRepositoryProps;
  awsRepo: RepositoryConfig & GithubRepositoryProps;
}

export class Init extends TerraformStack {
  constructor(scope: Construct, id: string, props: InitProps) {
    super(scope, id);

    new GithubProvider(this, "github-provider");

    const { initRepo, componentsRepo, azureRepo, awsRepo } = props;

    new GithubRepository(this, "repo-init", initRepo);
    new GithubRepository(this, "repo-components", componentsRepo);
    new GithubRepository(this, "aws", awsRepo);
    new GithubRepository(this, "azure", azureRepo);
  }
}
