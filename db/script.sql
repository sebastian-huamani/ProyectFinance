create database fin;

use fin;
 
create table  Estado(
    id_estado int auto_increment not null,
    nombre varchar(50),
    primary key(id_estado)
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
    ticket char(6) not null,
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
    banco varchar(50) not null
    primary key(id_cuenta)
);

create table Item(
    id_Item int auto_increment not null,
    nombre varchar(60)  not null,
    precio  decimal(9,2) not null,
    detalle varchar( 255) not null,
    fecha date not null,
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

alter table Item add constraint fk_Item_Estado foreign key(id_estado) references Estado(id_estado);
alter table Item add constraint fk_Item_Categoria foreign key(id_categoria) references Categoria(id_categoria);
alter table Item add constraint fk_Item_medioPago foreign key(id_medioPago) references Cuenta(id_cuenta);

alter table ItemInversion add constraint fk_ItInv_Cuenta foreign key(id_Cuenta) references CuentaInversion(id_CuentaInversion);


insert into Estado(nombre) values("Aprobado"),("Por Aprobar");
insert into Categoria(nombre) values("Servicio Luz"),("Internet Hogar"),("Servicio Telefonico");

insert into TipoMoneda(nombre) values("Dolar",3.75,"$"),("Soles",1.00,"S/.");
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
(33.44,48.75,33.44,48.62,"2022-04-19",1),
(48.62,57.15,47.81,53.71,"2022-04-20",1),
(53.71,60.12,51.26,57.63,"2022-04-21",1),
(57.63,57.63,32.95,33.71,"2022-04-22",1),
(33.71,27.47,38.64,36.90,"2022-04-25",1),
(36.90,31.13,36.22,33.95,"2022-04-26",1),
(33.95,19.65,33.97,19.65,"2022-04-27",1),
(19.65,19.65,15.21,16.23,"2022-04-28",1);


insert into ItemInversion(open,high,low,close,fecha,id_Cuenta) values
(19.65,19.65,15.21,16.23,"2022-04-28",1);

insert into cuenta(nombre,  valor, fecha_ciclo_factura, fecha_cierre_facturacion, fecha_pago, fecha_creacion, id_tipo_cuenta, id_tipo_moneda) values ('cuenta principa', 930.00, null,null,null,'2022-01-08', 1,1)



-- prcedure item
DROP PROCEDURE IF EXISTS `SP_Item_Listar`;
create procedure SP_Item_Listar()
select I.id_Item, I.nombre, I.precio, I.detalle, I.fecha, E.nombre "id_estado", C.nombre "id_categoria", TC.nombre "id_medioPago"
from item I 
inner join estado E
on I.id_estado = E.id_estado
inner join categoria C
on I.id_categoria = C.id_categoria
inner join cuenta TC
on I.id_medioPago = TC.id_cuenta;


DROP PROCEDURE IF EXISTS SP_Item_Buscar_id;
create procedure SP_Item_Buscar_id( IN id int,IN cuenta int)
begin 
    select  I.id_Item, I.nombre, I.precio, I.detalle, I.fecha, E.nombre "id_estado", C.nombre "id_categoria", I.id_medioPago
    from item I 
    inner join categoria C 
    on I.id_categoria = C.id_categoria
    inner join estado E
    on I.id_estado = E.id_estado
    where I.id_Item = id and I.id_medioPago = cuenta;
end;


DROP PROCEDURE IF EXISTS SP_Item_Insertar;
create procedure SP_Item_Insertar(nom varchar(50), pre int, detall varchar(250), fecha date, esta int, cat int, medPag int)
insert into item(nombre, precio,detalle,fecha, id_estado, id_categoria, id_medioPago) values (nom, pre, detall, fecha, esta, cat, medPag);

DROP PROCEDURE IF EXISTS SP_Item_Delete;
create procedure SP_Item_Delete(id int)
delete from item where id_Item = id;

DROP PROCEDURE IF EXISTS SP_Item_Edit;
create procedure SP_Item_Edit(id int, nom varchar(50), pre int, detall varchar(250), fecha date,  esta int, cat int, medPag int)
UPDATE item SET nombre = nom, precio = pre, detalle = detall, fecha = fecha,  id_estado = esta, id_categoria = cat, id_medioPago = medPag WHERE id_Item = id;

-- prcedure label
DROP PROCEDURE IF EXISTS SP_Label_Listar;
create procedure SP_Label_Listar()
select * from categoria;

DROP PROCEDURE IF EXISTS SP_Label_Insert;
create procedure SP_Label_Insert(cat varchar(50))
insert into categoria(nombre) values(cat);

DROP PROCEDURE IF EXISTS SP_Label_Edit;
create procedure SP_Label_Edit(id int, nom varchar(50))
update categoria set nombre = nom where id_categoria = id;

DROP PROCEDURE IF EXISTS SP_Label_Delete;
create procedure SP_Label_Delete(id int)
delete from categoria where id_categoria = id;

-- prcedure cuentas 
DROP PROCEDURE IF EXISTS SP_Cuenta_List;
create procedure SP_Cuenta_List()
select C.id_cuenta, C.nombre, C.valor, C.fecha_ciclo_factura, C.fecha_cierre_facturacion, C.fecha_pago, C.fecha_creacion ,TC.nombre  'tipo_cuenta', TM.nombre 'tipo_moneda', C.banco
from cuenta C
inner join TipoCuenta TC 
on C.id_tipo_cuenta = TC.id_tipocuenta
inner join TipoMoneda TM
on C.id_tipo_moneda = TM.id_moneda;

DROP PROCEDURE IF EXISTS SP_Cuenta_Insertar;
CREATE PROCEDURE SP_Cuenta_Insertar(n varchar(50), pre decimal ,fciclof date , fcierref date ,fpago date , fcreacion date ,cuenta int  , moneda int , banco varchar(50))
insert into cuenta(nombre , valor,fecha_ciclo_factura,fecha_cierre_facturacion, fecha_pago, fecha_creacion,id_tipo_cuenta ,id_tipo_moneda ,banco) 
values (n,pre, fciclof,fcierref,fpago, fcreacion, cuenta,moneda,banco);

DROP PROCEDURE IF EXISTS SP_cuenta_eliminar;
CREATE PROCEDURE SP_cuenta_eliminar(id int)
delete from cuenta where id_cuenta = id; 

DROP PROCEDURE IF EXISTS SP_Cuenta_Edit;
CREATE PROCEDURE SP_Cuenta_Edit(id int, n varchar(50), val decimal ,fciclof date , fcierref date ,fpago date , fcreacion date ,cuenta int  , moneda int , ban varchar(50))
update cuenta set nombre = n , valor =val,fecha_ciclo_factura = fciclof,fecha_cierre_facturacion = fcierref, fecha_pago = fcreacion, fecha_creacion = fcreacion,id_tipo_cuenta = cuenta ,id_tipo_moneda = moneda ,banco = ban where id_cuenta = id;

DROP PROCEDURE IF EXISTS SP_Cuenta_Buscar_id;
create procedure SP_Cuenta_Buscar_id(id int)
select * from cuenta where id_cuenta = id;

--Items count list where month and year  
DROP PROCEDURE IF EXISTS SP_Items_Cuenta_Listar;
CREATE PROCEDURE SP_Items_Cuenta_Listar(m int , y int, c int)
begin
    select I.id_Item, I.nombre, I.precio, I.detalle, I.fecha, E.nombre "id_estado", C.nombre "id_categoria", TC.nombre "id_medioPago"
    from item I 
    inner join estado E 
    on I.id_estado = E.id_estado
    inner join categoria C
    on I.id_categoria = C.id_categoria
    inner join cuenta TC
    on I.id_medioPago = TC.id_cuenta
    where MONTH(I.fecha) = m AND YEAR(I.fecha) = y and I.id_medioPago = c order by I.fecha desc Limit 31;
end;

-- Tipo Cuentas
DROP PROCEDURE IF EXISTS SP_TipoCuenta_List;
CREATE PROCEDURE SP_TipoCuenta_List()
select * from TipoCuenta;

-- Tipo Monedas
DROP PROCEDURE IF EXISTS SP_TipoMoneda_List;
CREATE PROCEDURE SP_TipoMoneda_List()
select * from TipoMoneda;

DROP PROCEDURE IF EXISTS SP_Cuentas_Value;
create procedure SP_Cuentas_Value(IN idCount int)
begin
    select C.valor, C.fecha_ciclo_factura, C.fecha_cierre_facturacion, C.fecha_pago , TM.ticket 
    from cuenta C
    inner join  tipomoneda TM
    on C.id_tipo_moneda = TM.id_moneda
    where C.id_cuenta = idCount;
end;


