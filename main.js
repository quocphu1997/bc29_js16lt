// Bài 1

// document.getElementById("songuyento").onclick = function () {
//   var snt = document.getElementById("snt").value * 1;
//   var kq;
//   if (snt <= 1) {
//     document.getElementById("kq").innerHTML = "";
//   } else if (snt == 2) {
//     document.getElementById("kq").innerHTML = "2";
//   } else if (snt > 2) {
//     for (var i = 3; i <= snt; i++) {
//       for (var j = 3; j <= i; j += 2) {
//         if (j % Math.sqrt(j) != 0 && j % 2 != 0) {
//           kq = j;
//         }
//       }
//     }
//     document.getElementById("kq").innerHTML = "2 " + kq;
//   }
// };

function check_snt(snt) {
  var flag = true;
  if (snt < 2) {
    flag = false;
    return 0;
  } else {
    for (var i = 2; i <= Math.sqrt(snt); i++) {
      if (snt % i == 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag == true) {
    return 1;
  } else {
    return 0;
  }
}

document.getElementById("songuyento").onclick = function () {
  var nt = document.getElementById("snt").value * 1;
  var kq = "";
  //   if (nt >= 2) {
  //     kq = kq + 2 + " ";
  for (i = 0; i <= nt; i += 1) {
    if (check_snt(i) == 1) {
      kq = kq + i + " ";
    }
  }
  //   }
  document.getElementById("kq").innerHTML = kq;
};
