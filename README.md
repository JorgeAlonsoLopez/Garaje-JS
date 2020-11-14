# Gestión de un parking - JS

El programa se basa en la gestión de un parking.  

En este tenemos dos zonas, la de administrador y la de los clientes.  

En la de los clientes se distinguen dos roles, los clientes aleatorios que no tienen un abono y los que sí lo tienen. Ambos pueden hacer 2 operaciones, el ingresar y retirar su vehículo del parking. En el caso de los abonados, su plaza se mantendrá reservada. Ambos roles pueden ver el número de plazas libres del parking.  

Los datos que se le pedirán al usuario aleatorio son el pin de seguridad (un aleatorio que se obtiene en el ticket), la matrícula del vehículo y el nombre de la plaza, que debe ser igual que la que aporta el ticket y los datos aportados por el usuario, en referencia a mayúsculas, minúsculas y signos.  

Los datos que se piden al usuario abonado es su DNI, la matrícula del vehículo que ha registrado a la hora de hacer el abono y el pin del abono.  

La parte de administrador necesita una contraseña para acceder (sales). En esta zona se puede gestionar los abonos (crear, borrar y modificar tanto los datos del abonado como su duración), ver la facturación de los tickets entre dos fechas, la cantidad recaudad y numero de bonos en un año determinado, el estado de todas las plazas del parking y obtener un listado de los abonos que caducan en un plazo de 10 días o los que lo hacen en un mes y año determinado.  

Se ha creado un abonado para probar las funcionalidades sin necesidad de crear un primero. Su pin, al ser aleatorio, aparecerá en la consola antes de comenzar con las opciones del programa.  

Para las opciones, basta con pulsar el número correspondiente, sin necesidad de confirmar la opción (enter), Para los datos (matrícula, DNI, nombres, etc) si que hay que confirmar los datos.   

