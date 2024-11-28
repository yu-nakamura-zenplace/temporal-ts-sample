import { proxyActivities } from '@temporalio/workflow';

const { greet } = proxyActivities({
  startToCloseTimeout: '20 seconds',
});

export async function greetingWorkflow(name) {
  return await greet(name);
}