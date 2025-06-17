
function ArrayChallenge(strArr) {
    // Map to store child -> parent relationships. Used to check if a child has only one parent.
    // Key: Child Node ID, Value: Parent Node ID
    const parents = new Map();

    // Map to store the count of children for each parent. Used to check for a maximum of 2 children.
    // Key: Parent Node ID, Value: Count of children
    const childrenCounts = new Map();

    // Set to keep track of all unique nodes encountered in the input.
    // Used for the final connectivity check.
    const allNodes = new Set();

    // Map to build an Adjacency List. Used for graph traversal (BFS) to check for cycles and connectivity.
    // Key: Parent Node ID, Value: Set of Child Node IDs
    const adjList = new Map();

    // --- Phase 1: Parse Input and Perform Initial Structural Checks ---
    for (let i = 0; i < strArr.length; i++) {
        const pairStr = strArr[i];
        // Extract child and parent IDs from the "(I1,I2)" format using regex.
        const match = pairStr.match(/\((\d+),(\d+)\)/);
        if (!match) {
            // Optional: Add error handling for malformed input strings.
            // For this challenge, we assume input is always valid format.
            continue;
        }
        const child = parseInt(match[1]);
        const parent = parseInt(match[2]);

        // Add both child and parent IDs to the set of all unique nodes.
        allNodes.add(child);
        allNodes.add(parent);

        // 1. Check for self-loops: A node cannot be its own parent.
        if (child === parent) {
            return "false";
        }

        // 2. Check for multiple parents for a child:
        // If the child already exists as a key in the 'parents' map, it means it already has a parent assigned.
        if (parents.has(child)) {
            return "false"; // This child already has a second parent.
        }
        parents.set(child, parent); // Assign the parent to the child.

        // 3. Check for more than two children for a parent:
        // Increment the child count for the current parent. Use '|| 0' to initialize if not present.
        childrenCounts.set(parent, (childrenCounts.get(parent) || 0) + 1);
        if (childrenCounts.get(parent) > 2) {
            return "false"; // The parent has more than two children.
        }

        // Build the adjacency list for graph traversal later:
        // If the parent is not yet in adjList, initialize it with an empty Set.
        if (!adjList.has(parent)) {
            adjList.set(parent, new Set());
        }
        adjList.get(parent).add(child); // Add the child to the parent's set of children.
        
        // Ensure the child node is also present as a key in adjList (even if it has no children itself yet).
        // This makes sure all nodes are accounted for during BFS traversal.
        if (!adjList.has(child)) {
            adjList.set(child, new Set());
        }
    }

    // --- Phase 2: Check for Root, Cycles, and Connectedness ---

    // Find potential root candidates:
    // A root is a node that is not present as a key in the 'parents' map (meaning it has no parent).
    const rootCandidates = [];
    for (const node of allNodes) {
        if (!parents.has(node)) {
            rootCandidates.push(node);
        }
    }

    // 4. Check for exactly one root:
    // A valid tree must have precisely one root node.
    if (rootCandidates.length !== 1) {
        return "false"; // No root, or more than one root (not a single tree).
    }
    const root = rootCandidates[0]; // The single root of the tree.

    // 5. Check for cycles and connectedness using Breadth-First Search (BFS):
    const visited = new Set(); // Set to keep track of visited nodes to detect cycles.
    const queue = [root]; // Queue for BFS traversal, starting with the root.
    visited.add(root); // Mark the root as visited.
    
    let visitedCount = 0; // Counter for nodes visited during BFS.

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Dequeue the first node for processing (BFS).
        visitedCount++; // Increment the count of visited nodes.

        // Get the children of the current node from the adjacency list.
        // Use '|| new Set()' to safely handle nodes that have no children in adjList.
        const childrenOfCurrentNode = adjList.get(currentNode) || new Set(); 
        for (const childNode of childrenOfCurrentNode) {
            if (visited.has(childNode)) {
                // If a child node has already been visited, it indicates a cycle.
                // In a valid tree, each node should be visited only once via a unique path from the root.
                return "false";
            }
            visited.add(childNode); // Mark the child as visited.
            queue.push(childNode); // Enqueue the child for future processing.
        }
    }

    // 6. Check for disconnected components:
    // If the count of nodes visited during BFS (starting from the single root)
    // is not equal to the total number of unique nodes in the input,
    // it means there are nodes or parts of the graph not connected to the main tree.
    if (visitedCount !== allNodes.size) {
        return "false";
    }

    // If all checks pass, the relationships form a valid binary tree.
    return "true";
}

// --- Test Cases ---
// Example 1: Valid tree structure from problem description.
console.log(`Test 1: ${ArrayChallenge(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])}, Expected: true`);
// Example 2: Invalid tree structure (from problem description).
console.log(`Test 2: ${ArrayChallenge(["(1,2)", "(3,2)", "(2,12)", "(5,2)"])}, Expected: false`);
