const Header = ({ title, subtext }) => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl lsm:text-2xl  font-merriweather tracking-wider mb-2">
          {title}
        </h1>
        <p className="font-sans text-sm tracking-wide">{subtext}</p>
      </div>
    </section>
  );
};

export default Header;
