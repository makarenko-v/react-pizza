import "./index.css";

import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Footer } from "./components/footer";

export function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
