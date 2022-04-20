create database fin;

use fin;
 
create table  Estado(
    id_estado int auto_increment not null,
    nombre varchar(50),
    primary key(id_estado)
);

create table Modalidad(
    id_modalidad int auto_increment not null,
    nombre varchar(50),
    primary key(id_modalidad)
);

create table Categoria(
    id_categoria int auto_increment not null,
    nombre varchar(50),
    primary key(id_categoria)
);

create table TipoMoneda(
    id_moneda int auto_increment not null,
    nombre varchar(40) not null,
    valor_cambio decimal(6,2) not null,
    primary key(id_moneda)
);

create table TipoCuenta(
    id_tipocuenta int auto_increment not null,
    nombre varchar(40) not null,
    primary key(id_tipocuenta)
); 

-- Inversion
create table Cuenta(
    id_cuenta int auto_increment not null,
    nombre varchar(60) not null,
    valor decimal(10, 2) not null,
    fecha_ciclo_factura date null,
    fecha_cierre_facturacion date null,
    fecha_pago date null,
    fecha_creacion date not null,
    id_tipo_cuenta int not null,
    id_tipo_moneda int not null,
    primary key(id_cuenta)
);

create table Item(
    id_Item int auto_increment not null,
    nombre varchar(60) not null,
    precio  decimal(9,2) not null,
    detalle varchar( 255) not null,
    fecha date not null,
    id_ingesoEgreso int not null,
    id_estado int not null,
    id_categoria int not null,
    id_medioPago int not null,
    primary key(id_Item)
);


-- Inversion
create table CuentaInversion(
    id_CuentaInversion int auto_increment not null,
    ganancia decimal(8,2) null,
    saldo decimal(8,2) null,
    disponible decimal(8,2) null,
    margen decimal(8,2) null,
    primary key(id_CuentaInversion)
);

create table ItemInversion(
    id_ItemInversion int auto_increment not null,
    open decimal(8,2) not null,
    high  decimal(8,2) not null,
    low decimal(8,2) not null,
    close decimal(8,2) not null,
    fecha varchar(80) not null,
    id_Cuenta int not null,
    primary key(id_ItemInversion)
);

alter table Cuenta add constraint fk_cuenta_tipocuenta foreign key(id_tipo_cuenta) references TipoCuenta(id_tipocuenta);
alter table Cuenta add constraint fk_cuenta_tipomoneda foreign key(id_tipo_moneda) references TipoMoneda(id_moneda);

alter table Item add constraint fk_Item_IE foreign key(id_ingesoEgreso)references Modalidad(id_modalidad);
alter table Item add constraint fk_Item_Estado foreign key(id_estado) references Estado(id_estado);
alter table Item add constraint fk_Item_Categoria foreign key(id_categoria) references Categoria(id_categoria);
alter table Item add constraint fk_Item_medioPago foreign key(id_medioPago) references Cuenta(id_cuenta);

alter table ItemInversion add constraint fk_ItInv_Cuenta foreign key(id_Cuenta) references CuentaInversion(id_CuentaInversion);


insert into Estado(nombre) values("Aprobado"),("Por Aprobar");
insert into Modalidad(nombre) values("Ingreso"), ("Egreso");
insert into Categoria(nombre) values("Servicio Luz"),("Internet Hogar"),("Servicio Telefonico");

insert into TipoMoneda(nombre) values("Dolar"),("Soles");
insert into TipoCuenta(nombre) values("Tarjeta Debito"),("Tarjeta Credito"),("Inversiones");

insert into Cuenta(nombre,valor,fecha_ciclo_factura,fecha_cierre_facturacion,fecha_pago,fecha_creacion,id_tipo_cuenta,id_tipo_moneda) 
values("Cuenta Sueldo","447.17",0,0,0,)

insert into CuentaInversion(ganancia, saldo, disponible, margen) values
(-1.33,30.96,26.15,3.48);
 
insert into ItemInversion(open,high,low,close,fecha,id_Cuenta) values
(34.63,34.91,26.76,29.63,"2022-04-01",1),
(29.63, 33.65, 26.36, 31.09 ,"2022-04-04",1),
(31.09, 32.43, 25.37, 26.26 ,"2022-04-05",1),
(26.26, 28.19, 24.76, 27.45 ,"2022-04-06",1),
(27.45, 24.28, 18.94, 22.45 ,"2022-04-07",1),
(22.45, 25.67, 19.84, 23.18 ,"2022-04-08",1),
(23.18, 23.18, 34.61, 31.14 ,"2022-04-11",1),
(31.14, 32.95, 23.58, 23.58 ,"2022-04-12",1),
(23.58, 26.54,22.17, 27.57 ,"2022-04-13",1),
(27.57, 28.61,18.96,18.96 ,"2022-04-14",1),
(18.96, 34.21,18.96,33.44 ,"2022-04-18",1),
(33.44,48.75,33.44,48.62,"2022-04-19",1);

insert into ItemInversion(open,high,low,close,fecha,id_Cuenta) values
(33.44,48.75,33.44,48.62,"2022-04-19",1);
