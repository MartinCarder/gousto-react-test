import fetch from "cross-fetch";

export const apiRequest = (method, endpoint, data) => {
  const header = {
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method
  };
  
  return fetch(`${process.env.REACT_APP_API}${endpoint}`, header)
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    })
    .catch(err => {
      console.error(err);
    });
};
