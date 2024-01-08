reproduction repo for https://github.com/aws/aws-cdk/issues/27902

you need to provide SMW_AWS_ACCOUNT_ID in cross-region-delete.ts

first deploy the full stack (see first commit)

then comment out the reference to bucket_2_policy in crossRegionImportStack (see third commit)

try to deploy the full stack again

get this error:

now your app is stuck in the rollback_update_failed state
