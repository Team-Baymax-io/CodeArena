import { Header, Footer } from "./index";

const Outline = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Outline;
