function mergeRanges(input) {
  // Merge meetings ranges
  let sched = [];
  let blocks = [];
  let blockStart = 0;
  let blockEnd = 0;
  let schedBlocks = [];
  for (let i = 0; i < input.length; i++) {
      for (let j = input[i].startTime; j <= input[i].endTime; j++) {
          sched[j] = 1;
      }
  }
  for (let k = 0; k < sched.length; k++) {
      if (sched[k] == undefined) {
          continue;
      }
      if (sched[k - 1] == undefined) {
          blockStart = k;
      }
      if (sched[k + 1] == undefined) {
          blockEnd = k;
          blocks.push([blockStart, blockEnd]);
      }
  }
  for (let i = 0; i < blocks.length; i++) {
      schedBlocks[i] = { startTime: blocks[i][0], endTime: blocks[i][1] };
  }

  return schedBlocks;
}