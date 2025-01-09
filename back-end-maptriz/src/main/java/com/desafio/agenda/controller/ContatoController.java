package com.desafio.agenda.controller;

import com.desafio.agenda.dto.ContatoDTO;
import com.desafio.agenda.model.Contato;
import com.desafio.agenda.service.ContatoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contatos")
public class ContatoController {

    private final ContatoService contatoService;

    public ContatoController(ContatoService contatoService) {
        this.contatoService = contatoService;
    }

    @PostMapping
    public ResponseEntity<Contato> criarContato(@Valid @RequestBody ContatoDTO contatoDTO) {
        Contato contato = contatoService.criarContato(contatoDTO);
        return ResponseEntity.ok(contato);
    }

    @GetMapping
    public ResponseEntity<List<Contato>> listarContatos() {
        return ResponseEntity.ok(contatoService.listarContatos());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerContato(@PathVariable Long id) {
        contatoService.removerContato(id);
        return ResponseEntity.noContent().build();
    }
}
