package com.fatec.exemplo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fatec.exemplo.model.Cliente;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;






@RestController
public class Controle {
    @GetMapping("/alo-mundo")
    public String alomundo() {
        return "Alô, Mundo!";
    }
    
    @GetMapping("/cliente-teste")
    public Cliente getClienteTeste() {
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
    
    @PostMapping("/clientes")
    public Cliente cadastrarCliente(@RequestBody Cliente cliente) {
        List<Cliente> lista = new ArrayList<>();
        lista.add(new Cliente (1, cliente.getNome(), cliente.getEndereco()));
        return lista.get(0);
    }

    @PutMapping("/clientes/{id}/update")
    public Cliente atualizaCliente(@RequestBody Cliente cliente, @PathVariable("id") int id) {
        Cliente clienteAtualizado = new Cliente(id, cliente.getNome(), cliente.getEndereco());
        return clienteAtualizado;
    }
    
    @DeleteMapping("/cliente/{id}/delete")
    public String deleteCliente(@PathVariable ("id") int id) {
        return "Cliente id: " + id + " excluído!";
    }

    @GetMapping("/cliente")
    public ResponseEntity<Cliente> getCliente() {
        Cliente cliente = new Cliente (1, "José", "Rua Bresser");
        // return ResponseEntity.ok(cliente);
        return new ResponseEntity<>(cliente, HttpStatus.OK);
    }
    
}