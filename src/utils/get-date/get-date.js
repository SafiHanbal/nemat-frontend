const beautyfyNumbers = (num) => {
  return num >= 10 ? num : `0${num}`;
};

const modifyHour = (hour) => {
  let meridiem = 'AM';
  let modifiedHour;
  if (hour > 12) {
    modifiedHour = hour - 12;
    meridiem = 'PM';
  }

  return {
    hour: beautyfyNumbers(modifiedHour),
    meridiem,
  };
};

export const getDate = (dateSting) => {
  const dateData = new Date(String(dateSting));

  const year = dateData.getFullYear();
  const month = beautyfyNumbers(dateData.getMonth());
  const date = beautyfyNumbers(dateData.getDate());

  const hour = dateData.getHours();
  const min = beautyfyNumbers(dateData.getMinutes());

  const modifiedHour = modifyHour(hour);

  return `${date}/${month}/${year}--${modifiedHour.hour}:${min} ${modifiedHour.meridiem}`;
};
