var calc = 0;

for (i = 2; i < process.argv.length; i++) {
  calc = +process.argv[i] + calc;
}

console.log(calc);
