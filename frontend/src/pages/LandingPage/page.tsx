import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Pipeline from "./components/Pipeline";
import Sources from "./components/Sources";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { GlobalStyles } from "./styles/LandingPage.styles";
import { ThemeProvider, useTheme } from "../../context/ThemeContext";

function LandingPageInner() {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      background: "var(--bg-base)",
      color: "var(--text-body)",
      fontFamily: "'DM Sans', 'Sora', system-ui, sans-serif",
      minHeight: "100vh",
      width: "100%",
      overflowX: "hidden",
      position: "relative",
    }}>
      <GlobalStyles />
      <Navbar scrollY={scrollY} />
      <Hero />
      <Stats />
      <Features />
      <Pipeline />
      <Sources />
      <CTA />
      <Footer />
    </div>
  );
}

export default function LandingPage() {
  return (
    <ThemeProvider>
      <LandingPageInner />
    </ThemeProvider>
  );
}