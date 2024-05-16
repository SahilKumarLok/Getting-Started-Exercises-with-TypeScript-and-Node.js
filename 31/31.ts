// No Users

let userNames = ["Admin", "user01", "user02", "user03", "user04"];
userNames = [];
if (userNames.length === 0){
    console.log("Your Array is empty, We need to find some users! ")
}else{
    userNames.forEach(userNames => {
        if (userNames === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${userNames}, thank you for logging in again.`);
        }
    });
}