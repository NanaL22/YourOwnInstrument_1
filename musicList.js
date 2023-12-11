class MusicList {
  constructor() {
    this.musicScores = [];
    this.set();
    this.tempo = [70, 90, 120];
  }

  getMusic(i) {
    return this.musicScores[i];
  }

  getTempo(i) {
    return this.tempo[i];
  }

  set() {
    this.musicScores[0] = [
      ['g', 1.5],
      ['a', 0.5],
      ['g', 1],
      ['e', 2],
      ['', 1],
      ['g', 1.5],
      ['a', 0.5],
      ['g', 1],
      ['e', 2],
      ['', 1],
      ['d^', 2],
      ['d^', 2],
      ['b', 3],
      ['c^', 2],
      ['c^', 1],
      ['g', 2],
      ['', 1],
      ['a', 2],
      ['a', 1],
      ['c^', 1.5],
      ['b', 0.5],
      ['a', 1],
      ['g', 1.5],
      ['a', 0.5],
      ['g', 1],
      ['e', 2],
      ['', 1],
      ['a', 2],
      ['a', 1],
      ['c^', 1.5],
      ['b', 0.5],
      ['a', 1],
      ['g', 1.5],
      ['a', 0.5],
      ['g', 1],
      ['e', 2],
      ['', 1],
      ['d^', 2],
      ['d^', 1],
      ['f^', 1.5],
      ['d^', 0.5],
      ['b', 1],
      ['c^', 3],
      ['e^', 3],
      ['c^', 1],
      ['g', 1],
      ['e', 1],
      ['g', 1.5],
      ['f', 0.5],
      ['d', 1],
      ['c', 2],
      ['', 1],
    ];

    this.musicScores[1] = [
      ['d', 1],
      ['g', 1],
      ['g', 0.5],
      ['a', 0.5],
      ['g', 0.5],
      ['f#', 0.5],
      ['e', 1],
      ['e', 1],
      ['e', 1],
      ['a', 1],
      ['a', 0.5],
      ['b', 0.5],
      ['a', 0.5],
      ['g', 0.5],
      ['f#', 1],
      ['d', 1],
      ['d', 1],
      ['b', 1],
      ['b', 0.5],
      ['c^', 0.5],
      ['b', 0.5],
      ['a', 0.5],
      ['g', 1],
      ['e', 1],
      ['d', 0.5],
      ['d', 0.5],
      ['e', 1],
      ['a', 1],
      ['f#', 1],
      ['g', 2],
      ['d', 1],
      ['g', 1],
      ['g', 1],
      ['g', 1],
      ['f#', 2],
      ['f#', 1],
      ['g', 1],
      ['f#', 1],
      ['e', 1],
      ['d', 2],
      ['a', 1],
      ['b', 1],
      ['a', 1],
      ['g', 1],
      ['d^', 1],
      ['d', 1],
      ['d', 0.5],
      ['d', 0.5],
      ['e', 1],
      ['a', 1],
      ['f#', 1],
      ['g', 2],
    ];

    this.musicScores[2] = [
      ['c', 0.5],
      ['a', 0.5],
      ['g', 0.5],
      ['f', 0.5],
      ['c', 1.5],
      ['', 0.5],
      ['c', 0.5],
      ['a', 0.5],
      ['g', 0.5],
      ['f', 0.5],
      ['d', 1.5],
      ['', 0.5],
      ['d', 0.5],
      ['a#', 0.5],
      ['a', 0.5],
      ['g', 0.5],
      ['e', 1.5],
      ['', 0.5],
      ['c^', 0.5],
      ['c^', 0.5],
      ['a#', 0.5],
      ['g', 0.5],
      ['a', 1],
      ['f', 0.5],
      ['', 0.5],
      ['c', 0.5],
      ['a', 0.5],
      ['g', 0.5],
      ['f', 0.5],
      ['c', 1.5],
      ['', 0.5],
      ['c', 0.5],
      ['a', 0.5],
      ['g', 0.5],
      ['f', 0.5],
      ['d', 1.5],
      ['', 0.5],
      ['d', 0.5],
      ['a#', 0.5],
      ['a', 0.5],
      ['g', 0.5],
      ['c^', 0.75],
      ['c^', 0.25],
      ['c^', 0.5],
      ['c^', 0.5],
      ['d^', 0.5],
      ['c^', 0.5],
      ['a#', 0.5],
      ['g', 0.5],
      ['f', 1.5],
      ['', 0.5],
      ['a', 0.5],
      ['a', 0.5],
      ['a', 1],
      ['a', 0.5],
      ['a', 0.5],
      ['a', 1],
      ['a', 0.5],
      ['c^', 0.5],
      ['f', 0.75],
      ['g', 0.25],
      ['a', 1.5],
      ['', 0.5],
      ['a#', 0.5],
      ['a#', 0.5],
      ['a#', 0.75],
      ['a#', 0.25],
      ['a#', 0.5],
      ['a', 0.5],
      ['a', 0.5],
      ['a', 0.5],
      ['a', 0.5],
      ['g', 0.5],
      ['g', 0.5],
      ['f', 0.5],
      ['g', 1],
      ['c^', 0.5],
      ['', 0.5],
      ['a', 0.5],
      ['a', 0.5],
      ['a', 1],
      ['a', 0.5],
      ['a', 0.5],
      ['a', 1],
      ['a', 0.5],
      ['c^', 0.5],
      ['f', 0.75],
      ['g', 0.25],
      ['a', 1.5],
      ['', 0.5],
      ['a#', 0.5],
      ['a#', 0.5],
      ['a#', 0.75],
      ['a#', 0.25],
      ['a#', 0.5],
      ['a', 0.5],
      ['a', 0.5],
      ['a', 0.5],
      ['c^', 0.5],
      ['c^', 0.5],
      ['a#', 0.5],
      ['g', 0.5],
      ['f', 1.5],
      ['', 0.5],
    ]
  }
}