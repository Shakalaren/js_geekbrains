// Так как во время выполнения данного задания, возникли большие сложности, пришлось искать инфомацию в огроммных
// количествах. К сожалению, данное задание было сделано с использование интернета, а не самостоятельно, как в прошлые
// разы
function draw(){
    var table = document.createElement('table');
    var flag = true;

    var lettersDOM = document.createElement('tr');
    var letters = [' ','A','B','C','D','E','F','G','H'];

    //генерим ячейки
    for(var i = 0; i<8; i++){
        var tr = document.createElement('tr');

        //создаем ячейку для цифр
        var cell = document.createElement('td');
        cell.style.width='50px';
        cell.style.height='50px';
        cell.innerHTML=8-i;
        cell.style.paddingLeft = '500px'
        tr.appendChild(cell);

        for(var j=0; j<8; j++){

            if(j==0)
                flag=!flag;

            var td = document.createElement('td');

            td.style.width='50px';
            td.style.height='50px';
            if(flag){
                td.style.background='black';
            }else
                td.style.background='white';

            tr.appendChild(td);
            flag=!flag;
        }
        table.appendChild(tr);
    }

    //генерим буквы
    for(var k = 0; k<9; k++){

        var td = document.createElement('td');
        td.style.width='50px';
        td.style.height='50px';
        td.style.background='white';
        td.style.paddingLeft = '40px'
        td.innerHTML=letters[k];

        lettersDOM.appendChild(td);

    }
    table.appendChild(lettersDOM);

    document.body.appendChild(table);
}

draw();