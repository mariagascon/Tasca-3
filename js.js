//Esta función introduce comas entre los campos introducidos en el formulario separados por comas. Sustituye el espacio
//entre una palabra y la siguiente en comas. 

   function mostrar() {
        etiqueta = $('#etiquetas').val().split(" ");
        $("#tabla").empty();
        $.ajax({
            url: "https://api.flickr.com/services/feeds/photos_public.gne",
            type: 'GET',
            async: true,
            dataType: 'json',
            data: 'tags='+etiqueta+'&tagmode='+$("#select").val()+'&format=json&jsoncallback=?',
            success: buscar
        });
    return false;
}

    function buscar(data) {
        document.getElementById("tabla").innerHTML = "<tr><th>Título</th><th>Enlace</th><th>Foto</th><th>Fecha publicación</th><th>Autor</th><th>Etiquetas</th></tr>";
        $.each(data.items, function(i, item){
            $("#tabla").append("<tr><td>"+item.title+"</td>"+
            "<td>"+item.link+"</td>"+
            "<td><img src='"+item.media.m+"'></td>"+
            "<td>"+item.published+"</td>"+
            "<td>"+item.author+"</td>"+
            "<td>"+item.tags+"</td></tr>"
        )
        });
        
    }



