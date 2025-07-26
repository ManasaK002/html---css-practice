function calculateAge() {
    let da = new Date(document.getElementById("da").value);
    let currentDate = new Date(document.getElementById("current").value);

    if (!da || !currentDate || da >= currentDate) {
        document.getElementById("demo").innerHTML = "Please enter a valid date range!";
        return;
    }

    let ageYears = currentDate.getFullYear() - da.getFullYear();
    let ageMonths = currentDate.getMonth() - da.getMonth();
    let ageDays = currentDate.getDate() - da.getDate();

    if (ageDays < 0) {
        ageMonths--;
        let prevmo = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        ageDays += prevmo;
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("demo").innerHTML = 
        Your age is <b>${ageYears} years, ${ageMonths} months, and ${ageDays} days</b>.;
}