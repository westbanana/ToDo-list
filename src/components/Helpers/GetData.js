const getData = () => {
  const data = new Date();
  const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  return (
    `${data.getDate()}/${monthShortNames[data.getMonth()]}/${data.getFullYear()}/${data.getHours()}:${data.getMinutes() >= 10
      ? data.getMinutes()
      : `0${data.getMinutes()}`}`
  );
};

export default getData;
