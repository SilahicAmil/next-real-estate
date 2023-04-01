import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <Navigation />
      </div>
      <main className="font-mono bg-[#FFFFFF]">{children}</main>
    </>
  );
};

export default Layout;
