/**
 * ReE
 * @param body
 */
const errRes = (res: any, err: any, code = 400, key = "err") => {
  // if (typeof err == "object" && typeof err.message != "undefined") {
  //   err = err.message;
  // } else if (typeof err == "string") {
  //   let obj = {};
  //   obj[key] = [err];
  //   err = obj;
  // }
  // if (typeof code !== "undefined") res.statusCode = code;
  console.log(typeof err);
  return res.json({ status: false, errMsg: err });
};

/**
 * ReS
 * @param body
 */
const okRes = (res: any, data: any, code = 200) => {
  // Success Web Response
  let sendData = { status: true, errMsg: "" };

  if (typeof data == "object") {
    sendData = Object.assign(data, sendData); //merge the objects
  }
  if (typeof code !== "undefined") res.statusCode = code;
  return res.json(sendData);
};

export { okRes, errRes };