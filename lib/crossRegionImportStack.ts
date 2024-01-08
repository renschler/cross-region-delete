import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as iam from "aws-cdk-lib/aws-iam";

interface CrossRegionImportStackProps extends cdk.StackProps {
  bucket_1_policy: iam.PolicyStatement;
  //   bucket_2_policy: iam.PolicyStatement;

  env: {
    region: string;
    account: string;
  };
}

export class CrossRegionImportStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props: CrossRegionImportStackProps
  ) {
    super(scope, id, props);

    const {
      env,
      bucket_1_policy,
      //bucket_2_policy
    } = props;

    const lambda_1 = new lambda.Function(this, `lambda_1_${env.region}`, {
      runtime: lambda.Runtime.NODEJS_LATEST,
      // provide simple inline code for lambda
      code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
            console.log("Hello from lambda_1_${env.region}");
            return { statusCode: 200, body: "Hello from lambda_1_${env.region}" };
        };
    `),
      handler: "index.handler",
      timeout: cdk.Duration.seconds(30),
      memorySize: 128,
    });

    lambda_1.addToRolePolicy(bucket_1_policy);
    // lambda_1.addToRolePolicy(bucket_2_policy);
  }
}
