const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/redux-283024.png"
            alt=""
            width="35"
            height="35"
            className="d-inline-block align-text-top"
          />
          <strong style={{ marginLeft: '10px' }}>To do list!</strong>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
