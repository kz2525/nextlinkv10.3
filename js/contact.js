function validateForm(){var b=document.forms.myForm["name"].value;var a=document.forms.myForm["email"].value;var c=document.forms.myForm["subject"].value;var e=document.forms.myForm["comments"].value;document.getElementById("error-msg").style.opacity=0;document.getElementById("error-msg").innerHTML="";if(b==""||b==null){document.getElementById("error-msg").innerHTML="<div class='alert alert-warning error_message'>*Please enter a Name*</div>";fadeIn();return false}if(a==""||a==null){document.getElementById("error-msg").innerHTML="<div class='alert alert-warning error_message'>*Please enter a Email*</div>";fadeIn();return false}if(c==""||c==null){document.getElementById("error-msg").innerHTML="<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";fadeIn();return false}if(e==""||e==null){document.getElementById("error-msg").innerHTML="<div class='alert alert-warning error_message'>*Please enter a Comments*</div>";fadeIn();return false}var d=new XMLHttpRequest();d.onreadystatechange=function(){if(this.readyState==4&&this.status==200){document.getElementById("simple-msg").innerHTML=this.responseText;document.forms.myForm["name"].value="";document.forms.myForm["email"].value="";document.forms.myForm["subject"].value="";document.forms.myForm["comments"].value=""}};d.open("POST","php/contact.php",true);d.setRequestHeader("Content-type","application/x-www-form-urlencoded");d.send("name="+b+"&email="+a+"&subject="+c+"&comments="+e);return false}function fadeIn(){var c=document.getElementById("error-msg");var a=0;var b=setInterval(function(){if(a<1){a=a+0.5;c.style.opacity=a}else{clearInterval(b)}},200)}$(document).ready(function(){$("#contact_form").bootstrapValidator({feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"},fields:{first_name:{validators:{stringLength:{min:2},notEmpty:{message:"Please supply your first name"}}},last_name:{validators:{stringLength:{min:2},notEmpty:{message:"Please supply your last name"}}},email:{validators:{notEmpty:{message:"Please supply your email address"},emailAddress:{message:"Please supply a valid email address"}}},phone:{validators:{notEmpty:{message:"Please supply your phone number"},phone:{country:"US",message:"Please supply a vaild phone number with area code"}}},address:{validators:{stringLength:{min:8},notEmpty:{message:"Please supply your street address"}}},city:{validators:{stringLength:{min:4},notEmpty:{message:"Please supply your city"}}},state:{validators:{notEmpty:{message:"Please select your state"}}},zip:{validators:{notEmpty:{message:"Please supply your zip code"},zipCode:{country:"US",message:"Please supply a vaild zip code"}}},comment:{validators:{stringLength:{min:10,max:200,message:"Please enter at least 10 characters and no more than 200"},notEmpty:{message:"Please supply a description of your project"}}}}}).on("success.form.bv",function(c){$("#success_message").slideDown({opacity:"show"},"slow");$("#contact_form").data("bootstrapValidator").resetForm();c.preventDefault();var b=$(c.target);var a=b.data("bootstrapValidator");$.post(b.attr("action"),b.serialize(),function(d){console.log(d)},"json")})});