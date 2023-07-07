class CPassword {
    constructor(longitud = 8, contraseña) {
        this.longitud = longitud;
        this.contraseña = contraseña;
    }
    esFuerte() {
        if(this.contraseña.match(/[A-Z]/g) == null){
            return false
        }
        if(this.contraseña.match(/[a-z]/g) == null){
            return false
        }
        if(this.contraseña.match(/[0-9]/g) == null){
            return false
        }
        if (this.contraseña.match(/[A-Z]/g).length < 2) {
            return false;
        }
        if (this.contraseña.match(/[a-z]/g).length < 1) {
            return false;
        }
        if (this.contraseña.match(/[0-9]/g).length < 5) {
            return false;
        }

        return true;
    }
}
let contra = prompt("Ingrese su contraseña");
let long = contra.length;
let password = new CPassword(long, contra);

if(password.esFuerte()){
    document.write("Contraseña fuerte");
}else{
    document.write("Debil");
}
