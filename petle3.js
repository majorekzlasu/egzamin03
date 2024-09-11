let dane = document.getElementById("dane");

let tekst = "<table>";
for (let i = 0; i <= 9; i++){
    tekst += '<tr><td>'+i+'</td><td>'+(i*i)+'</td></tr>';
}
tekst += "</table>";

dane.innerHTML = tekst;