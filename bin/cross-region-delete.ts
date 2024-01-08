#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CrossRegionExportStack } from "../lib/crossRegionExportStack";
import { CrossRegionImportStack } from "../lib/crossRegionImportStack";

const SMW_AWS_ACCOUNT_ID = "REDACTED";

const app = new cdk.App();

const crossRegionExportStack = new CrossRegionExportStack(
  app,
  "CrossRegionDeleteStack",
  {
    env: {
      region: "us-east-1",
      account: SMW_AWS_ACCOUNT_ID,
    },
    crossRegionReferences: true,
  }
);

const crossRegionImportStack = new CrossRegionImportStack(
  app,
  "CrossRegionImportStack",
  {
    env: {
      region: "us-east-2",
      account: SMW_AWS_ACCOUNT_ID,
    },
    crossRegionReferences: true,
    bucket_1_policy: crossRegionExportStack.bucket_1_policy,
    bucket_2_policy: crossRegionExportStack.bucket_2_policy,
  }
);
crossRegionImportStack.addDependency(crossRegionExportStack);
