$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval:2000
    });

    /* Eventos */
    $("#contacto").on("show.bs.modal", function(e){
        console.log("El modal se está mostrando");
    
        $("#contactoBtn").removeClass("btn-outline-success");
        $("#contactoBtn").addClass("btn-outline-danger");
        $("#contactoBtn").prop("disabled",true);
    });
    $("#contacto").on("shown.bs.modal", function(e){
        console.log("El modal se mostró");
    });
    $("#contacto").on("hiden.bs.modal", function(e){
        console.log("El modal se oculta");
    });
    $("#contacto").on("hidden.bs.modal", function(e){
        console.log("El modal se ocultó");
        $("#contactoBtn").removeClass("btn-outline-danger");
        $("#contactoBtn").addClass("btn-outline-success");
        $("#contactoBtn").prop("disabled",false);
    })
})