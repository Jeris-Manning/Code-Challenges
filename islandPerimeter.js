/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let perimeter = 0;
    let cellVerts = 0;

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === 1) {
                cellVerts = 4;
                if (x + 1 < grid[0].length) {
                    grid[y][x + 1] === 1 ? cellVerts-- : null;
                }
                if (x > 0) {
                    grid[y][x - 1] === 1 ? cellVerts-- : null;
                }
                if (y + 1 < grid.length) {
                    grid[y + 1][x] === 1 ? cellVerts-- : null;
                }
                if (y > 0) {
                    grid[y - 1][x] === 1 ? cellVerts-- : null;
                }
                console.log(cellVerts);
                perimeter += cellVerts;
            }
        }
    }

    return perimeter;
};

// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example:

// Input:
// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]

// Output: 16
