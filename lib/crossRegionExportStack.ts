import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import * as s3 from "aws-cdk-lib/aws-s3";
import * as iam from "aws-cdk-lib/aws-iam";

export class CrossRegionExportStack extends cdk.Stack {
  readonly bucket_1_policy: iam.PolicyStatement;
  readonly bucket_2_policy: iam.PolicyStatement;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let bucket_1 = new s3.Bucket(this, "bucket_1_", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: false,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    this.bucket_1_policy = new iam.PolicyStatement({
      actions: ["s3:ListBucket"],
      resources: [bucket_1.bucketArn, `${bucket_1.bucketArn}/*`],
      effect: iam.Effect.ALLOW,
    });

    let bucket_2 = new s3.Bucket(this, "bucket_2_", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: false,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    this.bucket_2_policy = new iam.PolicyStatement({
      actions: ["s3:ListBucket"],
      resources: [bucket_2.bucketArn, `${bucket_2.bucketArn}/*`],
      effect: iam.Effect.ALLOW,
    });
  }
}
