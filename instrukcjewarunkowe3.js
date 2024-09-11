let liczba1 = 21;
let opis2 = document.getElementById("opis");

if (liczba1 > 0)
{
    opis2.innerHTML = `<h1>${liczba1} - Liczba większa od zera.</h1>`;
}
else if (liczba1 == 0)
{
    opis2.innerHTML = `<h1>${liczba1} - Zero</h1>`;
}
else
{
    opis2.innerHTML = `<h1>${liczba1} - Liczba ujemna.</h1>`;
}