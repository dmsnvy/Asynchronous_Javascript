const myFunction = () => {
  return new Promise((resolve, reject) => {
    resolve("halo, ini kondisi true/berhasil");
  });
};

myFunction().then((result) => {
  console.log(result);
});
