function Submit()
{
    console.log("hello");
    let inputElement= document.getElementById("user-feedback");
    console.log(inputElement);
    alert(inputElement.value);
    if(inputElement.value>20)
    {
        alert("Thank you for submitting your feedback!");
    }
    else 
    {
        alert("Please give more detail.");
    }
}
