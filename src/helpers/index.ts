export const displayArray = (arr: string[]) => {
  let str = "";
  if (arr.length === 0) return str;
  arr.forEach((ele, index, wholeArr) => {
    if (wholeArr.length - 1 === index) return (str += `${ele}.`);
    str += `${ele}, `;
  });

  return str;
};
