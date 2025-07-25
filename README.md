# Sintax-PUG

Un boilerplate modular para desarrollo front-end con PUG/JADE, enfocado en la creación de sitios web estáticos pre-compilados.

## Descripción del Proyecto

Este boilerplate proporciona una arquitectura estructurada para el desarrollo front-end utilizando el motor de plantillas PUG. Está diseñado siguiendo principios de modularidad, reutilización y separación de responsabilidades, permitiendo un flujo de trabajo eficiente y organizado.

Una característica distintiva de este proyecto es el uso de la compatibilidad de HTML con PUG, donde solo los elementos específicos de PUG utilizan su sintaxis nativa, mientras que el resto del contenido se escribe utilizando bloques HTML estándar dentro de los archivos PUG.

La arquitectura facilita el desarrollo local con compilación automática y está optimizada para el despliegue de archivos estáticos en entornos de producción con servidores web de alto rendimiento.

## Arquitectura del Proyecto

```
/
├── assets/                  # Recursos estáticos compilados
│   ├── css/                 # Estilos
│   ├── img/                 # Recursos gráficos
│   │   └── brands/          # Identidad visual
│   └── js/                  # Scripts
│       └── custom/          # Scripts personalizados
├── src/                     # Código fuente
│   ├── components/          # Componentes modulares
│   ├── data/                # Gestión de datos
│   │   └── collections/     # Colecciones de datos estructurados
│   ├── functions/           # Lógica funcional
│   │   └── utilities/       # Funciones de utilidad
│   ├── includes/            # Fragmentos estructurales
│   ├── layouts/             # Plantillas base
│   ├── plugins/             # Integraciones externas
│   └── views/               # Páginas y vistas
│       └── sections/        # Secciones específicas
├── index.html               # Punto de entrada compilado
└── prepros-6.config         # Configuración de compilación
```

## Principios Arquitectónicos

- **Modularidad**: Separación clara de responsabilidades en componentes independientes y reutilizables.
- **Gestión de Datos Centralizada**: Sistema para administrar datos globales y específicos de manera estructurada.
- **Abstracción Funcional**: Encapsulamiento de lógica en funciones utilitarias reutilizables.
- **Compilación Eficiente**: Proceso automatizado de transformación de código fuente a archivos estáticos optimizados.
- **Separación de Entornos**: Clara distinción entre desarrollo local y despliegue en producción.
- **Sintaxis Híbrida**: Uso de bloques HTML estándar dentro de archivos PUG, aprovechando la compatibilidad de HTML con PUG para mantener la claridad del código.

## Capas Tecnológicas

- **Capa de Plantillas**: Sistema de generación de HTML basado en componentes.
- **Capa de Procesamiento**: Herramientas de compilación y transformación de archivos.
- **Capa de Despliegue**: Configuración para servidores web de alto rendimiento.
- **Capa de Interactividad**: Funcionalidad del lado del cliente.
- **Capa de Presentación**: Estilos y diseño visual.

## Ciclo de Desarrollo

1. **Fase de Desarrollo**:
   - Creación y modificación de archivos fuente en la estructura `src/`.
   - Compilación automática de cambios mediante el sistema de procesamiento.
   - Visualización en tiempo real con servidor de desarrollo integrado.

2. **Fase de Compilación**:
   - Transformación de archivos fuente a formatos finales según configuración.
   - Generación de estructura de salida con rutas personalizadas.
   - Optimización de recursos para rendimiento.

3. **Fase de Despliegue**:
   - Transferencia de archivos compilados al entorno de producción.
   - Configuración del servidor web para servir archivos estáticos.
   - Optimización de entrega de contenido al usuario final.

## Sistema de Compilación

El sistema de compilación se configura mediante un archivo de configuración centralizado que define:

- Rutas de entrada y salida para los archivos fuente.
- Reglas de transformación para diferentes tipos de archivos.
- Configuración del entorno de desarrollo local.
- Opciones de optimización para archivos compilados.

## Patrones de Implementación

### Componentes Modulares

```pug
// Implementación de componentes reutilizables
+component(param1, param2)
```

### Sistema de Datos

```pug
// Acceso al sistema centralizado de datos
<p>#{variable_global}</p>
```

### Utilidades Funcionales

```pug
// Implementación de funciones utilitarias
<p>#{stringUtility("valor de entrada")}</p>
<p>#{formatUtility("valor para formatear")}</p>
<p>#{calculationUtility(numericValue)}</p>
```

## Enfoque de Sintaxis

Este proyecto aprovecha la compatibilidad de HTML con PUG para simplificar el desarrollo:

### Uso de HTML Estándar

```pug
// Bloques HTML estándar dentro de archivos PUG
<div class="container">
    <h1>Título de la página</h1>
    <p>Contenido en HTML estándar</p>
</div>
```

### Uso de Características PUG

```pug
// Características específicas de PUG
include ../includes/head

+component(param1, param2)

- const variable = 'valor'
<p>Valor dinámico: #{variable}</p>
```

Esta combinación permite aprovechar las ventajas de PUG (inclusiones, mixins, variables) mientras se mantiene la familiaridad de la sintaxis HTML para la estructura principal del contenido.

## Implementación

1. **Requisitos del Sistema**:
   - Sistema de compilación compatible
   - Sistema de control de versiones
   - Entorno de servidor web para producción

2. **Configuración de Desarrollo**:
   - Clonar o descargar el boilerplate
   - Configurar herramienta de compilación
   - Iniciar entorno de desarrollo local

3. **Configuración de Producción**:
   - Configurar servidor web
   - Implementar estrategia de despliegue
   - Optimizar entrega de contenido estático

## Configuración y Uso con Prepros Pro 6

Para utilizar este proyecto con Prepros Pro 6, siga estos pasos:

1. **Configuración Inicial**:
   - Arrastre la carpeta completa del proyecto a la interfaz de Prepros Pro 6.
   - Prepros detectará automáticamente la configuración desde el archivo `prepros-6.config`.

2. **Proceso de Compilación Manual**:
   - A medida que se generan nuevas rutas a través de carpetas, es necesario compilar manualmente los archivos PUG correspondientes.
   - Los archivos en las siguientes carpetas requieren compilación manual cuando se crean o modifican:
     - `src/views/category/`: Páginas de categorías del sitio
     - `src/views/single/`: Páginas únicas como sobre-nosotros, contacto, etc.

3. **Ejemplos de Páginas que Requieren Compilación Manual**:
   - Páginas de categoría: blog, productos, servicios, etc.
   - Páginas únicas: sobre-nosotros, contacto, términos-y-condiciones, políticas-de-privacidad, etc.

4. **Proceso de Compilación**:
   - Para cada nueva página, haga clic derecho en el archivo PUG correspondiente en Prepros.
   - Seleccione "Compile" para generar el archivo HTML.
   - Los archivos se compilarán siguiendo la estructura definida en `prepros-6.config`, generalmente con el nombre `index.html` en la carpeta de destino.

Este proceso asegura que todas las páginas del sitio se compilen correctamente y mantengan la estructura de rutas adecuada para su despliegue en producción.

## Extensibilidad

El boilerplate está diseñado para ser extendido mediante:

1. Creación de nuevos componentes modulares
2. Ampliación del sistema de datos
3. Adición de nuevas funciones utilitarias
4. Integración con sistemas externos
5. Personalización de plantillas base


## Información Adicional

Este boilerplate fue desarrollado como una solución arquitectónica para la creación eficiente de sitios web estáticos con un enfoque en modularidad y mantenibilidad.

## Licencia

Este proyecto está disponible como código abierto bajo la licencia [MIT](https://opensource.org/licenses/MIT).
