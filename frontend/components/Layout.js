/* /components/Layout.js */

import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import { logout } from "../lib/auth";
import AppContext from "../context/AppContext";
import styles from '../pages/sample-jss.js'; 
import { withStyles } from '@material-ui/core/styles';

const Layout = (props) => {
  const title = "Welcome to Nextjs";
  const { user, setUser } = useContext(AppContext);
  const { classes } = props;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        {/* <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                
                <Typography variant="h6" className={classes.title}>
                  <Link href="/">
                    <a className="navbar-brand">Home</a>
                  </Link>
                </Typography>
                <Button color="inherit">
                  {user ? (
                    <h5>{user.username}</h5>
                  ) : (
                    <Link href="/register">
                      <a className="nav-link"> Sign up</a>
                    </Link>
                  )}
                </Button>
                <Button color="inherit">
                  {user ? (
                    <Link href="/">
                      <a
                        className="nav-link"
                        onClick={() => {
                          logout();
                          setUser(null);
                        }}
                      >
                        Logout
                      </a>
                    </Link>
                  ) : (
                    <Link href="/login">
                      <a className="nav-link">Sign in</a>
                    </Link>
                  )}
                </Button>
                </Toolbar>
            </AppBar>
        </div> */}
        <style jsx>
          {`
            a {
              color: white;
            }
            h5 {
              color: white;
              padding-top: 11px;
            }
          `}
        </style>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Home</a>
            </Link>
          </NavItem>

          <NavItem>
            <Link href="/sample">
              <a className="navbar-brand">Products</a>
            </Link>
          </NavItem>

          <NavItem className="ml-auto">
            {user ? (
              <h5>{user.username}</h5>
            ) : (
              <Link href="/register">
                <a className="nav-link"> Sign up</a>
              </Link>
            )}
          </NavItem>
          <NavItem>
            {user ? (
              <Link href="/">
                <a
                  className="nav-link"
                  onClick={() => {
                    logout();
                    setUser(null);
                  }}
                >
                  Logout
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a className="nav-link">Sign in</a>
              </Link>
            )}
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};

export default withStyles(styles)(Layout);