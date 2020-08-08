function open_modal(v){
    document.getElementById(v).className = "modal is-active is-clipped";
    console.log("hello");
}

function close_modal(v){
    document.getElementById(v).className = "modal";
    console.log("bye");
}