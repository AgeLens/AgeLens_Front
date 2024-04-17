import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./assets/font/font.css";

const GlobalStyles = createGlobalStyle`
  ${reset};
	*{
		font-family: "Freesentation" !important;
	}
	body{
		margin: 0px;
	}
`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<>
		<GlobalStyles />
		<App />
	</>,
);
