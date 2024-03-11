/* 40. Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing 
these two pieces of information. Use the function to make three dictionaries representing different albums. 
Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
Make at least one new function call that includes the number of tracks on an album.            */

// Define the interface for the album object
interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property for tracks
}

// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title,
    };
    // Check if tracks parameter is provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating albums using make_album function
const album1: Album = make_album("Artist1", "Album1");
const album2: Album = make_album("Artist2", "Album2", 12); // Album with tracks
const album3: Album = make_album("Artist3", "Album3");

// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);


