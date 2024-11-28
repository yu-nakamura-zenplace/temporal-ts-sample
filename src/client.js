import { Client, Connection } from '@temporalio/client';
import { greetingWorkflow } from './workflows.js';

async function run() {
  const connection = await Connection.connect();
  const client = new Client({ connection });

  const handle = await client.workflow.start(greetingWorkflow, {
    args: ['Temporal TypeScript'],
    taskQueue: 'greeting-task-queue',
    workflowId: `greeting-workflow-${Date.now()}`,
  });
  
  console.log(`Started workflow ${handle.workflowId}`);
  
  const result = await handle.result();
  console.log(result);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
}); 