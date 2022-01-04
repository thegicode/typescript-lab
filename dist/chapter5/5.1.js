"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
}
class Position {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
}
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
}
class King extends Piece {
}
class Queen extends Piece {
}
class Bishop extends Piece {
}
class Knight extends Piece {
}
class Rook extends Piece {
}
class Pawn extends Piece {
}
//# sourceMappingURL=5.1.js.map