/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let max = 0;
    let diagonal = 0;
    for (let i = 0; i < dimensions.length; i++) {
        if (
            diagonal <
            Math.sqrt(
                dimensions[i][0] * dimensions[i][0] +
                    dimensions[i][1] * dimensions[i][1]
            )||(diagonal===Math.sqrt(dimensions[i][0]*dimensions[i][0]+dimensions[i][1]*dimensions[i][1])&&max<(dimensions[i][0]*dimensions[i][1]))
        ) {
            diagonal = Math.sqrt(
                dimensions[i][0] * dimensions[i][0] +
                    dimensions[i][1] * dimensions[i][1]);
            max = dimensions[i][0] * dimensions[i][1];
            
        }
    }
    return (max);
};
