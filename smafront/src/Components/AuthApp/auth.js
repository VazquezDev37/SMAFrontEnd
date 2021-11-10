import React, { Children } from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import jwtDecoded from "jwt-decode";

export default function Auth(props) {
  const [username, setUsername] = useState("");
  const history = useHistory();
  
  useEffect(() => {
    let username;
    const tokenFromStorage = localStorage.getItem("token");
    try {
      username = jwtDecoded(tokenFromStorage).username;
      console.log(username);
      setUsername(username);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    if (username) {
      history.push("/MainPage");
    } else {
      history.push("/Login");
    }
  }, [username]);
  return <div>{props.children}</div>;
}
