import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  const [hover, setHover] = useState(false);
  const [hoverBtn, setHoverBtn] = useState(false);

  const openNewWindowHandler = () => {
    const width = 800;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    // Open a new window with initial dimensions
    const newWindow = window.open(
      "https://in.pinterest.com/pin-builder/?description=Indistractable+traction+distraction+triggers+diagram&is_video=false&media=https%3A%2F%2Fwww.nirandfar.com%2Fwp-content%2Fuploads%2F2019%2F05%2FIndistractable-traction-distraction-triggers-diagram.jpg&method=bookmarklet&url=https%3A%2F%2Fwww.nirandfar.com%2Findistractable-tools",
      "popup",
      `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars,status`
    );

    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <>
      <div
        style={{ position: "relative", width: "800px" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          style={{ maxWidth: "100%", width: "100%" }}
          src="https://www.nirandfar.com/wp-content/uploads/2019/05/Indistractable-traction-distraction-triggers-diagram.jpg.webp"
          alt="example"
        />
        {hover ? (
          <a
            onClick={() => openNewWindowHandler()}
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
            id="save_btn"
            style={{
              border: "none",
              color: "white",
              paddingLeft: "30px",
              paddingRight: "30px",
              borderRadius: "5px",
              paddingTop: "8px",
              paddingBottom: "8px",
              fontWeight: "bold",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "40px",
              backgroundColor: "blue",
            }}
          >
            {hoverBtn ? (
              <FontAwesomeIcon icon={faSave} style={{ marginRight: "15px" }} />
            ) : (
              <FontAwesomeIcon
                icon={faPinterest}
                style={{ marginRight: "15px" }}
              />
            )}
            Save
          </a>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
