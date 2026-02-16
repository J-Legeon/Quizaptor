// quiz-data.js - ISTQB Foundation Level v4.0 Quiz Questions

const istqbQuizData = {
    id: 'istqb-fundamentals',
    title: 'ISTQB Foundation Level v4.0',
    description: 'Quiz completo basado en el programa de estudio ISTQB Certified Tester Foundation Level',
    timeLimit: 60, // minutes
    passingScore: 65, // percentage
    questions: [
        {
            id: 1,
            question: '¿Cuál es el objetivo principal de la prueba de software?',
            options: [
                'Demostrar que el software no tiene defectos',
                'Evaluar la calidad del software y reducir el riesgo de fallos en operación',
                'Probar todo el código de manera exhaustiva',
                'Asegurar que el software cumple el 100% de los requisitos'
            ],
            correctAnswer: 1,
            explanation: 'La prueba evalúa la calidad del software y ayuda a reducir el riesgo de fallo en operación, pero no puede demostrar que no hay defectos.'
        },
        {
            id: 2,
            question: '¿Cuál de los siguientes NO es uno de los siete principios de prueba?',
            options: [
                'La prueba exhaustiva es posible',
                'La prueba temprana ahorra tiempo y dinero',
                'Los defectos se agrupan',
                'La prueba depende del contexto'
            ],
            correctAnswer: 0,
            explanation: 'La prueba exhaustiva es imposible. Es uno de los 7 principios que establece que probar todo (todas las combinaciones) no es factible.'
        },
        {
            id: 3,
            question: '¿Qué diferencia fundamental existe entre prueba estática y prueba dinámica?',
            options: [
                'La prueba estática requiere ejecutar el software',
                'La prueba estática no requiere ejecutar el software',
                'La prueba dinámica es más efectiva para encontrar todos los defectos',
                'La prueba estática solo se aplica al código fuente'
            ],
            correctAnswer: 1,
            explanation: 'La prueba estática (revisiones, análisis) no requiere ejecutar el software, mientras que la prueba dinámica sí requiere ejecución.'
        },
        {
            id: 4,
            question: '¿Cuál es la principal diferencia entre un error, un defecto y un fallo?',
            options: [
                'Son términos sinónimos que significan lo mismo',
                'Error es humano, defecto está en el código, fallo es el comportamiento incorrecto',
                'Error es en el diseño, defecto en el código, fallo en los requisitos',
                'No hay diferencia técnica entre ellos'
            ],
            correctAnswer: 1,
            explanation: 'Un error es una acción humana, un defecto es un problema en el código/documento, y un fallo es la manifestación del defecto durante la ejecución.'
        },
        {
            id: 5,
            question: 'En el contexto de TDD (Test-Driven Development), ¿cuál es el orden correcto de actividades?',
            options: [
                'Escribir código → Escribir prueba → Refactorizar',
                'Escribir prueba → Escribir código → Refactorizar',
                'Refactorizar → Escribir prueba → Escribir código',
                'Escribir código → Refactorizar → Escribir prueba'
            ],
            correctAnswer: 1,
            explanation: 'En TDD, primero se escribe la prueba (que falla), luego el código mínimo para que pase, y finalmente se refactoriza.'
        },
        {
            id: 6,
            question: '¿Qué representa el concepto de "Shift-left" en las pruebas?',
            options: [
                'Realizar las pruebas más tarde en el ciclo de desarrollo',
                'Mover las actividades de prueba más temprano en el SDLC',
                'Cambiar el equipo de pruebas a la izquierda de la oficina',
                'Reducir el número de probadores en el proyecto'
            ],
            correctAnswer: 1,
            explanation: 'Shift-left significa mover las actividades de prueba hacia las fases tempranas del SDLC para encontrar defectos antes y reducir costos.'
        },
        {
            id: 7,
            question: '¿Cuál es el propósito principal de la prueba de componente (unitaria)?',
            options: [
                'Validar el sistema completo con el usuario final',
                'Verificar el comportamiento de componentes individuales de forma aislada',
                'Probar la integración entre diferentes sistemas',
                'Evaluar el rendimiento del sistema completo'
            ],
            correctAnswer: 1,
            explanation: 'La prueba de componente verifica el comportamiento de partes individuales del software de forma aislada, típicamente con acceso al código.'
        },
        {
            id: 8,
            question: '¿Qué tipo de prueba de integración combina primero todos los componentes y luego los prueba como un todo?',
            options: [
                'Integración incremental',
                'Integración Big Bang',
                'Integración descendente (top-down)',
                'Integración ascendente (bottom-up)'
            ],
            correctAnswer: 1,
            explanation: 'La integración Big Bang combina todos los componentes simultáneamente y los prueba juntos, en contraste con enfoques incrementales.'
        },
        {
            id: 9,
            question: '¿Cuál es la diferencia entre prueba de sistema y prueba de aceptación?',
            options: [
                'No hay diferencia, son lo mismo',
                'Prueba de sistema verifica el sistema completo, aceptación valida si cumple necesidades del usuario',
                'Prueba de sistema es manual, aceptación es automatizada',
                'Prueba de aceptación se hace antes que la de sistema'
            ],
            correctAnswer: 1,
            explanation: 'La prueba de sistema verifica el comportamiento del sistema completo, mientras que la de aceptación valida si satisface las necesidades del negocio/usuario.'
        },
        {
            id: 10,
            question: '¿Qué son las pruebas no funcionales?',
            options: [
                'Pruebas que verifican que el sistema no funciona',
                'Pruebas de características como rendimiento, usabilidad, seguridad',
                'Pruebas que no requieren casos de prueba',
                'Pruebas realizadas sin documentación'
            ],
            correctAnswer: 1,
            explanation: 'Las pruebas no funcionales evalúan características de calidad como rendimiento, usabilidad, seguridad, fiabilidad, etc.'
        },
        {
            id: 11,
            question: '¿Cuál es el propósito de la prueba de regresión?',
            options: [
                'Probar nuevas funcionalidades añadidas',
                'Confirmar que cambios no han causado efectos adversos en áreas no modificadas',
                'Regresar a versiones anteriores del software',
                'Probar solo los defectos encontrados anteriormente'
            ],
            correctAnswer: 1,
            explanation: 'La prueba de regresión verifica que los cambios o correcciones no han introducido nuevos defectos en partes no modificadas del sistema.'
        },
        {
            id: 12,
            question: '¿Qué es una revisión informal en prueba estática?',
            options: [
                'Una revisión sin ningún proceso o estructura',
                'Una revisión sin seguir un proceso formal documentado, pero con algún propósito',
                'Una revisión realizada solo por personas sin experiencia',
                'Una revisión que siempre encuentra menos defectos'
            ],
            correctAnswer: 1,
            explanation: 'Una revisión informal no sigue un proceso formal documentado pero tiene un propósito definido, como obtener retroalimentación rápida.'
        },
        {
            id: 13,
            question: '¿Cuál es la principal diferencia entre un walkthrough y una inspección?',
            options: [
                'El walkthrough es dirigido por el autor, la inspección es formal con roles definidos',
                'El walkthrough es solo para código, la inspección para documentos',
                'La inspección se hace al principio, el walkthrough al final',
                'No hay diferencia entre ellos'
            ],
            correctAnswer: 0,
            explanation: 'En un walkthrough el autor guía la sesión, mientras que la inspección es más formal con roles definidos y checklist específicas.'
        },
        {
            id: 14,
            question: 'En la técnica de partición de equivalencia, ¿qué representa una clase de equivalencia?',
            options: [
                'Un grupo de casos de prueba que producen el mismo resultado',
                'Un conjunto de valores de entrada que se espera sean tratados de la misma manera',
                'Todas las posibles combinaciones de entrada',
                'Solo los valores límite de entrada'
            ],
            correctAnswer: 1,
            explanation: 'Una clase de equivalencia es un conjunto de valores que se espera sean procesados de la misma manera por el sistema.'
        },
        {
            id: 15,
            question: '¿Qué valores se prueban específicamente en el análisis de valores límite?',
            options: [
                'Todos los valores posibles del rango',
                'Valores en los bordes y justo fuera de las particiones de equivalencia',
                'Solo los valores máximos',
                'Valores aleatorios dentro del rango'
            ],
            correctAnswer: 1,
            explanation: 'El análisis de valores límite prueba específicamente los valores en los bordes y justo fuera de los límites de las particiones de equivalencia.'
        },
        {
            id: 16,
            question: '¿Cuándo es más apropiado usar tablas de decisión?',
            options: [
                'Cuando hay múltiples condiciones que resultan en diferentes acciones',
                'Solo para probar interfaces de usuario',
                'Únicamente en pruebas de rendimiento',
                'Solo cuando hay una condición simple'
            ],
            correctAnswer: 0,
            explanation: 'Las tablas de decisión son ideales cuando hay combinaciones de condiciones (lógica compleja) que resultan en diferentes acciones.'
        },
        {
            id: 17,
            question: '¿Qué prueba la técnica de transición de estados?',
            options: [
                'El rendimiento del sistema bajo carga',
                'El comportamiento del sistema basado en estados y transiciones válidas/inválidas',
                'Solo la interfaz de usuario',
                'Únicamente defectos de seguridad'
            ],
            correctAnswer: 1,
            explanation: 'La prueba de transición de estados verifica que el sistema maneje correctamente los estados y las transiciones válidas e inválidas entre ellos.'
        },
        {
            id: 18,
            question: '¿Qué mide la cobertura de sentencias (statement coverage)?',
            options: [
                'El porcentaje de sentencias ejecutadas por las pruebas',
                'El número total de sentencias en el código',
                'Solo las sentencias con defectos',
                'Las sentencias no ejecutadas únicamente'
            ],
            correctAnswer: 0,
            explanation: 'La cobertura de sentencias mide el porcentaje de sentencias ejecutables del código que han sido ejecutadas por las pruebas.'
        },
        {
            id: 19,
            question: '¿Qué tipo de cobertura es generalmente más exhaustiva?',
            options: [
                'Cobertura de sentencias',
                'Cobertura de decisiones/ramas',
                'Ambas proporcionan el mismo nivel',
                'Ninguna es exhaustiva'
            ],
            correctAnswer: 1,
            explanation: 'La cobertura de decisiones/ramas es más exhaustiva que la de sentencias, ya que requiere que cada rama de cada decisión sea ejecutada.'
        },
        {
            id: 20,
            question: '¿Qué es la prueba exploratoria?',
            options: [
                'Prueba sin ningún plan ni estructura',
                'Diseño, ejecución y evaluación simultáneos de pruebas basados en aprendizaje continuo',
                'Solo explorar el sistema sin reportar defectos',
                'Prueba realizada solo por usuarios finales'
            ],
            correctAnswer: 1,
            explanation: 'La prueba exploratoria implica diseñar, ejecutar y evaluar pruebas simultáneamente, aprendiendo sobre el sistema durante la prueba.'
        },
        {
            id: 21,
            question: 'En ATDD (Acceptance Test-Driven Development), ¿cuándo se crean los criterios de aceptación?',
            options: [
                'Después de la implementación',
                'Durante la fase de diseño, antes de la implementación',
                'Solo al final del proyecto',
                'No se crean criterios en ATDD'
            ],
            correctAnswer: 1,
            explanation: 'En ATDD, los criterios de aceptación se crean durante las discusiones de diseño, antes de la implementación, típicamente usando ejemplos.'
        },
        {
            id: 22,
            question: '¿Qué formato común se usa para escribir historias de usuario?',
            options: [
                'Como [rol], quiero [característica], para que [beneficio]',
                'El usuario debe poder hacer [acción]',
                'El sistema deberá [requisito]',
                'Dado [contexto], cuando [acción], entonces [resultado]'
            ],
            correctAnswer: 0,
            explanation: 'El formato común de historias de usuario es: Como [rol], quiero [característica], para que [beneficio]. La opción D es formato Gherkin para criterios de aceptación.'
        },
        {
            id: 23,
            question: '¿Qué es un riesgo de producto en el contexto de pruebas?',
            options: [
                'Riesgo relacionado con el proceso de desarrollo',
                'Riesgo de que el producto pueda fallar o no satisfacer necesidades legítimas',
                'Riesgo de perder el código fuente',
                'Riesgo de que el equipo abandone el proyecto'
            ],
            correctAnswer: 1,
            explanation: 'Un riesgo de producto se relaciona con las características de calidad del producto, como que pueda fallar o no satisfacer las necesidades.'
        },
        {
            id: 24,
            question: '¿Qué es un riesgo de proyecto?',
            options: [
                'Riesgo de defectos en el producto',
                'Riesgo que afecta la capacidad del proyecto de lograr sus objetivos',
                'Riesgo de fallo del sistema en producción',
                'Riesgo relacionado solo con el presupuesto'
            ],
            correctAnswer: 1,
            explanation: 'Un riesgo de proyecto afecta la capacidad del proyecto para alcanzar sus objetivos, como problemas de personal, presupuesto, cronograma.'
        },
        {
            id: 25,
            question: '¿Cuál es el propósito principal de la estimación de pruebas?',
            options: [
                'Reducir el número de probadores',
                'Calcular el esfuerzo, tiempo y costo de las actividades de prueba',
                'Eliminar la necesidad de planificación',
                'Solo para satisfacer a la gerencia'
            ],
            correctAnswer: 1,
            explanation: 'La estimación de pruebas busca calcular el esfuerzo, tiempo y costo necesarios para realizar las actividades de prueba planificadas.'
        },
        {
            id: 26,
            question: '¿Qué información típicamente incluye un informe de defecto?',
            options: [
                'Solo el nombre del defecto',
                'Título, descripción, pasos para reproducir, resultado esperado y actual, severidad, prioridad',
                'Únicamente quién lo encontró',
                'Solo la fecha de creación'
            ],
            correctAnswer: 1,
            explanation: 'Un informe de defecto completo incluye identificador, título, descripción, pasos para reproducir, resultados esperado/actual, severidad, prioridad, estado, etc.'
        },
        {
            id: 27,
            question: '¿Qué diferencia hay entre severidad y prioridad de un defecto?',
            options: [
                'Son lo mismo',
                'Severidad es el impacto técnico, prioridad es la urgencia de corrección',
                'Severidad la define el probador, prioridad no se usa',
                'Prioridad es siempre mayor que severidad'
            ],
            correctAnswer: 1,
            explanation: 'Severidad indica el impacto técnico del defecto, mientras que prioridad indica la urgencia con la que debe ser corregido (decisión de negocio).'
        },
        {
            id: 28,
            question: '¿Qué es la gestión de configuración en el contexto de pruebas?',
            options: [
                'Configurar las herramientas de prueba',
                'Disciplina para identificar, controlar y rastrear productos de trabajo y cambios',
                'Solo hacer respaldos del código',
                'Configurar el ambiente de pruebas'
            ],
            correctAnswer: 1,
            explanation: 'La gestión de configuración es una disciplina para identificar, controlar, rastrear y auditar productos de trabajo (testware, código, etc.) y sus cambios.'
        },
        {
            id: 29,
            question: '¿Cuál es un beneficio clave de la automatización de pruebas?',
            options: [
                'Elimina completamente la necesidad de pruebas manuales',
                'Reduce el esfuerzo de pruebas repetitivas y permite más tiempo para pruebas complejas',
                'Encuentra todos los defectos automáticamente',
                'No requiere mantenimiento'
            ],
            correctAnswer: 1,
            explanation: 'La automatización reduce el esfuerzo en pruebas repetitivas (como regresión), liberando tiempo para pruebas que requieren análisis humano.'
        },
        {
            id: 30,
            question: '¿Qué tipo de herramienta se usa para rastrear defectos y requerimientos?',
            options: [
                'Herramienta de ejecución de pruebas',
                'Herramienta de gestión de pruebas y defectos',
                'Herramienta de análisis estático',
                'Herramienta de pruebas de rendimiento'
            ],
            correctAnswer: 1,
            explanation: 'Las herramientas de gestión de pruebas y defectos rastrean casos de prueba, ejecuciones, defectos y frecuentemente requisitos (trazabilidad).'
        },
        {
            id: 31,
            question: '¿Cuál es un riesgo común de la automatización de pruebas?',
            options: [
                'Mejora la cobertura de pruebas',
                'Expectativas poco realistas sobre beneficios y esfuerzo de mantenimiento',
                'Acelera la ejecución de pruebas',
                'Proporciona resultados consistentes'
            ],
            correctAnswer: 1,
            explanation: 'Un riesgo común es tener expectativas poco realistas sobre los beneficios y subestimar el esfuerzo de creación y mantenimiento de scripts.'
        },
        {
            id: 32,
            question: '¿Qué actividad de prueba busca evaluar si el objeto de prueba está listo para pasar a la siguiente fase?',
            options: [
                'Análisis de prueba',
                'Diseño de prueba',
                'Ejecución de prueba',
                'Criterios de salida/definición de terminado'
            ],
            correctAnswer: 3,
            explanation: 'Los criterios de salida (exit criteria) o definición de terminado (definition of done) establecen las condiciones para considerar completa una actividad.'
        },
        {
            id: 33,
            question: 'En DevOps, ¿qué práctica de prueba es fundamental?',
            options: [
                'Realizar todas las pruebas manualmente',
                'Integración continua y entrega continua con pruebas automatizadas',
                'Probar solo al final del desarrollo',
                'Eliminar las pruebas de regresión'
            ],
            correctAnswer: 1,
            explanation: 'DevOps enfatiza CI/CD (Integración Continua/Entrega Continua) con pruebas automatizadas integradas en el pipeline de desarrollo.'
        },
        {
            id: 34,
            question: '¿Qué propósito tienen las retrospectivas en metodologías ágiles?',
            options: [
                'Solo revisar el código',
                'Reflexionar sobre el proceso y encontrar mejoras para la próxima iteración',
                'Planificar el siguiente sprint completo',
                'Reportar defectos al cliente'
            ],
            correctAnswer: 1,
            explanation: 'Las retrospectivas permiten al equipo reflexionar sobre lo que funcionó bien y qué mejorar, implementando mejoras continuas en el proceso.'
        },
        {
            id: 35,
            question: '¿Qué técnica de caja blanca examina cada condición independiente en una decisión?',
            options: [
                'Cobertura de sentencias',
                'Cobertura de decisiones',
                'Cobertura de condiciones',
                'Cobertura de caminos'
            ],
            correctAnswer: 2,
            explanation: 'La cobertura de condiciones examina que cada condición booleana individual en una decisión haya sido evaluada como verdadera y falsa.'
        },
        {
            id: 36,
            question: '¿Cuál es el objetivo del análisis de causa raíz de defectos?',
            options: [
                'Solo documentar el defecto',
                'Identificar la causa fundamental para prevenir defectos similares en el futuro',
                'Culpar a quien causó el defecto',
                'Cerrar el defecto rápidamente'
            ],
            correctAnswer: 1,
            explanation: 'El análisis de causa raíz busca identificar la razón fundamental de los defectos para implementar mejoras de proceso y prevenir defectos similares.'
        },
        {
            id: 37,
            question: '¿Qué representa el término "testware"?',
            options: [
                'Solo el software bajo prueba',
                'Todos los artefactos producidos durante el proceso de prueba',
                'Únicamente los casos de prueba',
                'Solo las herramientas de prueba'
            ],
            correctAnswer: 1,
            explanation: 'Testware incluye todos los productos de trabajo creados durante la prueba: plan, casos, scripts, datos, informes, etc.'
        },
        {
            id: 38,
            question: 'En BDD (Behavior-Driven Development), ¿qué formato se usa típicamente para escribir escenarios?',
            options: [
                'Como [rol], quiero [característica]',
                'Dado [contexto], Cuando [acción], Entonces [resultado]',
                'Si [condición], entonces [acción]',
                'Requisito: [descripción]'
            ],
            correctAnswer: 1,
            explanation: 'BDD usa el formato Gherkin: Dado (Given) [contexto], Cuando (When) [acción], Entonces (Then) [resultado esperado].'
        },
        {
            id: 39,
            question: '¿Qué es un oráculo de prueba?',
            options: [
                'Una herramienta de gestión de pruebas',
                'Fuente para determinar los resultados esperados para comparar con los reales',
                'Un tipo de defecto',
                'Una técnica de diseño de pruebas'
            ],
            correctAnswer: 1,
            explanation: 'Un oráculo de prueba es cualquier fuente (especificación, sistema existente, usuario experto) que determina los resultados esperados de las pruebas.'
        },
        {
            id: 40,
            question: '¿Cuál es la diferencia principal entre prueba de confirmación y prueba de regresión?',
            options: [
                'No hay diferencia entre ellas',
                'Confirmación verifica que un defecto fue corregido; regresión verifica que no se introdujeron nuevos defectos',
                'Confirmación es automatizada, regresión es manual',
                'Regresión solo prueba nuevas funcionalidades'
            ],
            correctAnswer: 1,
            explanation: 'La prueba de confirmación verifica que un defecto específico fue corregido, mientras que la de regresión verifica que no se introdujeron efectos adversos.'
        }
    ]
};