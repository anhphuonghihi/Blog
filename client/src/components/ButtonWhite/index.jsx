import React from "react";
import { Link } from "react-router-dom";
import { brown } from '@mui/material/colors';
import styles from "./Button.module.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const ButtonWhite = ({ link, text, icon }) => {
  return (
    <div>
      {link && (
        <Link to={link} className={styles["btn"]}>
          <p>{text}</p>
          {icon && <ChevronRightIcon sx={{ color: brown[100] }}/>}
        </Link>
      )}
    </div>
  );
};

export default ButtonWhite;
