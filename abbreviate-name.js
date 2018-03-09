// solution for https://www.codewars.com/kata/abbreviate-a-two-word-name

function abbrevName(name){
    const firstInitial = name.charAt().toUpperCase();
    const spaceIndex = name.indexOf(' ');
    const lastInitial = name.charAt(spaceIndex + 1).toUpperCase();
    return `${firstInitial}.${lastInitial}`;
}

// Wow, so many people on Code Wars used array methods. I figured, why bother if there are string methods that do the job? One thing I learned from scrolling through solutions is that you can use bracket notation with an index number to get a letter from a string - that could replace my "charAt()" methods. I kind of like the consistency of this, though.