const userLogin = () => {
  console.log("Enter Username and Password: ");
  let Username = prompt("Enter Username: ");
  let Password = prompt("Enter Password: ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Performing User Authentication ");
      if (Username === "vishal" && Password === "vishal") {
        resolve("User Authenticated");
      } else {
        reject("User Failed!");
      }
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`Go to Home page as : ${userAuthStatus}`);
}

// userLogin().then((response)=>{
//     console.log("Validate User");
//     return goToHomePage(response)

// }).then((userAuthStatus)=>{
//  console.log(userAuthStatus);

// }).catch((err)=>{
//     console.log(err);

// })

async function performTask() {
  try {
    const response = await userLogin();
    console.log("Validate User");
    const userAuthStatus = await goToHomePage(response);
    console.log(userAuthStatus);
  } catch (error) {
    console.log(error);
  }
}
performTask();
