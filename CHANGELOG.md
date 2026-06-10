# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/),
e este projeto adere à [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2024-01-15

### ✨ Added
- ✅ Sistema completo de gerenciamento de cursos flexível
- ✅ Dashboard com progresso geral em tempo real
- ✅ Estrutura de disciplinas e tópicos ilimitada
- ✅ Sistema de anotações por tópico com persistência
- ✅ Metas semanais com rastreamento automático
- ✅ Sistema de dependências entre tópicos (bloqueio de pré-requisitos)
- ✅ Tema escuro/claro com toggle automático
- ✅ Sidebar navegável com lista de cursos ativos
- ✅ Painel Admin completo para gerenciamento
- ✅ Templates pré-carregados:
  - 1º Ano Ensino Médio (8 matérias, 50+ tópicos)
  - 2º Ano Ensino Médio (3 matérias, 15+ tópicos)
  - 3º Ano Ensino Médio (2 matérias, 10+ tópicos)
- ✅ Importar/Exportar de cursos (JSON)
- ✅ Backup completo de dados
- ✅ Persistência automática em LocalStorage
- ✅ Interface responsiva (mobile, tablet, desktop)
- ✅ Animações suaves com CSS3
- ✅ Zero dependências externas (Vanilla JS)
- ✅ Cálculo automático de progresso por disciplina
- ✅ Barra de progresso visual com atualização em tempo real

### 🎨 UI/UX
- Design moderno com variáveis CSS reutilizáveis
- Paleta de cores profissional (Índigo/Verde/Vermelho)
- Modo claro e escuro com tema persistente
- Feedback visual completo (toasts, modais, animações)
- Layout grid responsivo
- Ícones minimalistas integrados

### 🔧 Técnico
- Arquitetura OOP com classe StudyMap
- Separação clara de lógica e interface
- Gerenciamento de estado centralizado
- LocalStorage com serialização JSON
- Métodos de utilidade bem documentados
- Fácil expansão para novos recursos

### 📚 Documentação
- README.md completo com guias
- Comentários inline no código
- Exemplos de uso de API
- Guide de estrutura de dados
- Troubleshooting incluído
- Deploy guide (GitHub Pages, Vercel)

---

## [1.1.0] - Em desenvolvimento

### 🔄 Planned
- [ ] Sistema de quiz/testes por tópico
- [ ] Gráficos de progresso temporal
- [ ] Modo colaborativo (compartilhar cursos)
- [ ] Notificações de metas
- [ ] Estatísticas avançadas
- [ ] Service Worker para modo offline
- [ ] Sincronização com Google Calendar
- [ ] Sistema de tags/categorias
- [ ] Busca global de tópicos
- [ ] Histórico de edições

---

## [1.0.1] - 2024-01-16

### 🐛 Fixed
- Melhorias de performance em LocalStorage
- Correção de cálculo de progresso em mobile
- Ajustes de responsividade em tablets
- Otimização de renderização de modais

### 📝 Changed
- Melhor mensagem de erro para dependências bloqueadas
- Toast notifications mais visíveis
- Ícone de expansão/colapso em disciplinas

---

## Notas de Upgrade

### De 0.x para 1.0.0
Este é o lançamento inicial. Nenhuma migração necessária.

---

## Roadmap 2024

### Q1 2024 ✅
- [x] MVP funcional
- [x] Templates pré-carregados
- [x] Sistema completo de progresso

### Q2 2024 (Planejado)
- [ ] Sistema de quiz
- [ ] API de terceiros (Google Calendar)
- [ ] Temas customizáveis avançados

### Q3 2024 (Planejado)
- [ ] Mobile app PWA
- [ ] Modo colaborativo
- [ ] Analytics dashboard

### Q4 2024 (Planejado)
- [ ] Integração com LMS
- [ ] Gamification completa
- [ ] Community features

---

## Contributors

- 👤 **You** - Feel free to contribute!

---

## Como Contribuir

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## Versionamento

Este projeto segue [Semantic Versioning](https://semver.org/):
- **MAJOR**: mudanças incompatíveis na API
- **MINOR**: funcionalidade novo, compatível
- **PATCH**: correções de bugs

---

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

*Última atualização: 15 de Janeiro de 2024*
