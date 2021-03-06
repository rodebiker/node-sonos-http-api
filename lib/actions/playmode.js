function repeat(player, values) {
  return player.coordinator.repeat(values[0] == "on" ? true : false);
}

function shuffle(player, values) {
  return player.coordinator.shuffle(values[0] == "on" ? true : false);
}

function crossfade(player, values) {
  return player.coordinator.crossfade(values[0] == "on" ? true : false);
}

module.exports = function (api) {
  api.registerAction('repeat', repeat);
  api.registerAction('shuffle', shuffle);
  api.registerAction('crossfade', crossfade);
}