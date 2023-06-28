import { Grid, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const Welcome = (props) => {
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "10px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h3" style={{ color: "orange", padding: "10px" }}>
          Welcome to Job Portal
        </Typography>
        <Typography variant="h5" style={{ color: "blue", padding: "10px" }}>
          A job portal website that will connect job seekers with employers,
          <br></br>
          facilitating the process of job searching and hiring.
        </Typography>
      </Grid>
      <Button
        color="inherit"
        style={{
          border: "2px solid black",
          padding: "1rem",
          width: "15rem",
          margin: "1rem",
        }}
        onClick={() => handleClick("/login")}
      >
        Login
      </Button>
      <Button
        color="inherit"
        style={{
          border: "2px solid black",
          padding: "1rem",
          width: "15rem",
          // margin: "1rem",
        }}
        onClick={() => handleClick("/signup")}
      >
        Signup
      </Button>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
