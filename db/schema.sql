create database Finance;

use Finance;

create table Categoria(
    id_categoria int auto_increment not null,
    nombre varchar(50) not null,
    uso int not null, 
    id_usuario  int not null,
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

create table usuario(
    id_user int auto_increment not null,
    email varchar(60) not null,
    password varchar(60) not null,
    activo int not null,
    primary key(id_user)
);

create table Cuenta(
    id_cuenta int auto_increment not null,
    nombre varchar(60) not null,
    Credito decimal(8,2) null,
    valor decimal(10, 2) not null,
    fecha_cierre_facturacion date null,
    fecha_pago date null,
    fecha_creacion date not null,
    id_tipo_cuenta int not null,
    id_tipo_moneda int not null,
    id_usuario int not null,
    banco varchar(50) not null,
    primary key(id_cuenta)
);

create table Item(
    id_Item int auto_increment not null,
    nombre varchar(60)  not null,
    precio  decimal(9,2) not null,
    detalle varchar( 255) not null,
    fecha date not null,
    id_categoria int not null,
    id_medioPago int not null,
    primary key(id_Item)
);

show tables;

-- alters
alter table Categoria add constraint fk_Categoria_usuario foreign key(id_usuario) references usuario(id_user);

alter table Item add constraint fk_Item_Categoria foreign key(id_categoria) references Categoria(id_categoria);
alter table Item add constraint fk_Item_medioPago foreign key(id_medioPago) references Cuenta(id_cuenta);
alter table Cuenta add constraint fk_cuenta_usuario foreign key(id_usuario) references usuario(id_user);

alter table Cuenta add constraint fk_cuenta_tipocuenta foreign key(id_tipo_cuenta) references TipoCuenta(id_tipocuenta);
alter table Cuenta add constraint fk_cuenta_tipomoneda foreign key(id_tipo_moneda) references TipoMoneda(id_moneda);


-- inserts
insert into usuario(email, password) values ('admin@gmail.com','$2y$10$/3.M71v5UwkQS43wWvVCfO1vuA/R34r.dGSeduKGBfPRR/bUAz/vG'),('canelo@gmail.com','$2y$10$qPv/SF8e0hgi6nfPh6Rx0uaFbGYJmwMYMSD//V.CsNjEpK0AonuOC');

insert into TipoMoneda(nombre, valor_cambio, ticket) values("Dolar",3.75,"$"),("Soles",1.00,"S/.");
insert into TipoCuenta(nombre) values("Tarjeta Debito"),("Tarjeta Credito");
insert into Categoria(nombre,uso, id_usuario) values("Servicio Luz", 0, 1),("Internet Hogar", 0, 1),("Servicio Telefonico", 0, 1);

insert into cuenta(nombre, Credito ,valor,fecha_cierre_facturacion, fecha_pago, fecha_creacion, id_tipo_cuenta, id_tipo_moneda,id_usuario, banco) values ('cuenta principal', 930.00, 930.00,null,null,'2022-01-08', 1,1, 1, 'scot'),('AdminCount', 450, 450,'2022-01-24','2022-01-11','2022-01-08', 2,2, 2, 'Citibanck');


insert into item(nombre, precio, detalle, fecha, id_categoria, id_medioPago) VALUES ('item1',29.90,'item1','2022-05-01',3,1);


-- prcedures item
DROP PROCEDURE IF EXISTS `SP_Item_Listar`;
create procedure SP_Item_Listar()
BEGIN
    select I.id_Item, I.nombre, I.precio, I.detalle, I.fecha, C.nombre "id_categoria", TC.nombre "id_medioPago"
    from item I 
    inner join categoria C
    on I.id_categoria = C.id_categoria
    inner join cuenta TC
    on I.id_medioPago = TC.id_cuenta order BY fecha desc;
END//

DROP PROCEDURE IF EXISTS SP_Item_Buscar_id;
create procedure SP_Item_Buscar_id( IN id int,IN cuenta int)    
begin 
    select  I.id_Item, I.nombre, I.precio, I.detalle, I.fecha,  C.nombre "id_categoria", I.id_medioPago
    from item I 
    inner join categoria C 
    on I.id_categoria = C.id_categoria
    where I.id_Item = id and I.id_medioPago = cuenta;
end//

DROP PROCEDURE IF EXISTS SP_Item_Buscar_Edit;
create procedure SP_Item_Buscar_Edit( IN id int,IN cuenta int)
begin 
    select * from item where id_Item = id and id_medioPago = cuenta;
end//

DROP PROCEDURE IF EXISTS SP_Item_Insertar;
create procedure SP_Item_Insertar(nom varchar(60), pre decimal(9,2), detall varchar(255), fecha date, cat int, medPag int)
begin
    insert into item(nombre, precio,detalle,fecha, id_categoria, id_medioPago) values (nom, pre, detall, fecha, cat, medPag);

    UPDATE cuenta set valor = valor + pre where id_cuenta = medPag;

    UPDATE categoria set uso = uso +1 where id_categoria = cat;
end//


DROP PROCEDURE IF EXISTS SP_Item_Delete;
create procedure SP_Item_Delete(id int)
begin
    delete from item where id_Item = id;
end//

DROP PROCEDURE IF EXISTS SP_Item_Edit;
create procedure SP_Item_Edit(id int, nom varchar(50),pre decimal(8,2), detall varchar(250), fecha date,  cat int, medPag int, oldValue decimal(8,2))
begin
    UPDATE cuenta set valor = valor - oldValue where id_cuenta = medPag;

    UPDATE item SET nombre = nom, precio = pre, detalle = detall, fecha = fecha,  id_categoria = cat WHERE id_Item = id;

    UPDATE cuenta set valor = valor + pre where id_cuenta = medPag;
end//

-- prcedure label
DROP PROCEDURE IF EXISTS SP_Label_Listar;
create procedure SP_Label_Listar(user int)
begin
    select * from categoria where id_usuario = user;
end//

DROP PROCEDURE IF EXISTS SP_Label_Insert;
create procedure SP_Label_Insert(cat varchar(50), user int)
begin
    insert into categoria(nombre,id_usuario) values(cat,user );
end//

DROP PROCEDURE IF EXISTS SP_Label_Edit;
create procedure SP_Label_Edit(id int, nom varchar(50))
begin
    update categoria set nombre = nom where id_categoria = id;
end//

DROP PROCEDURE IF EXISTS SP_Label_Delete;
create procedure SP_Label_Delete(id int)
begin
    delete from categoria where id_categoria = id;
end//




-- prcedure cuentas 
DROP PROCEDURE IF EXISTS SP_Cuenta_List;
create procedure SP_Cuenta_List(in user int)
begin
    select C.id_cuenta, C.nombre, C.valor, C.fecha_cierre_facturacion, C.fecha_pago, C.fecha_creacion ,TC.nombre  'tipo_cuenta', TM.nombre 'tipo_moneda', C.banco
    from cuenta C
    inner join TipoCuenta TC 
    on C.id_tipo_cuenta = TC.id_tipocuenta
    inner join TipoMoneda TM
    on C.id_tipo_moneda = TM.id_moneda where id_usuario = user;
end//

DROP PROCEDURE IF EXISTS SP_Cuenta_Insertar;
CREATE PROCEDURE SP_Cuenta_Insertar(n varchar(50), pre decimal(8,2) , fcierref date ,fpago date , fcreacion date ,cuenta int  , moneda int , banco varchar(50), id int)
begin
    insert into cuenta(nombre , valor,fecha_cierre_facturacion, fecha_pago, fecha_creacion,id_tipo_cuenta ,id_tipo_moneda ,banco,  id_usuario )values (n,pre,fcierref,fpago, fcreacion, cuenta,moneda,banco, id);
end//

DROP PROCEDURE IF EXISTS SP_cuenta_eliminar;
CREATE PROCEDURE SP_cuenta_eliminar(id int)
delete from cuenta where id_cuenta = id; 

DROP PROCEDURE IF EXISTS SP_Cuenta_Edit;
CREATE PROCEDURE SP_Cuenta_Edit(id int, n varchar(50), val decimal(8,2)  , fcierref date ,fpago date , fcreacion date ,cuenta int  , moneda int , ban varchar(50))
begin
    update cuenta set nombre = n , valor =val,fecha_cierre_facturacion = fcierref, fecha_pago = fpago, fecha_creacion = fcreacion,id_tipo_cuenta = cuenta ,id_tipo_moneda = moneda ,banco = ban where id_cuenta = id;
end//

DROP PROCEDURE IF EXISTS SP_Cuenta_Buscar_id;
create procedure SP_Cuenta_Buscar_id(id int)
select * from cuenta where id_cuenta = id;

--Items count list where month and year  
DROP PROCEDURE IF EXISTS SP_Items_Cuenta_Listar;
CREATE PROCEDURE SP_Items_Cuenta_Listar(m int , y int, c int,id int)
begin
    select I.id_Item, I.nombre, I.precio, I.detalle, I.fecha,  C.nombre "id_categoria", TC.nombre "id_medioPago"
    from item I 
    inner join categoria C
    on I.id_categoria = C.id_categoria
    inner join cuenta TC
    on I.id_medioPago = TC.id_cuenta
    where MONTH(I.fecha) = m AND YEAR(I.fecha) = y and I.id_medioPago = c AND TC.id_usuario = id order by I.fecha desc Limit 31;
end//

-- Tipo Cuentas
DROP PROCEDURE IF EXISTS SP_TipoCuenta_List;
CREATE PROCEDURE SP_TipoCuenta_List()
select * from TipoCuenta;

-- Tipo Monedas
DROP PROCEDURE IF EXISTS SP_TipoMoneda_List;
CREATE PROCEDURE SP_TipoMoneda_List()
begin
    select * from TipoMoneda;
end//

DROP PROCEDURE IF EXISTS SP_Cuentas_Value;
create procedure SP_Cuentas_Value(IN idCount int)
begin
    select C.valor,  C.fecha_cierre_facturacion, C.fecha_pago , TM.ticket 
    from cuenta C
    inner join  tipomoneda TM
    on C.id_tipo_moneda = TM.id_moneda
    where C.id_cuenta = idCount;
end;


-- Login
DROP PROCEDURE IF EXISTS SP_Login_Verifty
create procedure SP_Login_Verifty(IN ema varchar(60))
begin 
    update usuario set activo = 1 where email = ema;
    select * from usuario where email = ema;
end//

DROP PROCEDURE IF EXISTS SP_Logout
create procedure SP_Logout(IN user int)
begin 
    update usuario set activo = 0 where id_user = user;
end//

DROP PROCEDURE IF EXISTS SP_Register_User;
create procedure SP_Register_User(IN ema varchar(60), IN pass varchar(60))
begin
    insert into usuario(email, password) values(ema , pass);
end//









-- DROP PROCEDURE IF EXISTS SP_Prueba1;
-- create procedure SP_Prueba1()
-- begin
--     declare can int;
select sum(precio) from item where MONTH(fecha) = MONTH(now()) and precio > 0 and id_medioPago = 1;

select sum(precio) from item where MONTH(fecha) = MONTH(now()) and precio < 0 and id_medioPago = 1;
-- end//

-- credit totol

select sum(valor), id_tipo_moneda from cuenta where id_tipo_cuenta = 2 and id_tipo_moneda = 1;   
select * from item where precio > 0;

