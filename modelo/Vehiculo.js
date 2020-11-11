export class Vehiculo {
    
    matricula;
    constructor(matricula) {
        this.matricula=matricula;
    }
    get getMatricula(){
        return this.matricula;
    }
     setMatricula(matricula){
        this.matricula=matricula;
    }
}
