window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    widthObj = document.getElementById('txtwidth');
    heightObj = document.getElementById('tdheight');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalc').onclick = calcheight;
}
function resetInputs() {
    lengthObj.value = '';
    widthObj.value = '';
    heightObj.innerHTML = '';
}
function calcheight() {
    var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
    heightObj.innerHTML = '';
    if(isNaN(length) || isNaN(width)) {
        alert('Invalid length or width');
        return;
    }
    heightObj.innerHTML = length*Math.pow(width,2)/800;
    }