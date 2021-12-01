const depthMesurements = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
const calculateTimesDepthIncreased = function(mesurements) {
  let timesIncreased = 0;
  mesurements.filter(function(item, index, array) {
    if (item > array[index - 1]) {
      timesIncreased++;
    };
  });
  return timesIncreased;
}


console.log(calculateTimesDepthIncreased(depthMesurements));