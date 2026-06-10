// ============================================
// STUDYMAP - MAPA DE ESTUDOS INTELIGENTE
// Sistema flexível para organizar conteúdos
// ============================================

class StudyMap {
    constructor() {
        // Estado da aplicação
        this.state = {
            courses: {},
            progress: {},
            goals: [],
            settings: {
                theme: 'dark',
                currentCourse: null
            }
        };

        this.currentEditingTopicId = null;

        // Inicializar
        this.init();
    }

    // ============================================
    // INICIALIZAÇÃO
    // ============================================

    init() {
        this.loadState();
        this.setupEventListeners();
        this.renderDashboard();
        this.loadTheme();

        // Se não há cursos, carregar template padrão
        if (Object.keys(this.state.courses).length === 0) {
            this.loadTemplate('highschool-1st');
        }
    }

    setupEventListeners() {
        // Navegação
        document.getElementById('btnRefresh').addEventListener('click', () => this.refreshData());
        document.getElementById('btnTheme').addEventListener('click', () => this.toggleTheme());
        
        // Sidebar
        document.getElementById('btnNewCourse').addEventListener('click', () => this.showPage('adminPanel'));
        document.getElementById('btnAdmin').addEventListener('click', () => this.showPage('adminPanel'));
        document.getElementById('btnMenuToggle').addEventListener('click', () => this.toggleSidebar());
        document.getElementById('btnBackToDashboard').addEventListener('click', () => this.showPage('dashboard'));
        document.getElementById('btnBackFromAdmin').addEventListener('click', () => this.showPage('dashboard'));

        // Ações do Dashboard
        document.getElementById('btnAddGoal').addEventListener('click', () => this.showModal('modalGoal'));
        document.getElementById('formGoal').addEventListener('submit', (e) => this.addGoal(e));
        document.getElementById('formNotes').addEventListener('submit', (e) => this.saveNotes(e));

        // Ações do Admin
        document.getElementById('formNewCourse').addEventListener('submit', (e) => this.createCourse(e));
        document.getElementById('formNewSubject').addEventListener('submit', (e) => this.addSubject(e));
        document.getElementById('formNewTopic').addEventListener('submit', (e) => this.addTopic(e));
        document.getElementById('btnExportAllData').addEventListener('click', () => this.exportData());
        document.getElementById('btnImportData').addEventListener('click', () => this.triggerImport());
        document.getElementById('btnResetData').addEventListener('click', () => this.resetData());
        document.getElementById('fileImport').addEventListener('change', (e) => this.importData(e));

        // Templates
        document.querySelectorAll('[data-template]').forEach(btn => {
            btn.addEventListener('click', (e) => this.loadTemplate(e.target.dataset.template));
        });

        // Ações do Curso
        document.getElementById('selectCourseForSubject').addEventListener('change', () => {
            this.updateCourseLists();
        });
        document.getElementById('selectCourseForTopic').addEventListener('change', () => {
            this.updateCourseLists();
        });

        // Modais
        document.querySelectorAll('[data-modal]').forEach(btn => {
            btn.addEventListener('click', (e) => this.closeModal(e.target.dataset.modal));
        });

        document.getElementById('modalOverlay').addEventListener('click', () => {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.getElementById('modalOverlay').classList.remove('active');
        });
    }

    // ============================================
    // GERENCIAMENTO DE ESTADO E PERSISTÊNCIA
    // ============================================

    saveState() {
        localStorage.setItem('studymap-state', JSON.stringify(this.state));
    }

    loadState() {
        const saved = localStorage.getItem('studymap-state');
        if (saved) {
            this.state = JSON.parse(saved);
        }
    }

    // ============================================
    // TEMPLATES PRÉ-CARREGADOS
    // ============================================

    loadTemplate(templateId) {
        const templates = {
            'highschool-1st': this.getTemplate1stYear(),
            'highschool-2nd': this.getTemplate2ndYear(),
            'highschool-3rd': this.getTemplate3rdYear()
        };

        const template = templates[templateId];
        if (!template) {
            this.showToast('Template não encontrado', 'error');
            return;
        }

        // Verificar se já existe
        const existingId = Object.values(this.state.courses).find(c => c.name === template.name)?.id;
        if (existingId) {
            this.showToast('Este curso já existe', 'error');
            return;
        }

        // Adicionar curso
        const courseId = this.generateId();
        this.state.courses[courseId] = {
            id: courseId,
            name: template.name,
            series: template.series,
            description: template.description,
            subjects: template.subjects
        };

        this.saveState();
        this.updateCoursesList();
        this.showToast(`Curso "${template.name}" carregado com sucesso!`, 'success');
    }

    getTemplate1stYear() {
        return {
            name: 'Ensino Médio - 1º Ano',
            series: '1º Ano',
            description: 'Currículo completo do 1º ano do Ensino Médio',
            subjects: [
                {
                    id: this.generateId(),
                    name: 'Matemática',
                    topics: [
                        {
                            id: this.generateId(),
                            name: 'Números e Operações',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Frações',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Porcentagem',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Razão e Proporção',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Equações do 1º Grau',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Sistemas Lineares',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Funções',
                            dependencies: []
                        }
                    ]
                },
                {
                    id: this.generateId(),
                    name: 'Português',
                    topics: [
                        {
                            id: this.generateId(),
                            name: 'Leitura e Interpretação',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Classes de Palavras',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Concordância Verbal',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Regência Verbal',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Redação Descritiva',
                            dependencies: []
                        }
                    ]
                },
                {
                    id: this.generateId(),
                    name: 'Biologia',
                    topics: [
                        {
                            id: this.generateId(),
                            name: 'Origem da Vida',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Célula Procariota',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Célula Eucariota',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Metabolismo Celular',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Reprodução Celular',
                            dependencies: []
                        }
                    ]
                },
                {
                    id: this.generateId(),
                    name: 'Física',
                    topics: [
                        {
                            id: this.generateId(),
                            name: 'Cinemática',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Dinâmica',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Trabalho e Energia',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Termologia',
                            dependencies: []
                        }
                    ]
                },
                {
                    id: this.generateId(),
                    name: 'Química',
                    topics: [
                        {
                            id: this.generateId(),
                            name: 'Estrutura Atômica',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Tabela Periódica',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Ligações Químicas',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Reações Químicas',
                            dependencies: []
                        }
                    ]
                },
                {
                    id: this.generateId(),
                    name: 'História',
                    topics: [
                        {
                            id: this.generateId(),
                            name: 'Pré-História',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Antiguidade Oriental',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Antiguidade Clássica',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Idade Média',
                            dependencies: []
                        }
                    ]
                },
                {
                    id: this.generateId(),
                    name: 'Geografia',
                    topics: [
                        {
                            id: this.generateId(),
                            name: 'Conceitos de Geografia',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Planeta Terra',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Clima e Vegetação',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'População Mundial',
                            dependencies: []
                        }
                    ]
                },
                {
                    id: this.generateId(),
                    name: 'Inglês',
                    topics: [
                        {
                            id: this.generateId(),
                            name: 'Verb "To Be"',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Present Simple',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Present Continuous',
                            dependencies: []
                        },
                        {
                            id: this.generateId(),
                            name: 'Vocabulário Básico',
                            dependencies: []
                        }
                    ]
                }
            ]
        };
    }

    getTemplate2ndYear() {
        return {
            name: 'Ensino Médio - 2º Ano',
            series: '2º Ano',
            description: 'Currículo completo do 2º ano do Ensino Médio',
            subjects: [
                {
                    id: this.generateId(),
                    name: 'Matemática',
                    topics: [
                        { id: this.generateId(), name: 'Progressões Aritméticas', dependencies: [] },
                        { id: this.generateId(), name: 'Progressões Geométricas', dependencies: [] },
                        { id: this.generateId(), name: 'Logaritmos', dependencies: [] },
                        { id: this.generateId(), name: 'Trigonometria', dependencies: [] },
                        { id: this.generateId(), name: 'Matrizes', dependencies: [] }
                    ]
                },
                {
                    id: this.generateId(),
                    name: 'Português',
                    topics: [
                        { id: this.generateId(), name: 'Romantismo', dependencies: [] },
                        { id: this.generateId(), name: 'Realismo', dependencies: [] },
                        { id: this.generateId(), name: 'Análise de Poesia', dependencies: [] },
                        { id: this.generateId(), name: 'Redação Argumentativa', dependencies: [] }
                    ]
                },
                {
                    id: this.generateId(),
                    name: 'Física',
                    topics: [
                        { id: this.generateId(), name: 'Óptica Geométrica', dependencies: [] },
                        { id: this.generateId(), name: 'Eletrostática', dependencies: [] },
                        { id: this.generateId(), name: 'Eletrodinâmica', dependencies: [] },
                        { id: this.generateId(), name: 'Magnetismo', dependencies: [] }
                    ]
                }
            ]
        };
    }

    getTemplate3rdYear() {
        return {
            name: 'Ensino Médio - 3º Ano',
            series: '3º Ano',
            description: 'Currículo completo do 3º ano do Ensino Médio',
            subjects: [
                {
                    id: this.generateId(),
                    name: 'Matemática',
                    topics: [
                        { id: this.generateId(), name: 'Análise Combinatória', dependencies: [] },
                        { id: this.generateId(), name: 'Probabilidade', dependencies: [] },
                        { id: this.generateId(), name: 'Estatística', dependencies: [] },
                        { id: this.generateId(), name: 'Geometria Analítica', dependencies: [] }
                    ]
                },
                {
                    id: this.generateId(),
                    name: 'Português',
                    topics: [
                        { id: this.generateId(), name: 'Modernismo', dependencies: [] },
                        { id: this.generateId(), name: 'Literatura Contemporânea', dependencies: [] },
                        { id: this.generateId(), name: 'Redação Enem', dependencies: [] }
                    ]
                }
            ]
        };
    }

    // ============================================
    // GERENCIAMENTO DE CURSOS
    // ============================================

    createCourse(e) {
        e.preventDefault();
        
        const name = document.getElementById('inputCourseName').value;
        const series = document.getElementById('inputCourseSeries').value;
        const description = document.getElementById('inputCourseDesc').value;

        if (!name || !series) {
            this.showToast('Preencha os campos obrigatórios', 'error');
            return;
        }

        const courseId = this.generateId();
        this.state.courses[courseId] = {
            id: courseId,
            name,
            series,
            description,
            subjects: []
        };

        this.saveState();
        this.updateCoursesList();
        this.updateAdminLists();
        document.getElementById('formNewCourse').reset();
        this.showToast('Curso criado com sucesso!', 'success');
    }

    deleteCourse(courseId) {
        if (confirm('Tem certeza que deseja deletar este curso?')) {
            delete this.state.courses[courseId];
            
            // Remover progresso do curso
            Object.keys(this.state.progress).forEach(topicId => {
                const topic = this.findTopicById(topicId);
                if (topic && this.findCourseByTopic(topicId)?.id === courseId) {
                    delete this.state.progress[topicId];
                }
            });

            this.saveState();
            this.updateCoursesList();
            this.showPage('dashboard');
            this.showToast('Curso deletado com sucesso', 'success');
        }
    }

    // ============================================
    // GERENCIAMENTO DE DISCIPLINAS
    // ============================================

    addSubject(e) {
        e.preventDefault();

        const courseId = document.getElementById('selectCourseForSubject').value;
        const subjectName = document.getElementById('inputSubjectName').value;

        if (!courseId || !subjectName) {
            this.showToast('Selecione um curso e preencha o nome', 'error');
            return;
        }

        const course = this.state.courses[courseId];
        if (!course) return;

        course.subjects.push({
            id: this.generateId(),
            name: subjectName,
            topics: []
        });

        this.saveState();
        this.updateAdminLists();
        document.getElementById('formNewSubject').reset();
        this.showToast('Disciplina adicionada!', 'success');
    }

    // ============================================
    // GERENCIAMENTO DE TÓPICOS
    // ============================================

    addTopic(e) {
        e.preventDefault();

        const courseId = document.getElementById('selectCourseForTopic').value;
        const subjectId = document.getElementById('selectSubjectForTopic').value;
        const topicName = document.getElementById('inputTopicName').value;
        const depsInput = document.getElementById('inputTopicDeps').value;

        if (!courseId || !subjectId || !topicName) {
            this.showToast('Preencha todos os campos', 'error');
            return;
        }

        const course = this.state.courses[courseId];
        const subject = course?.subjects.find(s => s.id === subjectId);

        if (!subject) return;

        const dependencies = depsInput
            .split(',')
            .map(id => id.trim())
            .filter(id => id.length > 0);

        subject.topics.push({
            id: this.generateId(),
            name: topicName,
            dependencies: dependencies
        });

        this.saveState();
        this.updateAdminLists();
        document.getElementById('formNewTopic').reset();
        this.showToast('Tópico adicionado!', 'success');
    }

    // ============================================
    // SISTEMA DE PROGRESSO
    // ============================================

    toggleTopic(topicId) {
        const topic = this.findTopicById(topicId);
        if (!topic) return;

        // Verificar se tem dependências não concluídas
        if (!this.areDepenciesMet(topicId)) {
            this.showToast('Complete os tópicos anteriores primeiro!', 'error');
            return;
        }

        if (this.state.progress[topicId]) {
            this.state.progress[topicId].completed = !this.state.progress[topicId].completed;
            this.state.progress[topicId].completedAt = this.state.progress[topicId].completed 
                ? new Date().toISOString() 
                : null;
        } else {
            this.state.progress[topicId] = {
                completed: true,
                notes: '',
                completedAt: new Date().toISOString()
            };
        }

        this.saveState();
        this.updateProgress();
        this.showToast(
            this.state.progress[topicId].completed 
                ? 'Tópico marcado como concluído!' 
                : 'Tópico desmarcado',
            'success'
        );
    }

    areDepenciesMet(topicId) {
        const topic = this.findTopicById(topicId);
        if (!topic || !topic.dependencies || topic.dependencies.length === 0) {
            return true;
        }

        return topic.dependencies.every(depId => {
            const depProgress = this.state.progress[depId];
            return depProgress && depProgress.completed;
        });
    }

    calculateProgress() {
        const totalTopics = Object.keys(this.state.courses).reduce((acc, courseId) => {
            return acc + this.state.courses[courseId].subjects.reduce((subAcc, subject) => {
                return subAcc + subject.topics.length;
            }, 0);
        }, 0);

        const completedTopics = Object.keys(this.state.progress).filter(
            id => this.state.progress[id].completed
        ).length;

        return {
            total: totalTopics,
            completed: completedTopics,
            percentage: totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100)
        };
    }

    calculateCourseProgress(courseId) {
        const course = this.state.courses[courseId];
        if (!course) return { total: 0, completed: 0, percentage: 0 };

        const topics = course.subjects.flatMap(s => s.topics);
        const total = topics.length;
        const completed = topics.filter(t => 
            this.state.progress[t.id] && this.state.progress[t.id].completed
        ).length;

        return {
            total,
            completed,
            percentage: total === 0 ? 0 : Math.round((completed / total) * 100)
        };
    }

    updateProgress() {
        const progress = this.calculateProgress();

        // Atualizar dashboard
        const circleCircumference = 2 * Math.PI * 45;
        const strokeDashoffset = circleCircumference - (circleCircumference * progress.percentage) / 100;

        document.getElementById('progressPercent').textContent = progress.percentage;
        document.getElementById('progressCircle').style.strokeDashoffset = strokeDashoffset;
        document.getElementById('statCompleted').textContent = progress.completed;
        document.getElementById('statRemaining').textContent = progress.total - progress.completed;
        document.getElementById('statTotal').textContent = progress.total;

        // Se um curso está sendo visualizado, atualizar progresso do curso
        if (this.state.settings.currentCourse) {
            const courseProgress = this.calculateCourseProgress(this.state.settings.currentCourse);
            this.updateCourseProgressBar(courseProgress);
        }
    }

    updateCourseProgressBar(progress) {
        const percentage = progress.percentage;
        document.getElementById('courseProgressFill').style.width = percentage + '%';
        document.getElementById('courseProgressText').textContent = percentage + '%';
        document.getElementById('courseProgressCount').textContent = 
            `(${progress.completed}/${progress.total})`;
    }

    // ============================================
    // SISTEMA DE METAS
    // ============================================

    addGoal(e) {
        e.preventDefault();

        const description = document.getElementById('inputGoalDesc').value;
        const topicsTarget = parseInt(document.getElementById('inputGoalTopics').value);

        if (!description || !topicsTarget) {
            this.showToast('Preencha todos os campos', 'error');
            return;
        }

        const goal = {
            id: this.generateId(),
            description,
            topicsTarget,
            topicsCompleted: 0,
            createdAt: new Date().toISOString(),
            weekStart: this.getWeekStart(new Date())
        };

        this.state.goals.push(goal);
        this.saveState();
        this.renderGoals();
        this.closeModal('modalGoal');
        document.getElementById('formGoal').reset();
        this.showToast('Meta criada com sucesso!', 'success');
    }

    removeGoal(goalId) {
        this.state.goals = this.state.goals.filter(g => g.id !== goalId);
        this.saveState();
        this.renderGoals();
    }

    getWeekStart(date) {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(d.setDate(diff)).toISOString().split('T')[0];
    }

    renderGoals() {
        const goalsList = document.getElementById('goalsList');
        const currentWeek = this.getWeekStart(new Date());

        const goals = this.state.goals.filter(g => g.weekStart === currentWeek);

        if (goals.length === 0) {
            goalsList.innerHTML = '<p class="empty-state">Nenhuma meta para esta semana</p>';
            return;
        }

        goalsList.innerHTML = goals.map(goal => {
            const progress = Math.round((goal.topicsCompleted / goal.topicsTarget) * 100);
            return `
                <div class="goal-item">
                    <div class="goal-checkbox ${goal.topicsCompleted >= goal.topicsTarget ? 'checked' : ''}"></div>
                    <div class="goal-content">
                        <div class="goal-text">${goal.description}</div>
                        <div class="goal-progress">${goal.topicsCompleted}/${goal.topicsTarget} tópicos</div>
                        <div class="progress-bar" style="margin-top: 6px;">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                    </div>
                    <div class="goal-actions">
                        <button class="btn btn-icon btn-small" onclick="studyMap.removeGoal('${goal.id}')">
                            ✕
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ============================================
    // SISTEMA DE ANOTAÇÕES
    // ============================================

    openNotes(topicId) {
        const topic = this.findTopicById(topicId);
        if (!topic) return;

        this.currentEditingTopicId = topicId;
        const notes = this.state.progress[topicId]?.notes || '';
        
        document.getElementById('notesTopicTitle').textContent = `Anotações - ${topic.name}`;
        document.getElementById('inputNotes').value = notes;
        this.showModal('modalNotes');
    }

    saveNotes(e) {
        e.preventDefault();

        if (!this.currentEditingTopicId) return;

        const notes = document.getElementById('inputNotes').value;

        if (!this.state.progress[this.currentEditingTopicId]) {
            this.state.progress[this.currentEditingTopicId] = {
                completed: false,
                notes: '',
                completedAt: null
            };
        }

        this.state.progress[this.currentEditingTopicId].notes = notes;
        this.saveState();
        this.closeModal('modalNotes');
        this.showToast('Anotações salvas!', 'success');
    }

    // ============================================
    // NAVEGAÇÃO E RENDERIZAÇÃO
    // ============================================

    showPage(pageId) {
        // Remover ativa de todas as páginas
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');

        // Atualizar título
        const titles = {
            'dashboard': 'Dashboard',
            'courseView': '',
            'adminPanel': 'Painel de Administração'
        };
        document.getElementById('pageTitle').textContent = titles[pageId] || 'StudyMap';

        // Se voltando para dashboard, atualizar renderização
        if (pageId === 'dashboard') {
            this.renderDashboard();
        }
    }

    renderDashboard() {
        this.updateProgress();
        this.renderCourses();
        this.renderGoals();
    }

    renderCourses() {
        const activeCoursesList = document.getElementById('activeCoursesList');
        const courses = Object.values(this.state.courses);

        if (courses.length === 0) {
            activeCoursesList.innerHTML = '<p class="empty-state">Nenhum curso criado. Crie um novo!</p>';
            return;
        }

        activeCoursesList.innerHTML = courses.map(course => {
            const progress = this.calculateCourseProgress(course.id);
            return `
                <div class="course-card" style="cursor: pointer; padding: 12px; background: var(--bg-primary); border-radius: 8px; border: 1px solid var(--border); margin-bottom: 12px;" onclick="studyMap.showCourse('${course.id}')">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <strong>${course.name}</strong>
                        <span style="font-size: 12px; color: var(--text-tertiary);">${progress.percentage}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress.percentage}%"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    showCourse(courseId) {
        const course = this.state.courses[courseId];
        if (!course) return;

        this.state.settings.currentCourse = courseId;
        this.saveState();

        document.getElementById('courseTitle').textContent = course.name;
        document.getElementById('courseSeries').textContent = course.series;

        const courseContent = document.getElementById('courseContent');
        courseContent.innerHTML = course.subjects.map(subject => {
            const subjectProgress = this.calculateSubjectProgress(courseId, subject.id);
            const isExpanded = localStorage.getItem(`subject-expanded-${subject.id}`) === 'true';

            return `
                <div class="subject-card">
                    <div class="subject-header" onclick="studyMap.toggleSubject('${subject.id}', this)">
                        <div class="subject-title">
                            <span style="font-size: 18px;">${isExpanded ? '▼' : '▶'}</span>
                            ${subject.name}
                        </div>
                        <div class="subject-progress">
                            <span>${subjectProgress.percentage}%</span>
                            <div class="subject-progress-bar">
                                <div class="subject-progress-fill" style="width: ${subjectProgress.percentage}%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="subject-content ${isExpanded ? 'expanded' : ''}">
                        <div class="topics-list">
                            ${subject.topics.map(topic => this.renderTopic(topic, courseId)).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const progress = this.calculateCourseProgress(courseId);
        this.updateCourseProgressBar(progress);

        this.showPage('courseView');
        document.getElementById('btnExportCourse').onclick = () => this.exportCourse(courseId);
        document.getElementById('btnDeleteCourse').onclick = () => this.deleteCourse(courseId);
    }

    toggleSubject(subjectId, headerElement) {
        const content = headerElement.nextElementSibling;
        content.classList.toggle('expanded');
        
        localStorage.setItem(`subject-expanded-${subjectId}`, 
            content.classList.contains('expanded') ? 'true' : 'false'
        );

        // Atualizar ícone
        const icon = headerElement.querySelector('span:first-child');
        icon.textContent = content.classList.contains('expanded') ? '▼' : '▶';
    }

    renderTopic(topic, courseId) {
        const isCompleted = this.state.progress[topic.id]?.completed || false;
        const isDependenciesMet = this.areDepenciesMet(topic.id);
        const isLocked = !isDependenciesMet;

        let dependencyText = '';
        if (topic.dependencies && topic.dependencies.length > 0) {
            const depTopics = topic.dependencies.map(depId => this.findTopicById(depId)?.name).filter(Boolean);
            dependencyText = `<div class="topic-deps">📌 Depende de: ${depTopics.join(', ')}</div>`;
        }

        return `
            <div class="topic-item ${isLocked ? 'locked' : ''}">
                <div class="topic-checkbox ${isCompleted ? 'checked' : ''}" 
                     onclick="studyMap.toggleTopic('${topic.id}'); event.stopPropagation();"
                     ${isLocked ? 'title="Complete os tópicos anteriores primeiro"' : ''}>
                </div>
                <div class="topic-content">
                    <div class="topic-label">
                        ${isLocked ? '🔒' : ''}
                        <span style="text-decoration: ${isCompleted ? 'line-through' : 'none'}; opacity: ${isCompleted ? '0.6' : '1'};">
                            ${topic.name}
                        </span>
                    </div>
                    ${dependencyText}
                </div>
                <div class="topic-actions">
                    <button class="btn btn-icon btn-small" onclick="studyMap.openNotes('${topic.id}')" title="Anotações">
                        📝
                    </button>
                </div>
            </div>
        `;
    }

    calculateSubjectProgress(courseId, subjectId) {
        const course = this.state.courses[courseId];
        const subject = course?.subjects.find(s => s.id === subjectId);

        if (!subject) return { total: 0, completed: 0, percentage: 0 };

        const total = subject.topics.length;
        const completed = subject.topics.filter(t => 
            this.state.progress[t.id] && this.state.progress[t.id].completed
        ).length;

        return {
            total,
            completed,
            percentage: total === 0 ? 0 : Math.round((completed / total) * 100)
        };
    }

    // ============================================
    // UTILIDADES
    // ============================================

    updateCoursesList() {
        const coursesList = document.getElementById('coursesList');
        const courses = Object.values(this.state.courses);

        coursesList.innerHTML = courses.map(course => {
            const isActive = this.state.settings.currentCourse === course.id;
            return `
                <div class="course-item ${isActive ? 'active' : ''}" onclick="studyMap.showCourse('${course.id}')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 4h16v2H4V4zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"/>
                    </svg>
                    ${course.name}
                </div>
            `;
        }).join('');
    }

    updateAdminLists() {
        const courses = Object.values(this.state.courses);
        
        ['selectCourseForSubject', 'selectCourseForTopic'].forEach(selectId => {
            const select = document.getElementById(selectId);
            select.innerHTML = '<option value="">Selecione um curso</option>' + 
                courses.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
        });

        // Atualizar selectors de disciplina
        document.getElementById('selectCourseForTopic').addEventListener('change', () => {
            const courseId = document.getElementById('selectCourseForTopic').value;
            const subjectSelect = document.getElementById('selectSubjectForTopic');
            
            const course = this.state.courses[courseId];
            if (course) {
                subjectSelect.innerHTML = '<option value="">Selecione uma disciplina</option>' +
                    course.subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
            }
        });
    }

    updateCourseLists() {
        this.updateAdminLists();
    }

    findTopicById(topicId) {
        for (const course of Object.values(this.state.courses)) {
            for (const subject of course.subjects) {
                const topic = subject.topics.find(t => t.id === topicId);
                if (topic) return topic;
            }
        }
        return null;
    }

    findCourseByTopic(topicId) {
        for (const course of Object.values(this.state.courses)) {
            for (const subject of course.subjects) {
                if (subject.topics.find(t => t.id === topicId)) {
                    return course;
                }
            }
        }
        return null;
    }

    generateId() {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }

    // ============================================
    // MODAIS E UI
    // ============================================

    showModal(modalId) {
        document.getElementById(modalId).classList.add('active');
        document.getElementById('modalOverlay').classList.add('active');
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
        
        const hasOpenModals = document.querySelectorAll('.modal.active').length > 0;
        if (!hasOpenModals) {
            document.getElementById('modalOverlay').classList.remove('active');
        }
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.getElementById('toastContainer').appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('hidden');
    }

    toggleTheme() {
        const body = document.body;
        const isDark = !body.classList.contains('light-mode');
        
        if (isDark) {
            body.classList.add('light-mode');
            this.state.settings.theme = 'light';
        } else {
            body.classList.remove('light-mode');
            this.state.settings.theme = 'dark';
        }

        this.saveState();
    }

    loadTheme() {
        if (this.state.settings.theme === 'light') {
            document.body.classList.add('light-mode');
        }
    }

    // ============================================
    // IMPORTAR/EXPORTAR
    // ============================================

    exportData() {
        const dataStr = JSON.stringify(this.state, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `studymap-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        this.showToast('Dados exportados com sucesso!', 'success');
    }

    exportCourse(courseId) {
        const course = this.state.courses[courseId];
        if (!course) return;

        const dataStr = JSON.stringify(course, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${course.name.replace(/\s+/g, '-')}.json`;
        link.click();
        this.showToast('Curso exportado!', 'success');
    }

    triggerImport() {
        document.getElementById('fileImport').click();
    }

    importData(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                
                // Se é um curso único
                if (data.subjects && !data.courses) {
                    const courseId = this.generateId();
                    this.state.courses[courseId] = {
                        id: courseId,
                        name: data.name || 'Curso Importado',
                        series: data.series || '',
                        description: data.description || '',
                        subjects: data.subjects
                    };
                } else {
                    // Se é um backup completo
                    this.state = data;
                }

                this.saveState();
                this.updateCoursesList();
                this.renderDashboard();
                this.showToast('Dados importados com sucesso!', 'success');
            } catch (error) {
                this.showToast('Erro ao importar dados', 'error');
            }
        };

        reader.readAsText(file);
        e.target.value = '';
    }

    resetData() {
        if (confirm('⚠️ Tem CERTEZA que deseja resetar TUDO? Esta ação não pode ser desfeita.')) {
            if (confirm('Clique OK novamente para confirmar o reset completo')) {
                this.state = {
                    courses: {},
                    progress: {},
                    goals: [],
                    settings: {
                        theme: 'dark',
                        currentCourse: null
                    }
                };
                this.saveState();
                location.reload();
            }
        }
    }

    refreshData() {
        this.loadState();
        this.renderDashboard();
        this.showToast('Dados atualizados', 'success');
    }
}

// ============================================
// INICIALIZAR APLICAÇÃO
// ============================================

let studyMap;

document.addEventListener('DOMContentLoaded', () => {
    studyMap = new StudyMap();
});
