import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import QRCode from "react-qr-code";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@material-ui/core";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Vcard = ({ handleClose }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [qrText, setQrText] = useState("");
  const [display, setDisplay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setQrText(
      `BEGIN:VCARD\r\nVERSION:4.0\r\nN:${name}\r\nFN:${name}\r\nORG:${company}\r\nTITLE:${title}\r\nTEL;TYPE=cell:${phone}\r\nEMAIL;PREF;INTERNET:${email}\r\nEND:VCARD`
    );
    setDisplay(true);
  };

  const resetInputField = () => {
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setTitle("");
    setDisplay(false);
  };

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Phone"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <Button variant="contained" onClick={resetInputField}>
            Reset
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Generate
          </Button>
        </div>
      </form>
      <div className={classes.root}>
        {display && (title && name && company && email && phone) ? (
          <Paper elevation={3}>
            <Card>
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "30%", width: "%" }}
                value={qrText}
                viewBox={`0 0 256 256`}
              />

              <Divider />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body3" color="#0080ff">
                  <BusinessIcon
                    fontSize="small"
                    color="primary"
                    sx={{ fontSize: 19 }}
                  />{" "}
                  {company} <br />
                  <MailIcon
                    fontSize="small"
                    color="primary"
                    sx={{ fontSize: 19 }}
                  />{" "}
                  {email} <br />
                  <PhoneIcon
                    fontSize="small"
                    color="primary"
                    sx={{ fontSize: 19 }}
                  />{" "}
                  {phone}
                  <br />
                  <WorkIcon
                    fontSize="small"
                    color="primary"
                    sx={{ fontSize: 19 }}
                  />{" "}
                  {title}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        ) : null}
      </div>
    </div>
  );
};

export default Vcard;
