# React - Template - Js

## Configuración de prettier, eslint y husky

Instalación de paquetes

```cmd
pnpm install husky eslint prettier --save-dev
```

Iniciar git

```cmd
git init
```

Inicializar husky

```cmd
pnpx husky-init && pnpm install
```

Sicronizar prettiere con eslint agregando un extend

```cmd
pnpm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

## Configuración de conventional commits

Instalar paquetes

```cmd
pnpm install @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog --save-dev
```

Configuracion de commitizen

```cmd
pnpx commitizen init cz-conventional-changelog --save-dev --save-exact

```

Crear archivo commit-msg

```cmd
node node_modules/husky/lib/bin add .husky/commit-msg 'pnpx --no -- commitlint --edit "$1"'
```

# Prettier

*semi:* Determina si se deben agregar puntos y comas al final de las declaraciones. En este caso, false indica que no se deben agregar puntos y comas al final de las declaraciones.

*singleQuote:* Define si se deben usar comillas simples (') o dobles (") para las cadenas de texto. En este caso, se ha configurado en true, lo que indica que se deben usar comillas simples.

*jsxSingleQuote:* Similar a singleQuote, pero específico para JSX. En este caso, se ha configurado en true, lo que indica que se deben usar comillas simples para las cadenas de texto en JSX.

*tabWidth:* Define la cantidad de espacios que se deben usar para un tabulado. En este caso, se ha configurado en 2, lo que significa que se usarán dos espacios para cada tabulado.

*trailingComma:* Define si se deben agregar comas adicionales después del último elemento en listas y objetos. En este caso, se ha configurado en "all", lo que indica que se deben agregar comas adicionales en todas partes aplicables.

*printWidth:* Define el ancho máximo de una línea antes de que Prettier divida el código. En este caso, se ha configurado en 80, lo que significa que Prettier intentará mantener las líneas de código dentro de los 80 caracteres.

*bracketSpacing:* Determina si se deben agregar espacios dentro de los corchetes en objetos literales. En este caso, se ha configurado en true, lo que indica que se deben agregar espacios dentro de los corchetes.

*arrowParens:* Define si los paréntesis deben envolver los argumentos de una función de flecha. En este caso, se ha configurado en "avoid", lo que indica que los paréntesis se evitarán siempre que sea posible.

## Conventional Commits

**feat:** cuando se añade una nueva funcionalidad.

**fix:** cuando se arregla un error.

**chore:** tareas rutinarias que no sean específicas de una feature o un error como por ejemplo añadir contenido al fichero .gitignore o instalar una dependencia.

**test:** si añadimos o arreglamos tests.

**docs:** cuando solo se modifica documentación.

**build:** cuando el cambio afecta al compilado del proyecto.

**ci:** el cambio afecta a ficheros de configuración y scripts relacionados con la integración continua.

**style:** cambios de legibilidad o formateo de código que no afecta a funcionalidad.

**refactor:** cambio de código que no corrige errores ni añade funcionalidad, pero mejora el código.

**perf:** usado para mejoras de rendimiento.

**revert:** si el commit revierte un commit anterior. Debería indicarse el hash del commit que se revierte.