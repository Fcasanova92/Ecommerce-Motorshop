import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import "./MainLayout.css";

export const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};