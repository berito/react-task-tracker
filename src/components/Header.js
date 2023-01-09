import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        {location.pathname === "/" && (
          <Button
            text={showAdd ? "Close" : "Add"}
            color={showAdd ? "red" : "green"}
            onClick={onAdd}
          />
        )}
      </header>
    </div>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
// const headingStyle={
//   color:'red',
//   background:'blue',
// }
export default Header;
