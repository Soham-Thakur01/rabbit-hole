import { useState } from 'react'
import DraggableEmoji from '../components/DraggableEmoji'
import { cinemaReviews, featuredCinema } from '../data/cinema'

function Cinema() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleReviews =
    activeFilter === 'All'
      ? cinemaReviews
      : cinemaReviews.filter(
          (review) => review.category === activeFilter,
        )

  return (
    <main className="cinema-page">
      <section className="cinema-banner">
        <div className="cinema-banner-content">
          <p className="page-label">{featuredCinema.type}</p>

          <h1>{featuredCinema.title}</h1>

          <div className="cinema-meta">
            <span>{featuredCinema.year}</span>
            <span>{featuredCinema.rating}</span>
          </div>

          <p>{featuredCinema.description}</p>

          <span className="featured-stamp">Soham recommends</span>
        </div>

        <div className="giant-title" aria-hidden="true">
          WATCH
        </div>

        <DraggableEmoji
          emoji="🍿"
          label="popcorn"
          x={82}
          y={14}
          size="4rem"
          rotation={10}
        />

        <DraggableEmoji
          emoji="🎞️"
          label="film strip"
          x={70}
          y={72}
          size="4rem"
          rotation={-12}
        />
      </section>

      <section className="reviews-section">
        <div className="reviews-heading">
          <div>
            <p className="section-label">After the credits</p>
            <h2>Things I’ve watched</h2>
          </div>

          <div className="review-filters">
            {['All', 'Movie', 'Anime'].map((filter) => (
              <button
                type="button"
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
                key={filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="review-grid">
          {visibleReviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="review-card-top">
  <span>{review.category}</span>

  <a
    href={review.sourceUrl}
    target="_blank"
    rel="noreferrer"
    aria-label={`Open Soham's ${review.source} profile`}
  >
    {review.source} ↗
  </a>
</div>

              <div>
                <h3>{review.title}</h3>
                <p className="review-year">{review.year}</p>
              </div>

              <p className="review-text">“{review.review}”</p>

              <div className="review-rating">
                <span>My rating</span>
                <strong>{review.rating} / 5</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Cinema