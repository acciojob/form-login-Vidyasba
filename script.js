
let formref= document.getElementById("form1")
function getFormvalue() {
    //Write your code here
	// const fname=document.getElementByTag("input")[0];
	const fname=formref["fname"].value;
	// const lname=document.getElementBytag("input")[1];
	const lname=formref["lname"].value;
	alert(fname +" "+ lname);
}
