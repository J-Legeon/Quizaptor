# 📚 Guía Completa: Cómo Agregar Nuevos Quizzes

Esta guía te enseñará paso a paso cómo agregar tus propios quizzes a la plataforma Quizaptor.

---

## 📋 Índice

1. [Estructura de un Quiz](#estructura-de-un-quiz)
2. [Paso 1: Crear el Archivo de Datos](#paso-1-crear-el-archivo-de-datos)
3. [Paso 2: Registrar el Quiz en quiz.js](#paso-2-registrar-el-quiz-en-quizjs)
4. [Paso 3: Agregar a la Lista Válida en main.js](#paso-3-agregar-a-la-lista-válida-en-mainjs)
5. [Paso 4: Crear la Card en index.html](#paso-4-crear-la-card-en-indexhtml)
6. [Paso 5: Incluir el Script en quiz.html](#paso-5-incluir-el-script-en-quizhtml)
7. [Ejemplos Completos](#ejemplos-completos)
8. [Tips y Mejores Prácticas](#tips-y-mejores-prácticas)

---

## 📐 Estructura de un Quiz

Un quiz consiste en un objeto JavaScript con la siguiente estructura:

```javascript
const miQuizData = {
    id: 'mi-quiz-id',                    // ID único (kebab-case)
    title: 'Título del Quiz',            // Título que se muestra
    description: 'Descripción breve',    // Descripción del quiz
    timeLimit: 45,                       // Tiempo en minutos
    passingScore: 70,                    // Porcentaje mínimo para aprobar
    questions: [                         // Array de preguntas
        {
            id: 1,
            question: 'Texto de la pregunta',
            options: [
                'Opción A',
                'Opción B',
                'Opción C',
                'Opción D'
            ],
            correctAnswer: 0,            // Índice de la respuesta correcta (0-3)
            explanation: 'Explicación de por qué es correcta',
            multipleAnswers: false       // false para respuesta única
        }
        // ... más preguntas
    ]
};
```

---

## 🎯 Paso 1: Crear el Archivo de Datos

### 1.1 Crear el archivo

Crea un nuevo archivo en la carpeta `data/` con un nombre descriptivo:

```
data/mi-nuevo-quiz-data.js
```

### 1.2 Estructura básica

Copia y pega esta plantilla en tu nuevo archivo:

```javascript
// mi-nuevo-quiz-data.js - Descripción del Quiz

const miNuevoQuizData = {
    id: 'mi-nuevo-quiz',
    title: 'Mi Nuevo Quiz',
    description: 'Descripción breve de qué trata este quiz',
    timeLimit: 45, // minutos
    passingScore: 70, // porcentaje
    questions: [
        // Aquí van tus preguntas
    ]
};
```

### 1.3 Agregar preguntas de respuesta única

```javascript
{
    id: 1,
    question: '¿Cuál es la capital de Francia?',
    options: [
        'Londres',
        'París',
        'Madrid',
        'Roma'
    ],
    correctAnswer: 1, // París es el índice 1 (empezando desde 0)
    explanation: 'París es la capital de Francia desde el siglo X.',
    multipleAnswers: false
}
```

### 1.4 Agregar preguntas de selección múltiple

```javascript
{
    id: 2,
    question: '¿Cuáles son lenguajes de programación?',
    options: [
        'Python',
        'HTML',
        'JavaScript',
        'CSS'
    ],
    correctAnswer: [0, 2], // Python (0) y JavaScript (2) son lenguajes de programación
    explanation: 'Python y JavaScript son lenguajes de programación. HTML y CSS son lenguajes de marcado y estilos.',
    multipleAnswers: true // ¡Importante! Debe ser true para selección múltiple
}
```

### 1.5 Ejemplo completo de archivo de datos

```javascript
// react-fundamentals-data.js - React Fundamentals Quiz

const reactFundamentalsData = {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Evalúa tus conocimientos sobre React: componentes, hooks, state y props',
    timeLimit: 40,
    passingScore: 70,
    questions: [
        {
            id: 1,
            question: '¿Qué es React?',
            options: [
                'Una librería de JavaScript para construir interfaces de usuario',
                'Un framework backend',
                'Una base de datos',
                'Un lenguaje de programación'
            ],
            correctAnswer: 0,
            explanation: 'React es una librería de JavaScript desarrollada por Facebook para crear interfaces de usuario interactivas.',
            multipleAnswers: false
        },
        {
            id: 2,
            question: '¿Cuáles son hooks básicos de React?',
            options: [
                'useState',
                'useEffect',
                'useContext',
                'useDatabase'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'useState, useEffect y useContext son hooks básicos de React. useDatabase no existe.',
            multipleAnswers: true
        },
        {
            id: 3,
            question: '¿Qué hace el hook useState?',
            options: [
                'Permite agregar estado a componentes funcionales',
                'Conecta con una base de datos',
                'Crea efectos secundarios',
                'Maneja el enrutamiento'
            ],
            correctAnswer: 0,
            explanation: 'useState es un hook que permite agregar estado local a componentes funcionales.',
            multipleAnswers: false
        }
        // ... más preguntas
    ]
};
```

---

## 🔧 Paso 2: Registrar el Quiz en quiz.js

Abre el archivo `js/quiz.js` y busca la sección donde se registran los quizzes (aproximadamente línea 425):

```javascript
// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get('id');
    
    const quizzes = {
        'istqb-fundamentals': typeof istqbQuizData !== 'undefined' ? istqbQuizData : null,
        'java-fundamentals': typeof javaFundamentalsQuizData !== 'undefined' ? javaFundamentalsQuizData : null,
        // ... otros quizzes
        
        // AGREGA TU NUEVO QUIZ AQUÍ:
        'mi-nuevo-quiz': typeof miNuevoQuizData !== 'undefined' ? miNuevoQuizData : null
    };
```

**Importante:** 
- La clave (`'mi-nuevo-quiz'`) debe coincidir exactamente con el `id` en tu archivo de datos
- El nombre de la variable (`miNuevoQuizData`) debe coincidir con el nombre que usaste en tu archivo

---

## ✅ Paso 3: Agregar a la Lista Válida en main.js

Abre `js/main.js` y busca la función `startQuiz` (aproximadamente línea 100):

```javascript
function startQuiz(quizId) {
    const validQuizzes = [
        'istqb-fundamentals',
        'java-fundamentals',
        'selenium-fundamentals',
        'postman-fundamentals',
        'jmeter-fundamentals',
        'cucumber-fundamentals',
        'devtools-qa',
        'java-selenium',
        // AGREGA TU NUEVO QUIZ AQUÍ:
        'mi-nuevo-quiz'
    ];
    
    if (validQuizzes.includes(quizId)) {
        window.location.href = `pages/quiz.html?id=${quizId}`;
    } else {
        alert('Este quiz estará disponible próximamente');
    }
}
```

---

## 🎨 Paso 4: Crear la Card en index.html

Abre `index.html` y busca la sección `<div class="quiz-grid">`. Copia una de las cards existentes y modifícala:

```html
<!-- Mi Nuevo Quiz -->
<div class="quiz-card" data-category="automation">
    <div class="quiz-card-header">
        <svg class="quiz-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <!-- Elige un ícono SVG apropiado -->
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
        </svg>
        <div class="quiz-card-badges">
            <span class="quiz-badge badge-automation">Categoría</span>
            <span class="quiz-difficulty difficulty-intermediate">Intermedio</span>
        </div>
    </div>
    <h3 class="quiz-title">Mi Nuevo Quiz</h3>
    <p class="quiz-description">Descripción breve que aparecerá en la card del quiz</p>
    <div class="quiz-stats">
        <div class="quiz-stat">
            <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
            </svg>
            <span>40 min</span>
        </div>
        <div class="quiz-stat">
            <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            <span>30 preguntas</span>
        </div>
    </div>
    <button class="btn btn-primary btn-full" onclick="startQuiz('mi-nuevo-quiz')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18">
            <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Iniciar Quiz
    </button>
</div>
```

### Opciones de Categoría

Usa uno de estos valores para `data-category`:

- `certification` - Certificaciones
- `automation` - Automatización
- `api` - API Testing
- `performance` - Performance

### Opciones de Badge de Categoría

```html
<span class="quiz-badge badge-certification">Certificación</span>
<span class="quiz-badge badge-automation">Automatización</span>
<span class="quiz-badge badge-api">API Testing</span>
<span class="quiz-badge badge-performance">Performance</span>
```

### Opciones de Dificultad

```html
<span class="quiz-difficulty difficulty-beginner">Principiante</span>
<span class="quiz-difficulty difficulty-intermediate">Intermedio</span>
<span class="quiz-difficulty difficulty-advanced">Avanzado</span>
```

---

## 📜 Paso 5: Incluir el Script en quiz.html

Abre `pages/quiz.html` y busca la sección de scripts al final (antes de `</body>`):

```html
<!-- Scripts -->
<script src="../data/ISTQB-Foundation-Level.js"></script>
<script src="../data/java-fundamentals-data.js"></script>
<script src="../data/selenium-quiz-data.js"></script>
<!-- ... otros scripts ... -->

<!-- AGREGA TU NUEVO QUIZ AQUÍ: -->
<script src="../data/mi-nuevo-quiz-data.js"></script>

<script src="../js/quiz.js"></script>
</body>
</html>
```

**Importante:** El script de tu quiz debe ir ANTES del script `quiz.js`

---

## 🎯 Ejemplos Completos

### Ejemplo 1: Quiz Simple de Python

**Archivo:** `data/python-basics-data.js`

```javascript
// python-basics-data.js - Python Basics Quiz

const pythonBasicsData = {
    id: 'python-basics',
    title: 'Python Basics',
    description: 'Evalúa tus conocimientos básicos de Python: sintaxis, tipos de datos y estructuras',
    timeLimit: 30,
    passingScore: 65,
    questions: [
        {
            id: 1,
            question: '¿Cuál es la forma correcta de declarar una variable en Python?',
            options: [
                'var nombre = "Juan"',
                'nombre = "Juan"',
                'let nombre = "Juan"',
                'String nombre = "Juan"'
            ],
            correctAnswer: 1,
            explanation: 'En Python no se necesita palabra clave para declarar variables, simplemente se asigna el valor.',
            multipleAnswers: false
        },
        {
            id: 2,
            question: '¿Cuáles son tipos de datos básicos en Python?',
            options: [
                'int',
                'str',
                'boolean',
                'float'
            ],
            correctAnswer: [0, 1, 3],
            explanation: 'int, str y float son tipos básicos. En Python se usa "bool" no "boolean".',
            multipleAnswers: true
        },
        {
            id: 3,
            question: '¿Qué imprime print(type(5.0))?',
            options: [
                '<class \'int\'>',
                '<class \'float\'>',
                '<class \'double\'>',
                '<class \'number\'>'
            ],
            correctAnswer: 1,
            explanation: '5.0 es un número decimal, por lo tanto es de tipo float.',
            multipleAnswers: false
        },
        {
            id: 4,
            question: '¿Cómo se comenta una línea en Python?',
            options: [
                '// comentario',
                '/* comentario */',
                '# comentario',
                '<!-- comentario -->'
            ],
            correctAnswer: 2,
            explanation: 'En Python se usa # para comentarios de una línea.',
            multipleAnswers: false
        },
        {
            id: 5,
            question: '¿Cuáles estructuras de datos son nativas de Python?',
            options: [
                'Lista (list)',
                'Tupla (tuple)',
                'Diccionario (dict)',
                'ArrayList'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'list, tuple y dict son estructuras nativas. ArrayList es de Java.',
            multipleAnswers: true
        }
    ]
};
```

### Ejemplo 2: Quiz de SQL

**Archivo:** `data/sql-fundamentals-data.js`

```javascript
// sql-fundamentals-data.js - SQL Fundamentals Quiz

const sqlFundamentalsData = {
    id: 'sql-fundamentals',
    title: 'SQL Fundamentals',
    description: 'Quiz sobre consultas SQL básicas, joins, subconsultas y funciones agregadas',
    timeLimit: 45,
    passingScore: 70,
    questions: [
        {
            id: 1,
            question: '¿Qué hace el comando SELECT DISTINCT?',
            options: [
                'Selecciona todas las filas',
                'Selecciona solo valores únicos',
                'Selecciona las primeras filas',
                'Ordena los resultados'
            ],
            correctAnswer: 1,
            explanation: 'SELECT DISTINCT retorna solo valores únicos, eliminando duplicados.',
            multipleAnswers: false
        },
        {
            id: 2,
            question: '¿Cuáles son tipos de JOIN en SQL?',
            options: [
                'INNER JOIN',
                'LEFT JOIN',
                'RIGHT JOIN',
                'FULL OUTER JOIN'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todos son tipos válidos de JOIN en SQL.',
            multipleAnswers: true
        },
        {
            id: 3,
            question: '¿Qué cláusula se usa para filtrar resultados?',
            options: [
                'FILTER',
                'WHERE',
                'HAVING',
                'SELECT'
            ],
            correctAnswer: 1,
            explanation: 'WHERE se usa para filtrar filas en SELECT, UPDATE y DELETE.',
            multipleAnswers: false
        }
    ]
};
```

---

## 💡 Tips y Mejores Prácticas

### ✅ Nombres y Convenciones

1. **ID del Quiz:** Usa kebab-case (palabras en minúsculas separadas por guiones)
   - ✅ Correcto: `'python-basics'`, `'react-fundamentals'`
   - ❌ Incorrecto: `'Python_Basics'`, `'reactFundamentals'`

2. **Nombre del Archivo:** Debe ser descriptivo y terminar en `-data.js`
   - ✅ Correcto: `python-basics-data.js`
   - ❌ Incorrecto: `pythonQuiz.js`

3. **Nombre de la Variable:** Usa camelCase y que coincida con el archivo
   - ✅ Correcto: `const pythonBasicsData = { ... }`
   - ❌ Incorrecto: `const quiz_data = { ... }`

### ✅ Preguntas de Calidad

1. **Claridad:** Las preguntas deben ser claras y sin ambigüedad
2. **Opciones:** Usa 4 opciones siempre que sea posible
3. **Explicaciones:** Siempre incluye una explicación detallada
4. **Distractores:** Las opciones incorrectas deben ser plausibles pero claramente incorrectas

### ✅ Dificultad y Tiempo

```javascript
// Quiz corto y fácil
timeLimit: 20,        // 20 minutos
passingScore: 60,     // 60% para aprobar
questions: [/* 15 preguntas */]

// Quiz medio
timeLimit: 40,        // 40 minutos
passingScore: 70,     // 70% para aprobar
questions: [/* 30 preguntas */]

// Quiz largo y difícil
timeLimit: 60,        // 60 minutos
passingScore: 75,     // 75% para aprobar
questions: [/* 40-50 preguntas */]
```

### ✅ Selección Múltiple

**Cuándo usar selección múltiple:**
- Cuando hay múltiples respuestas correctas lógicamente
- Para evaluar conocimiento profundo
- No más del 30-40% de preguntas del quiz

**Ejemplo bueno:**
```javascript
{
    question: '¿Cuáles son principios SOLID?',
    options: [
        'Single Responsibility',
        'Open/Closed',
        'Dependency Injection',  // Incorrecto pero relacionado
        'Liskov Substitution'
    ],
    correctAnswer: [0, 1, 3],
    multipleAnswers: true
}
```

### ✅ Estructura Recomendada

```
15-20 preguntas = Quiz corto (20-30 min)
25-30 preguntas = Quiz medio (40-45 min)
40-50 preguntas = Quiz largo (60-75 min)
```

---

## 🧪 Checklist de Validación

Antes de publicar tu quiz, verifica:

- [ ] El archivo de datos está en `data/` con nombre correcto
- [ ] El `id` es único y en kebab-case
- [ ] Todas las preguntas tienen `id` único
- [ ] Todas las preguntas tienen exactamente 4 opciones
- [ ] Los índices de `correctAnswer` son válidos (0-3)
- [ ] Las preguntas múltiples tienen `multipleAnswers: true`
- [ ] Todas las preguntas tienen explicación
- [ ] El quiz está registrado en `quiz.js`
- [ ] El quiz está en la lista de `main.js`
- [ ] Hay una card en `index.html`
- [ ] El script está incluido en `quiz.html`
- [ ] El quiz se carga sin errores en la consola
- [ ] El botón "Iniciar Quiz" funciona
- [ ] La aleatorización funciona correctamente
- [ ] Las explicaciones se muestran en modo revisión

---

## 🚀 Resumen Rápido

**5 archivos a modificar:**

1. ✅ `data/mi-nuevo-quiz-data.js` - CREAR
2. ✅ `js/quiz.js` - Agregar al objeto `quizzes`
3. ✅ `js/main.js` - Agregar a `validQuizzes`
4. ✅ `index.html` - Agregar card en `.quiz-grid`
5. ✅ `pages/quiz.html` - Agregar `<script>` tag

**Tiempo estimado:** 30-60 minutos para crear un quiz de 20-30 preguntas

---

## ❓ FAQ

**P: ¿Puedo tener más de 4 opciones?**
R: Técnicamente sí, pero el diseño está optimizado para 4. Si necesitas más, considera dividir en múltiples preguntas.

**P: ¿Puedo usar imágenes en las preguntas?**
R: Actualmente no está soportado, pero puedes usar HTML en el texto de la pregunta.

**P: ¿Cómo ordeno los quizzes en la home?**
R: El orden depende del orden en que aparecen las cards en `index.html`

**P: ¿Puedo cambiar los colores de las categorías?**
R: Sí, editando las clases en `css/home.css` (busca `.quiz-badge`)

**P: ¿Los IDs pueden tener números?**
R: Sí, `'python-3-basics'` es válido

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:

1. Revisa la consola del navegador (F12) para ver errores
2. Verifica que todos los nombres coincidan exactamente
3. Asegúrate de que los archivos estén en las carpetas correctas
4. Prueba con un quiz simple de 3-5 preguntas primero

---

**¡Feliz creación de quizzes!** 🎉