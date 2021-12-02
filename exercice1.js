let table =[];
let resultat = document.getElementById('btn')
let coucou = document.getElementById('cc');


resultat.addEventListener('click', function () {
    let input = document.getElementById('input').value;
    let newItem = table.push(input);
    console.log(resultat);
    console.log(newItem);
        if (table.length<=10){
            console.log("ok")
        }
        let div =  document.createElement('div');
        const randomTable = random(table);
        div.innerHTML= input.slice('entrer au moins 10 valeurs');
        div.innerHTML = randomTable;
        document.body.appendChild(div)
    document.body.appendChild(div);

})


function random(tab){
    let random = Math.floor(Math.random() *table.length);
    return tab[random];
}