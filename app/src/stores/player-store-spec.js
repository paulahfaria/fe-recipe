import Player from "./player-store";

describe('Player', () => {
   it('should create a player instance without a name', () => {
       let player = new Player();
       expect(player.name).toBe('N/A');
   });
});
