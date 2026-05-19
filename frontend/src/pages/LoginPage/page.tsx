import { useTheme } from "../../context/ThemeContext";
import { GlobalStyles } from "../../styles/page.styles";
import { getLoginStyles } from "./styles/page.styles";
import InfoPanel from "./components/InfoPanel";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="login-container">
      <GlobalStyles />
      
      <InfoPanel isDark={isDark} />
      <LoginForm />

      <style>{getLoginStyles(isDark)}</style>
    </div>
  );
}