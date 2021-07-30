const btnPrincipal = $('#button-1');
const btnSecundario = $('#button-2');
const btnTerciario = $('#button-3');

const contPrincipal = $('#conteudo1');
const contSecundario = $('#conteudo2');
const contTerciario = $('#conteudo3');

const conteudo = $("main");

const lTela = window.innerWidth;

btnPrincipal.click(function principal(){
	contPrincipal.show();
	contSecundario.hide();
	contTerciario.hide();
	
	btnPrincipal.css({"border-bottom":"3px solid black", "background":"#D2dce1"});
	btnSecundario.css({"border-bottom":"0", "background":"white"});
	btnTerciario.css({"border-bottom":"0", "background":"white"});
	
	if (lTela < 430){
		conteudo.css({"height":"45vh"});
	} else{
		conteudo.css({"height":"55vh"})
	}
});

btnSecundario.click(function secundario(){
	contPrincipal.hide();
	contSecundario.show();
	contTerciario.hide();
	
	btnPrincipal.css({"border-bottom":"0", "background":"white"});
	btnSecundario.css({"border-bottom":"3px solid black", "background":"#D2dce1"});
	btnTerciario.css({"border-bottom":"0", "background":"white"});
	
	if (lTela < 430){
		conteudo.css({"height":"45vh"});
	} else{
		conteudo.css({"height":"55vh"})
	}
});

btnTerciario.click(function terciario(){
	contPrincipal.hide();
	contSecundario.hide();
	contTerciario.show();
	
	btnPrincipal.css({"border-bottom":"0", "background":"white"});
	btnSecundario.css({"border-bottom":"0", "background":"white"});
	btnTerciario.css({"border-bottom":"3px solid black", "background":"#D2dce1"});
	
	if (lTela < 430){
		conteudo.css({"height":"64vh"});
	} else if (lTela > 1023){
		conteudo.css({"height":"73vh"})
	} else {
		conteudo.css({"height":"66vh"})
	}
});