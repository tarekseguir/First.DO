/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>

        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://www.facebook.com/tarek.seguir"
              target="_blank"
              className={classes.a}
            >
              Tarek Seghair
            </a>
            , made with love for a better web
          </span>
        </p>
      </div>
    </footer>
  );
}
