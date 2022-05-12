# Readme proyecto final William Torres de React JS Coderhouse
## _Cafetería "Delícias da Claudia"_

En este proyecto se utilizaron las siguintes tecnologias:

- React JS 
- HTML y CSS
- Firebase

## Comenzar a utilizar

Esta aplicación requiere [Node.js](https://nodejs.org/) v16.13.0 y de react-router-dom (v6) para correr.

Para comenzar a usar, descargue o clone desde este repositorio https://github.com/willtorresf/appCafeteria y luego ejecute los comandos:

```sh
cd appCafeteria
npm i
```

## Componentes 

### 1) NavBar

- Este componente se maneja la navegación del sitio. 
- Este componente engloba 4 opciones principales: Logo, Categorías, Login y el cartwidget(componente)
    - El logo tiene una ruta que dirije hacia el home ('/')
    - Las categorías son mostradas de forma asíncrona desde la base de datos (Firebase). En este caso son solo 3, Tortas ('/tortas'), Panes ('/panes') y Cafés ('/cafes').
    - El login (sin función, aún)
    - El componente CartWidget que tiene una ruta hacia el carrito ('/cart')

### 2) CartWidget

- Este componente solo se muestra si el carrito tiene productos (display condicional)
- Tiene la función de mostrar la cantidad de itens dentro del carrito, gracias al cartContext y tiene una ruta hacia el carrito ('/cart') 

### 3) Cart

- Este componente tiene la función de mostrar los productos que fueron agregados (componente CartItem), calcular el total de la compra, mostrar el Modal del formulario (componente Modal y Form) para los datos del comprador y finalmente generar la orden de compra del cliente.
- Utiliza el cartContext
- Tiene display condicional cuando el carrito está vacio y cuando se llenan los datos del cliente.

### 4) ItemCart

- Este componente retorna los productos del carrito (nombre, cantidad, precio, subtotal y un boton para eliminar dicho item).

### 5) Modal

- Este componente tiene la función de generar un modal, en este caso se utilizó para el formulario de datos del cliente (componente Form).
- Utiliza un custom hook useModal para abrir, cerrar y setear el estado isOpen.

### 6) Form

- Este componente tiene la función de colectar la información del cliente (nombre, telefono y email) para generar la orden de compra.
- Esta dentro del modal (componente) y solo se activa al presionar el boton de llenar datos personales.
- Utiliza el cartContext para su funcionamiento

### 7) Footer

- Este componente tiene la función de footer.

### 8) ItemListConteiner

- Este componente tiene la función de mostrar todos los productos de la base de datos (firebase/Promesa).
- Por medio de un useParams hace el filtro para cada categoría.
- Utiliza el componente ItemList

### 9) ItemList

- Este componente tiene la función de generar la card para cada uno de los productos (componente Item) obtenida de la props del ItemListConteiner.

### 10) Item

- Este componente es la card de los productos.
- Muestra el nombre, precio, disponibilidad y el boton con la ruta ('/detail+id') para el detalle (Componentes ItemDetailCOnteiner, ItemCount e ItemDetail)

### 11) ItemDetailConteiner

- Este componente tiene la función de mostrar la información del producto específico que se solicitó (firebase/Promesa).
- Por medio de un useParams hace el filtro para cada id.
- Utiliza el componente ItemDetail y el ItemCount

### 12) ItemDetail

- Este componente muestra todos los detalles del producto. Descripción, foto, nombre, precio, entre otros. Además del contador y del botón para agregar al carrito.
- Usa el cartContext para el funcionamiento del ItemCount (addItem) por props.

### 13) ItemCount

- Este componente se encarga de definir la cantidad de productos que el usuario quiere agregar al carrito. Utiliza un useState.
- Tiene un botón de agregar al carrito, el cual adiciona la cantidad seleccionada por el usuario.

## Context

Se empleó el uso de un único context llamado cartContext, donde se manejó toda la lógica relacionada con el carrito. 

Se utilizó lo siguiente:
- Tres estados (useState), uno para el carrito (cart), otro para el formulario (form) y el último para el envio del formulario (sentForm).
- Funciones para agregar al carrito (addItem), eliminar todos los itens (clearCart), eliminar un producto en específico (removeItem), el contador del CartWidget (cartWidgetQuantity), verificar si el item está en el carrito (isInCart), calcular el valor total de la compra (SumCart), guardar la información del formulario en cada variable (handleOnChange) y verificar si el formulario fue completado (handleOnSubmit).

## Hooks

Fue creado un único custom hook llamado useModal con el cual le da la funcionalidad de modal al componente Modal. Abrir (openModal), cerrar (closeModal) y definir si este se abre automáticamente o no (isOpen).

## Firebase

Se utilizó el servicio de backend de Firebase para la base de datos. Existen 3 colecciones:

1) Products (Productos)
Cada producto contiene lo siguiente:
a) name: nombre del producto
b) description: descripción del producto
c) stock: cantidad disponible
d) category: categoría (tortas, panes o cafes)
e) img: imagen del producto
f) price: precio del producto

2) Categories: solo existen 3 categorias tortas, panes o cafes

3) Orders: esta collección se crea una vez que se finaliza la compra. Tiene los datos del comprador (nombre, telefono y email), los datos de los productos comprados y el valor total del pedido.

A través de promesas se obtuvo la información de los productos en los componentes ItemListConteiner e ItemDetailConteiner y de las categorias en el componente NavBar.

En el componente Cart se encuentra la lógica para crear la orden en la collección Orders y restar la cantidad comprada del stock de los productos.

## Proceso para realizar una compra

1) Seleccionar el producto deseado. Clicar en ver detalle.
2) Seleccionar la cantidad deseada y clicar en agregar al carrito.
3) Si no se va a agregar ningún otro producto, clicar en el botón de ir al carrito en el detalle del producto agregado o clicar en el CartWidget en la barra de navegación (NavBar).
4) Una vez en el carrito, verificar la cantidad y el producto. Si esta todo en orden, clicar en llenar datos personales.
5) Completar los campos (nombre, telefono y email) y clicar en enviar.
6) Clicar en terminar mi compra y listo orden creada.

**Free Software, Hell Yeah!**