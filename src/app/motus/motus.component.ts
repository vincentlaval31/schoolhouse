import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

const weeks: { [key: number]: string[] } = {
  19: [
    "VICTOIRE", "HORLOGE", "ATTENDRE", "POINT", "ASPECT", "PRECIPITER", "POT", "DIFFERENT", 
    "TRONC", "EQUIPE", "LONGTEMPS", "ENTRETIEN", "RECULER", "UNE HEURE"
  ],
  20: [
    "COIFFER", "INCENDIE", "FAIBLE", "WAGON", "ESCALADER", "ARRIERE", "OBSTACLE", "RECEVOIR", 
    "SENSIBLE", "MOTEUR", "LOCOMOTIVE", "CUIR", "MONTAGNARD", "MEDAILE"
  ],
  21: [
    "JOIE", "TELLEMENT", "DECLARER", "PUISSANT", "LIBERTE", "VIOLENT", "PRECEDER", "DISTANCE", 
    "BERCEAU", "MENACER", "MONTER", "PUBLIC", "SALLE"
  ],
  22: [
    "TANDIS QUE", "SALUER", "DIVERS", "AUTORITE", "CANNE", "SEVERE", "REUSSIR", "EVENEMENT", 
    "TENTE", "VENT", "ARTISTE", "PUBLIC", "SALLE", "BEAUCOUP"
  ],
  23: [
    "COUTER", "SOIT", "SECRET", "LIEN", "GUERRE", "EXPEDIER", "MOITIE", "CHAGRIN", "PRESSER", 
    "ETROIT", "COMBIEN", "ENNUI", "PETIT-DEJEUNER", "DEJEUNER"
  ],
  24: [
    "TANT", "CONSTRUIRE", "MULTICOLORE", "HURLER", "HUMIDE", "BLESSURE", "EXPERIENCE", "PALAIS", 
    "SURSAUTER", "AUTREFOIS", "HOMME", "BATIMENT", "TOUJOURS", "FACADE"
  ],
  25: [
    "ECHAPPER", "BOUT", "COMMANDE", "IMPERMEABLE", "QUESTION", "MOURIR", "SERIE", "ROCHER", 
    "SOURIANT", "LIVREUR", "TEMPERATURE", "PERSONNE", "LA TETEE", "LE PORT"
  ],
  26: [
    "SYSTEME", "EFFONDRER", "LIQUIDE", "OCCUPER", "MOTEUR", "SUIVANT", "SEAU", "NUMERIQUE", 
    "TAIRE", "GARAGISTE", "INDISPENSABLE", "FIXATION", "APPAREIL", "REJOINDRE"
  ],
  27: [
    "ECLAIRER", "AUSSITOT", "MANUEL", "PARTICIPER", "SIECLE", "MELODIE", "OMBRE", "OBUSQUE", 
    "RUE", "SE PROMENER", "MAGASIN", "LUMIERE", "VACARME"
  ],
  28: [
    "GEANT", "GAZON", "SERRER", "IMPORTANT", "RACE", "SOUPLE", "REVER", "QUEUE", "DEFAUT", 
    "BEAUTE", "BRAS", "ARRIVER", "REINE", "ESPAGNE"
  ],
  29: [
    "DEDANS", "VENGER", "IMPORTER", "ETONNER", "BUREAU", "CALENDRIER", "PEUPLE", "IMMENSE", 
    "AFIN", "ACROCHER", "MONDE", "CONSULTER", "AVIS", "FILM"
  ],
  30: [
    "ENFONCER", "AVENTURE", "TAPIS", "FIXE", "EMPECHER", "ENDROIT", "SCIENCE", "EMBELLIR", 
    "HISTOIRE", "VOYAGE", "SURVOLER", "HELAS", "PERSONNAGE"
  ]
};


@Component({
  selector: 'app-motus',
  imports: [CommonModule],
  templateUrl: './motus.component.html',
  styleUrls: ['./motus.component.scss']
})
export class MotusComponent {
  alphabet: string[][] = [
    ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
    ['W', 'X', 'C', 'V', 'B', 'N']
  ]
  wordToGuess: string = 'DEMO';
  attempts: string[][];
  currentRow: number = 0;
  currentCol: number = 1;
  gameWon: boolean = false;
  weeks: { [key: number]: string[] } = weeks;
  allWeeks: number[] = Object.keys(weeks).map(week => parseInt(week, 10));
  selectedWeeks: number[] = [19];

  constructor() {
    this.wordToGuess = this.getRandomWord();
    this.attempts = Array(6).fill(null).map(() => Array(this.wordToGuess.length).fill(''));
    this.attempts[0][0] = this.wordToGuess[0];
  }

  getRandomWord(): string {
    if (this.selectedWeeks.length > 0) {
      const words = this.selectedWeeks.map(week => this.weeks[week]).flat();
      return words[Math.floor(Math.random() * words.length)];
    } else {
      const allWords = Object.values(this.weeks).flat();
      return allWords[Math.floor(Math.random() * allWords.length)];
    }
  }

  onWeekSelect(week: number) {
    if (this.selectedWeeks.includes(week)) {
      this.selectedWeeks = this.selectedWeeks.filter(w => w !== week);
    } else {
      this.selectedWeeks.push(week);
    }
  }

  selectLetter(letter: string) {
    if (this.currentCol < this.wordToGuess.length && !this.gameWon) {
      this.attempts[this.currentRow][this.currentCol] = letter;
      this.currentCol++;
    }
  }

  refreshGame() {
    this.wordToGuess = this.getRandomWord();
    this.attempts = Array(6).fill(null).map(() => Array(this.wordToGuess.length).fill(''));
    this.attempts[0][0] = this.wordToGuess[0];
    this.currentRow = 0;
    this.currentCol = 1;
    this.gameWon = false;
  }

  clearLetter() {
    if (this.currentCol > 1 && !this.gameWon) {
      this.currentCol--;
      this.attempts[this.currentRow][this.currentCol] = '';
    }
  }

  validateWord() {
    if (this.currentCol === this.wordToGuess.length) {
      const guess = this.attempts[this.currentRow].join('');
      if (guess === this.wordToGuess) {
        this.gameWon = true;
      } else if (this.currentRow < 5) {
        this.moveToNextRow();
      } else {
        alert('Dommage, le mot était ' + this.wordToGuess);
      }
    }
  }

  moveToNextRow() {
    this.currentRow++;
    this.currentCol = 0;
  
    for (let i = 0; i < this.wordToGuess.length; i++) {
      this.attempts[this.currentRow][i] = '';
    }
  }

  isPresentButNotOverused(letter: string, rowIndex: number, colIndex: number): boolean {
    if (this.currentRow <= rowIndex || !this.wordToGuess.includes(letter)) return false;
    
    let wordLetterCount = this.wordToGuess.split('').filter(l => l === letter).length;
    let correctLetterCount = 0;
    let guessLetterCount = 0;
    
    for (let i = 0; i < this.wordToGuess.length; i++) {
      if (this.attempts[rowIndex][i] === letter) {
        if (this.wordToGuess[i] === letter) {
          correctLetterCount++;
        } else {
          guessLetterCount++;
        }
      }
    }
    
    return guessLetterCount > 0 && (correctLetterCount + guessLetterCount) <= wordLetterCount;
  }
}