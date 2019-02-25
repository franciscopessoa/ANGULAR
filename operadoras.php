<?php

$array = array();
    
$array[] = array (
            'nome' => 'oi', 
            'codigo' => '31', 
            'categoria' => "fixo", 
            'preco' => 4
        ); 
$array[] = array (
            'nome' => 'tim', 
            'codigo' => '41', 
            'categoria' => "celular", 
            'preco' => 5
        ); 
$array[] = array (
            'nome' => 'vivo', 
            'codigo' => '15', 
            'categoria' => "fixo", 
            'preco' => 10
        ); 
$array[] = array (
            'nome' => 'claro', 
            'codigo' => '21', 
            'categoria' => "celular", 
            'preco' => 3
        ); 

echo json_encode($array);

?>