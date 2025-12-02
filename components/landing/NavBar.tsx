// NavBar component code here
function NavBar() {
  // component implementation
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="/logos/AntonioOrtizLogo.png"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="d-flex navbar-nav ms-auto mb-2 mb-lg-0 float-right">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">
                Iniciar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
