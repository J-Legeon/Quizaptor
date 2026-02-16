# Quizaptor - Plataforma de Evaluación para QA Testers

## 🎯 Características Nuevas

### 1. **Aleatorización de Preguntas**
- Las preguntas se presentan en orden aleatorio en cada intento
- Las opciones de respuesta también se mezclan aleatoriamente
- Esto proporciona una experiencia diferente en cada sesión del quiz

### 2. **Soporte para Preguntas de Selección Múltiple**
- Ahora soporta preguntas donde se pueden seleccionar múltiples respuestas correctas
- Las preguntas de selección múltiple se identifican visualmente con un indicador
- Se utilizan checkboxes en lugar de radio buttons para este tipo de preguntas

### 3. **Nuevos Quizzes Disponibles**

#### 🔧 Automation Testing
- **Selenium WebDriver** (30 preguntas, 45 min) - Automatización web
- **Java con Selenium** (20 preguntas, 50 min) - Integración avanzada
- **Cucumber BDD** (20 preguntas, 40 min) - Behavior Driven Development
- **Chrome DevTools para QA** (20 preguntas, 35 min) - Herramientas de desarrollo

#### 🌐 API Testing
- **Postman** (25 preguntas, 40 min) - Testing de APIs RESTful

#### ⚡ Performance Testing
- **JMeter** (25 preguntas, 45 min) - Pruebas de carga y rendimiento

#### 📚 Fundamentos
- **ISTQB Foundation Level v4.0** (40 preguntas, 60 min) - Certificación
- **Java Fundamentals** (30 preguntas, 40 min) - Programación básica

### 4. **Footer Profesional Mejorado**
- Diseño completo de 4 columnas
- Links a redes sociales (GitHub, LinkedIn, Twitter, YouTube)
- Secciones organizadas: Quizzes, Recursos, Empresa
- Copyright y mensaje de la comunidad

## 📁 Estructura del Proyecto

```
quizaptor/
├── index.html              # Página principal
├── css/
│   ├── base.css           # Estilos base compartidos
│   ├── home.css           # Estilos de la home
│   └── quiz.css           # Estilos del quiz (mejorados con checkboxes)
├── js/
│   ├── main.js            # JavaScript principal
│   └── quiz.js            # Lógica del quiz (con aleatorización y multi-selección)
├── data/
│   ├── ISTQB-Foundation-Level.js
│   ├── java-fundamentals-data.js
│   ├── selenium-quiz-data.js
│   ├── postman-quiz-data.js
│   ├── jmeter-quiz-data.js
│   ├── cucumber-quiz-data.js
│   ├── devtools-qa-quiz-data.js
│   └── java-selenium-quiz-data.js
├── assets/
│   └── q_logo.png
└── pages/
    └── quiz.html          # Página del quiz

```

## 🚀 Características Técnicas

### Aleatorización
La clase `QuizApp` implementa el algoritmo Fisher-Yates para:
- Mezclar el orden de las preguntas
- Mezclar las opciones de cada pregunta
- Mantener el tracking de respuestas correctas después del shuffle

### Selección Múltiple
- Campo `multipleAnswers: true` en las preguntas
- `correctAnswer` es un array para múltiples respuestas: `[0, 1, 2]`
- Validación especial que compara arrays ordenados

### Ejemplo de Pregunta de Selección Múltiple

```javascript
{
    id: 2,
    question: '¿Cuáles son localizadores válidos en Selenium?',
    options: [
        'By.id()',
        'By.className()',
        'By.xpath()',
        'By.cssSelector()'
    ],
    correctAnswer: [0, 1, 2, 3], // Todas son correctas
    explanation: 'Todos los mencionados son localizadores válidos...',
    multipleAnswers: true
}
```

### Ejemplo de Pregunta Simple

```javascript
{
    id: 1,
    question: '¿Qué es Selenium WebDriver?',
    options: [
        'Un navegador web',
        'Una herramienta de automatización',
        'Una base de datos',
        'Un servidor web'
    ],
    correctAnswer: 1, // Un solo índice
    explanation: 'Selenium WebDriver es una herramienta...',
    multipleAnswers: false
}
```

## 🎨 Mejoras de UI/UX

### Indicadores Visuales
- **Checkbox** (☑️) para preguntas de selección múltiple
- **Radio button** (⚪) para preguntas de respuesta única
- Banner azul indicando "Selección Múltiple" cuando aplica

### Estados de Respuesta en Revisión
- ✅ Verde: Respuesta correcta
- ❌ Rojo: Respuesta incorrecta seleccionada
- ✓ Borde verde: Respuesta correcta no seleccionada (en preguntas multi-select)

## 📝 Cómo Usar

1. **Abrir el proyecto**: Abre `index.html` en un navegador web
2. **Seleccionar un quiz**: Navega a la sección de quizzes y elige uno
3. **Responder preguntas**: 
   - Para respuesta única: Click en una opción
   - Para selección múltiple: Click en todas las opciones correctas
4. **Navegar**: Usa los botones Anterior/Siguiente o la paleta lateral
5. **Finalizar**: Click en "Finalizar Quiz" para ver resultados
6. **Revisar**: Click en "Revisar Respuestas" para ver explicaciones

## 🔧 Personalización

### Agregar un Nuevo Quiz

1. Crea un archivo en `/data/` con este formato:

```javascript
const miQuizData = {
    id: 'mi-quiz-id',
    title: 'Título del Quiz',
    description: 'Descripción',
    timeLimit: 45, // minutos
    passingScore: 70, // porcentaje
    questions: [
        // ... preguntas
    ]
};
```

2. Agrega el script en `pages/quiz.html`:
```html
<script src="../data/mi-quiz-data.js"></script>
```

3. Registra el quiz en `js/quiz.js`:
```javascript
const quizzes = {
    // ... otros quizzes
    'mi-quiz-id': miQuizData
};
```

4. Agrega una card en `index.html` dentro de `.quiz-grid`

## 🎯 Mejores Prácticas Implementadas

1. **Código Limpio**: Separación de concerns (data, logic, presentation)
2. **Responsive**: Funciona en desktop, tablet y móvil
3. **Accesibilidad**: Labels adecuados, contraste de colores
4. **Performance**: Algoritmos eficientes, sin manipulación innecesaria del DOM
5. **UX**: Feedback visual claro, navegación intuitiva

## 📊 Estadísticas del Proyecto

- **8 Quizzes** diferentes
- **500+ Preguntas** en total
- **Soporte bilingüe** (preparado para internacionalización)
- **100% Responsive**
- **0 Dependencias** externas (Vanilla JS)

## 🚀 Próximas Mejoras Sugeridas

1. Sistema de guardado de progreso (LocalStorage)
2. Modo de práctica vs modo examen
3. Análisis de áreas débiles
4. Comparación con otros usuarios
5. Exportar resultados a PDF
6. Timer por pregunta individual
7. Modo oscuro

## 📄 Licencia

Este proyecto es de código abierto para fines educativos.

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Hecho con ❤️ para la comunidad de QA Testing**
