--partA
select distinct nationality from directors
select count(*) from actors
union all
select count(*) from directors
union all
select count(*) from movies
union all
select count(*) from movie_revenues
union all
select count(*) from movies_actors

-- PartB
select movie_name,release_date from movies
select first_name, last_name from directors
where nationality = 'American'

select * actor where gender = 'male' where date_of_birth > 1970-01-01
select names * movie where movie_lenghth > 90 minutes where movie_lang = 'English';

-- Part C
select movie_name, movie_lang from movies 
where movie_lang = 'English' or movie_lang = 'Spanish' or movie_lang = 'Korean';

select first_name, last_name from actors
WHERE first_name ='M' AND date_of_birth BETWEEN '1940-01-01' AND '1969-12-31';

select first_name , last_name from directors
WHERE nationality = 'Birtish' or nationality = 'French' or nationality = 'German'
AND date_of_birth BETWEEN '1950-01-01' and '1980-12-31';


