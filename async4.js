function myFunction(param) {
  return new Promise((resolve, reject) => {
    if (param) {
      resolve("Halo, ini kondisi true/berhasil");
    } else {
      reject("Halo, ini kondisi false/salah");
    }
  });
}

let param = true;
myFunction(param)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
