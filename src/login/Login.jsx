import { useEffect, useLayoutEffect, useState } from "react";
import { navigateToUrl } from "single-spa";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import api from "./api";

async function createUser(data) {
  return api.post("/users", data);
}

async function login(data) {
  return api.post("/auth/login", data);
}

async function refresh(refreshToken) {
  return api.post("/auth/refresh", refreshToken);
}

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerMutation = useMutation({
    mutationFn: (newUser) => createUser(newUser),
    onMutate: (variables) => {
      console.log("Запрос отправлен с данными:", variables);
    },
    onSuccess: (data) => {
      console.log("Ответ сервера:", data);
    },
    onError: (error) => {
      console.error("Ошибка запроса:", error);
    },
  });

  const loginMutation = useMutation({
    mutationFn: (currUser) => login(currUser),
    onMutate: (variables) => {
      console.log("Запрос отправлен с данными:", variables);
    },
    onSuccess: (data) => {
      console.log("Ответ сервера:", data);
      const token = data.data.token;
      const refreshToken = data.data.refreshToken;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("refreshToken", refreshToken);
      navigateToUrl("/main");
    },
    onError: (error) => {
      console.error("Ошибка запроса:", error);
    }
  })

  const onRegister = (event) => {
    event.preventDefault();
    registerMutation.mutate({
      username,
      password,
    });
  };

  const onLogin = (event) => {
    event.preventDefault();
    loginMutation.mutate({
      username,
      password,
    });
  };

  return (
    <div className="bg login">
      <form className="login-form">
        <div>
          <input
            type="text"
            required
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={onRegister}>
            Регистрация
          </button>
          <button type="button" onClick={onLogin}>
            Вход
          </button>
        </div>
      </form>
    </div>
  );
}
