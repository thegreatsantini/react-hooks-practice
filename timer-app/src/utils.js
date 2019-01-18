export const millisecondsToHuman = ms => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);
  
    const humanized = [
      pad(hours.toString(), 2),
      pad(minutes.toString(), 2),
      pad(seconds.toString(), 2),
    ].join(':');
  
    return humanized;
  };
  
  const pad = (numberString, size) => {
    let padded = numberString;
    while (padded.length < size) {
      padded = `0${padded}`;
    }
    return padded;
  };

  function b(
    a                  // placeholder
  ){
    return a           // if the placeholder was passed, return
      ? (              // a random number from 0 to 15
        a ^            // unless b is 8,
        Math.random()  // in which case
        * 16           // a random number from
        >> a/4         // 8 to 11
        ).toString(16) // in hexadecimal
      : (              // or otherwise a concatenated string:
        [1e7] +        // 10000000 +
        -1e3 +         // -1000 +
        -4e3 +         // -4000 +
        -8e3 +         // -80000000 +
        -1e11          // -100000000000,
        ).replace(     // replacing
          /[018]/g,    // zeroes, ones, and eights with
          b            // random hex digits
        )
  }
  
  export function uuidGen(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)}