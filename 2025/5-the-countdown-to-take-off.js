/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  // All your code here
  const fromTimeComponents = fromTime.split(/[*@| ]/);
  const takeOffTimeComponents = takeOffTime.split(/[*@| ]/);

  const fromDate = new Date(
    Date.UTC(
      Number(fromTimeComponents[0]),
      Number(fromTimeComponents[1]) - 1,
      Number(fromTimeComponents[2]),
      Number(fromTimeComponents[3]),
      Number(fromTimeComponents[4]),
      Number(fromTimeComponents[5]),
    ),
  );

  const takeOffDate = new Date(
    Date.UTC(
      Number(takeOffTimeComponents[0]),
      Number(takeOffTimeComponents[1]) - 1,
      Number(takeOffTimeComponents[2]),
      Number(takeOffTimeComponents[3]),
      Number(takeOffTimeComponents[4]),
      Number(takeOffTimeComponents[5]),
    ),
  );
  const result = Math.floor((takeOffDate - fromDate) / 1000);
  return result;
}

const takeoff = "2025*12*25@00|00|00 NP";

// from December 24, 2025, 23:59:30, 30 seconds before takeoff
timeUntilTakeOff("2025*12*24@23|59|30 NP", takeoff);
// 30

// exactly at takeoff time
timeUntilTakeOff("2025*12*25@00|00|00 NP", takeoff);
// 0

// 12 seconds after takeoff
timeUntilTakeOff("2025*12*25@00|00|12 NP", takeoff);
// -12
