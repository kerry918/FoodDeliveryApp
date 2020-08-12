/* /pages/login.js */

import React, { useState, useEffect, useContext, Fragment } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { login } from "../lib/auth";
import AppContext from "../context/AppContext";

// import { NavLink } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import AllInclusive from '@material-ui/icons/AllInclusive';
// import Brightness5 from '@material-ui/icons/Brightness5';
// import People from '@material-ui/icons/People';
// import ArrowForward from '@material-ui/icons/ArrowForward';
// import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
// import Hidden from '@material-ui/core/Hidden';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from './user-jss';
import { withStyles } from '@material-ui/core/styles';

function Login(props) {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const appContext = useContext(AppContext);
  
  useEffect(() => {
    if (appContext.isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  const {
    classes,
    handleSubmit,
    pristine,
    submitting,
    deco,
  } = props;

  // const {
  //   classes,
  //   handleSubmit,
  //   pristine,
  //   submitting,
  //   deco,
  // } = this.props;

  return (
    // <Fragment>
    //   {/* <Hidden mdUp>
    //     <NavLink to="/">
    //       <img src="https://mms.businesswire.com/media/20200527005201/en/792790/23/Logo.WhiteBackground.jpg" alt="Strapi Food App" />
    //       Strapi Food App
    //     </NavLink>
    //   </Hidden> */}
    //   <Paper>
    //     <Hidden smDown>
    //       <div>
    //         <NavLink to="/">
    //           <img src="https://mms.businesswire.com/media/20200527005201/en/792790/23/Logo.WhiteBackground.jpg" alt="Strapi Food App" />
    //           Strapi Food App 
    //         </NavLink>
    //         <Button size="small" to="/register">
    //           <Icon>arrow_forward</Icon>
    //           Create new account
    //         </Button>
    //       </div>
    //     </Hidden>
    //     <Typography variant="h4" gutterBottom>
    //       Sign In
    //     </Typography>
    //     <Typography variant="caption" gutterBottom align="center">
    //       Lorem ipsum dolor sit amet
    //     </Typography>
    //     <section>
    //       <div>
    //         <Button variant="outlined" size="small" type="button">
    //           <AllInclusive/>
    //           Socmed 1
    //         </Button>
    //         <Button variant="outlined" size="small" type="button">
    //           <Brightness5/>
    //           Socmed 2
    //         </Button>
    //         <Button variant="outlined" size="small" type="button">
    //           <People/>
    //           Socmed 3
    //         </Button>
    //       </div>
    //       {/* <ContentDivider content="Or sign in with email" /> */}
    //     </section>
    //     <section>
    //       <form>
    //         <div>
    //           <FormGroup>
    //             <Label>Email:</Label>
    //               <Input
    //                 onChange={(event) => onChange(event)}
    //                 name="identifier"
    //                 style={{ height: 50, fontSize: "1.2em" }}
    //             />
    //           </FormGroup>
    //         </div>
    //         <div>
    //           <FormGroup style={{ marginBottom: 30 }}>
    //             <Label>Password:</Label>
    //             <Input
    //               onChange={(event) => onChange(event)}
    //               type="password"
    //               name="password"
    //               style={{ height: 50, fontSize: "1.2em" }}
    //             />
    //           </FormGroup>
    //         </div>
    //         {/* <div className={classes.optArea}>
    //           <FormControlLabel className={classes.label} control={<Field name="checkbox" component={CheckboxRedux} />} label="Remember" />
    //           <Button size="small" component={LinkBtn} to="/reset-password" className={classes.buttonLink}>Forgot Password</Button>
    //         </div> */}
    //         <div>
    //           {/* <Button variant="contained" color="primary" size="large" type="submit">
    //             Continue
    //             <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
    //           </Button> */}
    //           <Button
    //             style={{ float: "right", width: 120 }}
    //             color="primary"
    //             onClick={() => {
    //               setLoading(true);
    //               login(data.identifier, data.password)
    //                 .then((res) => {
    //                   setLoading(false);
    //                   // set authed User in global context to update header/app state
    //                   appContext.setUser(res.data.user);
    //                 })
    //                 .catch((error) => {
    //                   setError(error.response.data);
    //                   setLoading(false);
    //                 });
    //             }}
    //           >
    //             {loading ? "Loading... " : "Submit"}
    //           </Button>
    //         </div>
    //       </form>
    //     </section>
    //   </Paper>
    // </Fragment>
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              <img className="pic" src="https://mms.businesswire.com/media/20200527005201/en/792790/23/Logo.WhiteBackground.jpg" height="100"/>
            </div>
            <Button size="small" href="/register">
              <ArrowForwardIcon/>
              Create new account
            </Button>
            <br/>
            <section className="wrapper">
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                error.message.map((error) => {
                  return (
                    <div
                      key={error.messages[0].id}
                      style={{ marginBottom: 10 }}
                    >
                      <small style={{ color: "red" }}>
                        {error.messages[0].message}
                      </small>
                    </div>
                  );
                })}
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      name="identifier"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>

                  <FormGroup>
                    {/* <span>
                      <a href="">
                        <small>Forgot Password?</small>
                      </a>
                    </span> */}
                    <Button
                      style={{ float: "right", width: 120 }}
                      color="primary"
                      onClick={() => {
                        setLoading(true);
                        login(data.identifier, data.password)
                          .then((res) => {
                            setLoading(false);
                            // set authed User in global context to update header/app state
                            appContext.setUser(res.data.user);
                          })
                          .catch((error) => {
                            setError(error.response.data);
                            setLoading(false);
                          });
                      }}
                    >
                      {loading ? "Loading... " : "Submit"}
                    </Button>
                  </FormGroup>
                </fieldset>
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      <link rel="stylesheet" href="../styling/style.css"/>
      {/* <style jsx>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 90px;
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 120px;
            background-color: #2196f3;
            margin-bottom: 30px;
            border-radius-top: 6px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
          img {
            margin: 15px 30px 10px 50px;
          }
        `}
      </style> */}
    </Container>
  );
}

export default withStyles(styles)(Login);