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
    // if all field are empty

    // if (formData.fatherName 
    if (formData.fatherName === "") {
        // alert("Please enter all required fields")
        let span = document.createElement("span")
        span.innerHTML = "apne baap ka naam daaal!!"
        span.style.color = "red"
        // small font size
        span.style.fontSize = "13px"
        fatherNameNode.parentNode.appendChild(span)
        // now to remove span
        setTimeout(function(){
            span.remove()
        }, 3000)
    }
    else if (formData.firstName === "") {
        // alert("Please enter all required fields")
        let span = document.createElement("span")
        span.innerHTML = "Please enter your first name"
        span.style.color = "red"
        // small font size
        span.style.fontSize = "13px"
        firstNameNode.parentNode.appendChild(span)
        // now to remove span
        setTimeout(function(){
            span.remove()
        }, 3000)
    }
    else if (formData.lastName === "") {
        // alert("Please enter all required fields")
        let span = document.createElement("span")
        span.innerHTML = "Please enter your last name"
        span.style.color = "red"
        // small font size
        span.style.fontSize = "13px"
        lastNameNode.parentNode.appendChild(span)
        // now to remove span
        setTimeout(function(){
            span.remove()
        }, 3000)
    }
    else if (formData.email === "" ){
        let span = document.createElement("span")
        span.innerHTML = "Please enter Yor Email Address"
        span.style.color = "red"
        span.style.fontSize = "13px"
        inputEmail4Node.parentNode.appendChild(span)
        setTimeout(function(){
            span.remove()

        }, 3000)
    }
    else if (formData.password === "" ){
        let span = document.createElement("span")
        span.innerHTML = "Please enter Yor Password"
        span.style.color = "red"
        span.style.fontSize = "13px"
        inputPassword4Node.parentNode.appendChild(span)
        setTimeout(function(){
            span.remove()
            
        }, 3000)
    
    }
    else if (formData.address1 === "" ){
        let span = document.createElement("span")
        span.innerHTML = "We need to know your hometowm or block NO"
        span.style.color = "red"
        span.style.fontSize = "13px"
        inputAddressNode.parentNode.appendChild(span)
        setTimeout(function(){
            span.remove()
            
        }, 3000)
    }
    else if (formData.address2 === "" ){
        let span = document.createElement("span")
        span.innerHTML = "Please enter Yor Address like floor or apartment"
        span.style.color = "red"
        span.style.fontSize = "13px"
        inputAddress2Node.parentNode.appendChild(span)
        setTimeout()
    }
    else if (formData.zip === "" ){
        let span = document.createElement("span")
        span.innerHTML = "zip code are necessry"
        span.style.color = "red"
        span.style.fontSize = "13px"
        inputZipNode.parentNode.appendChild(span)
        setTimeout(function(){
            span.remove()
            
        }, 3000)

    }
    console.log("subbmissions", formData );
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

