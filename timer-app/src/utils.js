export const millisecondsToHuman = ms => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);

  const humanized = [
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
    pad(ms.toString(), 2)
  ].join(":");

  return humanized;
};

const pad = (numberString, size) => {
  let padded = numberString;
  while (padded.length < size) {
    padded = `0${padded}`;
  }
  return padded;
};

export function uuidGen(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuidGen);
}

export const toMS = time => {
  if (time === 0) return 0;
  if (typeof timer === String) {
    let splitTime = null;
    if (time.inlcludes(":")) {
      splitTime = time.split(":");
    } else if (time.inlcludes(".")) {
      splitTime = time.split(".");
    }
    const hours = parseInt(splitTime[0]) * 3600 * 1000;
    const minutes = parseInt(splitTime[1]) * 1000;
    return hours + minutes + parseInt(splitTime[2]);
  }
  return time * 3600 * 1000;
};
