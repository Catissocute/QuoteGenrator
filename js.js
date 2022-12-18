function theis(){
    //text color
    var x = document.querySelector(':root');
    const letteer = ['A','B','C','D','E','F',1,2,3,4,5,6,'A','B','C','D','E','F',1,2,3,4,5,6];
    var l1 = Math.floor(Math.random()* 6);
    var l2 = Math.floor(Math.random()*6);
    var a1 = Math.floor(Math.random()* 6);
    var a2 = Math.floor(Math.random()*6);
    var z = "#" + (letteer[l1] + letteer[l2] + letteer[a1] + letteer[a2]);
    x.style.setProperty('--coloer', z);
    //quote
    const quotes = ["Don't let yesterday take up too much of today.","If you're going through hell, keep going","Every man dies. Not every man lives.","Life shrinks or expands in proportion to one's courage.","Nothing is impossible. The word itself says - I'm possible!","We need much less than we think we need.","Sing like no one's listening, love like you've never been hurt, dance like nobody's watching, and live like it's heaven on earth.","Curiosity about life in all of its aspects, I think, is still the secret of great creative people.","Life is not a problem to be solved, but a reality to be experienced.","The unexamined life is not worth living.","History doesn't repeat itself, but it does rhyme.","History, like love, is so apt to surround her heroes with an atmosphere of imaginary brightness.","Those who don't know history are doomed to repeat it.","History is written by the victors.","History repeats itself, first as tragedy, second as farce.","The best prophet of the future is the past.","To study history means submitting to chaos and nevertheless retaining faith in order and meaning.","Show up, show up, show up, and after a while the muse shows up, too.","I have stood on a mountain of no's for one yes."];
    var qe = parseInt(quotes.length);
    var s = Math.floor(Math.random() * qe);
    document.getElementById("quote").innerHTML = (quotes[s]);
    //backgroundimg
    const backgroundimg = ["i1.jpg","i2.jpg","i3.jpg","i4.jpg","i5.jpg","i6.jpg","i7.jpg","i8.jpg","i9.jpg","i10.jpg","i11.jpg","i12.jpg","i13.jpg"];
    var arraay = backgroundimg.length;
    var backgroundrandom = Math.floor(Math.random()* arraay);
    var bodyimg = ("url(" + backgroundimg[backgroundrandom] + ")");
    x.style.setProperty('--bodyback', bodyimg)
}
