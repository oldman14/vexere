function callBackFunction(errors, value) {
  if (errors) {
    return new Error(errors);
  }
  //xu ly value
  console.log(value);
  return value;
}

callBackFunction(null, "./public");
