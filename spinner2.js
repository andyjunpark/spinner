process.stdout.write('hello from spinner2.js... \rheyyy\n');
let spinner2 = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      process.stdout.write(arr[i]);  // print the char here
    }, i*200)
  }
};
let spinner =[
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
]

spinner2(spinner)