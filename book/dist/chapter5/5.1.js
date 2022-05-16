"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
}
class Position {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    distanceFrom(position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        };
    }
}
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    moveTo(position) {
        this.position = position;
    }
}
class King extends Piece {
    canMoveTo(position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    }
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