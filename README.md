## reproduction repo for https://github.com/aws/aws-cdk/issues/27902

- you need to provide SMW_AWS_ACCOUNT_ID in cross-region-delete.ts
- first deploy the full stack (see code at commit 38eb987), you need to uncomment the bucket_2_policy references in bin/cross-region-delete.ts and in lib/crossRegionImportStack.ts
- then comment out the reference to bucket_2_policy in crossRegionImportStack (see code after commit 54503bd) Note: you need to comment out in bin/cross-region-delete.ts and in lib/crossRegionImportStack.ts
- try to deploy the full stack again
- get error pasted at bottom
- now your app is stuck in the UPDATE_ROLLBACK_FAILED state






'''
10:10:05 AM | UPDATE_FAILED | Custom::CrossRegionExportWriter | ExportsWriteruseast2828FA26B86FBEFA7
Received response status [FAILED] from custom resource. Message returned: Error: Exports cannot be updated:

at i (/var/task/index.js:4:10)
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
at async P (/var/task/index.js:3:18)
at async Runtime.handler (/var/task/**entrypoint**.js:1:932) (RequestId: 30ded223-2fbf-4441-a895-53f74494fcf2)

10:10:11 AM | UPDATE_FAILED | Custom::CrossRegionExportWriter | ExportsWriteruseast2828FA26B86FBEFA7
Received response status [FAILED] from custom resource. Message returned: Error: Exports cannot be updated:

at i (/var/task/index.js:4:10)
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
at async P (/var/task/index.js:3:65)
at async Runtime.handler (/var/task/**entrypoint**.js:1:932) (RequestId: 7328809e-f132-4b40-8c0a-814b4a8b6081)

❌ CrossRegionDeleteStack failed: Error: The stack named CrossRegionDeleteStack failed to deploy: UPDATE_ROLLBACK_FAILED (The following resource(s) failed to update: [ExportsWriteruseast2828FA26B86FBEFA7]. ): Received response status [FAILED] from custom resource. Message returned: Error: Exports cannot be updated:

    at i (/var/task/index.js:4:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async P (/var/task/index.js:3:18)
    at async Runtime.handler (/var/task/__entrypoint__.js:1:932) (RequestId: 30ded223-2fbf-4441-a895-53f74494fcf2), Received response status [FAILED] from custom resource. Message returned: Error: Exports cannot be updated:

    at i (/var/task/index.js:4:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async P (/var/task/index.js:3:65)
    at async Runtime.handler (/var/task/__entrypoint__.js:1:932) (RequestId: 7328809e-f132-4b40-8c0a-814b4a8b6081)
    at FullCloudFormationDeployment.monitorDeployment (/Users/patrick/Documents/Projects/cross-region-delete/node_modules/aws-cdk/lib/index.js:421:10934)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Object.deployStack2 [as deployStack] (/Users/patrick/Documents/Projects/cross-region-delete/node_modules/aws-cdk/lib/index.js:424:180618)
    at async /Users/patrick/Documents/Projects/cross-region-delete/node_modules/aws-cdk/lib/index.js:424:163866

❌ Deployment failed: Error: The stack named CrossRegionDeleteStack failed to deploy: UPDATE_ROLLBACK_FAILED (The following resource(s) failed to update: [ExportsWriteruseast2828FA26B86FBEFA7]. ): Received response status [FAILED] from custom resource. Message returned: Error: Exports cannot be updated:

    at i (/var/task/index.js:4:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async P (/var/task/index.js:3:18)
    at async Runtime.handler (/var/task/__entrypoint__.js:1:932) (RequestId: 30ded223-2fbf-4441-a895-53f74494fcf2), Received response status [FAILED] from custom resource. Message returned: Error: Exports cannot be updated:

    at i (/var/task/index.js:4:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async P (/var/task/index.js:3:65)
    at async Runtime.handler (/var/task/__entrypoint__.js:1:932) (RequestId: 7328809e-f132-4b40-8c0a-814b4a8b6081)
    at FullCloudFormationDeployment.monitorDeployment (/Users/patrick/Documents/Projects/cross-region-delete/node_modules/aws-cdk/lib/index.js:421:10934)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Object.deployStack2 [as deployStack] (/Users/patrick/Documents/Projects/cross-region-delete/node_modules/aws-cdk/lib/index.js:424:180618)
    at async /Users/patrick/Documents/Projects/cross-region-delete/node_modules/aws-cdk/lib/index.js:424:163866

The stack named CrossRegionDeleteStack failed to deploy: UPDATE_ROLLBACK_FAILED (The following resource(s) failed to update: [ExportsWriteruseast2828FA26B86FBEFA7]. ): Received response status [FAILED] from custom resource. Message returned: Error: Exports cannot be updated:

    at i (/var/task/index.js:4:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async P (/var/task/index.js:3:18)
    at async Runtime.handler (/var/task/__entrypoint__.js:1:932) (RequestId: 30ded223-2fbf-4441-a895-53f74494fcf2), Received response status [FAILED] from custom resource. Message returned: Error: Exports cannot be updated:

    at i (/var/task/index.js:4:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async P (/var/task/index.js:3:65)
    at async Runtime.handler (/var/task/__entrypoint__.js:1:932) (RequestId: 7328809e-f132-4b40-8c0a-814b4a8b6081)

'''
