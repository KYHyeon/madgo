document.getElementById('user1_login_btn').onclick = function(){
    if(user = form_check_user1()){ //Every Form are checking
        account_div = document.createElement('div');
        user1_form = document.getElementById('user1_form');
        account_div.innerHTML = `Hello! ${user}`;
        account_div.setAttribute("id", "helloID");
        document.getElementById('content1').replaceChild(account_div, user1_form);
        
    }
};

function form_check_user1(){
    user1_id = document.getElementById('user1_id');
    user1_pw = document.getElementById('user1_pw');
    if(user1_id.value === ''){
        alert(`Please fill on the ID`);
        return false;
    }
    if(user1_pw.value === ''){
        alert(`Please fill on the PW`);
        return false;
    }
    return user1_id.value;
}