# Tripleten web_project_around_express
## Descripción
Este proyecto es una aplicación desarrollada con **Node.js**, **Express**, y **MongoDB**, diseñada para ofrecer un servicio eficiente y escalable. El proyecto cuenta con un sistema de rutas bien definido para manejar diferentes operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

## Tecnologías Utilizadas
- Node.js
- Express
- MongoDB
- Mongoose (ODM para MongoDB)
- JWT para autenticación
- Bcrypt para encriptación de contraseñas

## Estructura del Proyecto
```
├── controllers
│   └── userController.js
│   └── productController.js
├── models
│   └── userModel.js
│   └── productModel.js
├── routes
│   └── userRoutes.js
│   └── productRoutes.js
├── middlewares
│   └── authMiddleware.js
├── config
│   └── db.js
├── app.js
└── package.json
```

## Rutas y Métodos HTTP

### Usuarios (/api/users)
| Método | Ruta          | Descripción                |
|---------|--------------|----------------------------|
| GET     | `/`          | Obtener todos los usuarios |
| GET     | `/:id`       | Obtener un usuario por ID  |
| POST    | `/register`  | Registrar un nuevo usuario |
| POST    | `/login`     | Iniciar sesión de usuario  |
| PUT     | `/:id`       | Actualizar usuario         |
| DELETE  | `/:id`       | Eliminar usuario           |

### Productos (/api/products)
| Método | Ruta          | Descripción                  |
|---------|--------------|------------------------------|
| GET     | `/`          | Obtener todos los productos  |
| GET     | `/:id`       | Obtener un producto por ID   |
| POST    | `/`          | Crear un nuevo producto      |
| PUT     | `/:id`       | Actualizar un producto       |
| DELETE  | `/:id`       | Eliminar un producto         |

## Instalación
1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar variables de entorno en un archivo `.env`:
   ```env
   MONGO_URI=tu_conexion_a_mongo
   JWT_SECRET=tu_clave_secreta
   ```
4. Ejecutar el proyecto:
   ```bash
   npm start
   ```


