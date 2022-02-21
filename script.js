let inputBtn = document.getElementById("input-btn");
let generatorBtn = document.getElementById("password-generator")
let copyBtn = document.getElementById("copy-password");

generatorBtn.addEventListener("click", ()=>{
     const num = "0123456789";
     const upper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     const lower ="abcdefghijklmnopqrstuvwxyz";
     const spacial ="@#$%&";
     const char =`${num} ${upper} ${lower} ${spacial} `;
    let passwordLenght = 8;
    let password=" ";
    for(var i=0; i<passwordLenght; i++){
        var randomNumber = Math.floor(Math.random() *char.length);
        password +=char.substring(randomNumber,randomNumber +1);
    }
    document.getElementById("input-btn").value=password;

});
copyBtn.addEventListener("click", ()=>{
  let textcopy = document.getElementById("input-btn");
  textcopy.select();
  textcopy.setSelectionRange(0,99);
  document.execCommand("copy");
});