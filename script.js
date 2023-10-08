// everything teacher explained

var fatherNameNode = document.getElementById("fatherName");
var firstNameNode = document.getElementById("firstName");
var lastNameNode = document.getElementById("lastName");
var inputEmail4Node = document.getElementById("inputEmail4");
var inputPassword4Node = document.getElementById("inputPassword4");
// var inputCityNode = document.getElementById("inputCity"); // comming soon
var inputAddressNode = document.getElementById("inputAddress");
var inputAddress2Node = document.getElementById("inputAddress2");
var zipCodeNode = document.getElementById("zip");
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
        zip : zipCodeNode.value,
        country : countryNode.value,
    }
    if (formData.fathName === "" || formData.fulhName === "" || formData.fname === "") {
        alert("Please enter all required fields")
    }
    console.log("subbmissions", formData);
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
        zipCodeNode.value = zipCode
    }
}


// function handleChangeCountry() {
//     var countryName = countryNode.value;
//     var zipCode = ""; // Corrected variable name to zipCode instead of zipCodeNode
//     if (countryName != "") { // Corrected variable name to countryName instead of countryNode
//         switch (countryName) { // Corrected variable name to countryName instead of countryNode
//             case "pakistan":
//                 zipCode = "1234";
//                 break;
//             case "india":
//                 zipCode = "56789";
//                 break;
//             case "palestine":
//                 zipCode = "0000";
//                 break;
//             default:
//                 zipCode = "000000";
//                 break;
//         }
//     }
//     zipCodeNode.value = zipCode; // Assign the zip code to the input element
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     var formData = {
//         fullName: fullNameNode.value, // Corrected variable name to fullNameNode
//         fatherName: fatherNameNode.value, // Corrected variable name to fatherNameNode
//         nickName: nickNameNode.value, // Corrected variable name to nickNameNode
//         country: countryNode.value,
//         zip: zipCodeNode.value // Corrected variable name to zipCodeNode
//     }
//     if (formData.fatherName === "" || formData.fullName === "" || formData.nickName === "") {
//         alert("Please enter all required fields");
//     } else {
//         console.log("submissions", formData);
//     }
// }

// Attach event listeners to the form elements
countryNode.addEventListener("change", handleChangeCountry);
document.querySelector("form").addEventListener("submit", handleSubmit);
