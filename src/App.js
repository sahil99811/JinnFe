import React, { useState } from "react";
import Chatbot from "./Chatbot";
import Customization from "./Customization";
import "./App.css";

function App() {
  const [buttonIcon, setButtonIcon] = useState(
    "https://cdn-icons-png.flaticon.com/512/13330/13330989.png"
  );
  const [borderColor, setBorderColor] = useState("#000");
  const [borderRadius, setBorderRadius] = useState("10");
  const [chatTitleBgColor, setChatTitleBgColor] = useState("#007BFF");
  const [botBubbleBgColor, setBotBubbleBgColor] = useState("#f1f1f1");
  const [botTextColor, setBotTextColor] = useState("#000");
  const [userBubbleBgColor, setUserBubbleBgColor] = useState("#007BFF");
  const [userTextColor, setUserTextColor] = useState("#fff");
  const [textFont, setTextFont] = useState("Arial");

  return (
    <div className="app">
      <Customization
        buttonIcon={buttonIcon}
        borderColor={borderColor}
        borderRadius={borderRadius}
        chatTitleBgColor={chatTitleBgColor}
        botBubbleBgColor={botBubbleBgColor}
        botTextColor={botTextColor}
        userBubbleBgColor={userBubbleBgColor}
        userTextColor={userTextColor}
        textFont={textFont}
        setButtonIcon={setButtonIcon}
        setBorderColor={setBorderColor}
        setBorderRadius={setBorderRadius}
        setChatTitleBgColor={setChatTitleBgColor}
        setBotBubbleBgColor={setBotBubbleBgColor}
        setBotTextColor={setBotTextColor}
        setUserBubbleBgColor={setUserBubbleBgColor}
        setUserTextColor={setUserTextColor}
        setTextFont={setTextFont}
      />
      <Chatbot
        buttonIcon={buttonIcon}
        borderColor={borderColor}
        borderRadius={borderRadius}
        chatTitleBgColor={chatTitleBgColor}
        botBubbleBgColor={botBubbleBgColor}
        botTextColor={botTextColor}
        userBubbleBgColor={userBubbleBgColor}
        userTextColor={userTextColor}
        textFont={textFont}
      />
    </div>
  );
}

export default App;
