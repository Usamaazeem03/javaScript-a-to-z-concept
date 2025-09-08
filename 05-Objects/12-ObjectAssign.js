// Object.assign()
const teamA = {
  firstRound: 22,
  secondRound: 10,
  thirsRound: 17,
};

// Note: Object.assign() copies properties from source objects into target.
// If the same key exists, the last object's value overwrites the previous ones.

const teamB = {
  firstRound: 12,
  secondRound: 20,
  thirsRound: 10,
};

const teamsScores = Object.assign({}, teamA, teamB);
console.log(teamsScores);

// Summary ✨
// Copies propertie from one or more source object into a target object.
// if keys are the same, later sources overweite earlier ones,
// Returns the updates target object.
