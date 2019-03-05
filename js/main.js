function init() {
    display(1);
}


/*** High Utility Functions ***/
function display(id) {
    el("lTitle").classList.add('fade');
    
    var obj = data[id];
    el("lTitle").innerHTML = obj.lTitle;
    el("rTitle").innerHTML = obj.rTitle;

    el("lSummary").innerHTML = obj.lSummary;
    el("rSummary").innerHTML = obj.rSummary;
    
    el("lTitle").href = obj.lRef;
    el("rTitle").href = obj.rRef;

    el("lSubtitle").innerHTML = obj.lSubtitle;
    el("lDescr").innerHTML = obj.lDescr;
    el("lSubtitle").onclick = function() {
        display(obj.lLink);
    };

    el("mSubtitle").innerHTML = obj.mSubtitle;
    el("mDescr").innerHTML = obj.mDescr;
    el("mSubtitle").onclick = function() {
        display(obj.mLink);
    };    
    
    el("rSubtitle").innerHTML = obj.rSubtitle;
    el("rDescr").innerHTML = obj.rDescr;
    el("rSubtitle").onclick = function() {
        display(obj.rLink);
    };
    
    unfade(el("lTitle"));
    unfade(el("rTitle"));
    unfade(el("lSummary"));
    unfade(el("rSummary"));
    unfade(el("lSubtitle"));
    unfade(el("lDescr"));
    unfade(el("mSubtitle"));
    unfade(el("mDescr"));
    unfade(el("rSubtitle"));
    unfade(el("rDescr"));
}


/*** Low Utility Functions ***/
function el(str) {
    return document.getElementById(str);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}




init();