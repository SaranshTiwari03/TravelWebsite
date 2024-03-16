let  latestprojest = 0;
    function feapnext(){
    if (latestprojest === 0){
    document.getElementById('one').style.marginLeft = '-212px'
    document.getElementById('one').style.transition = 'margin-left 1s'
    latestprojest = 1;
}
    else if (latestprojest === 1){
    document.getElementById('one').style.marginLeft = '-414px'
    document.getElementById('one').style.transition = 'margin-left 1s'
    latestprojest = 2;
}
    else if (latestprojest === 2){
    document.getElementById('one').style.marginLeft = '-616px'
    document.getElementById('one').style.transition = 'margin-left 1s'
    latestprojest = 3;
}  else if (latestprojest === 3){
    document.getElementById('one').style.marginLeft = '10px'
    document.getElementById('one').style.transition = 'margin-left 1s'
    latestprojest = 0;
}
}
function feapprevious(){
    if (latestprojest === 3){
        document.getElementById('one').style.marginLeft = '-414px'
        document.getElementById('one').style.transition = 'margin-left 1s'
        latestprojest = 2;
    }
      else if (latestprojest === 2){
        document.getElementById('one').style.marginLeft = '-212px'
        document.getElementById('one').style.transition = 'margin-left 1s'
        latestprojest = 1;
    }
        else if (latestprojest === 1){
        document.getElementById('one').style.marginLeft = '10px'
        document.getElementById('one').style.transition = 'margin-left 1s'
        latestprojest = 0;
    }
        else if (latestprojest === 0){
        document.getElementById('one').style.marginLeft = '-616px'
        document.getElementById('one').style.transition = 'margin-left 1s'
        latestprojest=3;
    }
}

function nextcard(){
    if (latestprojest === 0){
    document.getElementById('two').style.marginLeft = '-212px'
    document.getElementById('two').style.transition = 'margin-left 1s'
    latestprojest = 1;
}
    else if (latestprojest === 1){
    document.getElementById('two').style.marginLeft = '-414px'
    document.getElementById('two').style.transition = 'margin-left 1s'
    latestprojest = 2;
}
    else if (latestprojest === 2){
    document.getElementById('two').style.marginLeft = '-616px'
    document.getElementById('two').style.transition = 'margin-left 1s'
    latestprojest = 3;
}  else if (latestprojest === 3){
    document.getElementById('two').style.marginLeft = '10px'
    document.getElementById('two').style.transition = 'margin-left 1s'
    latestprojest = 0;
}
}
function prevcard(){
    if (latestprojest === 3){
        document.getElementById('two').style.marginLeft = '-414px'
        document.getElementById('two').style.transition = 'margin-left 1s'
        latestprojest = 2;
    }
      else if (latestprojest === 2){
        document.getElementById('two').style.marginLeft = '-212px'
        document.getElementById('two').style.transition = 'margin-left 1s'
        latestprojest = 1;
    }
        else if (latestprojest === 1){
        document.getElementById('two').style.marginLeft = '10px'
        document.getElementById('two').style.transition = 'margin-left 1s'
        latestprojest = 0;
    }
        else if (latestprojest === 0){
        document.getElementById('two').style.marginLeft = '-616px'
        document.getElementById('two').style.transition = 'margin-left 1s'
        latestprojest=3;
    }
}