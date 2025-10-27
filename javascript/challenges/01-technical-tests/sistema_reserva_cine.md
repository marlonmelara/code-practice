# Ejercicio Práctico

## Prueba técnica TRAINEE

### 1era Parte

Suponer un sistema de reserva de asientos para un anfiteatro. El teatro cuenta con 10 filas de 10 asientos cada una. Se necesita desarrollar un sistema (sin uso de bases de datos, únicamente manejo de datos de forma lógica) que permita llevar a cabo lo siguiente:

1. **Cargar el “mapa” de las filas y asientos.**
   Indicando con una “X” los asientos ocupados y con una “L” los asientos libres. Al iniciar el programa, todos los asientos deben estar libres.

2. **Manejar la reserva de asientos**
   Contemplando que un asiento **SOLO PUEDE SER RESERVADO si se encuentra en estado “L”**, en caso de que esté en estado “X”, se deberá impedir al comprador elegir ese asiento.
   Si se encuentra en estado “L”, deberá pasar automáticamente al estado “X”.

3. **Para finalizar el programa**
   Se deberá ingresar un valor en particular. Contemplar que no existe una cantidad exacta de veces que el programa se puede ejecutar.

4. **Contemplar que SOLO EXISTEN 10 FILAS y 10 ASIENTOS.**
   No se pueden “vender” asientos fuera de esas numeraciones. No se permite “sobreventa”.

---

### Consideraciones

- **No es necesaria implementación ni de IGU ni de BD.**
- Se sugiere el manejo lógico del desarrollo de la aplicación.

---

### Extra

- En caso de que se desee con este cliente visualizar cuáles son los asientos libres, el sistema debe permitir mostrar de forma gráfica el “mapa de asientos”.
- **NO UTILIZAR IGU para este caso.** Utilizar **ÚNICAMENTE lógica y la salida por consola.**
