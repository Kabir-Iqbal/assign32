// 32. Checking Usernames: 
// Do the following to create a program that simulates how websites ensure that everyone has a 
// unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames 
// are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print 
// a message that the person will need to enter a new username. If a username has not been used, print 
// a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 
// accepted.
var current_users = ["Ali", "Übaid", "Kaser", "Rahib", "Razaq"];
var new_users = ["Hashim", "Hussain", "Rehan", "Ali", "Kaser"];
// we will use to for each method 
new_users.forEach(function (new_user) {
    var newuserlower = new_user.toLowerCase();
    // we wil use to some method to connect lists
    var alreadytaken = current_users.some(function (current_user) { return current_user.toLowerCase() === newuserlower; });
    if (alreadytaken) {
        console.log("".concat(new_user, " is already taken try another username."));
    }
    else {
        console.log("".concat(new_user, " is added to username."));
    }
});
