import { ContactComponent } from "../components/ContactComponent/content";
import { ContactHaeder } from "../components/ContactComponent/header";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Contact = () => {
  return (
    <>
      <Header />
      <ContactHaeder />
      <ContactComponent/>
      <Footer />
    </>
  );
};
