const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const repeatedGreetings = async () => {
  await sleep(1000)
  console.log("First")
  await sleep(1000)
  console.log("Second")
  await sleep(1000)
  console.log("Third")
}

repeatedGreetings()