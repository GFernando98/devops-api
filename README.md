# DevOps API Reto Final

API simple para manejo de notas con Node.js y Express. Contiene:

- CRUD parcial (`GET`, `POST`, `DELETE`) en memoria.
- Pruebas unitarias con Jest y reporte de cobertura.
- Linting con ESLint (Standard).
- Dockerfile funcional.
- Pipeline CI con GitHub Actions y análisis de seguridad Trivy.

## Uso local

```bash
npm install
npm run lint
npm test
npm start
```

## Docker

```bash
docker build -t devops-api .
docker run -p 3000:3000 devops-api
```

## CI/CD

Este proyecto corre:
- Linter (ESLint)
- Pruebas (Jest)
- Cobertura
- Trivy (escaneo de seguridad)

Ver archivo `.github/workflows/ci.yml`.