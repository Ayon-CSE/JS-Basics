# Permutation Backtracking - Recursion Tree for [1, 2, 3]

## Algorithm Trace

```
backtrack([1,2,3], idx=0)
│
├─[swap(0,0)] [1,2,3] → backtrack([1,2,3], idx=1)
│ │
│ ├─[swap(1,1)] [1,2,3] → backtrack([1,2,3], idx=2)
│ │ │
│ │ └─[swap(2,2)] [1,2,3] → backtrack([1,2,3], idx=3)
│ │   └─ idx==3 ✓ ADD [1,2,3] to result
│ │
│ └─[swap(1,2)] [1,3,2] → backtrack([1,3,2], idx=2)
│   │
│   └─[swap(2,2)] [1,3,2] → backtrack([1,3,2], idx=3)
│     └─ idx==3 ✓ ADD [1,3,2] to result
│
├─[swap(0,1)] [2,1,3] → backtrack([2,1,3], idx=1)
│ │
│ ├─[swap(1,1)] [2,1,3] → backtrack([2,1,3], idx=2)
│ │ │
│ │ └─[swap(2,2)] [2,1,3] → backtrack([2,1,3], idx=3)
│ │   └─ idx==3 ✓ ADD [2,1,3] to result
│ │
│ └─[swap(1,2)] [2,3,1] → backtrack([2,3,1], idx=2)
│   │
│   └─[swap(2,2)] [2,3,1] → backtrack([2,3,1], idx=3)
│     └─ idx==3 ✓ ADD [2,3,1] to result
│
└─[swap(0,2)] [3,2,1] → backtrack([3,2,1], idx=1)
  │
  ├─[swap(1,1)] [3,2,1] → backtrack([3,2,1], idx=2)
  │ │
  │ └─[swap(2,2)] [3,2,1] → backtrack([3,2,1], idx=3)
  │   └─ idx==3 ✓ ADD [3,2,1] to result
  │
  └─[swap(1,2)] [3,1,2] → backtrack([3,1,2], idx=2)
    │
    └─[swap(2,2)] [3,1,2] → backtrack([3,1,2], idx=3)
      └─ idx==3 ✓ ADD [3,1,2] to result
```

## Step-by-Step Execution

### Level 0 (idx=0)
- Start: [1, 2, 3]
- Try 3 positions for first element:
  - Position 0: keep 1 at position 0
  - Position 1: move 2 to position 0  
  - Position 2: move 3 to position 0

### Level 1 (idx=1)
**From [1,2,3]:**
- Keep 2 at pos 1 → [1,2,3]
- Swap 2,3 → [1,3,2]

**From [2,1,3]:**
- Keep 1 at pos 1 → [2,1,3]
- Swap 1,3 → [2,3,1]

**From [3,2,1]:**
- Keep 2 at pos 1 → [3,2,1]
- Swap 2,1 → [3,1,2]

### Level 2 (idx=2)
Each branch swaps the last element with itself (no change), reaches base case (idx=3)

### Base Case (idx=3)
When idx == nums.size(), we've fixed all positions, so we add the current permutation to results.

## Result
```
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,2,1],
  [3,1,2]
]
```

## Key Points
- **Tree Depth**: 3 levels (0, 1, 2)
- **Leaf Nodes**: 6 (all permutations)
- **Total Nodes**: 1 + 3 + 6 + 6 = 16 function calls
- **Backtracking**: After each recursive call, we swap back to restore original state
- **Time Complexity**: O(n! × n) - n! permutations, each taking O(n) to add
- **Space Complexity**: O(n) for recursion depth + O(n! × n) for output
