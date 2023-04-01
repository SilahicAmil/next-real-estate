import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <Navigation />
      </div>
      <main className="font-mono">{children}</main>
    </>
  );
};

export default Layout;
