UPDATE test.usacek u
SET kdo = (CASE WHEN c.kdo = 'JH'  THEN 1
 WHEN c.kdo = 'DF' THEN 2
   ELSE 0 END) ,
  pozn1 = c.pozn
FROM test.csv c
WHERE to_char(u.datum,'DD.MM.YYYY') =  c.datum;