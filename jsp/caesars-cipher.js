function rot13(str) { // LBH QVQ VG!
    var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var index = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); //should decode to FREE CODE CAMP
rot13("SERR CVMMN!"); // should decode to FREE PIZZA!
rot13("SERR YBIR?"); // should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.