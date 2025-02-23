import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

const weeks: { [key: string]: string[] } = {
  'LEO-S19': [
    "VICTOIRE", "HORLOGE", "ATTENDRE", "POINT", "ASPECT", "PRECIPITER", "POT", "DIFFERENT", 
    "TRONC", "EQUIPE", "LONGTEMPS", "ENTRETIEN", "RECULER", "UNE HEURE"
  ],
  'LEO-S20': [
    "COIFFER", "INCENDIE", "FAIBLE", "WAGON", "ESCALADER", "ARRIERE", "OBSTACLE", "RECEVOIR", 
    "SENSIBLE", "MOTEUR", "LOCOMOTIVE", "CUIR", "MONTAGNARD", "MEDAILE"
  ],
  'LEO-S21': [
    "JOIE", "TELLEMENT", "DECLARER", "PUISSANT", "LIBERTE", "VIOLENT", "PRECEDER", "DISTANCE", 
    "BERCEAU", "MENACER", "MONTER", "PUBLIC", "SALLE"
  ],
  'LEO-S22': [
    "TANDIS QUE", "SALUER", "DIVERS", "AUTORITE", "CANNE", "SEVERE", "REUSSIR", "EVENEMENT", 
    "TENTE", "VENT", "ARTISTE", "PUBLIC", "SALLE", "BEAUCOUP"
  ],
  'LEO-S23': [
    "COUTER", "SOIT", "SECRET", "LIEN", "GUERRE", "EXPEDIER", "MOITIE", "CHAGRIN", "PRESSER", 
    "ETROIT", "COMBIEN", "ENNUI", "PETIT-DEJEUNER", "DEJEUNER"
  ],
  'LEO-S24': [
    "TANT", "CONSTRUIRE", "MULTICOLORE", "HURLER", "HUMIDE", "BLESSURE", "EXPERIENCE", "PALAIS", 
    "SURSAUTER", "AUTREFOIS", "HOMME", "BATIMENT", "TOUJOURS", "FACADE"
  ],
  'LEO-S25': [
    "ECHAPPER", "BOUT", "COMMANDE", "IMPERMEABLE", "QUESTION", "MOURIR", "SERIE", "ROCHER", 
    "SOURIANT", "LIVREUR", "TEMPERATURE", "PERSONNE", "LA TETEE", "LE PORT"
  ],
  'LEO-S26': [
    "SYSTEME", "EFFONDRER", "LIQUIDE", "OCCUPER", "MOTEUR", "SUIVANT", "SEAU", "NUMERIQUE", 
    "TAIRE", "GARAGISTE", "INDISPENSABLE", "FIXATION", "APPAREIL", "REJOINDRE"
  ],
  'LEO-S27': [
    "ECLAIRER", "AUSSITOT", "MANUEL", "PARTICIPER", "SIECLE", "MELODIE", "OMBRE", "OBUSQUE", 
    "RUE", "SE PROMENER", "MAGASIN", "LUMIERE", "VACARME"
  ],
  'LEO-S28': [
    "GEANT", "GAZON", "SERRER", "IMPORTANT", "RACE", "SOUPLE", "REVER", "QUEUE", "DEFAUT", 
    "BEAUTE", "BRAS", "ARRIVER", "REINE", "ESPAGNE"
  ],
  'LEO-S29': [
    "DEDANS", "VENGER", "IMPORTER", "ETONNER", "BUREAU", "CALENDRIER", "PEUPLE", "IMMENSE", 
    "AFIN", "ACROCHER", "MONDE", "CONSULTER", "AVIS", "FILM"
  ],
  'LEO-S30': [
    "ENFONCER", "AVENTURE", "TAPIS", "FIXE", "EMPECHER", "ENDROIT", "SCIENCE", "EMBELLIR", 
    "HISTOIRE", "VOYAGE", "SURVOLER", "HELAS", "PERSONNAGE"
  ],
  "MAE-D1": [
    "PEINTRE", "COULEUR", "BLEU", "JAUNE", "ROUGE", "VERT", "MARRON", "ORANGE", "VIOLET", "ROSE", "BLANC", "NOIR", "FORME", "CARRE", "ROND", "TRIANGLE", "LIGNE", "CENTRE", "TOILE", "FOND", "ARTISTE", "REALITE",
    "UTILISER", "PEINDRE", "SE MELANGER", "CHERCHER", "MONTRER",
    "PRIMAIRE", "DROIT", "COURBE",
    "MAIS", "AUSSI", "SUR", "COMME", "AINSI", "PLUSIEURS"
  ],
  "MAE-D2": [
    "MUSIQUE", "BALLET", "MELODIE", "PIANO", "INSTRUMENT", "BOIS", "FLUTE", "CUIVREE", "TROMPETTE", "TAMBOUR", "CORDE", "VIOLON", "LONG", "MORCEAU", "OEUVRE", "MONDE",
    "COMPOSER", "INVENTER", "IMAGINER", "JOUER",
    "FORT", "MUSICAL", "FRANCAIS", "CONNU",
    "DABORD", "QUE", "ENSUITE", "COMME", "DANS", "PENDANT"
  ],
  "MAE-D3": [
    "VISAGE", "EPAULES", "FILLE", "BOUCHE", "NEZ", "MENTON", "JOUE", "DOUCEUR", "MARBRE", "OEIL", "YEUX", "REGARD", "SOURCIL", "CHEVEUX", "FILLETTE", "ARRIERE", "OREILLES", "COU", "SCULPTURE",
    "SCULPTER", "LAISSER", "VOIR",
    "PETIT", "BEAU", "BELLE", "PLEIN", "DOUX", "DOUCE", "SERIEUX",
    "DANS", "VERS", "AVEC", "AINSI"
  ],
  "MAE-D4": [
    "PREHISTOIRE", "HOMME", "FEMME", "ANIMAL", "ANIMAUX", "PLANTE", "NOMADE", "EPOQUE", "HUMAIN", "PAROI", "GROTTE", "TRACE", "MAIN", "DESSIN", "OISEAU", "OURS", "RENNE", "CHEVAL", "LION", "TROUPEAU",
    "CHASSER", "COUPER", "DEPLACER", "NOURRIR", "VOIR", "ECRIRE", "DESSINER",
    "SAUVAGE", "MAGNIFIQUE",
    "PENDANT", "POUR", "SOUVENT", "ENCORE", "MAIS", "DANS", "AINSI"
  ],
  "MAE-D5": [
    "AUTOMNE", "TABLEAU", "NOM", "PORTRAIT", "FRUIT", "LEGUME", "ELEMENT", "PERSONNAGE", "VISAGE", "POIRE", "POMME", "CHEVELURE", "GRAPPE", "RAISIN", "SEPTEMBRE", "TEMPS", "FEUILLE",
    "ASSEMBLER", "COMPOSER", "REMPLACER", "FORMER",
    "IMPORTANT", "NOMBREUX", "AUTRE", "NATUREL", "SIMPLE",
    "COMME", "AINSI", "POUR", "CAR", "ENSEMBLE", "DEJA"
  ],
  "MAE-D6": [
    "JUNGLE", "FLEUR", "FEUILLE", "ATTENTION", "ELEPHANT", "SINGE", "SERPENT", "LION", "OISEAU", "LUNE", "FEMME", "MILIEU", "VEGETATION", "DOIGT", "DIRECTION", "REVE", "MUSICIEN", "SOIR", "CIEL", "IMAGINATION", "PEINTRE",
    "VOIR", "POINTER", "ECOUTER", "DEVOILER", "VOYAGER",
    "LOINTAIN", "LOINTAINE", "EXOTIQUE", "ALLONGE", "PLEIN", "PLEINE",
    "ENTRE", "LOIN", "DANS", "POUR", "JAMAIS"
  ],
  "MAE-INV": [
    "AILLEURS", "AINSI", "ALORS", "APRES", "AUSSI", "AUJOURDHUI", "AUTANT", "AUTOUR", "AVANT", "AVEC", "BEAUCOUP", "BIEN", "BIENTOT", "CEPENDANT", "DEJA", "DEMAIN", "DONC", "DEVANT", "DEDANS", "DEHORS", "ENCORE", "ENFIN", "ENSUITE", "HIER", "JAMAIS", "LONGTEMPS", "LORSQUE", "MAIS", "MALGRE", "MOINS", "NON", "OUI", "PARCE QUE", "PARFOIS", "PARTOUT", "PAS", "PENDANT", "PLUS", "POURQUOI", "PRESQUE", "PUIS", "PUISQUE", "QUAND", "QUELQUEFOIS", "QUI", "QUE", "QUOI", "SANS", "SEULEMENT", "SOUDAIN", "SOUVENT", "TOUJOURS", "TOT", "TRES", "TROP", "VERS", "VITE", "VOICI", "VOILA", "VRAIMENT"
  ]
};


const pointsRules: { [key: number]: number } = {
  1: 100,
  2: 80,
  3: 50,
  4: 30,
  5: 20,
  6: 10
}


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
  weeks: { [key: string]: string[] } = weeks;
  allWeeks: string[] = Object.keys(weeks);
  selectedWeeks: string[] = ['LEO-S19'];
  pointsCount: number = 0;
  bonusEnabled: boolean = false;

  constructor() {
    this.wordToGuess = this.getRandomWord();
    console.log("🚀 ~ MotusComponent ~ constructor ~ this.wordToGuess:", this.wordToGuess)
    this.attempts = Array(6).fill(null).map(() => Array(this.wordToGuess.length).fill(''));
    this.attempts[0][0] = this.wordToGuess[0];
  }

  getRandomWord(): string {
    if (this.selectedWeeks.length > 0) {
      let words = this.selectedWeeks.map(week => this.weeks[week]).flat();
      words = words.filter(word => word.length < 8);
      return words[Math.floor(Math.random() * words.length)];
    } else {
      let allWords = Object.values(this.weeks).flat();
      allWords = allWords.filter(word => word.length < 8);
      return allWords[Math.floor(Math.random() * allWords.length)];
    }
  }

  onWeekSelect(week: string) {
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
    this.bonusEnabled = false;
    this.wordToGuess = this.getRandomWord();
    this.attempts = Array(6).fill(null).map(() => Array(this.wordToGuess.length).fill(''));
    this.attempts[0][0] = this.wordToGuess[0];
    this.currentRow = 0;
    this.currentCol = 1;
    this.gameWon = false;
    console.log("🚀 ~ MotusComponent ~ refreshGame ~ this.wordToGuess:", this.wordToGuess)
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
        this.pointsCount += pointsRules[this.currentRow + 1];
      } else if (this.currentRow < 5) {
        this.moveToNextRow();
      } else {
        alert('Dommage, le mot était ' + this.wordToGuess);
      }
    }
  }

  getBonus() {
    this.bonusEnabled = true;
    this.pointsCount -= 20;
  }

  moveToNextRow() {
    this.currentRow++;
    this.currentCol = 0;
  
    for (let i = 0; i < this.wordToGuess.length; i++) {
      this.attempts[this.currentRow][i] = '';
    }
  }

  isPresentButNotOverused(letter: string, rowIndex: number): boolean {
    if (!this.wordToGuess.includes(letter)) return false;
    
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