# 📚 Exemplos de Uso - StudyMap

Guia prático com exemplos reais de como usar o StudyMap para diferentes cenários.

---

## 1. Preparando para o ENEM

### Estrutura Recomendada

```
Curso: ENEM 2024
├── Linguagens e Códigos
│   ├── Português
│   │   ├── Leitura e Interpretação
│   │   ├── Semântica e Estilística
│   │   ├── Gramática Normativa
│   │   └── Redação
│   ├── Inglês
│   │   ├── Vocabulário
│   │   ├── Gramática
│   │   └── Interpretação
│   └── Literatura
│       ├── Modernismo Brasileiro
│       ├── Romantismo
│       └── Contemporânea
│
├── Matemática e Ciências
│   ├── Matemática
│   │   ├── Geometria
│   │   ├── Álgebra
│   │   ├── Trigonometria
│   │   └── Estatística
│   ├── Física
│   │   ├── Mecânica
│   │   ├── Eletromagnetismo
│   │   └── Óptica
│   ├── Química
│   │   ├── Química Geral
│   │   ├── Química Orgânica
│   │   └── Reações
│   └── Biologia
│       ├── Citologia
│       ├── Genética
│       └── Ecologia
│
└── Ciências Humanas
    ├── História
    │   ├── Brasil Colonial
    │   ├── Brasil Independência
    │   ├── Brasil Contemporâneo
    │   └── História Geral
    ├── Geografia
    │   ├── Geografia Humana
    │   ├── Geografia Física
    │   └── Geopolítica
    └── Sociologia
        ├── Conceitos Básicos
        ├── Sociedade Brasileira
        └── Mudança Social
```

### Como Implementar via Admin

1. **Novo Curso**: "ENEM 2024 - Preparação Completa"
2. **Adicionar Disciplinas**: Linguagens, Matemática, Ciências, Humanas
3. **Adicionar Tópicos** com dependências estratégicas:
   - "Redação" depende de "Leitura e Interpretação"
   - "Trigonometria" depende de "Geometria"
   - "Reações" depende de "Química Geral"

---

## 2. Bootcamp de Programação (12 semanas)

### Estrutura Modular

```
Curso: Bootcamp Full Stack
├── Semana 1-2: Fundamentos
│   ├── HTML Básico
│   ├── CSS Básico
│   └── JavaScript Fundamentos (depends: HTML Básico, CSS Básico)
│
├── Semana 3-4: Front-End Intermediário
│   ├── DOM Manipulation (depends: JavaScript Fundamentos)
│   ├── Flexbox e Grid (depends: CSS Básico)
│   ├── Fetch API (depends: JavaScript Fundamentos)
│   └── Projeto Mini (depends: DOM, Fetch)
│
├── Semana 5-6: Back-End
│   ├── Node.js Basics
│   ├── Express.js (depends: Node.js)
│   ├── REST API (depends: Express.js)
│   └── Middleware (depends: Express.js)
│
├── Semana 7-8: Banco de Dados
│   ├── SQL Básico
│   ├── PostgreSQL (depends: SQL)
│   ├── Sequelize ORM (depends: PostgreSQL)
│   └── Relacionamentos (depends: SQL)
│
├── Semana 9-10: Integração
│   ├── Conectar BD ao API (depends: REST API, PostgreSQL)
│   ├── Autenticação JWT (depends: Express.js)
│   ├── Validação de Dados (depends: Express.js)
│   └── Tratamento de Erros (depends: Express.js)
│
├── Semana 11: React/Vue
│   ├── React Fundamentos
│   ├── Hooks (depends: React)
│   ├── State Management (depends: Hooks)
│   └── Consumir API (depends: Fetch API)
│
└── Semana 12: Projeto Final
    └── Full Stack App (depends: [tudo anterior])
```

### Meta Semanal Recomendada

- Semana 1-2: 4 tópicos/semana
- Semana 3-4: 5 tópicos/semana
- Semana 5-6: 5 tópicos/semana
- Semana 7-8: 4 tópicos/semana
- Semana 9-10: 5 tópicos/semana
- Semana 11-12: 6 tópicos/semana

---

## 3. Certificação AWS Solutions Architect

### Roadmap

```
Curso: AWS Solutions Architect Associate
├── AWS Fundamentals
│   ├── AWS Overview
│   ├── Shared Responsibility Model
│   ├── Cloud Computing Concepts
│   └── AWS Global Infrastructure
│
├── Compute Services
│   ├── EC2 Instances
│   │   ├── Instance Types
│   │   ├── Lifecycle
│   │   ├── Pricing Models (depends: Instance Types)
│   │   └── User Data & Metadata
│   │
│   ├── ECS & EKS
│   │   ├── Container Basics
│   │   ├── ECS Concepts
│   │   └── EKS vs ECS
│   │
│   ├── Lambda
│   │   ├── Serverless Concepts
│   │   ├── Lambda Basics
│   │   ├── Triggers & Events
│   │   └── Best Practices (depends: Lambda Basics)
│   │
│   └── Auto Scaling
│       ├── Launch Templates
│       ├── Auto Scaling Groups (depends: EC2)
│       └── Scaling Policies (depends: ASG)
│
├── Network Services
│   ├── VPC Fundamentals
│   │   ├── VPC Basics
│   │   ├── Subnets
│   │   ├── CIDR Notation (depends: Subnets)
│   │   ├── Route Tables
│   │   ├── NACLs & Security Groups
│   │   └── NAT Gateway (depends: Subnets)
│   │
│   ├── CloudFront & CDN
│   │   ├── CDN Concepts
│   │   ├── CloudFront Distributions
│   │   └── Cache Strategies
│   │
│   └── Route 53
│       ├── DNS Basics
│       ├── Hosted Zones
│       └── Routing Policies
│
├── Storage Services
│   ├── S3
│   │   ├── Buckets & Objects
│   │   ├── Storage Classes
│   │   ├── S3 Versioning
│   │   ├── Encryption (depends: S3)
│   │   ├── Access Control (depends: S3)
│   │   └── Lifecycle Policies (depends: S3)
│   │
│   ├── EBS
│   │   ├── Volume Types
│   │   ├── Snapshots
│   │   └── Encryption (depends: EBS)
│   │
│   ├── EFS
│   │   ├── NFS on AWS
│   │   └── Mount Targets
│   │
│   └── Glacier
│       ├── Archive Storage
│       └── Retrieval Options
│
├── Database Services
│   ├── RDS
│   │   ├── Engines (MySQL, PostgreSQL, etc)
│   │   ├── Multi-AZ Deployments
│   │   ├── Read Replicas (depends: RDS)
│   │   └── Backups & Recovery
│   │
│   ├── DynamoDB
│   │   ├── NoSQL Basics
│   │   ├── Tables & Items
│   │   ├── Provisioned vs On-Demand
│   │   ├── Global Tables
│   │   └── Streams (depends: DynamoDB)
│   │
│   ├── ElastiCache
│   │   ├── Caching Concepts
│   │   ├── Redis vs Memcached
│   │   └── Cluster Modes
│   │
│   └── Redshift
│       ├── Data Warehouse Concepts
│       └── Cluster Architecture
│
├── Integration & Messaging
│   ├── SQS
│   │   ├── Queue Basics
│   │   ├── Message Attributes
│   │   └── Queue Types
│   │
│   ├── SNS
│   │   ├── Pub/Sub Messaging
│   │   ├── Topics & Subscriptions
│   │   └── SNS vs SQS (depends: SQS)
│   │
│   ├── API Gateway
│   │   ├── REST API Basics
│   │   ├── Models & Validators
│   │   ├── Authentication (depends: REST API)
│   │   └── Caching (depends: REST API)
│   │
│   └── Step Functions
│       ├── Workflow Concepts
│       └── State Machines
│
├── Management & Monitoring
│   ├── CloudWatch
│   │   ├── Metrics
│   │   ├── Logs
│   │   ├── Alarms
│   │   └── Dashboards
│   │
│   ├── CloudTrail
│   │   ├── API Logging
│   │   └── Compliance Monitoring
│   │
│   └── X-Ray
│       ├── Service Map
│       └── Tracing
│
├── Security & Identity
│   ├── IAM
│   │   ├── Users & Roles
│   │   ├── Policies
│   │   ├── Permission Boundaries
│   │   └── Best Practices (depends: Policies)
│   │
│   ├── KMS & Encryption
│   │   ├── Key Management
│   │   ├── Encryption at Rest
│   │   ├── Encryption in Transit
│   │   └── Cryptographic Concepts
│   │
│   └── WAF & Shield
│       ├── DDoS Protection
│       ├── WAF Rules
│       └── Best Practices
│
└── Architecture & Design
    ├── High Availability
    ├── Disaster Recovery
    ├── Scalability Patterns
    ├── Cost Optimization
    ├── Well-Architected Framework
    └── Practice Exam (depends: [todos anteriores])
```

---

## 4. Aprendendo Idioma (Inglês)

### Estrutura por Níveis

```
Curso: Inglês - Do Zero ao Avançado
├── A0: Básico Absoluto
│   ├── Alphabet & Pronunciation
│   ├── Days & Months
│   ├── Numbers 1-100
│   ├── Colors
│   ├── Greetings
│   └── Basic Phrases
│
├── A1: Iniciante
│   ├── Verb "To Be" (depends: Greetings)
│   ├── Articles (a, an, the)
│   ├── Nouns & Plurals
│   ├── Adjectives
│   ├── Personal Pronouns
│   ├── Present Simple (depends: Verb To Be, Personal Pronouns)
│   ├── Family Vocabulary
│   ├── Food & Drinks
│   └── At the Restaurant (depends: Food, Present Simple)
│
├── A2: Elementar
│   ├── Past Simple (depends: Present Simple)
│   ├── Present Continuous (depends: Present Simple)
│   ├── Going To Future (depends: Present Continuous)
│   ├── Prepositions of Place
│   ├── Can/Could Modals
│   ├── Giving Directions (depends: Prepositions)
│   ├── Hotel & Travel (depends: Past Simple)
│   └── Shopping & Money (depends: Numbers)
│
├── B1: Intermediário
│   ├── Present Perfect (depends: Past Simple)
│   ├── Past Continuous (depends: Past Simple)
│   ├── Will & Future (depends: Present Continuous)
│   ├── Question Words (What, Where, When, Why, How)
│   ├── Relative Clauses (depends: Question Words)
│   ├── Conditionals If/Then (depends: Conditionals)
│   ├── Business English (depends: Intermediate vocab)
│   └── Writing Essays (depends: Relative Clauses)
│
├── B2: Intermediário-Avançado
│   ├── Perfect Continuous (depends: Present Perfect)
│   ├── Advanced Modals (might, must, should) (depends: Modals)
│   ├── Reported Speech (depends: Question Words)
│   ├── Passive Voice (depends: Conditionals)
│   ├── Phrasal Verbs
│   ├── Idioms & Expressions
│   ├── Academic Writing (depends: Essays)
│   └── Debate & Discussion (depends: Idioms)
│
└── C1: Avançado
    ├── Inversion & Inversión
    ├── Cleft Sentences
    ├── Complex Conditional
    ├── Advanced Phrasal Verbs (depends: Phrasal Verbs)
    ├── Literary English
    ├── Academic Research Writing (depends: Academic Writing)
    └── Proficiency Exam Prep (depends: [todo anterior])
```

---

## 5. Medicina - Anatomia Sistema Respiratório

### Estrutura Sequencial

```
Curso: Anatomia - Sistema Respiratório
├── Conceitos Fundamentais
│   ├── Planos Anatômicos
│   ├── Direções Anatômicas
│   ├── Conceito de Sistema Respiratório
│   └── Divisões (Superior/Inferior)
│
├── Vias Aéreas Superiores
│   ├── Nariz
│   │   ├── Anatomia Externa (depends: Conceitos)
│   │   ├── Cavidade Nasal
│   │   ├── Funções (aquecimento, filtragem)
│   │   └── Epitélio Respiratório
│   │
│   ├── Faringe
│   │   ├── Divisões (Naso, Oro, Laringo)
│   │   ├── Músculos Faríngeos
│   │   └── Funções (depends: Divisões)
│   │
│   └── Laringe
│       ├── Estrutura Cartilaginosa
│       ├── Cordas Vocais (depends: Estrutura)
│       ├── Movements Laríngeos (depends: Músculos)
│       └── Inervação (depends: Cordas)
│
├── Vias Aéreas Inferiores
│   ├── Traqueia
│   │   ├── Estrutura e Anéis Traqueais
│   │   ├── Epitélio Ciliado
│   │   ├── Bifurcação Traqueal
│   │   └── Funções
│   │
│   ├── Brônquios
│   │   ├── Brônquio Principal Direito (depends: Bifurcação)
│   │   ├── Brônquio Principal Esquerdo
│   │   ├── Bronquíolos (depends: Brônquios)
│   │   └── Epitélio (depends: Brônquios)
│   │
│   └── Bronquíolos & Alvéolos
│       ├── Transição Brônquio-Alveolar
│       ├── Alvéolos (depends: Bronquíolos)
│       ├── Células Alveolares (depends: Alvéolos)
│       └── Barreira Hematopulmonar (depends: Células)
│
├── Pulmões
│   ├── Anatomia Geral
│   │   ├── Posição Anatômica
│   │   ├── Relações Topográficas
│   │   └── Dimensões (depends: Posição)
│   │
│   ├── Pulmão Direito
│   │   ├── 3 Lobos
│   │   ├── Divisão Segmentar
│   │   └── Estrutura Brônquica (depends: Divisão)
│   │
│   ├── Pulmão Esquerdo
│   │   ├── 2 Lobos
│   │   ├── Incisura Cardíaca
│   │   └── Estrutura Brônquica (depends: 2 Lobos)
│   │
│   ├── Pleura
│   │   ├── Pleura Visceral
│   │   ├── Pleura Parietal
│   │   ├── Cavidade Pleural
│   │   └── Líquido Pleural (depends: Cavidade)
│   │
│   ├── Vascularização
│   │   ├── Artérias Pulmonares (nutrição)
│   │   ├── Artérias Brônquicas (depends: Artérias Pulmonares)
│   │   ├── Veias Pulmonares
│   │   └── Drenagem Linfática (depends: Artérias)
│   │
│   ├── Inervação
│   │   ├── Inervação Parassimpática
│   │   ├── Inervação Simpática
│   │   ├── Receptores (depends: Inervações)
│   │   └── Funções Autonômicas
│   │
│   └── Funções Respiratórias
│       ├── Troca Gasosa (depends: Alvéolos, Barreira)
│       ├── Ventilação (depends: Pulmões)
│       ├── Perfusão (depends: Vascularização)
│       └── Difusão (depends: Troca Gasosa)
│
├── Músculos Respiratórios
│   ├── Diafragma
│   │   ├── Anatomia
│   │   ├── Inervação (nervo frênico)
│   │   ├── Funções (depends: Anatomia)
│   │   └── Movimentos (depends: Funções)
│   │
│   ├── Músculos Intercostais
│   │   ├── Externos (inspiração)
│   │   ├── Internos (expiração)
│   │   ├── Mais Internos
│   │   └── Inervação (depends: Externos, Internos)
│   │
│   ├── Músculos Acessórios
│   │   ├── Escalenos
│   │   ├── Esternocleidomastóideo
│   │   ├── Serrátil Anterior
│   │   └── Quando são Usados (depends: Músculos Intercostais)
│   │
│   └── Musculatura Expiratória
│       ├── Abdominais
│       ├── Intercostais Internos
│       └── Transversus Thoracis (depends: Intercostais)
│
├── Fisiologia Respiratória
│   ├── Volumes Pulmonares
│   │   ├── Volume Corrente
│   │   ├── Volume Residual
│   │   ├── Capacidade Vital
│   │   └── Capacidade Pulmonar Total
│   │
│   ├── Mecânica Respiratória
│   │   ├── Pressão Intrapleural
│   │   ├── Pressão Intraalveolar
│   │   ├── Compliance Pulmonar
│   │   ├── Resistência das Vias Aéreas
│   │   └── Trabalho Respiratório (depends: Compliance, Resistência)
│   │
│   ├── Troca Gasosa
│   │   ├── Leis de Henry e Dalton
│   │   ├── Gradientes Pressóricos
│   │   ├── Difusão Simples (depends: Leis)
│   │   └── Distúrbios (depends: Difusão)
│   │
│   └── Transporte de Gases
│       ├── Transporte O2 (hemoglobina) (depends: Troca Gasosa)
│       ├── Transporte CO2 (depends: Transporte O2)
│       ├── Efeito Bohr (depends: Transporte CO2)
│       └── Curva de Dissociação (depends: Hemoglobina)
│
└── Patologia Associada
    ├── Doenças Obstrutivas (depends: Mecânica Respiratória)
    ├── Doenças Restritivas (depends: Compliance)
    ├── Infecções (depends: Epitélio)
    └── Tumores (depends: Anatomia completa)
```

---

## 6. Criando Sua Própria Estrutura

### Passo a Passo

1. **Definir o Objetivo**
   - Qual é o resultado final?
   - Quanto tempo você tem?

2. **Listar Tópicos Principais**
   - Brainstorm de tudo que precisa aprender

3. **Agrupar em Disciplinas**
   - Categorizar logicamente

4. **Ordenar Sequencialmente**
   - Qual precisa vir primeiro?

5. **Identificar Dependências**
   - O que precisa de pré-requisito?

6. **Estimar Tempo**
   - Quanto tempo em cada tópico?

7. **Criar Metas**
   - Quantos tópicos por semana?

### Exemplo com Você

```
Seu Objetivo: Aprender Python

Tópicos Principais:
- Sintaxe
- Tipos de Dados
- Controle de Fluxo
- Funções
- POO
- Bibliotecas
- Web Development

Estrutura:
├── Fundamentos
│   ├── Instalação & Setup
│   ├── Sintaxe Básica
│   ├── Tipos de Dados
│   └── Operadores
├── Controle de Fluxo
│   ├── If/Else
│   ├── Loops (for, while)
│   └── Break/Continue
├── Funções
│   ├── Definindo Funções
│   ├── Parâmetros & Argumentos
│   ├── Return Values
│   └── Escopo de Variáveis
├── POO
│   ├── Classes & Objects
│   ├── Herança
│   ├── Encapsulamento
│   └── Polimorfismo
├── Bibliotecas Padrão
│   ├── Modules & Imports
│   ├── Collections
│   ├── File I/O
│   └── DateTime
├── Bibliotecas Populares
│   ├── Requests (HTTP)
│   ├── BeautifulSoup (Web Scraping)
│   ├── Pandas (Data Analysis)
│   └── NumPy (Numerical)
└── Projetos Práticos
    ├── CLI Todo App
    ├── Web Scraper
    └── Data Analysis Project
```

---

## Dicas Finais

✅ **Comece pequeno**: Não crie 500 tópicos de uma vez
✅ **Use dependências**: Reforce a sequência lógica
✅ **Defina metas realistas**: 5-10 tópicos/semana é bom
✅ **Revise regularmente**: Volte a tópicos antigos
✅ **Exporte regularmente**: Backup seus dados
✅ **Customize conforme aprende**: Sistema é flexível!

---

**Feliz aprendizado! 🎉**
