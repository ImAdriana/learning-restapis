# REST API con Node.js y MongoDB ( Back-End)

Este proyecto es una REST API desarrollada con **Node.js** y **MongoDB** que constituye el backend de una aplicación, proporciona operaciones CRUD para clientes, productos y pedidos. Los pedidos hacen referencia tanto a los clientes como a los productos.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para aplicaciones web en Node.js.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar los datos.
- **Mongoose**: Biblioteca de modelado de objetos MongoDB para Node.js.
- **Multer**: Middleware para el manejo de archivos multipart/form-data.
- **Shortid**: Generador de ID cortos únicos.
- **Nodemon**: Herramienta de desarrollo que reinicia automáticamente la aplicación de Node.js cuando se detectan cambios en los archivos.

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd tu-repositorio
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor en modo desarrollo:

    ```bash
    npm run dev
    ```

    Esto iniciará el servidor utilizando `nodemon`, que reiniciará automáticamente la aplicación al detectar cambios en los archivos.

2. La API estará disponible en `http://localhost:5000`.

## Endpoints

### Clientes

- **GET /clientes**: Obtener todos los clientes.
- **GET /clientes/:id**: Obtener un cliente por ID.
- **POST /clientes**: Crear un nuevo cliente.
- **PUT /clientes/:id**: Actualizar un cliente por ID.
- **DELETE /clientes/:id**: Eliminar un cliente por ID.

### Productos

- **GET /productos**: Obtener todos los productos.
- **GET /productos/:id**: Obtener un producto por ID.
- **POST /productos**: Crear un nuevo producto.
- **PUT /productos/:id**: Actualizar un producto por ID.
- **DELETE /productos/:id**: Eliminar un producto por ID.

### Pedidos

- **GET /pedidos**: Obtener todos los pedidos.
- **GET /pedidos/:id**: Obtener un pedido por ID.
- **POST /pedidos**: Crear un nuevo pedido.
- **PUT /pedidos/:id**: Actualizar un pedido por ID.
- **DELETE /pedidos/:id**: Eliminar un pedido por ID.



