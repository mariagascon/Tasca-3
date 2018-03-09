
   function mostrar() { 
       //Esta función introduce comas entre los campos introducidos en el formulario separados por comas. Sustituye el espacio
       //entre una palabra y la siguiente en comas
        etiqueta = $('#etiquetas').val().split(" ");
        console.log(etiqueta);

       //Función básica de Ajax a jQuery
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
    //Esta función introduce cada uno de los resultados obtenidos en las columnas correspondientes que se han
    //vinculado al elemento tabla
    function buscar(data) {
        document.getElementById("tabla").innerHTML = "<tr><th class='encabezado'>TÍTULO</th><th class='encabezado2'>ENLACE</th><th class='encabezado3'>FOTOGRAFÍA</th><th class='encabezado4'>FECHA PUBLICACIÓN</th><th class='encabezado5'>AUTOR</th><th class='encabezado6'>ETIQUETAS</th></tr>";
        $.each(data.items, function(i, item){
            $("#tabla").append("<tr><td class='titulo'>"+(item.title).toUpperCase()+"</td>"+
            "<td>"+item.link+"</td>"+
            "<td><img src='"+item.media.m+"'></td>"+
            "<td>"+item.published+"</td>"+
            "<td>"+item.author+"</td>"+
            "<td>"+item.tags+"</td></tr>"
        )
        });
        
    }



