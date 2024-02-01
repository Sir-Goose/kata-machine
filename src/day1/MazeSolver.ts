
function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][]): boolean {

    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {

        return false;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (curr.x === end.x && curr.y === end.y) {
        return true;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }
    
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

}
