const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
if (strokes == 1) {
  return "Hole-in-one!";
} else if (strokes <= par - 2) {
  return "Eagle";
} else if (strokes == par - 1) {
  return "Birdie";
} else if (strokes == par) {
  return "Par";
} else if (strokes == par + 1) {
  return "Bogey";
} else if (strokes == par + 2) {
  return "Double Bogey";
} else if (strokes >= par + 3) {
  return "Go Home!";
}

}

golfScore(5, 4);

console.log(golfScore(5, 4));

/* in this case the value of par is 5 and the value of strokes is 4.
the only true statement is found on line 8-9
It follows that the output is "Birdie", when strokes is equal to par - 1 */ 