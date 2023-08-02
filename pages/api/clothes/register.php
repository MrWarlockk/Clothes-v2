<?php

session_start();
require_once "Z_requirements/db_connect.php";
require_once '../vendor/autoload.php';
use \Firebase\JWT\JWT;
$returns = array();

  // If connection to the server has been established
if(isset($_POST['email_reg']))
{
  $username_reg = $_POST['username_reg'];
  $email_reg = $_POST['email_reg'];
  $password_reg = $_POST['password_reg'];
  $password_reg2 = $_POST['password_reg2'];
  $success_reg = true;
  $wrong_email = false;

  $check_login = "select userlogin from users where userlogin='$username_reg'";
  $check_login_db = $login_db->query($check_login);
  if($check_login_db->rowcount() > 0)
  {
    $returns['status'] = false;
    $returns['message'] = "Username taken";
    $success_reg = false;
    $login_db = null;
  }
  if(ctype_alnum($username_reg) == false)
  {
    $returns['status'] = false;
    $returns['message'] = "Username contains something else than letters and numbers";
    $success_reg = false;
  }
  if((strlen($username_reg)<3 || strlen($username_reg)>20))
  {
    $returns['status'] = false;
    $returns['message'] = "Username less than 3, more than 20 characters";
    $success_reg = false;
  }

  $emailtest = filter_var($email_reg, FILTER_SANITIZE_EMAIL);
  if($emailtest != $email_reg || (filter_var($emailtest, FILTER_VALIDATE_EMAIL) == false))
  {
    $returns['status'] = false;
    $returns['message'] = "Invalid email";
    $success_reg = false;
  } 
  if($password_reg != $password_reg2)
  {
    $returns['status'] = false;
    $returns['message'] = "Passwords don't match";
    $success_reg = false;
  }
  if(ctype_alnum($password_reg) == false)
  {
    $returns['status'] = false;
    $returns['message'] = "Password contains something else than letters and numbers";
    $success_reg = false;
  }
  if((strlen($password_reg)<8 || strlen($password_reg)>20))
  {
    $returns['status'] = false;
    $returns['message'] = "Password is less than 8, more than 20 characters";
    $success_reg = false;
  }

  

  if($success_reg){

    $password_hashed = password_hash($password_reg, PASSWORD_DEFAULT);
    $login_db->query("INSERT INTO users VALUES (NULL, '$username_reg', '$password_hashed')");
    $returns['status'] = true;
    $returns['message'] = "Registered successfully";
    $returns['user'] = array();
    $returns['user'][0] = $username_reg;
    $login_clothes = $login_db->query("select * from users where userlogin='$username_reg'");
    $row_db = $login_clothes->fetch(PDO::FETCH_ASSOC);
    $returns['user'][1] = $row_db['userid'];
    $login_db = null;
/*
    $payload=[
        'iss'=>'localhost',
        'aud'=>'localhost',
        'exp'=>time()+1000,
        'data'=>[
            'name'=> $username_reg,
        ],
    ];
    
    */
    $payload=['name'=> $username_reg];
    $secret_key="very secret";
    $jwt = JWT::encode($payload,$secret_key, 'HS256');

    $returns['data'][0] = $jwt;
  }
  }
  echo json_encode($returns);
?>
