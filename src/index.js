import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "@/components/App";
import { GlobalStyles } from "@/constants/globalStyles";

import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
            <GlobalStyles />
        </Provider>
    </React.StrictMode>,
);
