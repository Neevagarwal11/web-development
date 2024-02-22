function formvalidation(){
    const fname = document.forms["contact-form.name"]["name"].value;
    const email = document.contact-form.email.value;
    const no = document.contact-form.phno.value;

    if(fname==null || fname.length<8){
        alert("Name can't be Empty");
        return false;
    }
    else if(email == null){
        alert("Enter a valid email")
        return false
    }
    else if (no==null || no.length<10){
        alert("Enter a valid Phone Number")
        return false
    }
}
