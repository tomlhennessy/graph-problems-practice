function getNeighbors(row, col, matrix) {
  const neighbors = [];

  // Check top
  if (row > 0 && matrix[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // Check bottom
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Check left
  if (col > 0 && matrix[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Check right
  if (col < matrix[0].length - 1 && matrix[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }
  // Return neighbors
  return neighbors;
}


function islandSize(row, col, matrix) {
  // create a visited set to store visited nodes
  const visited = new Set();

  // create a stack, put the starting node in the stack
  const stack = [[row, col]];

  // put the stringified starting node in visited
  visited.add([row, col].toString());

  // initialise to 0
  let size = 0;

  // while the stack is not empty
  while (stack.length > 0) {
    // pop the first node
    const [currentRow, currentCol] = stack.pop();

    // increment the size (do the ting!)
    size++;

    // get all unvisited neighbors
    const neighbors = getNeighbors(currentRow, currentCol, matrix);

    for (const neighbor of neighbors) {
      const neighborKey = neighbor.toString();
      // if the neighbor hasn't been visited
      if (!visited.has(neighborKey)) {
        // mark it as visited and push it onto the stack
        visited.add(neighborKey);
        stack.push(neighbor);
      }
    }

    //
  }

  // return the size of the island
  return size;
}

module.exports = [getNeighbors, islandSize];
