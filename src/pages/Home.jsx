import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          position: "absolute",
          height: "92.5%",
          width: "100%",
          backgroundImage: "url(/images/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div
          className="p-4"
          style={{
            backgroundColor: "rgba(222, 222, 226, 0.6)",
            borderRadius: "10px",
            // backdropFilter: "blur(1px)",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "#2a284d", fontWeight: "bold" }}
          >
            Welcome to OpenMinds!
          </Typography>
          <Typography variant="h4" sx={{ color: "#2a284d" }}>
            Every Child Deserves a Chance to Learn
          </Typography>
          <Button
            size="larger"
            variant="contained"
            className="mt-3"
            sx={{ borderRadius: "8px", bgcolor: "#2a284d" }}
          >
            Donate
          </Button>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
