

function showAge(){
  const inputElement = document.getElementById("date").value;
  const theirDate = new Date(inputElement);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  if (inputElement <= 0 || theirDate > currentDate ){
    alert("Enter a valid date");
  }
  else{
    const ageValue = currentYear - theirDate.getFullYear();
    console.log(ageValue);
    document.querySelector(".age").innerHTML = ageValue;
  }
}
