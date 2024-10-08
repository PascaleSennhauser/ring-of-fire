export class Game {
    public players: string[] = [];
    public player_images: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public pickCardAnimation = false;
    public currentCard: string = '';
    

    /**
     * This constructor fills the stack array with the cards in a random order.
     */
    constructor() {

        for(let i = 1; i <= 13; i++) {
            this.stack.push('spade_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
        }

        this.shuffle(this.stack);
    }


    /**
     * This method converts the game object to a JSON object for the Firestore.
     * @returns {Object} - The JSON object of the game-object gets returned.
     */
    toJson() {
        return {
            players: this.players,
            player_images: this.player_images,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickCardAnimation: this.pickCardAnimation,
            currentCard: this.currentCard
        };
    }


    /**
     * This method shuffles the cards in the stack, so the cards are in a random order.
     * @param arr - The stack array
     */
    shuffle(arr: any[]) {
        let currentIndex = arr.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
        }
      }
}