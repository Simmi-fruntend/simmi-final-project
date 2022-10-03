import React from "react";

import { Grid, Typography, Button } from "@mui/material";
import classes from "./HelpUs.module.scss";
import help1 from "../../../assests/help1.png";
import help2 from "../../../assests/help2.png";
import book from "../../../assests/book.png";
import livelihood from "../../../assests/livelihood.png";
import empowerment from "../../../assests/empowerment.png";

const HelpUs = () => {
  const data = [
    {
      image: book,
      title: "Education",
      details:
        "We provide free academic education, scholarship, training and other incentives to the children.",
      button: "Donate Now",
    },
    {
      image: livelihood,
      title: "Livelihood",
      details:
        "We implement various schemes to provide livelihood and uplift the poor in society..",
      button: "Donate Now",
    },
    {
      image: help2,
      title: "Healthcare",
      details:
        "We are increasing awareness on Sanitization and providing people with access to better nutrition, clean water and toilets.",
      button: "Donate Now",
    },
    {
      image: empowerment,
      title: "Women and Youth Empowerment",
      details:
        "We focus on providing equal opportunities for women in the work field.",
      button: "Donate Now",
    },
  ];
  return (
    <div className={classes.helpUs_container}>
      <Typography component="h2" varient="h2">
        Areas of our <span>Work</span>
      </Typography>
      <Grid container className={classes.helpUs_box}>
        {data.map((item, i) => {
          return (
            <Grid item key={i} className={classes.helpUs}>
              <div style={{marginTop:"15px"}}>
                <img src={item.image} alt="..." style={{height:'57px'}} />
              </div>
              <Typography component="h4" varient="h4">
                {item.title}
              </Typography>
              <Typography component="p" varient="p">
                {item.details}
              </Typography>
              <div>
                <Button>{item.button}</Button>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default HelpUs;
