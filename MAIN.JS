//HORARIOS DE TIENDA
/*CREAREMOS UN SIMULADOR ENFOCADO A GUARDAR LOS HORARIOS DE LOS EMPLEADOS
 *SOLICITAREMOS EL NUMERO DE EMPLEADO, NOMBRE Y SUCURSAL
 *GUARDAREMOS LOS DATOS DEL EMPLEADO EN LOCALSTORAGE
 * 








*/
const formulario = document.getElementById('formulario')

const RegistroUsuarios= [];

function DatosUsuario (Nombre, IdEmpleado = 0, Sucursal){
    if(Nombre || Sucursal){
        alert=("Nombre y Sucursal Son obligatorios");
    return;

    const usuario = {
        Nombre: Nombre,
        IdEmpleado: IdEmpleado,
        Sucursal:Sucursal,
  };
  RegistroUsuarios.push(usuario);
}}
