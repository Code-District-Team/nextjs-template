"use client"; // If used in Pages Router, is no need to add "use client"

import React, { useState } from "react";
import { Button, ConfigProvider } from "antd";

import theme from "../../theme/themeConfig";
const Home = () => {
  const [hello, sethello] = useState("Hello");
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Button type="primary">Button{hello}</Button>
      </div>
    </ConfigProvider>
  );
};

export default Home;
