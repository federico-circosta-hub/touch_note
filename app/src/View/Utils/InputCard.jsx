import { Paper } from "@mui/material";

export const InputCard = ({ children }) => {
  return (
    <Paper elevation={3} style={baseStyle.box}>
      {children}
    </Paper>
  );
};

const baseStyle = {
  box: {
    borderRadius: 25,
    backgroundColor: "white",
    width: "24vw",
    //height: "88vh",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2vh",
    padding: "6vh",
  },
};
