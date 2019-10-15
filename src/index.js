/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let timeStuding = 0;

      // check the total time depending on the programming knowledge 'knowsProgramming'
      if (knowsProgramming) {
        timeStuding = 800;
        } else { timeStuding = 800 + 500;
      };

      // count the number of weeks 
      let weeksStuding = timeStuding/config[focus];

      // round and return value
      return Math.ceil(weeksStuding);
  };
  