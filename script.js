
    
function validaFaleConosco() {
    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome Corretamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }
    var fone = document.frmfaleconosco.txtfone.value;
    var expRegFone = new RegExp("^[0-9]{2}[0-9]{4,5}[0-9]{4}$");
    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone Corretamente.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    } else if (document.frmfaleconosco.txtemail.value == "") {
        alert("Preencha seu email");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }
    var cpf = document.frmfaleconosco.cpf.value.trim();
    var expCpf = new RegExp("^[0-9]{11}$");
    if (cpf == "") {
        alert("Preencha o campo CPF.");
        document.frmfaleconosco.cpf.focus();
        return false;
    }

    if (!expCpf.test(cpf)) {
        alert("Preencha o campo CPF corretamente.");
        document.frmfaleconosco.cpf.focus();
        return false;

    } else {
        var sexoSelecionado = document.getElementsByName("sexo")
        var selecionado = false;

        for (var i = 0; i < sexoSelecionado.length; i++) {
            if (sexoSelecionado[i].checked) {
                selecionado = true;
                break;
            }
        }

        if (!selecionado) {
            alert("Selecione o sexo");
            return false;
        }

       if(!document.frmfaleconosco.checkbox1.checked){
            alert("Você precisa marcar a opção para participar do clube");
            return false;
       }

    }
    return true;


}

