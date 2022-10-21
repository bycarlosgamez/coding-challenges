// given a binary matrix (array of arrays ) m x n and a integer k
// each array has 1's representing soldiers and 0's representing civilians
// soldiers are positioned in front of the civilians
// a row i is weaker than a row j if one of the following is true:
// the number of soldiers in row i is less than the number of soldiers in row j
// both rows have the same number of soldiers and i < j

// return the indices of the k weakest rows in the matrix ordered from weakest to strongest

var kWeakestRows = function (mat, k) {
  return mat
    .map((r, i) => [r, i])
    .sort((a, b) => a[0].filter(Boolean).length - b[0].filter(Boolean).length)
    .slice(0, k)
    .map(([_, i]) => i);
};

kWeakestRows(
  [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  3
);
kWeakestRows(
  [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  2
);

// Example 1:
// Input: mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// Output: [2,0,3]

// Example 2:
// Input: mat =
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]],
// k = 2
// Output: [0,2]
