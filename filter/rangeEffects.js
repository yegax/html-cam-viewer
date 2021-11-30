

function set(e, f){
    //  Target the image ID (img_prev)          (Filter)
    document.getElementById('videoElement').style["webkitFilter"] = f+"("+e.value+")";
    document.getElementById('bright-slider'+f).innerHTML="("+e.value+")";



    }

