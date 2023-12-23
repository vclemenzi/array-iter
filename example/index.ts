import "../src/index";

const array = [1, 2, 3, 4, 5];

array.iter((v, i, a) => {
  setTimeout(() => {
    console.log(`Value: ${v}, Index: ${i}, Array: [${a.join(", ")}]`);
  }, 1000);
});
