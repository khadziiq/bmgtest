function frontendBackend(n) {
  // Write your code here
  let hasil = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      hasil += "Frontend Backend";
    } else if (i % 3 == 0) {
      hasil += "Frontend";
    } else if (i % 5 == 0) {
      hasil += "Backend";
    } else {
      hasil += i;
    }
    hasil += ",";
  }
  return hasil;
}

console.log(frontendBackend(50));
