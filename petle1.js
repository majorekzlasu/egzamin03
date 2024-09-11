let div = document.getElementById("wynik");
let kod = "";

for (let i=1;i<=100;i++)
{
    kod = kod + `${i},`;
}

div.innerHTML = kod;