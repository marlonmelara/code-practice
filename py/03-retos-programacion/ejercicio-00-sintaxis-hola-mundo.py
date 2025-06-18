# EJERCICIO 00-SINTAXIS, VARIABLES, TIPOS DE DATOS Y HOLA MUNDO

# Documentación oficial del lenguaje Python: https://www.python.org/doc/
# Aunque python.org es la página principal, la sección de 'doc' es donde se encuentra la documentación detallada.

# Esto es un comentario de una sola línea en Python.
# Puedes usarlo para añadir notas rápidas o deshabilitar temporalmente una línea de código.

"""
Esto es un comentario de varias líneas (docstring) utilizando comillas dobles.
Generalmente, los 'docstrings' se usan para documentar módulos, funciones,
clases y métodos. Se pueden acceder en tiempo de ejecución.
"""

'''
Esto es otro ejemplo de comentario de varias líneas (docstring) utilizando comillas simples.
Funciona de la misma manera que las comillas dobles para este propósito.
La convención principal es usar comillas dobles para 'docstrings'.
'''

# Variables en Python
# Python es un lenguaje de tipado dinámico, lo que significa que no necesitas
# declarar explícitamente el tipo de una variable. El intérprete lo infiere.
my_variable = "Soy una variable"
my_other_variable = 10 # Las variables pueden cambiar su tipo durante la ejecución.

# Constantes en Python
# Python no tiene un concepto de "constante" estricto como otros lenguajes.
# Por convención, se usan mayúsculas para indicar que una variable debe
# ser tratada como una constante y no modificarse.
MY_CONSTANT = "Soy una constante (por convención)"

# Tipos de datos primitivos (Built-in Types)
# Estos son los tipos fundamentales que Python soporta de forma nativa.

# Tipo de dato 'str' (cadena de texto)
my_string = "Soy un string"
my_other_string = 'También soy un string' # Las comillas simples o dobles son válidas.

# Tipo de dato 'int' (entero)
my_int = 1
my_negative_int = -5

# Tipo de dato 'float' (número de punto flotante)
my_float = 1.0
my_scientific_float = 1.2e-3 # Notación científica

# Tipo de dato 'bool' (booleano)
# Representa valores de verdad: Verdadero o Falso.
my_bool_true = True
my_bool_false = False

# Tipo de dato 'NoneType' (Ninguno)
# Representa la ausencia de valor. Es similar a 'null' en otros lenguajes.
my_none_value = None

# Números enteros grandes (arbitrary-precision integers)
# Python maneja enteros de precisión arbitraria, lo que significa que
# pueden ser tan grandes como la memoria del sistema lo permita.
my_big_number = 1234567890123456789012345678901234567890

# Imprimir mensajes y variables en la consola
# La función 'print()' se usa para mostrar información en la salida estándar.
print("¡Hola, Python!")

# Concatenación de cadenas y uso de f-strings (una forma moderna y recomendada)
print("Mi variable es: " + my_variable) # Concatenación básica
print(f"Mi variable es: {my_variable}") # Uso de f-string (Python 3.6+)

# Imprimir el tipo de dato de las variables
# La función 'type()' devuelve el tipo de un objeto.
print(f"El tipo de 'my_string' es: {type(my_string)}")
print(f"El tipo de 'my_int' es: {type(my_int)}")
print(f"El tipo de 'my_float' es: {type(my_float)}")
print(f"El tipo de 'my_bool_true' es: {type(my_bool_true)}")
print(f"El tipo de 'my_none_value' es: {type(my_none_value)}")
print(f"El tipo de 'my_big_number' es: {type(my_big_number)}")

# Operaciones básicas con variables
print(f"Suma de enteros: {my_int + my_other_variable}")
print(f"Multiplicación de flotantes: {my_float * my_scientific_float}")
print(f"Negación de un booleano: {not my_bool_true}")