
MariaDB [dbtugas]> select * from tb_heroes;
+----+------+----------+-------+
| id | name | type_id  | photo |
+----+------+----------+-------+
|  1 | Ban  | strength |       |
+----+------+----------+-------+
1 row in set (0.001 sec)

MariaDB [dbtugas]> insert into tb_heroes (id,name,type_id) values (2,'Escanor','hp' );
Query OK, 1 row affected, 1 warning (0.016 sec)

MariaDB [dbtugas]> select * from tb_heroes;
+----+---------+----------+-------+
| id | name    | type_id  | photo |
+----+---------+----------+-------+
|  1 | Ban     | strength |       |
|  2 | Escanor | hp       |       |
+----+---------+----------+-------+
2 rows in set (0.001 sec)

MariaDB [dbtugas]> insert into tb_heroes (id,name,type_id) values (3,'the Grizzly','Agility' );
Query OK, 1 row affected, 1 warning (0.017 sec)

MariaDB [dbtugas]> select * from tb_heroes where type_id='hp';
+----+---------+---------+-------+
| id | name    | type_id | photo |
+----+---------+---------+-------+
|  2 | Escanor | hp      |       |
+----+---------+---------+-------+
1 row in set (0.002 sec)

MariaDB [dbtugas]>