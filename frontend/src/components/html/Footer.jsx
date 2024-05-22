import React from "react";
import { Grid, Typography, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="w-full">
      <Grid container justifyContent="center">
        <Grid item container justifyContent="space-between">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Jordan Adkins' Resume
          </Typography>
          <div className="text-xs font-bold">
            <p>Social Media: </p>
            <a
              href="https://github.com/JCAdkins"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip
                followCursor
                placement="top"
                title="https://github.com/JCAdkins"
              >
                <GitHubIcon />
              </Tooltip>
            </a>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
