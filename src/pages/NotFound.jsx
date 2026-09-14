import { Link } from 'react-router'
import DraggableEmoji from '../components/DraggableEmoji'

function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-content">
        <p className="page-label">error_404</p>

        <h1>
          Wrong
          <span> rabbit hole.</span>
        </h1>

        <p>
          This tunnel doesn’t lead anywhere. Either the page moved, or you
          explored slightly too far.
        </p>

        <Link to="/" className="primary-link">
          Return home
        </Link>

        <DraggableEmoji
          emoji="🗺️"
          label="map"
          x={8}
          y={18}
          size="4rem"
          rotation={-10}
        />

        <DraggableEmoji
          emoji="🐇"
          label="lost rabbit"
          x={84}
          y={65}
          size="4.5rem"
          rotation={8}
        />
      </section>
    </main>
  )
}

export default NotFound