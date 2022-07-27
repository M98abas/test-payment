export const URL = "http://localhost:4000";

/**
 *
 * @param data
 * @param callback
 */
export const hyperPayInit = async (data: any, callback: any) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  fetch(`${URL}/hp`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result: any) => {
      console.log(result);

      if (result.status) return callback(result, null);
      callback(null, "error occured");
    })
    .catch((error) => console.log("error", error));
};

/**
 *
 * @param data
 * @param callback
 */
export const hyperpayTokenization = async (data: any, callback: any) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  fetch(`${URL}/hp/token`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result: any) => {
      console.log(result);

      if (result.status) return callback(result, null);
      callback(null, "error occured");
    })
    .catch((error) => console.log("error", error));
};

/**
 *
 * @param data
 * @param callback
 */
export const hyperpayGetStatus = async (data: any, callback: any) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  fetch(`${URL}/hp/status`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result: any) => {
      // console.log(result);

      if (result.status) return callback(result, null);
      callback(null, "error occured");
    })
    .catch((error) => console.log("error", error));
};

/**
 *
 * @param data
 * @param callback
 */
export const mpgsPymentInit = async (data: any, callback: any) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  fetch(`${URL}/mpgs`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result: any) => {
      console.log(result);

      if (result.status) return callback(result, null);
      callback(null, "error occured");
    })
    .catch((error) => console.log("error", error));
};
