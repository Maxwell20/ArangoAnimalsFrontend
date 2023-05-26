import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { QueryProvider } from "./context/QueryContext";

function App() {
  return (
    <QueryProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Container>
    </QueryProvider>
  );
}

export default App;
