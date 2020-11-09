class Cliente{
    dni;
    nombre;
    apellidos;
    numTarjeta;
    email;
    abono;
    vehiculo;
    plaza;
    constructor(dni, nombre, apellidos, email, numTarjeta, vehiculo) {
        this.dni=dni;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.email=email;
        this.numTarjeta=numTarjeta;
        this.vehiculo=vehiculo;
    }
    get getDni(){
        return this.dni;
    }
    set setDni(dni){
        this.dni=dni;
    }
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }
    get getApellidos(){
        return this.apellidos;
    }
    set setApellidos(apellidos){
        this.apellidos=apellidos;
    }
    get getNumTarjeta(){
        return this.numTarjeta;
    }
    set setNumTarjeta(numTarjeta){
        this.numTarjeta=numTarjeta;
    }
    get getEmail(){
        return this.email;
    }
    set setEmail(email){
        this.email=email;
    }
    get getAbono(){
        return this.abono;
    }
    set setAbono(abono){
        this.abono=abono;
    }
    get getVehiculo(){
        return this.vehiculo;
    }
    set setVehiculo(vehiculo){
        this.vehiculo=vehiculo;
    }
    get getPlaza(){
        return this.plaza;
    }
    set setPlaza(plaza){
        this.plaza=plaza;
    }
    
}


export {Cliente};