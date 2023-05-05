create table usuarios (
	id serial primary key,
	nombre  varchar(255) not null,
	email varchar(255) not null ,
	password varchar(255) not null
);

create table carro (
	id serial primary key,
	cantidad_total int not null,
	precio_total int not null,
	id_producto int not null,
	foreign key (id_producto)
	references producto(id)
	);
	
create table producto (
	id serial primary key,
	titulo varchar(255) not null, 
	descripcion varchar(255) not null,
	precio int not null,
	imagen varchar not null,
	favoritos int not null,
	id_usuario int not null,
	foreign key (id_usuario)
	references usuarios(id)
);

create table favoritos (
	id serial primary key,
	id_usuario int not null,
	foreign key (id_usuario)
	references usuarios(id),
	id_producto int not null,
	foreign key (id_producto)
	references producto(id)	
);