
/** 이진트리 예제
 * 1. 일반 TreeNode
 * 2. 자식을 갖지 않는 TreeNode인 LeafNode
 * 3. 자식을 갖는 TreeNode인 InnerNode
 */

type TreeNode = {
    value: string
}

type LeafNode = TreeNode & {
    isLeaf: true
}

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}

let a: TreeNode = {value: 'a'}
let b: LeafNode = {value: 'b', isLeaf: true}
let c: InnerNode = {value: 'c', children: [b]}

let a1 = mapNode(a, _ => _.toUpperCase())   // TreeNode
let b1 = mapNode(b, _ => _.toUpperCase())   // LeafNode
let c1 = mapNode(c, _ => _.toUpperCase())   // InnderNode

console.log('a1', a1)
console.log('b1', b1)
console.log('c1', c1)

function mapNode<T extends TreeNode>(   // 1
    node: T,                            // 2
    f: (value: string) => string
): T {                                  // 3
    return {
        ...node,
        value: f(node.value)
    }
}
/**
 * 1. mapNode는 한 개의 제네릭 타입 매개변수 T를 정의하는 함수다. T의 상한 경계는 TreeNode다. 즉 T는 TreeNode이거나 아니면 TreeNode의 서브타입이다.
 * 2. mapNode는 두 개이 매개변수를 받는데 첫 번째 매개변수는 T타입의 노드다. 1에서 노드는 extends TreeNode라고 했으므로 (빈 객체 {}, null, TreeNode 등의) TreeNode가 아닌 다른 것을 함수로 전다하면 바로 꼬불거리는 빨간 밑줄이 나타난다. node는 TreeNode이거나 TreeNode의 서브타입이어야 한다.
 * 3. mapNode는 타입이 T인 값을 반환한다. T는 TreeNode이거나 TreeNode의 서브 타입임을 기억하자.
 */



/** 여러 제한을 적용한 한정된 다형성 */
type HashSides = { numberOfSides: number }
type SideHaveLength = { sideLength: number }

function logPerimeter<
    Shape extends HashSides & SideHaveLength
>(s: Shape): Shape {
    console.log('logPerimeter: ', s.numberOfSides * s.sideLength)
    return s
}

type Square = HashSides & SideHaveLength
let square: Square = { numberOfSides: 4, sideLength: 3}
logPerimeter(square)



/** 한정된 다형성으로 인수의 개수 정의하기 */

/* function call(
    f: (...args: unknown[]) => unknown,
    ...args: unknown[]
): unknown {
    return f(...args)
} */
function call<T extends unknown[], R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}
function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
}

let d = call(fill, 10, 'a')     // string[]
console.log(d)  

// let e = call(fill, 10)  
// error TS2554: Expected 3 arguments, but got 2.

// let f = call(fill, 10, 'a', 'z')
//  error TS2554: Expected 3 arguments, but got 4.


export {}