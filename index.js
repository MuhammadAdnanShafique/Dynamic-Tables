let element = document.getElementById('printTables');
function a() {
    element.innerHTML =' '
    var input = document.getElementById('inNumber').value
    for (let index =1; index <11; index++) {
    element.innerHTML+= input+ " x " + index+ " = " + input*index + "<br>";}
    }


    let element2 = document.getElementById('printTables2');
    function b() {
        let number = document.getElementById('on').value
        element2.innerHTML =' '
        for (let index =1; index <11; index++) {
        element2.innerHTML+= number+ " x " + index + " = " + number*index + "<br>";}
        }


        let element1 = document.getElementById('printTables3');
        function ab() {
            var start = document.getElementById('startingNumber').value
            var end = document.getElementById('endingNumber').value
            var input = document.getElementById('inputNumber').value
            element1.innerHTML =' '
            for (let index =start; index <=end; index++) {
            element1.innerHTML+= input+ " x " + index+ " = " + input*index + "<br>";}
            }