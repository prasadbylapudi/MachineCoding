import { useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const grandParent = document.querySelector("#grandParent");
    if (grandParent) {
      grandParent.addEventListener(
        "click",
        () => {
          console.log("clicked grand parent");
        },
        false
      );
    }

    const parent = document.querySelector("#parent");
    if (parent) {
      parent.addEventListener(
        "click",
        (e) => {
          console.log("clicked parent");
          e.stopPropagation();
        },
        false
      );
    }
    const child = document.querySelector("#child");
    if (child) {
      child.addEventListener(
        "click",
        () => {
          console.log("clicked child");
        },
        false
      );
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (grandParent) {
        grandParent.removeEventListener("click", () => {
          console.log("unmount grand parent");
        });
      }
      if (parent) {
        parent.removeEventListener("click", () => {
          console.log("unmount parent");
        });
      }
      if (child) {
        child.removeEventListener("click", () => {
          console.log("unmount child");
        });
      }
    };
  }, []);

  return (
    <>
      <h1>Event bubbling and capturing</h1>
      <div id="grandParent">
        grand parent
        <div id="parent">
          parent
          <div id="child">child</div>
        </div>
      </div>
    </>
  );
}
