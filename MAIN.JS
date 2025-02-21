//HORARIOS DE TIENDA
/*CREAREMOS UN SIMULADOR ENFOCADO A GUARDAR LOS HORARIOS DE LOS EMPLEADOS
 *SOLICITAREMOS EL NUMERO DE EMPLEADO, NOMBRE Y SUCURSAL
 *GUARDAREMOS LOS DATOS DEL EMPLEADO EN LOCALSTORAGE
 */

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
        });
  

const Nombre = document.getElementById('Nombre').value;
const IdEmpleado = document.getElementById('IdEmpleado').value;
const Sucursal = document.getElementById('Sucursal').value;
const RegistroUsuarios= [];

function DatosUsuario (Nombre, IdEmpleado = 0, Sucursal){
    if(Nombre || Sucursal){
        alert("Nombre y Sucursal Son obligatorios");
    return;
    }

    const usuario = {
        Nombre: Nombre,
        IdEmpleado: IdEmpleado,
        Sucursal:Sucursal,
  };
  RegistroUsuarios.push(usuario);
};
