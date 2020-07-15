var flatten = function (head) {
    let node = head;
    var solution = [];
    var inner = function (node) {
        while (node.next != null) {
            solution.push(node.val);
            if (node.child != null) {
                node = node.child;
                inner(node);
            }
            node = node.next;
        }
    };
    inner(node);
};
