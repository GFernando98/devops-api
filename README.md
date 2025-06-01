# 🚀 DevOps API - Reto Final

API simple desarrollada con **Node.js** y **Express** para el reto final de DevOps. Permite gestionar:

- 🗒️ Notas
- 👤 Usuarios
- ✅ Tareas

Almacenamiento en memoria, sin necesidad de base de datos.

## 🧩 Características

- CRUD parcial (`GET`, `POST`, `DELETE`) para Notes, Users y Tasks.
- Pruebas unitarias con Jest y reporte de cobertura.
- Linting con ESLint (configuración Standard).
- Imagen Docker funcional.
- CI/CD con GitHub Actions.
- Escaneo de seguridad con Trivy.

---

## 🔌 Endpoints disponibles

### 🗒️ Notas

| Método | Ruta         | Descripción                     |
|--------|--------------|---------------------------------|
| GET    | `/notes`     | Lista todas las notas           |
| POST   | `/notes`     | Crea una nueva nota (`content`) |
| DELETE | `/notes/:id` | Elimina una nota por ID         |

### 👤 Usuarios

| Método | Ruta         | Descripción                     |
|--------|--------------|---------------------------------|
| GET    | `/users`     | Lista todos los usuarios        |
| POST   | `/users`     | Crea un nuevo usuario (`name`)  |

### ✅ Tareas

| Método | Ruta         | Descripción                                               |
|--------|--------------|-----------------------------------------------------------|
| GET    | `/tasks`     | Lista todas las tareas                                    |
| POST   | `/tasks`     | Crea una tarea (`title`, `userId`) asociada a un usuario  |

---

## 💻 Uso local

```bash
# Instalar dependencias
npm install

# Ejecutar el linter
npm run lint

# Ejecutar pruebas unitarias con cobertura
npm test

# Iniciar el servidor en localhost:3000
npm start

# Construir la imagen
docker build -t devops-api .

# Ejecutar el contenedor
docker run -p 3000:3000 devops-api
