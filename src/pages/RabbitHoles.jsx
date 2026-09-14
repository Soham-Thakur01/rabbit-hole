import { useState } from 'react'
import DraggableEmoji from '../components/DraggableEmoji'
import { rabbitHoles } from '../data/rabbitHoles'

function RabbitHoles() {
  const [selectedHole, setSelectedHole] = useState(rabbitHoles[0])

  function chooseRandomHole() {
    const otherHoles = rabbitHoles.filter(
      (rabbitHole) => rabbitHole.id !== selectedHole.id,
    )

    const randomIndex = Math.floor(Math.random() * otherHoles.length)
    setSelectedHole(otherHoles[randomIndex])
  }

  return (
    <main className="rabbit-holes-page">
      <section className="rabbit-hero">
        <div className="rabbit-intro">
          <p className="page-label">depth: unknown</p>

          <h1>
            Pick a hole.
            <span> Lose track of time.</span>
          </h1>

          <p>
            Mysteries, fictional worlds, strange theories and questions that
            started simply before becoming unnecessarily complicated.
          </p>

          <button
            type="button"
            className="random-hole-button"
            onClick={chooseRandomHole}
          >
            Choose one for me
          </button>
        </div>

        <article className="random-result">
          <span>YOUR RANDOM RABBIT HOLE</span>
          <div>{selectedHole.icon}</div>
          <p>{selectedHole.category}</p>
          <h2>{selectedHole.title}</h2>
          <small>{selectedHole.readingTime} descent</small>
        </article>

        <DraggableEmoji
          emoji="🔦"
          label="flashlight"
          x={3}
          y={73}
          size="3.7rem"
          rotation={-12}
        />

        <DraggableEmoji
          emoji="🕳️"
          label="hole"
          x={86}
          y={5}
          size="4rem"
          rotation={8}
        />
      </section>

      <section className="rabbit-collection">
        <p className="section-label">Available descents</p>
        <h2>How deep are you going?</h2>

        <div className="rabbit-grid">
          {rabbitHoles.map((rabbitHole, index) => (
            <button
              type="button"
              className={`rabbit-card ${
                selectedHole.id === rabbitHole.id ? 'selected' : ''
              }`}
              onClick={() => setSelectedHole(rabbitHole)}
              key={rabbitHole.id}
            >
              <div className="rabbit-card-top">
                <span>HOLE 0{index + 1}</span>
                <span>{rabbitHole.readingTime}</span>
              </div>

              <div className="rabbit-icon">{rabbitHole.icon}</div>
              <p>{rabbitHole.category}</p>
              <h3>{rabbitHole.title}</h3>
              <span className="rabbit-teaser">{rabbitHole.teaser}</span>
              <strong>Enter the hole ↘</strong>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default RabbitHoles