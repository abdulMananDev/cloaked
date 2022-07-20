import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./Login";
import reportWebVitals from "./reportWebVitals";
import "./kcMessages";
import {
  KcApp as MKcApp,
  defaultKcProps,
  getKcContext,
  kcLanguageTags,
  kcMessages,
  useDownloadTerms
} from "keycloakify";
//We assume the file contains: ".my-class { color: red; }"
import "./index.css";

// if (kcContext === undefined) {
//   throw new Error(
//     "This app is a Keycloak theme" +
//       "It isn't meant to be deployed outside of Keycloak"
//   );
// }
function KcApp() {
  const { kcContext } = getKcContext({
    mockPageId: "login.ftl"
  });
  useDownloadTerms({
    kcContext,
    downloadTermMarkdown: async ({ currentKcLanguageTag }) => {
      console.log(currentKcLanguageTag, kcMessages);
      kcMessages[currentKcLanguageTag].doLogIn = "Sign in";
      kcMessages[currentKcLanguageTag].usernameOrEmail = "Email";
      kcMessages[currentKcLanguageTag].password = "Password";
      kcMessages[currentKcLanguageTag].emailTestBody = "Password";
    }
  });
  return (
    <MKcApp
      kcContext={kcContext}
      {...{
        ...defaultKcProps,
        kcHeaderWrapperClass: "my-class",
        kcInputClass: "text-field",
        kcHtmlClass: "html-class",
        kcLoginClass: "login",
        kcLanguageTags: "none",
        kcSelectAuthListItemHeadingClass: "none",
        kcButtonPrimaryClass: "btn-primary"
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <KcApp />
    {/* <App />, */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
