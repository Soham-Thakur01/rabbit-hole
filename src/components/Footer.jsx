import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <p className="footer-label">You reached the bottom</p>
          <h2>Still curious?</h2>
        </div>

        <div className="footer-rabbit" aria-hidden="true">
          🐇
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Rabbit Hole © {new Date().getFullYear()}
        </p>

        <nav aria-label="Footer navigation">
          <Link to="/">Home</Link>

          <a
            href="https://github.com/Soham-Thakur01"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
            <a
  href="https://letterboxd.com/soham_st/"
  target="_blank"
  rel="noreferrer"
>
  Letterboxd ↗
</a>

<a
  href="https://www.moctale.in/u/soham0"
  target="_blank"
  rel="noreferrer"
>
  Moctale ↗
</a>
          </a>

          <a href="#top">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer