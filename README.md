# Reto Técnico: Gradiweb

1. Maquetar por medió de HTML5 - JS - SASS una estructura que nos permita construir una UI similar al recurso provisionado diseño:

<p align="center">
  <img alt="Diseño Web" src="Prueba de GradiWeb/images/Diseno_a_seguir.png">
</p>

2. Provisionar estilos y garantizar una UX que le permita al usuario interactuar desde diferentes pantallas (diseño responsivo - incluido en el diseño)

<p align="center">
  <img alt="Diseño Web Responsive" src="Prueba de GradiWeb/images/Diseno_a_seguir_responsive.png">
</p>

3. Formular interacciones que permitan navegar por los componentes respetando buenas prácticas de UX.

4. Analizar la lógica utilizada para renderizar los recursos provisionados vía API - Endpoints.

5. Atención al detalle (pixel perfect).


### Datos para la prueba

1. Con el endpoint suministrado: 

GET → 
```
https://gradistore-spi.herokuapp.com/products/all
```

Se obtiene la respuesta de la lista de los productos:

```
 "products": {
        "nodes": [
            {
                "id": "gid://shopify/Product/8141368164662",
                "title": "The Complete Snowboard",
                "tags": [
                    "32",
                    "Premium",
                    "Snow",
                    "Snowboard",
                    "Sport",
                    "Winter"
                ],
                "totalInventory": 35,
                "tracksInventory": true,
                "featuredImage": {
                    "url": "https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image22.png?v=1676927632"
                },
                "prices": {
                    "max": {
                        "amount": "699.95",
                        "currencyCode": "EUR"
                    },
                    "min": {
                        "amount": "699.95",
                        "currencyCode": "EUR"
                    }
                }
            }
        ]
    }

```

> [!NOTE]
> Se muestra solo un producto ya que la respuesta es demasiado larga.

En esta respuesta se observa que tenemos todos los datos necesarios para crear el reel de productos, pero para la puntuación (Estrellas '⭐') necesitamos leer todos las puntuaciones de la propiedad "tags" (valores numericos) para sacar el puntaje, pero si hay mas de una valoración se debe de sacar el promedio de estos.

Las estrellas deben ser renderizadas de la siguiente forma:

```
De   0 a 100 = ⭐ 
De 100 a 200 = ⭐⭐ 
De 200 a 300 = ⭐⭐⭐ 
De 300 a 400 = ⭐⭐⭐⭐ 
De 400 a 500 = ⭐⭐⭐⭐⭐

```

Para el newsletter solo debes validar que el dato ingresado sea un correo electrónico y mostrar un mensaje de validación en el evento submit.

### Hablando de código... 💻

- **✍️ Lenguaje/tecnología...** todo esto fue desarrollado en **javascript** por medio del IDE **Visual Studio Code** usando [Vanilla JS](http://vanilla-js.com/) y con la ayuda de la inteligencia artificial **CHAT GPT**.














