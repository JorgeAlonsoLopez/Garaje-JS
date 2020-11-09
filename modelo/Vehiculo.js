class Vehiculo {

    matricula;
    constructor(matricula) {
        this.matricula=matricula;
    }
    get getMatricula(){
        return this.matricula;
    }
    set setMatricula(matricula){
        this.matricula=matricula;
    }
}


export {Vehiculo};