export const keydownEventHandlers = {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown
}

function movable_to(game, deltaX, deltaY) {
  const x = game._player._x + deltaX
  const y = game._player._y + deltaY

  if (x === 0) return false
  if (x === game._map.width - 1) return false
  if (y === 0) return false
  if (y === game._map.height - 1) return false

  const tile = game._map.getTileAt(x, y, true)

  return (tile.index !== 1)
}

function ArrowLeft(game, event) {
  game._player.setFrame(0)
  if (movable_to(game, -1, 0)) game._player._x--
}

function ArrowRight(game, event) {
  game._player.setFrame(1)
  if (movable_to(game, 1, 0)) game._player._x++
}

function ArrowUp(game, event) {
  if (movable_to(game, 0, -1)) game._player._y--
}

function ArrowDown(game, event) {
  if (movable_to(game, 0, 1)) game._player._y++
}