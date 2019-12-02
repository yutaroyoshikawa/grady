const sleep = (time: number) => {
  const d1: any = new Date()
  while (true) {
    const d2: any = new Date()
    if (d2 - d1 > time) {
      break
    }
  }
};

export default sleep
