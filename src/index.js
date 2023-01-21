const towelSort = (matrix = []) => matrix
    .map((x, i) => (i & 1) ? x.reverse() : x)
    .flat()

module.exports = towelSort;
