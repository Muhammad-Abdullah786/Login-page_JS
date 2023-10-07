// everything teacher explained

var fatherNameNode = document.getElementById("fatherName");
var fullNameNode = document.getElementById("fullname");
var nickNameNode = document.getElementById("nickname");
var countryNode = document.getElementById("country");
var zipCodeNode = document.getElementById("zip");


function handleChangeCountry() {
    var countryName = countryNode.value
    var zipCodeNode = ""
    if (countryNode != "") {
        switch(countryNode){
            case "pakistan": zipCodeNode = "1234"
            break;
            case "india": zipCodeNode = "56789" 
            break;
            case "palestine": zipCodeNode = "0000" 
            break;
            default: zipCodeNode = "000000"
            break
        }
        zipCodeNode.value = zipCodeNode
    }
}







function handelSubmit(e){
    e.preventDefault();
    var formData ={
        fulName : fname.value,
        fathName : fname.value,
        fname : fname.value,
    }
    if (formData.fathName === "" || formData.fulhName === "" || formData.fname === "") {
        alert("Please enter all required fields")
    }
    console.log("subbmissions", formData);
}