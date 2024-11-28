export async function greet(name) {

  // 5秒の待ち
  console.log("start wait(5sec) greet");
  await new Promise((resolve) => setTimeout(resolve, 1000 * 5));
  console.log("end wait(5sec) greet");

  return `Hello, ${name}! Current time is ${new Date().toLocaleTimeString()}`;
}