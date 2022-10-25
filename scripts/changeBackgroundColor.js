function rgb(r,g,b) {
    return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
}

$(document).ready(function () {
  
    $("#setBtnID").click(function () {
        var R = $("#R").val();
        var G = $("#G").val();
        var B = $("#B").val();

        intR = parseInt(R);
        intG = parseInt(G);
        intB = parseInt(B);

        document.body.style.backgroundColor = rgb(R,G,B);
    });
});