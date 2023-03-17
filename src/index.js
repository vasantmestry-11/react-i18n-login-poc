import React, { Suspense } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";

import LanguageDetector from "i18next-browser-languagedetector";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import "./index.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Translation from "./components/Translation/Translation";

i18n
  .use(initReactI18next) // initializes react-i18next
  .use(LanguageDetector) // to detect language of browser
  .use(HttpApi) /* 
    This is a simple i18next backend to be used in Node.js, in the browser and for Deno. 
    It will load resources from a backend server using the XMLHttpRequest 
    or the fetch API.
  */
  .init({
    supportedLanguages: ["en", "fr", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      // order and from where user language should be detected. Default cookie name is: i18next
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json", //path where resources get loaded from
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));

const LoadingMarkup = () => (
  <div className="py-4 text-center text-white">
    <h1>Loading...</h1>
  </div>
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<LoadingMarkup />}>
        <Translation />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);
