const maleNames = ['Adalstienn', 'Armann', 'Askur', 'Atli', 'Baldur', 'Bardi', 'Bertram', 'Birtingr', 'Bjartur', 'Brandr', 'Bresi', 'Brimar', 'Finnur', 'Fridgeir', 'Fridmar', 'Gizurr', 'Grimur', 'Guojon', 'Hafoca', 'Hallbjorn', 'Haraldur', 'Haukr', 'Hinrik', 'Isak', 'Kolli', 'Kolskeggr', 'Leifr', 'Ljotur', 'Narfi', 'Oblauor', 'Ossur', 'Rauor', 'Rolant', 'Styrr', 'Svartur', 'Sveinn', 'Trausti', 'Uggi', 'Vestmaor', 'Veturlioi', 'Aron', 'Eyjolfur', 'Helgi', 'Jatgeirr', 'Jokull', 'Joour', 'Joshua', 'Keran', 'Ketill', 'Klemenz', 'Olvir', 'Ooinn', 'Ottar', 'Reynir', 'Sindri', 'Smior', 'Arnkell', 'Gamli', 'Mooolfr', 'Olafur', 'Vagn', 'Sumarlioi', 'Birgir', 'Birkir', 'Bjarki', 'Dagbjartur', 'Dyri', 'Hjotr', 'Holti', 'Hrafn', 'Hreinn', 'Kalfr', 'Klepper', 'Knjukr', 'Kvigr', 'Leioolfr', 'Palmi', 'Petur', 'Refr', 'Saebjorn', 'Torfi', 'Ulf', 'Valdimar', 'Adalward', 'Alexander', 'Arnar', 'Berrant', 'Egill', 'Eirikur', 'Eyvindur', 'Fannar', 'Gegn', 'Geir', 'Gestur', 'Greipr', 'Sigurdur', 'Skeggr', 'Vigharthur', 'Vigi', 'Vigolfr', 'Nick'];

const femaleNames = ['Lindsey'];

const getName = (gender) => {

    switch(gender){
        case 'Male':
            return maleNames[Math.floor(Math.random() * maleNames.length)];
        case 'Female':
            
            return;
        default:
            return;
    }
}

export default getName;