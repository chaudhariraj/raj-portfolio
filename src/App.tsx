import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import "./styles/global.css"; // Ensure global styles are applied

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
