class Media {
    constructor(title, isChekedOut, ratings){
      this._title = [];
      this._isChekedOut = false;
      this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isChekedOut(){
      return this._isChekedOut;
    }
    get ratings(){
      return this._ratings;
    }
    set isChekedOut(chekedOut){
      this._isChekedOut = chekedOut;
    }
    toggleCheckOutStatus(){
      return this._isChekedOut = ! this._isChekedOut;
    }
     getAverageRating(){
       let sumRating = this._ratings.reduce((acc,cVal) => acc + cVal, 0);
       const lengthOfRating = this._ratings.length;
       return sumRating/lengthOfRating;
    }
    addRating(newRating){
      return this._ratings.push(newRating);
    }
  }
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  } 
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist(){
      return this._artist;
    }
    get songs(){
      return this._songs;
    }
  }
  
  const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything._isChekedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie ('Jan de Bont','Speed',116);
  speed.toggleCheckOutStatus();
  console.log(speed._isChekedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  
  
  