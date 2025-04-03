


function validaFaleConosco() {
    if (document.frmfaleconosco.txtnome.value == "") {
        alert("Preencha o Campo Nome.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    } else if (document.frmfaleconosco.txtfone.value == "") {
        alert("Preencha o Campo Telefone.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    } else if (document.frmfaleconosco.txtemail.value == "") {
        alert("Preencha seu email");
        document.frmfaleconosco.txtemail.focus();
        return false;
    } else if (document.frmfaleconosco.cpf.value == "") {
        alert("Preencha seu cpf");
        document.frmfaleconosco.cpf.focus();
        return false;
    } else {
        var sexoSelecionado = document.getElementsByName("sexo")
        var selecionado = false;

        for(var i = 0; i < sexoSelecionado.length; i++){
            if(sexoSelecionado[i].checked){
                selecionado = true;
                break;
            }

        }

        
        if(!selecionado){
            alert("Selecione o sexo");
            return false;
        }
    }
    return true;
}