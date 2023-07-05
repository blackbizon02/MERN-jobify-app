import main from "../assets/images/main-alternative.svg";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Landing = () => {
  const { user } = useAppContext();

  return (
    <>
      {user && <Navigate to="/stats" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby drinking vinegar next level af, vaporware blackbird
              spyplane shoreditch keffiyeh. 90's flannel chambray vice
              shoreditch biodiesel. Thundercats forage truffaut quinoa, keffiyeh
              portland tacos hot chicken vape jean shorts adaptogen slow-carb
              cloud bread. Twee distillery lyft mixtape tbh shoreditch.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login / Register
            </Link>
          </div>
          <img src={main} className="img main-img" alt="job hunt" />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
