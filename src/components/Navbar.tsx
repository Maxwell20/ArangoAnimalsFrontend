import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useQuery } from "../context/QueryContext";
import { useState } from "react";

export function Navbar() {
  const { openQuery } = useQuery();
  const [history, setHistory] = useState();
  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me=auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
        </Nav>

        <div>Hello</div>

        <Button
          onClick={openQuery}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <svg
            height="30"
            viewBox="3.5 0 21 21"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m4.5 6.5h12" />
              <path d="m4.498 10.5h11.997" />
              <path d="m4.5 14.5h11.995" />
            </g>
          </svg>
        </Button>
      </Container>
    </NavbarBS>
  );
}
