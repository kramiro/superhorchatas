# Super Horchatas — landing page

Landing estática y responsive, lista para GitHub Pages o Cloudflare Pages.

## Publicar en GitHub

1. Crea un repositorio nuevo en GitHub.
2. Sube todos los archivos y carpetas de este proyecto, no solamente el contenido de `dist`.
3. Conserva la estructura de carpetas.

## Conectar con Cloudflare Pages

1. En Cloudflare, entra a **Workers & Pages** y selecciona **Create application**.
2. Elige **Pages** y **Connect to Git**.
3. Autoriza GitHub y selecciona el repositorio de Super Horchatas.
4. Configura el proyecto así:
   - Framework preset: `None`
   - Build command: dejar vacío
   - Build output directory: `dist`
5. Guarda y despliega.

Cloudflare publicará automáticamente una nueva versión cada vez que se actualice la rama principal del repositorio.
