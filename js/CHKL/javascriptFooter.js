function getDetalleActividades(tienda,puesto){
		data = {
			tienda : tienda,
			puesto : puesto
		}
		//alert("<?=URL?>/Checklist/getActividadesDetalle");
		$.post(url+"/Checklist/getActividadesDetalle",data,function(e) {
	    	$('#divContenido').html(e);
	    });
}