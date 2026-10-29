# Movie Explorer

Aplicación web en React que consume la API de [The Movie Database (TMDB)](https://developer.themoviedb.org/docs). Permite ver las películas populares, buscar por título y gestionar una lista de favoritos que se guarda en `localStorage`.

## Tecnologías

- React + Vite
- React Router
- Context API

## Puesta en marcha

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Crear un archivo `.env` en la raíz (puedes copiar `.env.example`) con tu API Key de TMDB:

   ```
   VITE_TMDB_API_KEY=
   ```

3. Arrancar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## Estructura

```
src/
├── App.jsx                 # Rutas y provider del contexto
├── main.jsx                # Punto de entrada (BrowserRouter)
├── components/
│   ├── NavBar.jsx          # Barra de navegación fija
│   └── MovieCard.jsx       # Tarjeta de película con botón de favorito
├── pages/
│   ├── Home.jsx            # Populares + búsqueda
│   └── Favorites.jsx       # Lista de favoritos
├── contexts/
│   └── MovieContext.jsx    # Estado global de favoritos + useMovieContext
├── services/
│   └── api.js              # Llamadas a la API de TMDB
└── css/                    # Estilos por componente
```
