/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  // your implementation
    var temp, count;
    temp = 0;
    count = 0;
    var arr = [];
    var arr2 = [];
    for(var i = 0; i < preferences.length; i++) {
        if(arr2.indexOf(i+1) != -1)
            continue;
        temp = i+1;
        for(;;) {
            arr.push(temp);
            temp = preferences[temp-1];

            if(temp === preferences[temp-1])
            {
                arr.splice(0,arr.length);
                break;
            }

            if(temp <= 0 || temp > preferences.length) {
                arr.splice(0,arr.length);
                break;
            }

            if(arr.indexOf(temp) !== -1) {
                if(temp == i+1) {
                    count++;
                    arr2 = arr2.concat(arr);
                }
                arr.splice(0,arr.length);
                break;
            }

        }
    }

    return count;
};
