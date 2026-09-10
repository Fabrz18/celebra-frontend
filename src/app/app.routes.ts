import {Routes} from '@angular/router';
import {Landing} from './componente/landing/landing';
import {MenuAnfitrion} from './componente/menu-anfitrion/menu-anfitrion';
import {Legal} from './componente/legal/legal';
import {Configuracion} from './componente/configuracion/configuracion';
import {CentroAyuda} from './componente/centro-ayuda/centro-ayuda';
import {Register} from './componente/register/register';
import {RegisterAnfitrion} from './componente/register-anfitrion/register-anfitrion';
import {RegisterProveedor} from './componente/register-proveedor/register-proveedor';
import {Login} from './componente/login/login';
import {RegisterCaptcha} from './componente/register-captcha/register-captcha';
import {MenuProveedor} from './componente/menu-proveedor/menu-proveedor';
import {CrearEvento} from './componente/crear-evento/crear-evento';
import {ComunicateConNosotros} from './componente/comunicate-con-nosotros/comunicate-con-nosotros';
import {VerMiPerfil} from './componente/ver-mi-perfil/ver-mi-perfil';
import {BuscarEventos} from './componente/buscar-eventos/buscar-eventos';
import {HistorialDeEventos} from './componente/historial-de-eventos/historial-de-eventos';
import {ListarEvento} from './componente/listar-evento/listar-evento';
import {DetalleDeEvento} from './componente/detalle-de-evento/detalle-de-evento';
import {ConfirmarReserva} from './componente/confirmar-reserva/confirmar-reserva';
import {EventosCurso} from './componente/eventos-curso/eventos-curso';
import {EdicionDeResenas} from './componente/edicion-de-resenas/edicion-de-resenas';
import {HistorialDeContratos} from './componente/historial-de-contratos/historial-de-contratos';
import {ReporteProveedores} from './componente/reporte-proveedor/reporte-proveedores';
import {AuthGuard} from './guards/auth-guard';
import {AdministradorHome} from './componente/administrador/administrador-home/administrador-home';
import {AdministradorListar} from './componente/administrador/administrador-listar/administrador-listar';
import {AdministradorRegistrar} from './componente/administrador/administrador-registrar/administrador-registrar';

export const routes: Routes = [
  {path: '', component: Landing},
  {path: 'menu-anfitrion/:idAnfitrion', component: MenuAnfitrion, canActivate: [AuthGuard]},
  {path: 'legal/:id/:role', component: Legal, canActivate: [AuthGuard]},
  {path: 'configuracion/:id/:role', component: Configuracion, canActivate: [AuthGuard]},
  {path: 'centro-ayuda/:id/:role', component: CentroAyuda, canActivate: [AuthGuard]},
  {path: 'register', component: Register},
  {path: 'register-anfitrion', component: RegisterAnfitrion},
  {path: 'register-proveedor', component: RegisterProveedor},
  {path: 'login', component: Login},
  {path: 'register-captcha', component: RegisterCaptcha},
  {path: 'menu-proveedor/:idProveedor', component: MenuProveedor, canActivate: [AuthGuard]},
  {path: 'crear-evento/proveedor/:idProveedor', component: CrearEvento, canActivate: [AuthGuard]},
  {path: 'crear-evento/evento/:idProveedor/:idEvento', component: CrearEvento, canActivate: [AuthGuard]},
  {path: 'comunicate-con-nosotros/:id/:role', component: ComunicateConNosotros, canActivate: [AuthGuard]},
  {path: 'ver-mi-perfil/:id/:role', component: VerMiPerfil, canActivate: [AuthGuard]},
  {path: 'administrador-home', component: AdministradorHome, canActivate: [AuthGuard]},
  {path: 'administrador-listar', component: AdministradorListar, canActivate: [AuthGuard]},
  {path: 'administrador-registrar', component: AdministradorRegistrar, canActivate: [AuthGuard]},
  {path: 'administrador-registrar/:id/:entidad', component: AdministradorRegistrar, canActivate: [AuthGuard]},
  {path: 'buscar-eventos/:idAnfitrion', component: BuscarEventos, canActivate: [AuthGuard]},
  {path: 'historial-eventos/:idAnfitrion', component: HistorialDeEventos, canActivate: [AuthGuard]},
  {path: 'historial-contratos/:idProveedor', component: HistorialDeContratos, canActivate: [AuthGuard]},
  {path: 'listar-eventos/:idProveedor', component: ListarEvento, canActivate: [AuthGuard]},
  {path: 'detalle-eventos/:idAnfitrion/:idEvento', component: DetalleDeEvento, canActivate: [AuthGuard]},
  {path: 'reservar-evento/:idAnfitrion/:idEvento', component: ConfirmarReserva, canActivate: [AuthGuard]},
  {path: 'eventos-curso/:idAnfitrion', component: EventosCurso, canActivate: [AuthGuard]},
  {path: 'edicion-resena/:idAnfitrion/:idEvento', component: EdicionDeResenas, canActivate: [AuthGuard]},
  {path: 'reporte-proveedor/:idProveedor', component: ReporteProveedores, canActivate: [AuthGuard]},
];
