import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <div className="app-layout">
      <nav className="sidebar">
        <Link to="/overview" className="sidebar-link">
          Übersicht
        </Link>
        <Link to="/create" className="sidebar-link">
          Erstellen
        </Link>
      </nav>
      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
