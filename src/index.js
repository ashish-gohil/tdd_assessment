function add(str) {
  const nums = str.split(",");
  let ans = 0;
  nums.forEach((val) => (ans += Number(val)));
  ``;
  return ans;
}
