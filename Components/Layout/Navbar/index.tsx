import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../../styles/Navbar.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const [navBarToggled, setNavBarrToggled] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      className={styles.navbar}
      expand="md"
      fixed="top"
      onToggle={toggle => setNavBarrToggled(toggle)}
    >
      <Container>
        <Navbar.Brand
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        >
          <Image
            src="/assets/japaSecondaryLogo.png"
            width={156}
            height={39}
            className={`d-inline-block align-top ${styles.mainLogo}`}
            alt="Ojira Blog Logo"
          />

          <Image
            src="/assets/icons/stroke.png"
            alt="Logo Stroke Icon"
            width={2}
            height={44}
            className={`d-inline-block align-center ${styles.logoStroke}`}
            style={{
              strokeWidth: "0.8px",
              stroke: "var(--grey, #858484)",
              marginInline: ".5rem"
            }}
          />

          <span className={`${styles.logoText}`}>Tuition-free Courses</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none" }}
        >
          {!navBarToggled ? (
            <Image
              alt="NavBar Toggler Icon"
              src="/assets/icons/menu-icon.png"
              className="d-md-none"
              width={28}
              height={28}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <Image
              alt="NavBar Toggler Icon"
              src="/assets/icons/Cancel.webp"
              className="d-md-none"
              width={21.45}
              height={21.45}
              style={{ cursor: "pointer" }}
            />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className={styles.menu}>
          <Nav className={`${styles.menuBar}`}>
            <Nav.Link
              href="https://japa.travel/study-abroad-consultation/"
              aria-label="Consultation Page Link"
              target="_blank"
              className={`text-primary ${styles.navLink}`}
              eventKey="consultation"
            >
              Consultation
            </Nav.Link>

            <Nav.Link
              href="https://japa.travel/work-in-europe/"
              aria-label="Work In Europe Page Link"
              target="_blank"
              className={`text-primary ${styles.navLink}`}
              eventKey="workInEurope"
            >
              Work In Europe
            </Nav.Link>

            <Nav.Link
              href="https://japa.travel/schengen-visas/"
              aria-label="Schengen Visa Page Link"
              target="_blank"
              className={`text-primary ${styles.navLink}`}
              eventKey="schengenVisa"
            >
              Schengen Visa
            </Nav.Link>

            <Nav.Link
              href="https://japa.travel/study-abroad/"
              aria-label="Study In Europe Page Link"
              target="_blank"
              className={`text-primary ${styles.navLink}`}
              eventKey="StudyInEurope"
            >
              Study In Europe
            </Nav.Link>

            <Nav.Link
              href="https://setlinn.com/explore/"
              aria-label="Blog Page Link"
              target="_blank"
              className={`text-primary ${styles.navLink}`}
              eventKey="blog"
            >
              Blog
            </Nav.Link>

            <Nav.Link
              href="https://japa.travel/videos/"
              aria-label="Videos Page Link"
              target="_blank"
              className={`text-primary ${styles.navLink}`}
              eventKey="videos"
            >
              Videos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
