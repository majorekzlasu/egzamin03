let div1 = document.getElementById("wynik");
let kod1 = "";

for (let i=1;i<=100;i++)
{
    kod1 += `${i},`;
}

div1.innerHTML = kod1;