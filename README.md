# starting-with-typescript-template
The template repository for the starting-with-typescript course on Learning Lab.

### What I have learned on this course

- First you have a HTML file with some javascript function being called
- In this html, the `file.js` is called but not created yet
- Then a typescript file is created with the function called on the html file:
```
function doIt(): void {
    const theText: string = "Hello World";
  
    alert(theText);
  }
```
- Finally, running `tsc file.ts` on terminal creates the javascript.js file first called on the html file


So basically typescript function transcripts it to javascript automatically.