import { Container } from "./styledLanding"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <Container>
    <h1>Bienvenid@</h1>
    <Link to="/login"> 
      <button>Log in</button>
    </Link>
    <Link to="/home"> 
      <button>Home</button>
    </Link>
  </Container>
  )
}
