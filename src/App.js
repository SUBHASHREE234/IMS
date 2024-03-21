import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
// import Header from './components/Header';
import Login from "./pages/Login/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgba(80, 56, 237, 1)",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route path="/" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
