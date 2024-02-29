package com.fatec.exemplo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fatec.exemplo.model.Cliente;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class Controle {
    @GetMapping("/alo-mundo")
    public String alomundo() {
        return "Alô, Mundo!";
    }
    
    @GetMapping("/cliente")
    public Cliente getCliente() {
        return new Cliente(1, "José", "Rua Frei João");
    }

    @GetMapping("/clientes")
    public List<Cliente> getAll() {
        List<Cliente> lista = new ArrayList<>();
        lista.add(new Cliente (1, "José", "Rua Frei João"));
        lista.add(new Cliente(2, "Pedro", "Avenida Paulista"));
        lista.add(new Cliente(3, "Paulo", "Rua Vergueiro"));
        return lista;
    }

    @GetMapping("/cliente/{id}")
    public Cliente getClientePorId(@PathVariable ("id") int clienteID) {
        return new Cliente(clienteID, "Souza", "Avenida. Aguia de Haia");
    }
    
    
    
}
