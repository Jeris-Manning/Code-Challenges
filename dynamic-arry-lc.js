function dynamicArray(n, queries) {
    // Write your code here

    let masterArray = [];
    let lastAnswer = 0;
    let seqIndex;
    let elemIndex;

    for (let i = 0; i < n; i++) {
        masterArray[i] = [];
    }

    for (let j = 0; j < queries.length; j++) {
        if (queries[j][0] == 1) {
            masterArray[queries[j][1]].push(queries[j][2]);
        } else {
            seqIndex = (queries[j][1] ^ lastAnswer) % n;
            elemIndex = queries[j][2] % masterArray[seqIndex].length;
            lastAnswer = masterArray[seqIndex][elemIndex];
            return lastAnswer;
        }
    }
}
