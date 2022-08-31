function Submit()
{
    console.log("hello");
    let inputElement= document.getElementById("user-feedback");
    console.log(inputElement);
    if(inputElement.value.length>20)
    {
        alert("Thank you for submitting your feedback!");
    }
    else 
    {
        alert("Please give more detail so we know exactly what you want to see in your next quiz :)");
    }
}
