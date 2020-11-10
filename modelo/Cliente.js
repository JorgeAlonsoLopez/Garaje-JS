class Cliente{
    dni;
    nombre;
    apellidos;
    numTarjeta;
    email;
    abono;
    vehiculo;
    
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
     setDni(dni){
        this.dni=dni;
    }
    get getNombre(){
        return this.nombre;
    }
     setNombre(nombre){
        this.nombre=nombre;
    }
    get getApellidos(){
        return this.apellidos;
    }
     setApellidos(apellidos){
        this.apellidos=apellidos;
    }
    get getNumTarjeta(){
        return this.numTarjeta;
    }
     setNumTarjeta(numTarjeta){
        this.numTarjeta=numTarjeta;
    }
    get getEmail(){
        return this.email;
    }
     setEmail(email){
        this.email=email;
    }
    get getAbono(){
        return this.abono;
    }
     setAbono(abono){
        this.abono=abono;
    }
    get getVehiculo(){
        return this.vehiculo;
    }
     setVehiculo(vehiculo){
        this.vehiculo=vehiculo;
    }
    
    
}


export {Cliente};