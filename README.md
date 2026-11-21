# TSI-MLW — Página do curso atualizada a partir do IFSP Birigui

Redesign acadêmico e responsivo sobre o **Curso Superior de Tecnologia em Sistemas para Internet** do **Instituto Federal de São Paulo — Campus Birigui**.

> **Aviso:** projeto demonstrativo acadêmico, **não oficial**. Os dados apresentados foram comparados com a [página oficial do curso](https://bri.ifsp.edu.br/index.php/cursos-superiores/tecnologia-em-sistemas-para-internet), consultada em **21 de novembro de 2026**. A instituição pode alterar informações sem aviso. A lista de documentos mantém links diretos do acervo anterior; nem todos puderam ser testados. Novos itens documentais direcionam à página oficial que os relaciona.

## Informações institucionais

- **Coordenador:** Prof. Me. Cássio Stersi dos Santos Neto.
- **Curso:** Tecnologia em Sistemas para Internet (graduação tecnológica).
- **Pré-requisito:** ensino médio completo ou equivalente.
- **Duração:** 3 anos (6 semestres).
- **Carga horária:** 2.100 horas.
- **Oferta:** 40 vagas anuais.
- **Funcionamento:** segunda a sexta à noite; sábado durante o dia.
- **Ingresso:** SiSU/Enem, conforme informado pelo IFSP.
- **Contato oficial do curso:** (18) 3643-1036.
- **Documentação:** PPC e estrutura curricular a partir de 2023, versões anteriores, resolução de reformulação 292/2023, equivalência de matrizes, regulamento de TCC, estágio não obrigatório, NDE, Colegiado, CPA e gestão.

**Nota de consistência:** a página específica do TSI informa **6 semestres**, enquanto outra listagem geral do campus apresenta outra duração; este projeto adota os **6 semestres da página oficial do curso indicada pelo usuário**.

## O que foi atualizado

- Corrigidos coordenação e contatos conforme o site oficial.
- Conferidas as **21 pessoas docentes** e suas titulações na lista institucional.
- Removidos endereços de e-mail docentes não verificáveis: o portal oficial os oculta quando acessado sem JavaScript.
- Atualizada a composição de NDE e Colegiado conforme a lista publicada na página do curso, incluindo representantes de estudantes e técnicos-administrativos.
- Atualizadas informações de ingresso, reformulação do currículo e materiais acadêmicos listados oficialmente.
- Acrescentadas referências documentais faltantes, com acesso pela página oficial quando o link direto não estava verificável.
- **Removida completamente a seção de horários de aula**, suas abas, tabela, links internos, CSS e JavaScript relacionados, pois os horários variam conforme o período letivo.
- Preservado o layout responsivo e os filtros de docentes/documentos.

## Tecnologias

HTML5, CSS3 e JavaScript puro. Não há framework ou dependência JavaScript. Há opção de Google Fonts com fontes substitutas locais.

## Como executar

Abra `index.html` diretamente no navegador. Opcionalmente, execute `python -m http.server 5500` na pasta do projeto e acesse `http://localhost:5500`.

## GitHub Pages

Envie `index.html`, `styles/`, `scripts/` e `assets/` para a raiz do repositório e, no GitHub, configure **Settings → Pages → Deploy from a branch → main / (root)**.

## Estrutura

```text
.
├── index.html
├── styles/style.css
├── scripts/main.js
├── assets/favicon.svg
└── README.md
```

## Manutenção

1. Para revisar professores e titulações, edite os cartões `.faculty-card` do HTML.
2. Para atualizar a documentação, modifique os links em `.doc-accordion` e mantenha títulos e anos das versões.
3. Para atualizar a equipe de gestão e os colegiados, consulte a fonte institucional e ajuste os cartões `.organization-card`.
4. Evite informar cronogramas ou horários por turma, pois mudam a cada ano ou semestre.
5. O projeto usa uma composição gráfica demonstrativa, não a marca institucional autorizada para uso oficial.

**Fontes:** [Página oficial do curso — IFSP Birigui](https://bri.ifsp.edu.br/index.php/cursos-superiores/tecnologia-em-sistemas-para-internet) e [repositório original TSI-MLW](https://github.com/KomuroJean/TSI-MLW).
