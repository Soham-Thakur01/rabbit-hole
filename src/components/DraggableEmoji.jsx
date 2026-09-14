import { useRef, useState } from 'react'

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum)
}

function DraggableEmoji({
  emoji,
  label,
  x,
  y,
  size = '3rem',
  rotation = 0,
}) {
  const [position, setPosition] = useState({ x, y })
  const dragData = useRef(null)

  function handlePointerDown(event) {
    const element = event.currentTarget
    const parentBox = element.parentElement.getBoundingClientRect()
    const emojiBox = element.getBoundingClientRect()

    dragData.current = {
      parentBox,
      offsetX: event.clientX - emojiBox.left,
      offsetY: event.clientY - emojiBox.top,
    }

    element.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event) {
    if (!dragData.current) return

    const { parentBox, offsetX, offsetY } = dragData.current
    const element = event.currentTarget

    const left = clamp(
      event.clientX - parentBox.left - offsetX,
      0,
      parentBox.width - element.offsetWidth,
    )

    const top = clamp(
      event.clientY - parentBox.top - offsetY,
      0,
      parentBox.height - element.offsetHeight,
    )

    setPosition({
      x: (left / parentBox.width) * 100,
      y: (top / parentBox.height) * 100,
    })
  }

  function handlePointerUp(event) {
    dragData.current = null

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  return (
    <button
      type="button"
      className="draggable-emoji"
      aria-label={`Move ${label}`}
      title={`Drag the ${label}`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        fontSize: size,
        '--rotation': `${rotation}deg`,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {emoji}
    </button>
  )
}

export default DraggableEmoji