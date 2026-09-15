# Wild Horizons

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-development-orange.svg)
![API Version](https://img.shields.io/badge/API-v1.0-purple.svg)

Explore destinos turísticos ao redor do mundo através de uma API REST simples, rápida e fácil de consumir.


</div>

---


O **Wild Horizons** foi desenvolvida para disponibilizar informações sobre lugares e destinos turísticos ao redor do mundo.

Pode ser utilizada por aplicações que precisam consumir dados relacionados a:

- Destinos turísticos
- Países e continentes
- Pontos de interesse
- Viagens e turismo
- Informações culturais e geográficas

Foco em simplicidade, rápidez e fácilidade de consumir dados, permitindo que diferentes aplicações possam usar.

---

## Tecnologia utilizada

- Node.js
- Javascript

---

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- npm, que normalmente é instalado junto com o Node.js
- Git

Para verificar as versões instaladas:

```
node --version
npm --version
git --version
```

Clone o projeto, acesse o projeto e instale as dependencias:

```
git clone https://github.com/seu-usuario/wild-horizons.git
cd wild-horizons
npm install
```

Acesse a API em:
```
http://localhost:8000/api
```

## Endpoints

### Métodos Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api` | Retorna **todos** os lugares turísticos |
| `GET` | `/api/country/value` | Retorna informações sobre um **país específico** |
| `GET` | `/api/continent/value` | Retorna informações sobre um **continente específico** |
| `GET` | `/api?country=value&continent=value&is_open_to_public=true or false` | Retorna resultados com **filtros aplicados** via query params |

---

## Contato

Dúvidas e solicitações de melhoria podem ser enviadas para luiz.felipe.s@protonmail.com, ou fique a vontade para fazer um **Pull Request**.
