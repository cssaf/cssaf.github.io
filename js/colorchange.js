function colorchange(color) {

    if (color == 'blue') {
        document.documentElement.style.transition = '.25s';
        document.documentElement.style.setProperty('--foreground', '88, 88, 255');
        document.documentElement.style.setProperty('--background', '18, 18, 125');
    }

    if (color == 'purple') {
        document.documentElement.style.transition = '.25s';
        document.documentElement.style.setProperty('--foreground', '200, 0, 255');
        document.documentElement.style.setProperty('--background', '80, 0, 145');
    }

    if (color == 'pink') {
        document.documentElement.style.transition = '.25s';
        document.documentElement.style.setProperty('--foreground', '255, 0, 200');
        document.documentElement.style.setProperty('--background', '125, 0, 60');
    }

    if (color == 'red') {
        document.documentElement.style.transition = '.25s';
        document.documentElement.style.setProperty('--foreground', '248, 68, 68');
        document.documentElement.style.setProperty('--background', '118, 18, 18');
    }
}