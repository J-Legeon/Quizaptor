// selenium-quiz-data.js - Selenium WebDriver Quiz Questions

const seleniumQuizData = {
    id: 'selenium-fundamentals',
    title: 'Selenium WebDriver - Fundamentos',
    description: 'Quiz completo sobre Selenium WebDriver para automatización de pruebas web',
    timeLimit: 45, // minutes
    passingScore: 70, // percentage
    questions: [
        {
            id: 1,
            question: '¿Cuál es la principal diferencia entre Selenium WebDriver y Selenium RC?',
            options: [
                'WebDriver es más lento que RC',
                'WebDriver se comunica directamente con el navegador sin servidor intermedio',
                'RC soporta más navegadores que WebDriver',
                'WebDriver solo funciona con Java'
            ],
            correctAnswer: 1,
            explanation: 'Selenium WebDriver se comunica directamente con el navegador a través de las APIs nativas del navegador, eliminando la necesidad de un servidor Selenium como en RC.',
            multipleAnswers: false
        },
        {
            id: 2,
            question: '¿Cuáles de los siguientes son localizadores válidos en Selenium WebDriver?',
            options: [
                'By.id()',
                'By.className()',
                'By.xpath()',
                'By.cssSelector()'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todos los mencionados son localizadores válidos en Selenium WebDriver. Los más comunes son: id, className, xpath, cssSelector, name, linkText, partialLinkText, y tagName.',
            multipleAnswers: true
        },
        {
            id: 3,
            question: '¿Qué comando se utiliza para maximizar la ventana del navegador en Selenium?',
            options: [
                'driver.maximize()',
                'driver.manage().window().maximize()',
                'driver.window().maximize()',
                'driver.setMaximize()'
            ],
            correctAnswer: 1,
            explanation: 'El comando correcto es driver.manage().window().maximize() para maximizar la ventana del navegador.',
            multipleAnswers: false
        },
        {
            id: 4,
            question: '¿Cuál es la diferencia entre implicit wait y explicit wait?',
            options: [
                'Implicit wait se aplica a todos los elementos, explicit wait a elementos específicos',
                'Implicit wait es más rápido que explicit wait',
                'Explicit wait solo funciona con XPath',
                'No hay diferencia, son sinónimos'
            ],
            correctAnswer: 0,
            explanation: 'Implicit wait se aplica globalmente a todos los elementos del driver, mientras que explicit wait se usa para condiciones específicas en elementos particulares.',
            multipleAnswers: false
        },
        {
            id: 5,
            question: '¿Qué interfaz se debe implementar para crear un custom ExpectedCondition?',
            options: [
                'WebDriverWait',
                'ExpectedCondition',
                'Function',
                'Predicate'
            ],
            correctAnswer: 1,
            explanation: 'Para crear una condición de espera personalizada, se debe implementar la interfaz ExpectedCondition<T>.',
            multipleAnswers: false
        },
        {
            id: 6,
            question: '¿Cuáles son formas válidas de manejar múltiples ventanas en Selenium?',
            options: [
                'driver.switchTo().window()',
                'driver.getWindowHandles()',
                'driver.manage().windows().switchTo()',
                'driver.getWindowHandle()'
            ],
            correctAnswer: [0, 1, 3],
            explanation: 'switchTo().window(), getWindowHandles() y getWindowHandle() son métodos válidos. No existe driver.manage().windows().switchTo().',
            multipleAnswers: true
        },
        {
            id: 7,
            question: '¿Qué hace el método sendKeys() en Selenium?',
            options: [
                'Simula la escritura de texto en un elemento',
                'Envía comandos especiales al navegador',
                'Crea nuevas llaves de encriptación',
                'Configura los shortcuts del teclado'
            ],
            correctAnswer: 0,
            explanation: 'sendKeys() simula la entrada de texto del usuario en elementos como campos de texto, textarea, etc.',
            multipleAnswers: false
        },
        {
            id: 8,
            question: '¿Cuál es el propósito del Page Object Model (POM)?',
            options: [
                'Aumentar la velocidad de ejecución de las pruebas',
                'Mejorar la mantenibilidad y reutilización del código',
                'Reducir el uso de memoria',
                'Compilar el código más rápido'
            ],
            correctAnswer: 1,
            explanation: 'POM es un patrón de diseño que mejora la mantenibilidad y reutilización del código al crear una capa de abstracción entre las pruebas y la UI.',
            multipleAnswers: false
        },
        {
            id: 9,
            question: '¿Qué navegadores soporta Selenium WebDriver nativamente?',
            options: [
                'Chrome',
                'Firefox',
                'Safari',
                'Edge'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Selenium WebDriver soporta Chrome, Firefox, Safari, Edge, Internet Explorer y Opera mediante sus respectivos drivers.',
            multipleAnswers: true
        },
        {
            id: 10,
            question: '¿Cómo se maneja un Alert en Selenium?',
            options: [
                'driver.alert().accept()',
                'driver.switchTo().alert().accept()',
                'driver.manage().alert().accept()',
                'driver.handleAlert().accept()'
            ],
            correctAnswer: 1,
            explanation: 'Para manejar alerts se usa driver.switchTo().alert() seguido de métodos como accept(), dismiss() o getText().',
            multipleAnswers: false
        },
        {
            id: 11,
            question: '¿Qué es un WebElement en Selenium?',
            options: [
                'Un archivo de configuración',
                'Una representación de un elemento HTML en la página',
                'Un tipo de navegador',
                'Un servidor web'
            ],
            correctAnswer: 1,
            explanation: 'WebElement representa un elemento HTML/DOM en la página web con el que podemos interactuar.',
            multipleAnswers: false
        },
        {
            id: 12,
            question: '¿Cuáles son métodos válidos para seleccionar opciones en un dropdown?',
            options: [
                'selectByVisibleText()',
                'selectByValue()',
                'selectByIndex()',
                'selectByAttribute()'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'La clase Select proporciona selectByVisibleText(), selectByValue() y selectByIndex(). No existe selectByAttribute().',
            multipleAnswers: true
        },
        {
            id: 13,
            question: '¿Qué excepción se lanza cuando un elemento no se encuentra en el DOM?',
            options: [
                'ElementNotFoundException',
                'NoSuchElementException',
                'ElementNotVisibleException',
                'TimeoutException'
            ],
            correctAnswer: 1,
            explanation: 'NoSuchElementException se lanza cuando Selenium no puede encontrar un elemento con el localizador especificado.',
            multipleAnswers: false
        },
        {
            id: 14,
            question: '¿Cómo se ejecuta JavaScript en Selenium WebDriver?',
            options: [
                'driver.executeScript()',
                'JavascriptExecutor y executeScript()',
                'driver.runJavaScript()',
                'driver.eval()'
            ],
            correctAnswer: 1,
            explanation: 'Se usa JavascriptExecutor para castear el driver y luego ejecutar JavaScript con executeScript().',
            multipleAnswers: false
        },
        {
            id: 15,
            question: '¿Cuáles son características del modelo de Page Factory?',
            options: [
                'Usa @FindBy annotations',
                'Inicializa elementos con initElements()',
                'Reduce código boilerplate',
                'Solo funciona con XPath'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'Page Factory usa @FindBy annotations, initElements() para inicialización y reduce código repetitivo. Funciona con cualquier localizador.',
            multipleAnswers: true
        },
        {
            id: 16,
            question: '¿Qué hace driver.navigate().refresh()?',
            options: [
                'Recarga la página actual',
                'Navega a la página anterior',
                'Limpia las cookies',
                'Cierra la ventana actual'
            ],
            correctAnswer: 0,
            explanation: 'driver.navigate().refresh() recarga/refresca la página actual del navegador.',
            multipleAnswers: false
        },
        {
            id: 17,
            question: '¿Cómo se puede tomar un screenshot en Selenium?',
            options: [
                'driver.takeScreenshot()',
                'TakesScreenshot y getScreenshotAs()',
                'driver.capture()',
                'ScreenCapture.take()'
            ],
            correctAnswer: 1,
            explanation: 'Se usa la interfaz TakesScreenshot para castear el driver y luego getScreenshotAs() para capturar la pantalla.',
            multipleAnswers: false
        },
        {
            id: 18,
            question: '¿Cuáles son ventajas de usar CSS Selectors sobre XPath?',
            options: [
                'Generalmente más rápidos',
                'Sintaxis más simple para casos comunes',
                'Mejor rendimiento en la mayoría de navegadores',
                'Pueden navegar hacia padres fácilmente'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'CSS Selectors son generalmente más rápidos, tienen sintaxis más simple y mejor rendimiento. Sin embargo, no pueden navegar hacia elementos padres.',
            multipleAnswers: true
        },
        {
            id: 19,
            question: '¿Qué es un Fluent Wait en Selenium?',
            options: [
                'Una espera que nunca expira',
                'Una espera configurable con polling interval y excepciones a ignorar',
                'Una espera solo para elementos fluidos',
                'Una espera sin timeout'
            ],
            correctAnswer: 1,
            explanation: 'Fluent Wait es una espera altamente configurable que permite especificar el polling interval y qué excepciones ignorar mientras espera.',
            multipleAnswers: false
        },
        {
            id: 20,
            question: '¿Cómo se maneja un iframe en Selenium?',
            options: [
                'driver.frame().switch()',
                'driver.switchTo().frame()',
                'driver.manage().frame()',
                'driver.enterFrame()'
            ],
            correctAnswer: 1,
            explanation: 'Para cambiar el contexto a un iframe se usa driver.switchTo().frame() pasando el índice, nombre o WebElement del iframe.',
            multipleAnswers: false
        },
        {
            id: 21,
            question: '¿Cuáles son métodos de la interfaz Actions en Selenium?',
            options: [
                'moveToElement()',
                'dragAndDrop()',
                'doubleClick()',
                'rightClick()'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'Actions proporciona moveToElement(), dragAndDrop(), doubleClick() y contextClick(). No existe rightClick(), se usa contextClick().',
            multipleAnswers: true
        },
        {
            id: 22,
            question: '¿Qué significa "StaleElementReferenceException"?',
            options: [
                'El elemento está oculto',
                'El elemento ya no está en el DOM o ha sido modificado',
                'El elemento no tiene un ID válido',
                'El navegador se cerró'
            ],
            correctAnswer: 1,
            explanation: 'StaleElementReferenceException ocurre cuando un WebElement ya no está adjunto al DOM, generalmente después de un refresh o cambio en la página.',
            multipleAnswers: false
        },
        {
            id: 23,
            question: '¿Cómo se configura un timeout implícito de 10 segundos?',
            options: [
                'driver.timeout(10)',
                'driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)',
                'driver.setImplicitWait(10)',
                'driver.wait(10)'
            ],
            correctAnswer: 1,
            explanation: 'El timeout implícito se configura con driver.manage().timeouts().implicitlyWait(duration, TimeUnit).',
            multipleAnswers: false
        },
        {
            id: 24,
            question: '¿Cuáles son DesiredCapabilities comunes en Selenium?',
            options: [
                'browserName',
                'version/browserVersion',
                'platform',
                'headless'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'browserName, version/browserVersion y platform son capabilities estándar. "headless" se configura en las options del navegador, no como capability.',
            multipleAnswers: true
        },
        {
            id: 25,
            question: '¿Qué hace el método clear() en un WebElement?',
            options: [
                'Elimina el elemento del DOM',
                'Borra el contenido de un campo de texto',
                'Limpia los atributos del elemento',
                'Cierra el elemento'
            ],
            correctAnswer: 1,
            explanation: 'clear() borra el contenido de elementos editables como input y textarea.',
            multipleAnswers: false
        },
        {
            id: 26,
            question: '¿Cómo se obtiene el texto de un elemento?',
            options: [
                'element.getText()',
                'element.getInnerText()',
                'element.text()',
                'element.value()'
            ],
            correctAnswer: 0,
            explanation: 'getText() retorna el texto visible de un elemento, incluyendo sub-elementos.',
            multipleAnswers: false
        },
        {
            id: 27,
            question: '¿Cuáles son formas de esperar por un elemento visible?',
            options: [
                'ExpectedConditions.visibilityOf()',
                'ExpectedConditions.presenceOfElementLocated()',
                'ExpectedConditions.visibilityOfElementLocated()',
                'ExpectedConditions.elementToBeClickable()'
            ],
            correctAnswer: [0, 2],
            explanation: 'visibilityOf() y visibilityOfElementLocated() esperan que un elemento sea visible. presenceOfElementLocated() solo verifica presencia en DOM, elementToBeClickable() verifica que sea clickeable.',
            multipleAnswers: true
        },
        {
            id: 28,
            question: '¿Qué patrón de diseño se recomienda para organizar tests en Selenium?',
            options: [
                'Singleton Pattern',
                'Page Object Pattern',
                'Factory Pattern',
                'Observer Pattern'
            ],
            correctAnswer: 1,
            explanation: 'Page Object Pattern es el patrón de diseño recomendado para organizar tests de Selenium, separando la lógica de la página de los tests.',
            multipleAnswers: false
        },
        {
            id: 29,
            question: '¿Cómo se verifica si un elemento está habilitado?',
            options: [
                'element.isEnabled()',
                'element.enabled()',
                'element.checkEnabled()',
                'element.getEnabled()'
            ],
            correctAnswer: 0,
            explanation: 'isEnabled() retorna true si el elemento está habilitado y puede interactuar con él.',
            multipleAnswers: false
        },
        {
            id: 30,
            question: '¿Cuáles son características de Selenium Grid?',
            options: [
                'Permite ejecutar tests en paralelo',
                'Soporta múltiples navegadores y versiones',
                'Puede ejecutar en diferentes sistemas operativos',
                'Solo funciona con Java'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'Selenium Grid permite ejecución paralela, soporta múltiples navegadores/versiones y diferentes SO. Funciona con cualquier lenguaje soportado por Selenium.',
            multipleAnswers: true
        }
    ]
};
