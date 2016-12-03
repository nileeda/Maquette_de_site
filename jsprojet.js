$('#btn_profil').hide();
$('#btn_notif').hide();
$('#notifications-panel').hide();
$('.btn_deconnexion').hide();
$('#enregistrer_info').hide();
$('.progress').hide();
$('#my_body2').hide();

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
	if(dd < 10)
		dd = '0' + mm;
	if(mm < 10)
		mm = '0' + mm;
today = yyyy + '-' + mm + '-' + dd;
$('.ddn').attr("max", today);

$('#btn_notif').click(function()
{
	$('#notifications-panel').toggle(1000);
	$('#btn_notif').html("<i class=\"glyphicon glyphicon-bell notification-icon\"></i>Notifications");
});

$('#connexion_btn').click(function()
{
	var pseudo = $('input[name=username]').val();
	var pass = $('input[name=password]').val();
	if (pseudo.length >= 3 && pass.length >= 6)
	{
		$('#btn_profil').show();
		$('#btn_notif').show();
		$('.btn_deconnexion').show();
		$('.btn_connexion').hide();
	}
	else
		alert('Le login ou le mot de passe est incorect');
});

$('#btn_profil').click(function()
{
	$('#my_body').hide();
	$('#my_body2').show();
});

$('#btn_home').click(function()
{
	$('#my_body').show();
	$('#my_body2').hide();
});

$('.btn_deconnexion').click(function()
{
	$('#btn_profil').hide();
	$('#btn_notif').hide();
	$('.btn_deconnexion').hide();
	$('.btn_connexion').show();
	$('#my_body').show();
	$('#my_body2').hide();
});

$("input[name=username]").keyup(function()
{
	var value = $('input[name=username]').val().toLowerCase();
	value = value.replace(/\s/, '');
	$(this).val(value);
});

$('#envoyer_btn').click(function()
{
	var user_mail = $('input[name=email]').val();
	var user_name = $('input[name=name]').val();
	var user_firstname = $('input[name=firstname]').val();
	var user_message = $('textarea[name=message]').val();
	var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	if(pattern.test(user_mail) == true && user_name != '' && user_firstname != '' && user_message != '')
	{
		$("input").prop("disabled", true);
		$("textarea").prop("disabled", true);
		alert('Message envoyé. Merci !');
	}
	else
		alert('Tous les champs doivent être complétés !');
});

$("input[name=email]").keyup(function()
{
	var value = $('input[name=email]').val();
	var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	if(pattern.test(value) == true)
	{
		$("input[name=email]").css("border-color", "green");
	}
	else
	{
		$("input[name=email]").css("border-color", "red");
	}
});

$('#btn_notif').click(function()
{
	$('#notifications-panel').toggle(1000);
	$('#btn_notif').html("<i class=\"glyphicon glyphicon-bell notification-icon\"></i>Notifications");
});

$("#modifier_info").click(function()
{
	$('#enregistrer_info').show();
	$('#modifier_info').hide();
	$('input').prop('disabled', false);

});

$("#enregistrer_info").click(function()
{
	var value_mail = $('input[name=mail]').val();
	var value_tel = $('input[name=telephone]').val();
	var value_nom = $('input[name=nom]').val();
	var value_prenom = $('input[name=prenom]').val();
	var value_adresse = $('input[name=adresse]').val();
	var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	var pattern2 = new RegExp(/[a-z A-Z-éèêëü]/i);
	if(pattern.test(value_mail) == true && pattern2.test(value_nom) == true && pattern2.test(value_prenom) == true && value_tel != '' && value_adresse != '')
	{
		alert("Modifications enregistrées");
		$('input').prop('disabled', true);
		$('#enregistrer_info').hide();
		$('#modifier_info').show();
	}
	else
		alert("Il y a une erreur quelque part... Recommencez.");
});

$("input[name=telephone]").keypress(function(e)
{
	var charCode = e.charCode;
	if (charCode < 48 || charCode > 57)
	{
		e.preventDefault();
	}
});

$("#enregistrer_bancaire").click(function()
{
	var value_code_banque = $('input[name=code_banque]').val();
	var value_code_guichet = $('input[name=code_guichet]').val();
	var value_num_compte = $('input[name=numero_compte]').val();
	var value_cle_rib = $('input[name=cle_rib]').val();
	var value_domiciliation = $('input[name=domiciliation]').val();
	var value_iban = $('input[name=iban]').val();
	var value_bic = $('input[name=bic]').val();
	var count = 0;

	$('#modal_bancaire_info').html('');
	if(value_code_banque != '' && value_code_banque.length == 5)
		count++;
	else
		$('#modal_bancaire_info').append("<font color=\"red\">Erreur dans le code banque</font><br>");

	if(value_code_guichet != '' && value_code_guichet.length == 5)
		count++;
	else
		$('#modal_bancaire_info').append("<font color=\"red\">Erreur dans le code guichet</font><br>");

	if(value_num_compte != '' && value_num_compte.length == 10)
		count++;
	else
		$('#modal_bancaire_info').append("<font color=\"red\">Erreur dans le numéro de compte</font><br>");

	if(value_cle_rib != '' && value_cle_rib.length == 2)
		count++;
	else
		$('#modal_bancaire_info').append("<font color=\"red\">Erreur dans la clé RIB</font><br>");

	if(value_domiciliation != '')
		count++;
	else
		$('#modal_bancaire_info').append("<font color=\"red\">Erreur dans la domiciliation</font><br>");

	if(value_iban != '' && value_iban.length == 27)
		count++;
	else
		$('#modal_bancaire_info').append("<font color=\"red\">Erreur dans l'IBAN</font><br>");

	if(value_bic && (value_bic.length == 8 || value_bic.length == 11))
		count++;
	else
		$('#modal_bancaire_info').append("<font color=\"red\">Erreur dans le code BIC</font><br>");

	if(count == 7)
	{
		$('#user_code_banque').text(value_code_banque);
		$('#user_code_guichet').text(value_code_guichet);
		$('#user_num_compte').text(value_num_compte);
		$('#user_cle_rib').text(value_cle_rib);
		$('#user_domiciliation').text(value_domiciliation);
		$('#user_iban').text(value_iban);
		$('#user_bic').text(value_bic);
		$('#myModal3').modal('hide');
		$('#info_enregitrement_bancaire').html("<font color=\"red\">Enregistrer !</font>");
	}
});

$("input[name=code_banque]").keypress(function(e)
{
	var charCode = e.charCode;
	if (charCode < 48 || charCode > 57)
	{
		e.preventDefault();
	}
});

$("input[name=code_guichet]").keypress(function(e)
{
	var charCode = e.charCode;
	if (charCode < 48 || charCode > 57)
	{
		e.preventDefault();
	}
});

$("input[name=numero_compte]").keypress(function(e)
{
	var charCode = e.charCode;
	if ((charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122))
	{
		e.preventDefault();
	}
});

$("input[name=cle_rib]").keypress(function(e)
{
	var charCode = e.charCode;
	if (charCode < 48 || charCode > 57)
	{
		e.preventDefault();
	}
});

$("input[name=domiciliation").keypress(function(e)
{
	var charCode = e.charCode;
	if ((charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) )
	{
		e.preventDefault();
	}
});

$("input[name=iban").keypress(function(e)
{
	var charCode = e.charCode;
	if ((charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) )
	{
		e.preventDefault();
	}
});

$("input[name=bic").keypress(function(e)
{
	var charCode = e.charCode;
	if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) )
	{
		e.preventDefault();
	}
});


$("#download_doc").click(function()
{
	$("#download_doc").hide();
	$('.progress1').show();
	var test = 0;
	while(test <= 100)
	{
		$("#progress11").delay(1000);
		$("#progress11").attr("aria-valuenow", test+"%").css('width', test+"%");	
		test++;
		if (test == 100)
		{
			setTimeout(function()
			{
				$("#progress11").html('Completed');			
			}, 1000);				
		}
	}

});

$("#download_doc2").click(function()
{
	$("#download_doc2").hide();
	$('.progress2').show();
	var test = 0;

	while(test <= 100)
	{
		$("#progress21").delay(1000);
		$("#progress21").attr("aria-valuenow", test+"%").css('width', test+"%");	
		test++;	
		if (test == 100)
		{
			setTimeout(function()
			{
				$("#progress21").html('Completed');			
			}, 1000);				
		}
	}
});

$("#download_doc3").click(function()
{
	$("#download_doc3").hide();
	$('.progress3').show();
	var test = 0;
	while(test != 100)
	{
		$("#progress31").delay(1000);
		$("#progress31").attr("aria-valuenow", test+"%").css('width', test+"%");	
		test++;
		if (test == 100)
		{
			setTimeout(function()
			{
				$("#progress31").html('Completed');			
			}, 1000);				
		}
	}
});

$(function() {
    $( ".table" ).on( "click", ".edit", function() {
    	$(this).removeClass('edit');
    	$(this).addClass('removeEdit');
    	$(this).text("Enregistrer");
    	$(this).parents('tr').find('input').prop('disabled', false);
	});
    
    $( ".table" ).on( "click", ".removeEdit", function() {
    	var pattern = new RegExp(/[a-z A-Z-éèêëü]/i);
    	var nom = $(this).parents('tr').find('input[name=nom_ad]').val();
    	var prenom =  $(this).parents('tr').find('input[name=prenom_ad]').val();

    	if(pattern.test(nom) == true && pattern.test(prenom) == true)
    	{
    		$(this).removeClass('removeEdit');
	    	$(this).addClass('edit');
	    	$(this).text("Modifier");
	    	$(this).parents('tr').find('input').prop('disabled', true);	
	    	$('#message').html("<font color=\"green\">Enregistré</font>");
    	}
    	else
    		$('#message').html("<font color=\"red\">Erreur. Les champs Nom et Prénom ne doivent comporter que des catactères alphabétiques et des -</font>");
	});

	$(".table").on( "click", ".suppr_line", function() {
		$(this).parents('tr').remove();
	});
});

$("#ajout_btn").click(function()
{
	$('#matable > tbody').append('<tr><td><input name="nom_ad" placeholder="Nom" class="form-control" type="text" disabled="disabled" /></td><td><input name="prenom_ad" placeholder="Prénom" class="form-control" type="text" disabled="disabled" /></td><td><input name="ddn_ad" placeholder="Date de naissance" class="form-control" id="ddn" type="date" disabled="disabled" /></td><td><input name="parente_ad" list="parente" type="text" class="form-control" disabled/><datalist id="parente"><option value="Mari"/><option value="Femme"/><option value="Enfant"/></datalist></td><td><input name="droits_ad" placeholder="Droits" value="1200" class="form-control" type="text" disabled="disabled" /></td><td><button type="button" id="modifier_tab" class="btn btn-success edit">Modifier</button> <button type="button" class="btn btn-danger suppr_line">Supprimer</button></td></tr>')
});






