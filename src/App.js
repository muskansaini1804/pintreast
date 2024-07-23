import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { openNewWindowHandler } from "./components/common/Reusable";
import "./App.css";
import { IMAGES_LIST } from "./components/common/Helper";

function App() {
  const [hoverActive, setHoverActive] = useState({
    hover: false,
    hoverIcon: false,
    hoverIndex: null,
  });

  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}
    >
      {IMAGES_LIST.map((obj, i) => {
        return (
          <div
            key={i}
            style={{
              position: "relative",
              width: "200px",
              marginRight: "30px",
              height: "250px",
            }}
            onMouseEnter={() =>
              setHoverActive({
                hover: true,
                hoverIcon: hoverActive.hoverIcon,
                hoverIndex: i,
              })
            }
            onMouseLeave={() =>
              setHoverActive({
                hover: false,
                hoverIcon: hoverActive.hoverIcon,
                hoverIndex: null,
              })
            }
          >
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover",objectPosition:"top" }}
              src={obj.images}
              alt="example"
            />
            {hoverActive.hover && hoverActive.hoverIndex === i ? (
              <a
                onClick={() => openNewWindowHandler(obj.url)}
                onMouseEnter={() =>
                  setHoverActive({
                    ...hoverActive,
                    hoverIcon: true,
                  })
                }
                onMouseLeave={() =>
                  setHoverActive({
                    ...hoverActive,
                    hoverIcon: false,
                  })
                }
                id="save_btn"
                style={{
                  border: "none",
                  color: "white",
                  paddingLeft: "16px",
                  paddingRight: "16px",
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
                {hoverActive.hoverIcon ? (
                  <FontAwesomeIcon
                    icon={faSave}
                    style={{ marginRight: "15px" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPinterest}
                    style={{ marginRight: "15px" }}
                  />
                )}
                Save
              </a>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default App;
