function test(){
    //let salary = document.getElementById("salary").value;
    alert("258963147");
} 
//test();

const init = function(){
    document.getElementById("reset_form").addEventListener('click', reset);
    document.getElementById("send_form").addEventListener('click', send);
}

const reset = function(){
    ev.preventDefault();
    document.getElementById('formular').reset();
}

const send =function(){
    ev.preventDefault();
    let r = validate();

    if(r){
        document.getElementById("formular").submit();
    }
    else{//bad user
        //let err = document.querySelector('.error');
        //let input = err.querySelector('input');
        alert("bad user");
        let t = document.getElementById('FirstName');
        t.classList.add('error');
        t.setAttribute('data-errormsg', '...Missing');
    }
}


const validate = function(){
    let valid = false;
    //let chk = document.getElementById("");
    let firstname = document.getElementById("FirstName");
    let lastname = document.getElementById("LastName");
    let noid = document.getElementById("NoId");
    let salary = document.getElementById("salary");
    let NbrOfChild = document.getElementById("NbrOfChild");


    return valid;
}


function salar(){
    let salary = document.getElementById("salary").value;
    let ipts = document.getElementById("ipts");
    let NbrOfChild = document.getElementById("NbrOfChild").value;
    let empass = document.getElementById("empass");
    let regim = document.getElementById("regim");
    let vps = document.getElementById("vps");
    let netsalary = document.getElementById("netsalary");
    let pts = 0, sal=0;

    //netsalary.value = Number(salary) + Number(salary);

    if (Number(salary)<=50000)   
        ipts.value = 0;
    if (Number(salary)>50000 && Number(salary)<=130000){
        sal = Number(salary) - 50000;
        pts = sal * 0.1;
    }
    if (Number(salary)>130000 && Number(salary)<=280000){
        sal = Number(salary) - 130000;
        pts = 8000 + sal * 0.15;
    }
    if (Number(salary)>280000 && Number(salary)<=530000){
        sal = Number(salary) - 280000;
        pts = 8000 + 22500 + sal * 0.2;
    }
    if (Number(salary)>530000){
        sal = Number(salary) - 530000;
        pts = 8000 + 22500 + 50000 + sal * 0.35;
    }
    
    if (Number(NbrOfChild)==1) {
        ipts.value = pts;
    }
    if (Number(NbrOfChild)==2) {
        pts = pts*0.05;
        ipts.value = pts;
    }
    if (Number(NbrOfChild)==3) {
        pts = pts*0.1;
        ipts.value = pts;
    }
    if (Number(NbrOfChild)==4) {
        pts = pts*0.15;
        ipts.value = pts;
    }
    if (Number(NbrOfChild)==5) {
        pts = pts*0.2;
        ipts.value = pts;
    }
    if (Number(NbrOfChild)>=6) {
        pts = pts*0.23;
        ipts.value = pts;
    }
    
    empass.value = Number(salary) * 0.02;
    regim.value = Number(salary) * 0.06;
    vps.value = Number(salary) * 0.02;
    netsalary.value =Number(salary) - (Number(salary) * 0.04 + Number(salary) * 0.06 + pts);

}

