import React from "react";
// import { useEffect } from 'react'
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;

/** 
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@formspree/react": "^2.5.1",
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "@tsparticles/react": "^3.0.0",
    "@types/jest": "^29.5.13",
    "@types/node": "^22.5.5",
    "@types/react": "^18.3.6",
    "@types/react-dom": "^18.3.0",
    "react": "^18.3.1",
    "react-animate-on-scroll": "^2.1.9",
    "react-dom": "^18.3.1",
    "react-google-recaptcha": "^3.1.0",
    "react-router-dom": "^6.26.2",
    "react-router-hash-link": "^2.4.3",
    "react-scripts": "^5.0.1",
    "react-toastify": "^10.0.5",
    "react-tsparticles": "^2.12.2",
    "styled-components": "^6.1.13",
    "typescript": "^3.9.10",
    "validator": "^13.12.0",
    "web-vitals": "^4.2.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/plugin-transform-nullish-coalescing-operator": "^7.18.6",
    "@babel/plugin-transform-numeric-separator": "^7.18.6",
    "@babel/plugin-transform-private-methods": "^7.18.6",
    "@types/react-animate-on-scroll": "^2.1.8",
    "@types/react-google-recaptcha": "^2.1.9",
    "@types/react-router-hash-link": "^2.4.9",
    "@types/styled-components": "^5.1.34",
    "@types/validator": "^13.12.2"
  }
}
*/
