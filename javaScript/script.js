function limparClass(){
	var elementos = document.getElementsByClassName('destacar');

	for(var i=0; i < elementos.length; i++){
		elementos[i].className=" ";
	}

}


function calcularImc(event){

	event.preventDefault();
	limparClass();

	var altura = document.getElementById('alturaImc').value;
	var peso = document.getElementById('pesoImc').value;
	var resultado = document.getElementById('resultadoImc');

	altura = altura.replace(",",".");
	peso = peso.replace(",",".");
	parseFloat(altura);
	parseFloat(peso);

	var imc = peso/(altura * altura);

	if(imc > 0){
		resultado.innerHTML = "Resultado: " + imc.toFixed(2) + " Kg/m²";
	}else{
		resultado.innerHTML = "Resultado: 00.00 Kg/m²";
	}


	destacarImc(imc);


}

function calcularIac(event){
    
    event.preventDefault();
    limparClass();
    
	var altura = document.getElementById('alturaIac').value;
	var quadril = document.getElementById('quadrilIac').value;
	var resultado = document.getElementById('resultadoIac');
    var radios = document.getElementById("rbMasc").checked;  
	
	altura = altura.replace(",",".");
	quadril = quadril.replace(",",".");
	parseFloat(altura);
	parseFloat(quadril);
   
	var iac = (quadril/(altura * (Math.sqrt(altura))))-18;
    
    if(iac > 0){
		resultado.innerHTML = "Resultado: " + iac.toFixed(2) + "%";
		destacarIac(radios, iac);
    }else{
		resultado.innerHTML = "Resultado: 00.00%";
	}

            
	
}

function destacarImc(imc){
    
    if(imc<16){
        document.getElementById("imcMg").className = "destacar";
    }
    
    if(imc>=16 && imc<17){
        document.getElementById('imcMm').className = "destacar";
    }
    
    if(imc>=17 && imc<18.5){
        document.getElementById('imcMl').className = "destacar";
    }
    
    if(imc>=18.5 && imc<25){
        document.getElementById('imcS').className = "destacar";
    }
    
    if(imc>=25 && imc<30){
        document.getElementById('imcSp').className = "destacar";
    }
    
    if(imc>=30 && imc<35){
        document.getElementById('imcOg').className = "destacar";
    }
    
    if(imc>=35 && imc<40){
        document.getElementById('imcOs').className = "destacar";
    }
    
    if(imc>40){
        document.getElementById('imcOm').className = "destacar";
    }
}

function destacarIac(radios, iac){
    var tbHomem = document.getElementById('tbHomem');
    var tbMulher = document.getElementById('tbMulher'); 
    
    if(radios==false){
        tbHomem.style.display = "none";
        tbMulher.style.display = "table";
    
        if(iac<10){
            document.getElementById("tbM1a").className = "destacar";
        }
    
        if(iac>=10 && iac<16){
            document.getElementById('tbM2a').className = "destacar";
        }

        if(iac>=16 && iac<20){
            document.getElementById('tbM3a').className = "destacar";
        }

        if(iac>=20 && iac<26){
            document.getElementById('tbM4a').className = "destacar";
        }

        if(iac>=26 && iac<30){
            document.getElementById('tbM5a').className = "destacar";
        }
        
        if(iac>30){
            document.getElementById('tbM6a').className = "destacar";
        }
        
    }else{
        tbHomem.style.display = "table";
        tbMulher.style.display = "none";
        
        if(iac<6){
            document.getElementById("tbH1a").className = "destacar";
        }
    
        if(iac>=6 && iac<11){
            document.getElementById('tbH2a').className = "destacar";
        }

        if(iac>=11 && iac<15){
            document.getElementById('tbH3a').className = "destacar";
        }

        if(iac>=15 && iac<19){
            document.getElementById('tbH4a').className = "destacar";
        }

        if(iac>=19 && iac<24){
            document.getElementById('tbH5a').className = "destacar";
        }
        
        if(iac>24){
            document.getElementById('tbH6a').className = "destacar";
        }
        
    }
}

document.getElementById('btn_CalcImc').addEventListener('click', calcularImc);
document.getElementById('btn_CalcIac').addEventListener('click', calcularIac);