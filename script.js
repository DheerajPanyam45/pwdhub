const showPasswords = ()=>{

let tb = document.querySelector("table");
let data = localStorage.getItem("passwords")
if (data == null) {
    tb.innerHTML = "no data to be shown"
}
else {
    let arr = JSON.parse(data);
    let str =""
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        str += `<tr>
<td>${element.website}</td>
<td>${element.username}</td>
<td>${element.password}</td>
<td>${"Delete"}</td>
</tr>`
    }
    tb.innerHTML = tb.innerHTML + str

}


}
console.log("working")
showPasswords()
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    // alert("hi");
    // alert(username.value)
    let passwords = localStorage.getItem("passwords")
    if (passwords == null) {
        let json = []
        json.push({website:website.value,  username: username.value, password: password.value });
        alert("password saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({website:website.value, username: username.value, password: password.value });
        alert("password saved")
        localStorage.setItem("password", JSON.stringify(json))

    }
    showPasswords();
})