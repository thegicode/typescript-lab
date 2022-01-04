

type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8


class Game {}
class Position {
    constructor(
        private file: File,
        private rank: Rank
    ) { }
}
abstract class Piece {
    protected position: Position
    constructor(
        private readonly color: Color,
        file: File,
        rank: Rank
    ) {
        this.position = new Position(file, rank)
    }
    moveTo(position: Position) {
        this.position = position
    }
    // abstract canMoveTo(position: Position): boolean
}

// abstract 
// new Piece('White', 'E', 1)
// error TS2511: Cannot create an instance of an abstract class.

class King extends Piece {}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}



export {}

