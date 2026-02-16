// cucumber-quiz-data.js - Cucumber BDD Quiz Questions

const cucumberQuizData = {
    id: 'cucumber-fundamentals',
    title: 'Cucumber - BDD Framework',
    description: 'Quiz sobre Cucumber y Behavior Driven Development',
    timeLimit: 40,
    passingScore: 70,
    questions: [
        {
            id: 1,
            question: '¿Qué es Cucumber?',
            options: [
                'Un framework de BDD para automatización de pruebas',
                'Una herramienta de CI/CD',
                'Un lenguaje de programación',
                'Una base de datos'
            ],
            correctAnswer: 0,
            explanation: 'Cucumber es un framework de BDD (Behavior Driven Development) que permite escribir pruebas en lenguaje natural.',
            multipleAnswers: false
        },
        {
            id: 2,
            question: '¿Qué es Gherkin?',
            options: [
                'Un IDE para Cucumber',
                'El lenguaje de dominio específico usado por Cucumber',
                'Un tipo de pepino',
                'Una librería de Java'
            ],
            correctAnswer: 1,
            explanation: 'Gherkin es el lenguaje readable por humanos usado para escribir escenarios de prueba en Cucumber.',
            multipleAnswers: false
        },
        {
            id: 3,
            question: '¿Cuáles son palabras clave de Gherkin?',
            options: [
                'Given',
                'When',
                'Then',
                'And/But'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Given (precondición), When (acción), Then (resultado esperado), And/But (conectores) son palabras clave principales de Gherkin.',
            multipleAnswers: true
        },
        {
            id: 4,
            question: '¿Qué extensión tienen los archivos Feature?',
            options: [
                '.feature',
                '.gherkin',
                '.cucumber',
                '.bdd'
            ],
            correctAnswer: 0,
            explanation: 'Los archivos de features en Cucumber usan la extensión .feature',
            multipleAnswers: false
        },
        {
            id: 5,
            question: '¿Qué es un Step Definition?',
            options: [
                'Una línea en el feature file',
                'El código Java/Ruby/etc que implementa los pasos de Gherkin',
                'Un tipo de assertion',
                'Una configuración de Cucumber'
            ],
            correctAnswer: 1,
            explanation: 'Step Definitions son métodos que contienen el código real que ejecuta cada paso descrito en Gherkin.',
            multipleAnswers: false
        },
        {
            id: 6,
            question: '¿Cuáles son componentes de un archivo Feature?',
            options: [
                'Feature',
                'Scenario',
                'Background',
                'Scenario Outline'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Un archivo .feature puede contener Feature (descripción), Scenarios, Background (pasos comunes) y Scenario Outlines (parametrización).',
            multipleAnswers: true
        },
        {
            id: 7,
            question: '¿Qué es un Scenario Outline?',
            options: [
                'Un resumen del escenario',
                'Un escenario parametrizado que se ejecuta múltiples veces con diferentes datos',
                'Un borrador de escenario',
                'Una plantilla HTML'
            ],
            correctAnswer: 1,
            explanation: 'Scenario Outline permite ejecutar el mismo escenario con diferentes conjuntos de datos usando Examples.',
            multipleAnswers: false
        },
        {
            id: 8,
            question: '¿Cuál es la sintaxis para parámetros en Scenario Outline?',
            options: [
                '<parameter>',
                '{{parameter}}',
                '{parameter}',
                '$parameter'
            ],
            correctAnswer: 0,
            explanation: 'En Scenario Outline, los parámetros se definen con <nombreParametro> y se reemplazan con valores de Examples.',
            multipleAnswers: false
        },
        {
            id: 9,
            question: '¿Qué es Background en Cucumber?',
            options: [
                'El color de fondo del reporte',
                'Pasos que se ejecutan antes de cada escenario en un feature',
                'Procesos en segundo plano',
                'Configuración del ambiente'
            ],
            correctAnswer: 1,
            explanation: 'Background contiene pasos que se ejecutan antes de cada escenario en el feature file, similar a un @Before.',
            multipleAnswers: false
        },
        {
            id: 10,
            question: '¿Cuáles son hooks disponibles en Cucumber?',
            options: [
                '@Before',
                '@After',
                '@BeforeStep',
                '@AfterStep'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Cucumber proporciona hooks para ejecutar código antes/después de escenarios y steps.',
            multipleAnswers: true
        },
        {
            id: 11,
            question: '¿Qué es un Tag en Cucumber?',
            options: [
                'Una etiqueta HTML',
                'Una anotación para categorizar y filtrar escenarios',
                'Un comentario',
                'Una variable'
            ],
            correctAnswer: 1,
            explanation: 'Tags (@nombre) permiten categorizar escenarios y ejecutar selectivamente tests usando filtros.',
            multipleAnswers: false
        },
        {
            id: 12,
            question: '¿Cuáles son formatos de reporte en Cucumber?',
            options: [
                'HTML',
                'JSON',
                'XML',
                'Pretty (consola)'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Cucumber soporta múltiples formatos de reportes: HTML, JSON, XML, Pretty, Progress, entre otros.',
            multipleAnswers: true
        },
        {
            id: 13,
            question: '¿Qué es el patrón Page Object con Cucumber?',
            options: [
                'Un antipatrón',
                'Separar la lógica de la página de los step definitions',
                'Un tipo de reporte',
                'Una configuración'
            ],
            correctAnswer: 1,
            explanation: 'Page Object Pattern separa la lógica de interacción con la UI en clases dedicadas, mejorando mantenibilidad.',
            multipleAnswers: false
        },
        {
            id: 14,
            question: '¿Cuáles son lenguajes soportados por Cucumber?',
            options: [
                'Java',
                'Ruby',
                'JavaScript',
                'Python'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'Cucumber soporta Java, Ruby, JavaScript (.js), entre otros. Para Python se usa Behave (similar a Cucumber).',
            multipleAnswers: true
        },
        {
            id: 15,
            question: '¿Qué es Data Tables en Cucumber?',
            options: [
                'Tablas de base de datos',
                'Una forma de pasar múltiples parámetros en un step',
                'Reportes en formato tabla',
                'Variables globales'
            ],
            correctAnswer: 1,
            explanation: 'Data Tables permiten pasar múltiples valores en formato tabla a un step definition.',
            multipleAnswers: false
        },
        {
            id: 16,
            question: '¿Qué hace el comando @CucumberOptions?',
            options: [
                'Configura la ejecución de Cucumber',
                'Define variables',
                'Crea reportes',
                'Instala plugins'
            ],
            correctAnswer: 0,
            explanation: '@CucumberOptions configura aspectos como ubicación de features, step definitions, plugins, tags, etc.',
            multipleAnswers: false
        },
        {
            id: 17,
            question: '¿Cuáles son atributos de @CucumberOptions?',
            options: [
                'features',
                'glue',
                'tags',
                'plugin'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'features (ubicación features), glue (step definitions), tags (filtros), plugin (reportes) son atributos comunes.',
            multipleAnswers: true
        },
        {
            id: 18,
            question: '¿Qué es el patrón AAA en BDD/Cucumber?',
            options: [
                'Arrange-Act-Assert',
                'Always-Ask-Anyone',
                'Add-And-Adjust',
                'All-At-Any'
            ],
            correctAnswer: 0,
            explanation: 'AAA (Arrange-Act-Assert) corresponde a Given-When-Then en BDD: preparar-actuar-verificar.',
            multipleAnswers: false
        },
        {
            id: 19,
            question: '¿Cuáles son mejores prácticas en Cucumber?',
            options: [
                'Mantener steps pequeños y reutilizables',
                'Usar lenguaje de negocio, no técnico',
                'Un escenario por funcionalidad',
                'Evitar lógica compleja en step definitions'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todas son mejores prácticas para mantener tests legibles, mantenibles y enfocados en el comportamiento.',
            multipleAnswers: true
        },
        {
            id: 20,
            question: '¿Qué es Cucumber-JVM?',
            options: [
                'Una máquina virtual',
                'La implementación de Cucumber para Java',
                'Un servidor',
                'Un compilador'
            ],
            correctAnswer: 1,
            explanation: 'Cucumber-JVM es la implementación de Cucumber para plataformas JVM (Java, Kotlin, Scala).',
            multipleAnswers: false
        }
    ]
};
