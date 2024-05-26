import { Player, players } from "../players"


type Props = {
    player: Player | null;
    setPlayer: (player: Player) => void
}

export const PlayerRegistration = ({ player, setPlayer }: Props) => {

    return (
        <div>
            {players.map((pl) => (
                <span key={pl.id}>
                    <label>
                        <input type="radio" name="player-name" id="radio-btn" value={pl.id} onChange={({ target: { value } }) =>
                            setPlayer(players[Number(value) - 1])} />
                        {pl.name}
                    </label>
                </span>))}
            <p>{player?.name ? `Welcome to the Quiz, ${player?.name} !` : `Please choose a player`}</p>
        </div>

    )

}