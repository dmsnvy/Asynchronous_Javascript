const myFunction = () => {
  return new Promise((resolve, reject) => {
    reject("halo, ini kondisi false/gagal");
  });
};

myFunction().catch((error) => {
  console.log(error);
});
