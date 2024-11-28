import React from "react";
import "./Customization.css";

function Customization({
    buttonIcon,
        borderColor,
        borderRadius,
        chatTitleBgColor,
        botBubbleBgColor,
        botTextColor,
        userBubbleBgColor,
        userTextColor,
        textFont,
  setButtonIcon,
  setBorderColor,
  setBorderRadius,
  setChatTitleBgColor,
  setBotBubbleBgColor,
  setBotTextColor,
  setUserBubbleBgColor,
  setUserTextColor,
  setTextFont,
}) {
  return (
    <div className="customization-container">
      <h2>Customization</h2>
      <div className="customization-item">
        <label>Button Icon URL</label>
        <input
          type="text"
          value={buttonIcon}
          onChange={(e) => setButtonIcon(e.target.value)}
        />
      </div>
      <div className="customization-item">
        <label>Border Color</label>
        <input
          type="color"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
        />
      </div>
      <div className="customization-item">
        <label>Border Radius</label>
        <input
          type="text"
          value={borderRadius}
          onChange={(e) => setBorderRadius(e.target.value)}
        />
      </div>
      <div className="customization-item">
        <label>Chat Title Background Color</label>
        <input
          type="color"
          value={chatTitleBgColor}
          onChange={(e) => setChatTitleBgColor(e.target.value)}
        />
      </div>
      <div className="customization-item">
        <label>Bot Bubble Background Color</label>
        <input
          type="color"
          value={botBubbleBgColor}
          onChange={(e) => setBotBubbleBgColor(e.target.value)}
        />
      </div>
      <div className="customization-item">
        <label>Bot Text Color</label>
        <input
          type="color"
          value={botTextColor}
          onChange={(e) => setBotTextColor(e.target.value)}
        />
      </div>
      <div className="customization-item">
        <label>User Bubble Background Color</label>
        <input
          type="color"
          value={userBubbleBgColor}
          onChange={(e) => setUserBubbleBgColor(e.target.value)}
        />
      </div>
      <div className="customization-item">
        <label>User Text Color</label>
        <input
          type="color"
          value={userTextColor}
          onChange={(e) => setUserTextColor(e.target.value)}
        />
      </div>
      <div className="customization-item">
        <label>Text Font</label>
        <select value={textFont} onChange={(e) => setTextFont(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </div>
    </div>
  );
}

export default Customization;
