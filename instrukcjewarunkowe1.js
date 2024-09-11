let liczba = 21;
let opis = document.getElementById("opis");

if (liczba > 0)
{
    opis.innerHTML = `<h1>${liczba} - Liczba większa od zera.</h1>`;
}
else
{
    opis.innerHTML = `<h1>${liczba} - Zero lub liczba ujemna.</h1>`;
}