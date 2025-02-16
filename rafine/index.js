function veriGetir() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ozan");
    }, 2000);
  });
}

// veriGetir()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

async function veriAl() {
  try {
    console.log("verileriniz alınıyor...");
    const response = await veriGetir();
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
}
veriAl();
