# EJERCICIO 00 - SINTAXIS, VARIABLES, TIPOS DE DATOS Y HOLA MUNDO

# Documentación oficial: https://www.python.org/doc/

# Comentario de una línea
# Se usa para notas rápidas o deshabilitar código temporalmente

"""
Comentario multilínea (docstring)
Se usa para documentar módulos, funciones, clases y métodos
Accesible en tiempo de ejecución
"""

"""
También válido con comillas simples
Convención: usar comillas dobles para docstrings
"""

# VARIABLES
my_variable = "Soy una variable"
my_other_variable = 10  # Las variables pueden cambiar de tipo

# CONSTANTES (por convención, no hay constantes estrictas)
MY_CONSTANT = "Soy una constante"

# TIPOS DE DATOS PRIMITIVOS

# String (cadena de texto)
my_string = "Soy un string"
my_other_string = "También válido"  # Comillas simples o dobles

# Integer (entero)
my_int = 1
    my_negative_int = -5

# Float (punto flotante)
my_float = 1.0
my_scientific_float = 1.2e-3  # Notación científica

# Boolean (booleano)
my_bool_true = True
my_bool_false = False

# NoneType (ausencia de valor)
my_none_value = None

# Enteros de precisión arbitraria (limitados por memoria)
my_big_number = 1234567890123456789012345678901234567890

# SALIDA POR CONSOLA
print("¡Hola, Python!")

# Concatenación vs f-strings (recomendado desde Python 3.6+)
print("Mi variable es: " + my_variable)
print(f"Mi variable es: {my_variable}")

# Verificar tipos de datos
print(f"Tipo de 'my_string': {type(my_string)}")
print(f"Tipo de 'my_int': {type(my_int)}")
print(f"Tipo de 'my_float': {type(my_float)}")
print(f"Tipo de 'my_bool_true': {type(my_bool_true)}")
print(f"Tipo de 'my_none_value': {type(my_none_value)}")
print(f"Tipo de 'my_big_number': {type(my_big_number)}")

# OPERACIONES BÁSICAS
print(f"Suma: {my_int + my_other_variable}")
print(f"Multiplicación: {my_float * my_scientific_float}")
print(f"Negación booleana: {not my_bool_true}")
