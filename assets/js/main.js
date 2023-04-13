/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.

2. Use the map function to create a new array with the title of each song in uppercase letters.

3. Use the filter function to create a new array with all the songs released before 1975.

4. Use destructuring to create a variable that stores the title of the first song in the array.

5. Use the find function to get the object representing the song "Hotel California".

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/

//1
import songs from "./songs.js";
console.log("Ex 1.", songs);

//2
const uppercaseSongs = songs.map(({ title }) => title.toUpperCase());
console.log("Ex 2.", uppercaseSongs);

//3
const pre1975Songs = songs.filter(({ year }) => year < 1975);
console.log("Ex 3.", pre1975Songs);

//4
const [firstSong] = songs;
const { title } = firstSong;
console.log("Ex 4.", title);

//5
const hotelCaliforniaSong = songs.find(
  ({ title }) => title === "Hotel California"
);
console.log("Ex 5.", hotelCaliforniaSong);

//6
const sumFunc = (...data)  =>{
  return data.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue),
    0
  );
}
const songsYears = songs.map(({ year }) => year);
console.log("Ex 6.", sumFunc(...songsYears));

//7
const rewrittenSongs = songs.map(
  ({ title, artist, year }) => `${title} - ${artist} (${year})`
);
console.log("Ex 7.", rewrittenSongs);

//8
const theBeatlesSongs = songs.filter(({ artist }) => artist === "The Beatles");
console.log("Ex 8.", theBeatlesSongs);

//9
const sumYears = (...data) => {
  return data.reduce(
    (accumulator, { year }) => accumulator + parseInt(year),
    0
  );
};
console.log("Ex 9.", sumYears(...songs));

//10
import avgYears from "./utils.js";
console.log("Ex 9.", avgYears(...songs));

//11
//no encontre manera qeu no deje obsoleto el find o lo tenga que loopear
//const longestSongTitle = songs.find(({title})=> title.length > longestTemporarySong.title.length)
console.log("Ex 11.", "-");

//12
const [{ title: firstTitle, artist, year }] = songs;
console.log("Ex 12.", `${title} - ${artist} - ${year}`);

//13
const [, ...allElements] = songs;
console.log("Ex 13.", allElements);

//14
import { loveSongs } from "./utils.js";
console.log("Ex 14.", loveSongs(...songs));

//15
const isAboveThreshold = ({ title }) => title.length > 5;
console.log("Ex 15.", songs.every(isAboveThreshold));

//16
const eighties = ({ year }) => year > 1979 && year < 1990;
console.log("Ex 16.", songs.some(eighties));

//17
const letItBe = songs.find(({ title }) => title === 'Let It Be');
console.log(`Ex 17. ${letItBe.artist} released ${letItBe.title} in ${letItBe.year}`);

//18
const artistNames = songs.map(({ artist }) => artist);
console.log("Ex 18.", artistNames);

//19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

const randomMovie = () => songs[Math.floor(Math.random() * (songs.length - 0 + 1) -1)]
console.log("Ex 19.", randomMovie())

//19

//20 filter, destructuring, temple literals
const areThereBeatlesSongsInThe70s = songs.filter(({ artist, year }) => artist === "The Beatles" && year > 1969 && year < 1980);

console.log("Ex 20.", `There are ${areThereBeatlesSongsInThe70s.length} Beatles songs in the 70s`  );
