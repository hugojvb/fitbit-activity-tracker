// Turning the date to YYYY-MM-DD (required to Fetch)
const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const date = formatDate(new Date());

//Turning last week to YYYY-MM-DD (required for sleep logs)
const dayZero = new Date();

export const previousWeek = formatDate(
  new Date(dayZero.getTime() - 7 * 24 * 60 * 60 * 1000)
);
