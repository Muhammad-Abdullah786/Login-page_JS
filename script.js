// everything teacher explained

var fatherNameNode = document.getElementById("fatherName");
var fullNameNode = document.getElementById("fullName");
var nickNameNode = document.getElementById("nickName");
var countryNode = document.getElementById("country");
var zipCodeNode = document.getElementById("zip");


function handleChangeCountry() {
    var countryName = countryNode.value
    var zipCode = ""
    if (countryName != "") {
        switch(countryName){
            case "pakistan": zipCode = "1234"
            break;
            case "india": zipCode = "56789" 
            break;
            case "palestine": zipCode = "0000" 
            break;
            default: zipCode = "000000"
            break
        }
        zipCodeNode.value = zipCode
    }
}

function handleSubmit(e){
    e.preventDefault();
    var formData ={
        fulName : fullNameNode.value,
        fathName : fatherNameNode.value,
        nickName : nickNameNode.value,
        zip : zipCodeNode.value,
        country : countryNode.value
    }
    if (formData.fathName === "" || formData.fulhName === "" || formData.fname === "") {
        alert("Please enter all required fields")
    }
    console.log("subbmissions", formData);
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
