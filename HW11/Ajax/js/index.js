const addUsersBtn = document.getElementById("add-users");
const UsersList = new UserList("#users-list");

addUsersBtn.addEventListener("click", () => {
    UsersList.getUsers()
});
