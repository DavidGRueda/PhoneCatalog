import "./Header.css";

//TODO: Add wouter so the /addPhone renders submit phone form.

export default function Header() {
  return (
    <nav className="header">
      <a href="/" className="link">
        <h1>Phoneer</h1>
      </a>
      {/* <ul>
        <li>
          <a href="/addPhone">
            <i className="fa-solid fa-plus"></i>
          </a>
        </li>
      </ul> */}
    </nav>
  );
}
