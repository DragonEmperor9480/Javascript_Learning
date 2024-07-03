function displayname()
{
    console.log(this)
}

const username = {
    username: "Amrut",
    displayname
}

username.displayname()