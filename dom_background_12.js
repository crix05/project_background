let col_1 = document.getElementById("color1");
let col_2 = document.getElementById("color2");

col_1.addEventListener("input",() =>
{
    console.log(col_1.value);
    document.body.style.background = "linear-gradient(to right," + col_1.value + "," + col_2.value + ")";
})

col_2.addEventListener("input",() =>
{
    document.body.style.background = "linear-gradient(to right," + col_1.value + "," + col_2.value + ")";
})