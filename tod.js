var sumZero = function (n) {
    let zArray = [];
    if (n == 1) {
        return [0];
    } else if (n % 2 == 0) {
        for (let i = 1; i <= n / 2; i++) {
            zArray.push(i);
            zArray.push(-i);
        }
    } else {
        zArray = [0];
        for (let i = 1; i <= (n - 1) / 2; i++) {
            zArray.push(i);
            zArray.push(-i);
        }
    }
    return zArray;
};

// 2222222222222222222222222222222222222222222222

var getAllElements = function (root1, root2) {
    let treeArr = [];
    var traverse = function (root, treeArr) {
        console.log(treeArr);
        if (root) {
            treeArr.push(root.val);

            traverse(root.left, treeArr);
            traverse(root.right, treeArr);
        }
    };

    traverse(root1, treeArr);
    console.log(treeArr, "TREE ONE");
    traverse(root2, treeArr);
    console.log(treeArr, "TREE TWO");
    treeArr = treeArr.sort((a, b) => a - b);
    return treeArr;
};

// 333333333333333333333333333333333333333333333333

var canReach = function(arr, start) {
  let target;
  let plat;
  let plats
  if (arr.includes(0) == false) {
    return false;
  } else {
    target = arr.indexOf(0);
    var jumping = function(idx) {
      if (idx == start) {
        return true;
      }
      plat = idx + arr[idx];
      plats = idx - arr[idx];
      if (arr.includes(plat)) {
        jumping(arr.indexOf(plat));
      }
      if (arr.includes(plats)) {
        jumping(arr.indexOf(plats));
      }
    }
  }
  return false;
};