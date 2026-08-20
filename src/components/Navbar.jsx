import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <span className="brand">Muhammad Abubakar</span>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>
        <button
          className="menu-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
