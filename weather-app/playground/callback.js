var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Vitalik"    
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
    
};

getUser(30, (userObject) => {
    console.log(userObject);
});