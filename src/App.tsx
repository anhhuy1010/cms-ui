/* eslint-disable simple-import-sort/imports */
import React from "react";
import { I18nextProvider } from "react-i18next";
import { useRoutes } from "react-router-dom";
import AppRoutes from "router";

import i18n from "../i18n";

import "@animxyz/core";
import "../prototype";

function App() {
  return <I18nextProvider i18n={i18n}>{useRoutes(AppRoutes)}</I18nextProvider>;
}

export default App;
