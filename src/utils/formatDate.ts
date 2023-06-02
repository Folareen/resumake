const formatDate = (timestamp : string) => {
  const date = new Date(`${timestamp}`);

  const day = date.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  if (month && day && year)
    return `${month} ${year}`;

  return 'N/A'
};

export default formatDate;