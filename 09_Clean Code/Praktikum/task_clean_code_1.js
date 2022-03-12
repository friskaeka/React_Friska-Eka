class user { // salah, karena penamaan class harus  huruf kapital. 
    var id;
var username;
var password;
}

class userService { // salah, karena penamaan class harus  huruf kapital. 
    user[] users = [];
    
    user[] getallusers() { // salah, karena penamaan class harus  huruf kapital. 
        return users;
    }

    user getuserbyid(userid) { // salah, karena penamaan class harus  huruf kapital. 
        return users.filter(userid);
    }
}