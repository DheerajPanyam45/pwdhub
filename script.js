function maskPasswrod(pass){
    let str = ""
    for(let index =0;index<pass.length;index++){
        str += "*"
    }
    return str;
}


function copyText(txt){
    
    navigator.clipboard.writeText(txt).then(

    ()=> {
        alert("Copy Done!!");
    },
    ()=>{
        alert("clipboard copying failed")
    },
);
}

const deletePassword=(website)=>{
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e)=>{
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`Successfully delted ${website}'s password`)
    showPasswords();
}



const showPasswords = ()=>{

let tb = document.querySelector("table");
let data = localStorage.getItem("passwords")
if (data == null || JSON.parse(data).length==0) {
    tb.innerHTML = "no data to be shown"
}
else {
    tb.innerHTML = ` <tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`
    let arr = JSON.parse(data);
    let str =""
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        str += `<tr>
<td>${element.website} 
    <img src="copy.svg" alt="copy" width="100" height="100" onclick="copyText('${element.website}')"> 
</td>
<td>${element.username} 
    <img src="copy.svg" alt="copy" width="100" height="100" onclick="copyText('${element.username}')">
</td>
<td>${maskPasswrod(element.password)} 
    <img src="copy.svg" alt="copy" width="100" height="100" onclick="copyText('${element.password}')">
</td>
<td><button class ="btnsm" onclick="deletePassword('${element.website}')"> Delete</td>
</tr>`
    }
    tb.innerHTML = tb.innerHTML + str

}
website.value = "";
password.value = "";
username.value = "";


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
        localStorage.setItem("passwords", JSON.stringify(json))

    }
    showPasswords();
})