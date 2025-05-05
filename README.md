# Freak Dictionary

Este proyecto es una aplicación de diccionario que utiliza MongoDB como base de datos.

## Requisitos Previos

- Docker
- Docker Compose

## Configuración del Proyecto

1. Clona este repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd node-cli-dictionary
```

2. Inicia los servicios usando Docker Compose:
```bash
docker-compose up -d
```

## Configuración de la Base de Datos

El proyecto utiliza MongoDB con las siguientes credenciales por defecto:
- Usuario: admin
- Contraseña: password
- Puerto: 27017

## Estructura del Proyecto

```
project/
├── docker-compose.yml
└── README.md
```

## Uso

Una vez que los servicios estén en funcionamiento, puedes acceder a la base de datos MongoDB a través del puerto 27017.

### Ejemplos de Uso

1. Agregar una nueva palabra al diccionario:
```bash
node index.js add palabra "definición de la palabra"
```

2. Buscar una palabra en el diccionario:
```bash
node index.js search palabra
```

3. Listar todas las palabras en el diccionario:
```bash
node index.js list
```

4. Eliminar una palabra del diccionario:
```bash
node index.js delete palabra
```

5. Actualizar la definición de una palabra:
```bash
node index.js update palabra "nueva definición"
```

Cada comando tiene opciones adicionales que puedes ver usando la opción --help:
```bash
node index.js --help
```

## Detener los Servicios

Para detener los servicios, ejecuta:
```bash
docker-compose down
```
