import { Player } from "../players"

const HIGHSCORE_KEY = "highScores"

export const saveHighScore = ({playerId, playerScore}:{playerId:Player["id"], playerScore:number}) =>{
    const currentHighScores = JSON.parse(localStorage.getItem(HIGHSCORE_KEY) || null as unknown as string)
    const currentPlayerHighScore = currentHighScores?.[playerId] || 0;
    if (playerScore > currentPlayerHighScore) {
        console.log([currentHighScores])
    localStorage.setItem(HIGHSCORE_KEY, JSON.stringify({...currentHighScores, [playerId]:playerScore}))
    
    }
}