function myFunction() {
    let firstName = document.getElementById("firstName").value;
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;

    if(firstName.length === 0  || name.length === 0 || city.length === 0 ){
        alert("please fill in your details");
    }
    else{
        alert("hello! "+firstName+" "+name+" from "+city+".")
    }
}