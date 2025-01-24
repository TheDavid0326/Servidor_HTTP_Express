# Proyecto de Servidor HTTP y Express

Este proyecto demuestra diferentes grados de implementación de servidores HTTP utilizando Node.js, desde una implementación básica con el módulo `http` hasta una implementación más avanzada con el framework `Express`.

## Funcionalidades

- **Servidor HTTP Básico**: Crea un servidor HTTP que maneja solicitudes simples.
- **Servidor con Express**: Mejora la implementación básica utilizando el framework `Express` para manejar rutas, middlewares y JSON.
- **Manejo de Errores**: Incluye manejo de errores como `404 Not Found` y `500 Internal Server Error`.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de desarrollo utilizada para construir las aplicaciones.
- **Módulo `http`**: Utilizado para crear un servidor HTTP básico.
- **Framework `Express`**: Utilizado para crear un servidor HTTP más avanzado y eficiente.
- **Middlewares**: Utilizados para manejar solicitudes y respuestas de manera más organizada.

- ## Aprendizajes Clave

- **Manejo de Solicitudes HTTP**: Cómo manejar solicitudes y respuestas HTTP usando Node.js y Express.
- **Uso de Middlewares**: Implementación de middlewares para manejar varias tareas en el flujo de solicitudes/respuestas.
- **Manejo de Errores**: Manejo de errores comunes como 404 y 500.
- **JSON en Express**: Uso de `express.json()` para manejar solicitudes y respuestas JSON de manera eficiente.

## Ejecución

Para ejecutar los servidores, usa los siguientes comandos en la terminal:

### Servidor HTTP Básico

```bash
$env:PORT=4000; node 1_http.js
```

### Servidor con Express
```bash
$env:PORT=1234; 3_express_json.js
```
