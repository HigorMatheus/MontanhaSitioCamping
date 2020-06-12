<?php
require_once('src/PHPMailer.php');
require_once('src/SMTP.php');
require_once('src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$name = $_POST['name'];
$sobrenome = $_POST['sobrenome'];
$email = $_POST['email'];
$checkin  = $_POST['checkin'];
$checkout  = $_POST['checkout'];
$telefone = $_POST['telefone'];

$mail = new PHPMailer(true);

try {
	$mail->SMTPDebug = SMTP::DEBUG_SERVER;
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'meuemail@gmail.com';
	$mail->Password = 'senha';
	$mail->Port = 587;

	$mail->setFrom('meuemail@gmail.com');
	$mail->addAddress('enviandopara@gmail.com');
	$mail->addAddress('endereco2@provedor.com.br');

	$mail->isHTML(true);
	$mail->Subject = 'Reserva pelo site ';
    $mail->Body = 'Chegou o email teste do <strong>Canal TI</strong>
    <h3>Contato pelo site montanha sitio </h3>;
    Nome: '.$name. ';
    Sobrenome:'. $sobrenome .'<br/>
    Email:'. $email .'<br/>
    Entrada:'. $checkin .'<br/>
    Saida :'. $checkout .'<br/>
    Telefone:'. $telefone .';
    ';
	$mail->AltBody = 'Chegou o email teste do Canal TI';

	if($mail->send()) {
		echo 'Email enviado com sucesso';
	} else {
		echo 'Email nao enviado';
	}
} catch (Exception $e) {
	echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
}