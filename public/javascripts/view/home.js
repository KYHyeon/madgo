

// document.getElementById('user1_btn').onclick = function(){
//     user1_btn = document.getElementById('user1_btn');
//     state = user1_btn.getAttribute("state");
//     user1_form = document.getElementById('user1_form');

//     if((user = form_check_user1()) && state == "Login"){ //Every Form are checking
//         state_Login(user);
//     }
//     else if(state == "Logout"){
//         state_Logout();
//     }
// };

// function state_Login(user){
//     user1_btn.innerText = "Logout";
//     user1_btn.setAttribute("state","Logout");
//     account_div = document.createElement('div');
//     account_div.innerHTML = `Hello! ${user}`;
//     account_div.setAttribute("id", "helloID");
//     document.getElementById('user1_form').after(account_div);
//     document.getElementById('user1_form').style.display = "none";
// }
// function state_Logout(){
//     user1_btn.innerText = "Login";
//     user1_btn.setAttribute("state","Login");
//     user1_form.style.display = "block";
//     document.getElementById('helloID').remove();
// }


// function form_check_user1(){
//     user1_id = document.getElementById('user1_id');
//     user1_pw = document.getElementById('user1_pw');
//     if(user1_id.value === ''){
//         alert(`Please fill on the ID`);
//         return false;
//     }
//     if(user1_pw.value === ''){
//         alert(`Please fill on the PW`);
//         return false;
//     }
//     console.log(user1_id.value);
//     return user1_id.value;
// }