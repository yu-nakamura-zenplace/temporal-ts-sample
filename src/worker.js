import { Worker } from '@temporalio/worker';
import * as activities from './activities.js';

async function run() {
  const params = {
    workflowsPath: new URL('./workflows.js', import.meta.url).pathname,
    activities,
    taskQueue: 'greeting-task-queue',
  };
  console.log({workerCreateParams: params});
  const worker = await Worker.create(params);

  console.log('Worker connecting to server...');
  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});