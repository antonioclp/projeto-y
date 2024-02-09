import getDate from "../utils/getDate";

export const postUser = async (userInfo) => {
  const response = await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userInfo.name,
      age: userInfo.age,
      email: userInfo.email,
      password: userInfo.password,
      createdDate: getDate(),
      createdTime: new Date().toLocaleTimeString().slice(0, -6),
      role: userInfo.role
    }),
  });

  if (response.status === 409) {
    return response.status;
  }

  const data = await response.json();
  return data;
};

export const getUserByEmail = async (userEmail, userPassword) => {
  const url = `http://localhost:8080/users/email?email=${encodeURIComponent(userEmail)}&password=${encodeURIComponent(userPassword)}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};
