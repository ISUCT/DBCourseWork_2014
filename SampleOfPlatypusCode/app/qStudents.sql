/**
 *
 * @author jskonst
 * @name qStudents
 * @public
 */ 
Select * 
From STUDENTS t1
 Where t1.name like :sName 
 and t1.surname like :sSurname