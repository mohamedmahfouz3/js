# Tree Constructor

## Overview
The `TreeConstructor` function determines whether a given array of string pairs can form a valid binary tree. Each string pair represents a child-parent relationship in the format `(child, parent)`. A valid binary tree must satisfy the following conditions:

- Each node has at most one parent.
- Each node has at most two children.
- There is exactly one root node (a node with no parent).
- The tree is connected (no disconnected components).
- There are no cycles (a node cannot be an ancestor of itself).
- No node is its own parent (no self-loops).

The function returns `"true"` if the input forms a valid binary tree and `"false"` otherwise.

## Implementation Details

- **Language**: JavaScript
- **Data Structures**:
  - `Map` for tracking child-to-parent relationships and child counts per parent.
  - `Set` for storing all unique nodes and building an adjacency list for graph traversal.
- **Algorithm**:
  - **Phase 1**: Parse input strings to extract child and parent nodes, perform initial checks for self-loops, multiple parents, and more than two children per parent, and build an adjacency list.
  - **Phase 2**: Identify the root, perform a Breadth-First Search (BFS) to detect cycles, and verify the tree's connectedness.
- **Time Complexity**: O(N), where N is the number of nodes (or edges in the input).
- **Space Complexity**: O(N) for storing the maps, sets, and adjacency list.

## Input Format

- The input is an array of strings, where each string is in the format `(child, parent)`.
- Both child and parent are positive integers representing node IDs.
- **Example**: `["(1,2)", "(2,4)", "(5,7)"]` indicates that node 1 is a child of node 2, node 2 is a child of node 4, and node 5 is a child of node 7.

## Output

- Returns `"true"` if the input forms a valid binary tree.
- Returns `"false"` if any of the tree conditions are violated.

## Example Usage

```javascript
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])); // Output: "true"
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"])); // Output: "false"
```

## Test Cases

1. **Input**: `["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]`
   - **Output**: `"true"`
   - **Explanation**: Forms a valid binary tree with one root and no violations.

2. **Input**: `["(1,2)", "(3,2)", "(2,12)", "(5,2)"]`
   - **Output**: `"false"`
   - **Explanation**: Node 2 has three children (1, 3, 5), violating the binary tree rule of at most two children per node.

## How to Run

1. Ensure you have a JavaScript environment (e.g., Node.js or a browser console).
2. Copy the `TreeConstructor` function into your JavaScript file or environment.
3. Call the function with an array of strings as input, e.g., `TreeConstructor(["(1,2)", "(2,4)", "(5,7)"])`.
4. The function will return `"true"` or `"false"` based on the validity of the tree.

## Notes

- The function assumes that the input strings are well-formed (i.e., follow the `(child, parent)` format with valid integers).
- For production use, additional error handling for malformed input could be added.
- The implementation uses BFS to ensure a single connected component and no cycles, making it robust for various input sizes.
