package com.desafio.agenda.service;

import com.desafio.agenda.dto.ContatoDTO;
import com.desafio.agenda.model.Contato;
import com.desafio.agenda.repository.ContatoRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ContatoService {

    private final ContatoRepository contatoRepository;

    public ContatoService(ContatoRepository contatoRepository) {
        this.contatoRepository = contatoRepository;
    }

    public Contato criarContato(ContatoDTO contatoDTO) {
        Contato contato = new Contato();
        contato.setNome(contatoDTO.getNome());
        contato.setCpf(contatoDTO.getCpf());
        contato.setCep(contatoDTO.getCep());
        contato.setTipoContato(contatoDTO.getTipoContato());

        Contato savedContato = contatoRepository.save(contato);

        // Notificação por e-mail (endpoint externo simulado)
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getForEntity("https://run.mocky.io/v3/c9ec2ca3-a7f5-41d0-8550-b859508f4948", String.class);

        return savedContato;
    }

    public List<Contato> listarContatos() {
        return contatoRepository.findAll();
    }

    public void removerContato(Long id) {
        contatoRepository.deleteById(id);
    }
}
