/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
function covertTime(t) {
    var items = t.split(":");
    var hours = Number(items[0] * 60);
    var minutes = Number(items[1]);
    return (hours + minutes);
}
var haveConflict = function (event1, event2) {
    if ((covertTime(event1[0]) <= covertTime(event2[0]) &&
        covertTime(event2[0]) <= covertTime(event1[1])) ||
        covertTime(event2[0]) <= covertTime(event1[0]) &&
        covertTime(event1[0]) <= covertTime(event2[1])
    )return true;
    return false;
        

};