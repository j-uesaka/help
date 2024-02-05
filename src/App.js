import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";
import { Header } from "./ui-components";

function App() {
  return (
    <div className="py-4">
      <header className="mb-4">
        <img src={logo} className="App-logo" alt="logo" />
        <p>※これはUIコンポーネントを利用した表示です。</p>
      </header>
    </div>
  );
}

export default withAuthenticator(App);