class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = ['primary', 'middle', 'high'];
      this._numberOfStudents = 0;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents){
      if(typeof this._numberOfStudents === 'number'){
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    quickFacts(msg){
      msg = [`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`];
      return msg;
      }
    static pickSubstituteTeacher(substituteTeachers){
      this.substituteTeachers = [];
      let randm = Math.floor(Math.random()*(substituteTeachers.length - 1));
      return this.substituteTeachers[randm];
    }
  }
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super (name);
      this._level = 'primary';
      this._numberOfStudents = numberOfStudents;
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
      return this.pickupPolicy;
    }
  }
  class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams) {
      super(name);
      this._level = 'high';
      this._numberOfStudents = numberOfStudents;
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
      return console.log(`${this.sportsTeams}`);
    }
  }
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  console.log(lorraineHansbury.quickFacts());
  School.pickSubstituteTeacher('Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli');
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith);
  