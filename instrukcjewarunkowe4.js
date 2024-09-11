let ocena = 1;
let opisoceny = document.getElementById("opisoceny");

switch(ocena)
{
    case 1:
        opisoceny.innerHTML = `${ocena}<h1>niedostateczny</h1>`;
        break;
    case 2:
        opisoceny.innerHTML = `${ocena}<h1>dopuszczający</h1>`;
        break;
    case 3:
        opisoceny.innerHTML = `${ocena}<h1>dostateczny</h1>`;
        break;
    case 4:
        opisoceny.innerHTML = `${ocena}<h1>dobry</h1>`;
        break;
    case 5:
        opisoceny.innerHTML = `${ocena}<h1>bardzo dobry</h1>`;
        break;
    case 6:
        opisoceny.innerHTML = `${ocena}<h1>celujący</h1>`;
        break;
}