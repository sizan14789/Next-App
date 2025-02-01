const Layout = ({ children }) => {

  return (
    <section className="my-10 lg:my-auto">
      <div className="wrapper">
        <h2 className="text-5xl lg:text-7xl font-bold">Our Works</h2>
        {children}
      </div>
    </section>
  );
};

export default Layout;
