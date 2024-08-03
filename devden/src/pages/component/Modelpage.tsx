import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Dialog,
  DialogActions,
  Button,
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardContent,
} from "@mui/material";
import Link from "next/link";
import styles from "../../styles/Modelpage.module.css";

const Modelpage = ({ open, handleClose }) => {
  const router = useRouter();

  const handleClickOpen = () => {
    router.push("/variables");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          backgroundColor: "rgb(33, 44, 74)",
          color: "white",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Are you a beginner?
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: "rgb(245 109 10 / 91%)" }}
          onClick={handleClickOpen}
        >
          Start first chapter
        </Button>
        <Typography variant="h5" gutterBottom sx={{ marginTop: "20px" }}>
          Or select starting point
        </Typography>
        <Typography variant="h6" gutterBottom>
          Learn the basics
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: "Variables", tasks: 11, path: "/variables" },
            { title: "Booleans", tasks: 5, path: "/booleans" },
            { title: "Operators", tasks: 19, path: "/operators" },
            { title: "Strings", tasks: 7, path: "/strings" },
            { title: "Conditionals", tasks: 9, path: "/conditionals" },
            { title: "Functions I", tasks: 11, path: "/functions1" },
            { title: "Arrays", tasks: 8, path: "/arrays" },
            { title: "Objects", tasks: 6, path: "/objects" },
          ].map((item, index) => (
            <Grid item xs={6} sm={6} md={4} key={index} display={"center"}>
              <Card
                sx={{
                  backgroundColor: "rgb(11, 22, 44)",
                  color: "white",
                  "&:hover": { backgroundColor: "rgb(22, 33, 55)" },
                }}
              >
                <CardActionArea component={Link} href={item.path}>
                  <CardContent>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      <div className={styles.card}>
                        <div className={styles.cardContent}>
                          <p className={styles.cardTitle}>{item.title}</p>
                          <p className={styles.cardPara}>{item.tasks} tasks</p>
                        </div>
                      </div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ marginTop: "25px" }}>
          <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
            More advanced options
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: "JavaScript DOM Exercises",
                description: "Create interactive and dynamic websites.",
                path: "/dom-exercises",
              },
              {
                title: "JavaScript Practice",
                description: "Challenges to practice your skills.",
                path: "/practice",
              },
            ].map((item, index) => (
              <Grid item xs={6} sm={6} key={index} display={"center"}>
                <Card
                  sx={{
                    backgroundColor: "rgb(11, 22, 44)",
                    color: "white",
                    "&:hover": { backgroundColor: "rgb(22, 33, 55)" },
                  }}
                >
                  <CardActionArea
                    component={Link}
                    href={item.path}
                    sx={{
                      textAlign: "left",
                      display: "block",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      <div className={styles.card}>
                        <div className={styles.cardContent}>
                          <p className={styles.cardTitle}>{item.title}</p>
                          <p className={styles.cardPara}>{item.description}</p>
                        </div>
                      </div>
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "white" }}
            color="error"
          >
            Close
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default Modelpage;
