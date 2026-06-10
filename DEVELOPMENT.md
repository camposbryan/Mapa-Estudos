# 🛠️ Guia de Desenvolvimento - StudyMap

Documentação para desenvolvedores que querem contribuir ou estender o projeto.

---

## 📋 Índice

1. [Arquitetura](#arquitetura)
2. [Como Estender](#como-estender)
3. [Adicionando Recursos](#adicionando-recursos)
4. [Debug & Testing](#debug--testing)
5. [Performance](#performance)
6. [Convenções](#convenções)

---

## 🏗️ Arquitetura

### Estrutura Geral

```
StudyMap
├── Classe StudyMap (script.js)
│   ├── Gerenciamento de Estado
│   ├── CRUD de Cursos/Disciplinas/Tópicos
│   ├── Cálculo de Progresso
│   ├── Persistência (localStorage)
│   └── UI Rendering
│
├── HTML (index.html)
│   ├── Estrutura Semântica
│   ├── Elementos Reutilizáveis
│   ├── Modais e Formulários
│   └── Containers para Conteúdo Dinâmico
│
├── CSS (style.css)
│   ├── Variáveis de Tema
│   ├── Grid System
│   ├── Componentes
│   ├── Animações
│   └── Responsividade
│
└── Data (localStorage)
    ├── Cursos
    ├── Progresso
    ├── Metas
    └── Configurações
```

### Fluxo de Dados

```
┌─────────────────┐
│   User Action   │  Click, Input, etc
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Event Handler  │  addEventListener
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  StudyMap Method│  Modifica state
└────────┬────────┘
         │
         ├─→ saveState()      ──→ localStorage
         │
         └─→ updateUI()       ──→ DOM Update
              ├─ renderDashboard()
              ├─ renderCourses()
              ├─ showPage()
              └─ updateProgress()
```

---

## 🔧 Como Estender

### 1. Adicionar Novo Modal

**HTML (index.html):**

```html
<!-- Modal de Exemplo -->
<div class="modal" id="modalExample">
    <div class="modal-content">
        <div class="modal-header">
            <h3>Título do Modal</h3>
            <button class="btn btn-icon btn-close" data-modal="modalExample">×</button>
        </div>
        <form id="formExample" class="form">
            <div class="form-group">
                <label>Campo</label>
                <input type="text" id="inputExample" required>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Salvar</button>
                <button type="button" class="btn btn-secondary" data-modal="modalExample">Cancelar</button>
            </div>
        </form>
    </div>
</div>
```

**JavaScript (script.js):**

```javascript
// No setupEventListeners():
document.getElementById('formExample').addEventListener('submit', (e) => this.handleExample(e));

// Novo método:
handleExample(e) {
    e.preventDefault();
    
    const value = document.getElementById('inputExample').value;
    
    if (!value) {
        this.showToast('Erro: Campo vazio', 'error');
        return;
    }
    
    // Sua lógica aqui
    
    this.saveState();
    this.closeModal('modalExample');
    document.getElementById('formExample').reset();
    this.showToast('Sucesso!', 'success');
}
```

### 2. Adicionar Nova Página

**HTML:**

```html
<section id="newPage" class="page">
    <div class="page-header">
        <button class="btn btn-icon btn-back" id="btnBackFromNew">←</button>
        <h2>Minha Nova Página</h2>
    </div>
    
    <div class="page-content">
        <!-- Seu conteúdo -->
    </div>
</section>
```

**JavaScript:**

```javascript
// No setupEventListeners():
document.getElementById('btnBackFromNew').addEventListener('click', () => {
    this.showPage('dashboard');
});

// Novo método para renderizar:
renderNewPage() {
    // Sua lógica de renderização
}
```

### 3. Adicionar Novo Componente CSS

**style.css:**

```css
/* Componente: Card com Ação */
.card-action {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: var(--spacing-md);
    transition: var(--transition);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card-action:hover {
    border-color: var(--border-light);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-action.active {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: white;
    border-color: var(--primary);
}

.card-action-icon {
    font-size: 24px;
    margin-right: var(--spacing-md);
}

.card-action-content {
    flex: 1;
}

.card-action-title {
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
}

.card-action-subtitle {
    font-size: 12px;
    color: var(--text-tertiary);
}

/* Responsivo */
@media (max-width: 768px) {
    .card-action {
        flex-direction: column;
        text-align: center;
    }
    
    .card-action-icon {
        margin-right: 0;
        margin-bottom: var(--spacing-sm);
    }
}
```

---

## 📚 Adicionando Recursos

### Exemplo: Adicionar Sistema de Tags

**1. Atualizar Estrutura de Dados:**

```javascript
// Em addTopic():
subject.topics.push({
    id: this.generateId(),
    name: topicName,
    dependencies: dependencies,
    tags: []  // ← Novo
});
```

**2. Adicionar UI:**

```html
<!-- No formulário de tópico -->
<div class="form-group">
    <label>Tags (separadas por vírgula)</label>
    <input type="text" id="inputTopicTags" placeholder="algebra, equation, math">
</div>
```

**3. Implementar Lógica:**

```javascript
addTopic(e) {
    // ... código existente ...
    
    const tags = document.getElementById('inputTopicTags').value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
    
    subject.topics.push({
        id: this.generateId(),
        name: topicName,
        dependencies: dependencies,
        tags: tags
    });
    
    this.saveState();
}

// Novo método para filtrar por tag:
getTopicsByTag(tag) {
    const results = [];
    for (const course of Object.values(this.state.courses)) {
        for (const subject of course.subjects) {
            for (const topic of subject.topics) {
                if (topic.tags.includes(tag)) {
                    results.push({ topic, subject, course });
                }
            }
        }
    }
    return results;
}
```

### Exemplo: Adicionar Histórico de Atividade

```javascript
// Estender state:
constructor() {
    this.state = {
        courses: {},
        progress: {},
        goals: [],
        activity: [],  // ← Novo
        settings: {}
    };
}

// Novo método:
logActivity(type, description, courseId = null) {
    this.state.activity.push({
        id: this.generateId(),
        type,        // 'topic_completed', 'goal_created', etc
        description,
        courseId,
        timestamp: new Date().toISOString()
    });
    
    // Manter apenas últimos 100 eventos
    if (this.state.activity.length > 100) {
        this.state.activity.shift();
    }
    
    this.saveState();
}

// Usar em toggleTopic():
toggleTopic(topicId) {
    // ... código existente ...
    
    this.logActivity(
        'topic_completed',
        `Topic "${topic.name}" completed`,
        this.state.settings.currentCourse
    );
}

// Renderizar timeline:
renderActivityTimeline() {
    const timeline = this.state.activity
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 10)
        .map(activity => `
            <div class="activity-item">
                <div class="activity-icon">${this.getActivityIcon(activity.type)}</div>
                <div class="activity-content">
                    <p>${activity.description}</p>
                    <small>${new Date(activity.timestamp).toLocaleDateString()}</small>
                </div>
            </div>
        `).join('');
    
    return timeline;
}

getActivityIcon(type) {
    const icons = {
        'topic_completed': '✅',
        'goal_created': '🎯',
        'course_created': '📚',
        'note_saved': '📝'
    };
    return icons[type] || '📌';
}
```

---

## 🧪 Debug & Testing

### Console Commands

```javascript
// Ver todo state
console.log(studyMap.state);

// Exportar para visualizar
console.log(JSON.stringify(studyMap.state, null, 2));

// Testar cálculo de progresso
console.log(studyMap.calculateProgress());

// Encontrar tópico
console.log(studyMap.findTopicById('topic-id'));

// Verificar dependências
console.log(studyMap.areDepenciesMet('topic-id'));

// Ver goals atuais
console.log(studyMap.state.goals);

// Listar todos os cursos
Object.values(studyMap.state.courses).forEach(course => {
    console.log(`${course.name}: ${course.subjects.length} disciplinas`);
});
```

### Testar Offline

```javascript
// Simular perda de localStorage
localStorage.clear();
location.reload();

// Testar com dados velhos
const oldState = localStorage.getItem('studymap-state');
console.log('Dados salvos:', JSON.parse(oldState).courses);

// Restaurar
localStorage.setItem('studymap-state', oldState);
```

### Performance Profiling

```javascript
// Medir tempo de operação
console.time('calculateProgress');
studyMap.calculateProgress();
console.timeEnd('calculateProgress');

// Tamanho de localStorage
const size = JSON.stringify(localStorage.getItem('studymap-state')).length;
console.log(`LocalStorage: ${(size / 1024).toFixed(2)}KB`);

// Medir render
console.time('renderDashboard');
studyMap.renderDashboard();
console.timeEnd('renderDashboard');
```

---

## ⚡ Performance

### Otimizações Existentes

1. **Lazy Rendering**: Apenas renderiza o que é visível
2. **Event Delegation**: Usa delegação para eventos repetidos
3. **LocalStorage Eficiente**: Serializa uma vez
4. **CSS Variables**: Reutiliza valores
5. **Minimal Animations**: Usa transition em CSS

### Melhorias Potenciais

```javascript
// Memoization para cálculos pesados
calculateProgressMemoized = (() => {
    let cached = null;
    let lastState = null;
    
    return () => {
        const currentState = JSON.stringify(this.state);
        if (currentState === lastState) {
            return cached;
        }
        
        lastState = currentState;
        cached = this.calculateProgress();
        return cached;
    };
})();

// Debounce para salvar state
saveStateDebounced = (() => {
    let timeout = null;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            this.saveState();
        }, 500);
    };
})();

// Virtual scrolling para muitos tópicos
renderTopicsVirtual(topics, container, visibleCount = 10) {
    const totalHeight = topics.length * 60; // Altura estimada por tópico
    const scrollTop = container.scrollTop;
    const startIndex = Math.floor(scrollTop / 60);
    const endIndex = startIndex + visibleCount;
    
    const visibleTopics = topics.slice(startIndex, endIndex);
    // Renderizar apenas visíveis
}
```

---

## 🎯 Convenções

### Naming

```javascript
// Classes
class StudyMap { }

// Métodos públicos
studyMap.renderDashboard()
studyMap.calculateProgress()

// Métodos privados (convenção com _)
_updateProgressInternal()

// Constantes
const MAX_GOALS = 10;
const STORAGE_KEY = 'studymap-state';

// Variáveis
let currentEditingTopicId
const coursesList = []

// Event handlers
handleGoalSubmit(e)
onTopicClick(topicId)
```

### Comentários

```javascript
// Bom
// Calcular progresso total incluindo todas as disciplinas
calculateProgress() { }

// Evitar
// Função para calcular
function calc() { }

// Seções
// ============================================
// GERENCIAMENTO DE CURSOS
// ============================================
```

### Estrutura HTML

```html
<!-- ID para interação JS -->
<button id="btnCreateCourse"></button>

<!-- Data attributes para customização -->
<div data-course-id="123" data-subject-id="456"></div>

<!-- Classes para estilização e testes -->
<div class="course-card course-card--active"></div>
```

### Estrutura CSS

```css
/* BEM - Block Element Modifier */
.button { }              /* Block */
.button__icon { }        /* Element */
.button--primary { }     /* Modifier */

/* Variáveis para valores reutilizáveis */
:root {
    --spacing-md: 16px;
    --primary-color: #6366f1;
}

/* Mobile first */
.card { 
    width: 100%;
}

@media (min-width: 768px) {
    .card {
        width: calc(50% - 8px);
    }
}
```

---

## 📦 Publicando Melhorias

1. **Fork o repositório**
2. **Create feature branch**: `git checkout -b feature/MyFeature`
3. **Commit**: `git commit -m 'Add MyFeature'`
4. **Push**: `git push origin feature/MyFeature`
5. **Pull Request**: Descreva suas mudanças
6. **Aguarde review**

### Checklist de PR

- [ ] Código testado
- [ ] Sem console.log deixado
- [ ] Comentários adicionados
- [ ] CSS responsivo
- [ ] Sem breaking changes
- [ ] README atualizado se necessário

---

## 🚀 Ideias para Contribuir

### Fáceis
- [ ] Novos templates de cursos
- [ ] Melhorias de UI/UX
- [ ] Tradução para novos idiomas
- [ ] Ícones adicionais

### Moderadas
- [ ] Temas customizáveis
- [ ] Estatísticas avançadas
- [ ] Busca global
- [ ] Modo colaborativo

### Avançadas
- [ ] PWA com Service Worker
- [ ] Sincronização com servidor
- [ ] Integração com APIs (Google, GitHub)
- [ ] Multiplayer features

---

## 📞 Suporte

Dúvidas sobre desenvolvimento?

1. Verifique existing issues no GitHub
2. Abra nova issue com detalhes
3. Descreva o que está tentando fazer
4. Cole código relevante

---

**Happy Coding! 🎉**
