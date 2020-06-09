<?php
 
//  https://www.youtube.com/watch?v=Af0X_pEt7AY

    if(isset($_POST['email'] && !empty($_POST['email']))){

        $name = $_POST['name'];
        $sobrenome = $_POST['sobrenome'];
        $email = $_POST['email'];
        $checkin  = $_POST['checkin'];
        $checkout  = $_POST['checkout'];
        $telefone = $_POST['telefone'];
        
        echo $name;
        echo $sobrenome;
        echo $email;
        echo $checkin;
        echo $checkout;
        echo $telefone;
        $para = "meuemail@gmail.com";
        $asunto = "Contato - Locação do Sitio";
        $corpoemail =  "Nome: " .$name. "\r\n" +
                        "Email: " .$email."\r\n" +
                        "telefone: ".$telefone;
        $header = "From: meu email@gmail.com"."\r\n"
                    ."Reply-To:".$email. "\r\n"
                    ."X=Mailer:PHP/".phpversion();
        
        if(maill($para,$asunto,$corpoemail,$header)){
            echo("email enviado com sucesso");
        }else{
            echo("nao foi posivel enviar o email");
        }
    }

?>