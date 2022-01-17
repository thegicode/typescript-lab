

/* 체스 엔진 타입

체스 게임
class Game {}
체스 말 
class Piece {}
체스 말의 좌표 집합
class Position {}

*/


// Piece 클래스에 색과 위치를 추가하자.
type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Game {}
// class Position {
//     constructor(
//         private file: File,
//         private rank: Rank
//     ) { }
// }
class Position {
    constructor(
        private file: File,
        private rank: Rank
    ) { }
    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
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

// 체스에는 여섯가지의 말(piece)이 있다.
// 모든 말은 색과 현재 위치 정보를 갖는다. 
class King extends Piece {      // 말 
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}     
class Queen extends Piece {}    // 퀸
class Bishop extends Piece {}   // 비숍
class Knight extends Piece {}   // 나이트
class Rook extends Piece {}     // 륙
class Pawn extends Piece {}     // 폰



export {}

