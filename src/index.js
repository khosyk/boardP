import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import App from "./App";
import { CookiesProvider } from "react-cookie";

const store = createStore(rootReducer);

ReactDOM.render(
	<CookiesProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</CookiesProvider>,
	document.getElementById("root")
);
