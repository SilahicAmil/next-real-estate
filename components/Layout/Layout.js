import Footer from "../UI/Footer";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <Navigation />
      </div>
      <main className="font-mono bg-[#FFFFFF]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
