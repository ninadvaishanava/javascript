const myobject = {
  js: "java",
  cpp: "c++",
  py: "python",
};
for (const key in myobject) {
  console.log(`${key} value for ${myobject[key]}`);
}
