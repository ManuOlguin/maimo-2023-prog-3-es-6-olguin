const avgYears = (...data) => {
  return (
    data.reduce((accumulator, { year }) => accumulator + parseInt(year), 0) /
    data.length
  );
};

const loveSongs = (...data) => {
  return data.filter(({ title }) => title.includes("love"));
};

export { loveSongs };
export default avgYears;
