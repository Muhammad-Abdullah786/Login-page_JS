// everything teacher explained

var fatherNameNode = document.getElementById("fatherName");
var firstNameNode = document.getElementById("firstName");
var lastNameNode = document.getElementById("lastName");
var inputEmail4Node = document.getElementById("inputEmail4");
var inputPassword4Node = document.getElementById("inputPassword4");
// var inputCityNode = document.getElementById("inputCity"); // comming soon
var inputAddressNode = document.getElementById("inputAddress");
var inputAddress2Node = document.getElementById("inputAddress2");
var inputZipNode = document.getElementById("inputZip");
var inputCountryNode = document.getElementById("inputCountry");

// display error message 
function displayErrorMessage(whichNode , error){
    let span = document.createElement("span")
    span.innerHTML = error
    span.style.color = "red"
    // small font size
    span.style.fontSize = "13px"
    whichNode.parentNode.appendChild(span)
    // now to remove span
    setTimeout(function(){
        span.remove()
    }, 3000)
}
function handleSubmit(e){
    e.preventDefault();
    var formData ={
        firstName : firstNameNode.value,
        lastName : lastNameNode.value,
        fatherName : fatherNameNode.value,
        email : inputEmail4Node.value,
        password : inputPassword4Node.value,
        address1 : inputAddressNode.value,
        address2 : inputAddress2Node.value,
        zip : inputZipNode.value,
        country : inputCountryNode.value,
    }
        
    if (formData.fatherName === "") {
        displayErrorMessage(fatherNameNode , "Please enter your father name")
    }
    if (formData.firstName === "") {
        displayErrorMessage(firstNameNode , "Please enter your first name")
    }
    if (formData.lastName === "") {
       displayErrorMessage(lastNameNode , "Please enter your last name")
    }
    if (formData.email === "" ){
       displayErrorMessage(inputEmail4Node , "Please enter your email")
    }
    if (formData.password === "" ){
        displayErrorMessage(inputPassword4Node , "Please enter your password")
    }
    if (formData.address1 === "" ){
       displayErrorMessage(inputAddressNode , "Please enter your address like Block Number" )
    }
    if (formData.address2 === "" ){
        displayErrorMessage(inputAddress2Node , "Please enter your address like apartment Number" )
    }
    if (formData.zip === "" ){
        displayErrorMessage(inputZipNode , "Please enter your zip address it's needed" )
    }
    if (formData.country === "Choose..." ){
        displayErrorMessage(inputCountryNode , "Please chose your country name")
    }
    // if all are empty
    if (formData.address1 === "" && formData.address2 === "" && formData.country === "" &&formData.email === "" &&formData.fatherName === "" &&formData.firstName === "" &&formData.lastName === "" &&formData.password === "" &&formData.zip === "") {
        alert("please enter all required field")
        return;
    }
    console.log("form Data ---->", formData );
}

///          THIS FUNCTION PUT ZIP CODE WHEN YOU CHOSE A COUNTRY

function handleChangeCountry() {
    var countryName = inputCountryNode.value
    var zipCode = ""
    if (countryName != "") {
        switch(countryName){
            case "pakistan": zipCode = "1234"
            break;
            case "india": zipCode = "56789" 
            break;
            case "palestine": zipCode = "0000" 
            break;
            case "UK": zipCode = "0111" 
            break;
            case "UAE": zipCode = "00022220" 
            break;
            case "isreal": zipCode = "0022" 
            break;
            case "Brazil": zipCode = "000022" 
            break;
            case "poland": zipCode = "0535000" 
            break;
            default: zipCode = "XXXXXX"
            break
        }
        inputZipNode.value = zipCode;
    }
}

