const Results = ({ impostor, votes, players, onRestart }) => {
  const getMostVoted = () => {
    let maxVotes = 0;
    let mostVotedPlayer = null;

    Object.entries(votes).forEach(([playerId, voteCount]) => {
      if (voteCount > maxVotes) {
        maxVotes = voteCount;
        mostVotedPlayer = players.find(p => p.id.toString() === playerId);
      }
    });

    return mostVotedPlayer;
  };

  const mostVoted = getMostVoted();
  const impostorCaught = mostVoted && mostVoted.id === impostor.id;

  return (
    <div className="results">
      <h1>Game Results</h1>

      <div className="impostor-reveal">
        <h2>The Impostor was: <span className="impostor-name">{impostor.name}</span></h2>
      </div>

      <div className="voting-results">
        <h3>Voting Results:</h3>
        <ul>
          {Object.entries(votes).map(([playerId, voteCount]) => {
            const player = players.find(p => p.id.toString() === playerId);
            return (
              <li key={playerId}>
                {player.name}: {voteCount} votes
                {player.id === impostor.id && <span className="impostor-indicator"> (Impostor)</span>}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="outcome">
        {impostorCaught ? (
          <h3 className="success">Innocents Win! The impostor was identified!</h3>
        ) : (
          <h3 className="failure">Impostor Wins! The innocents failed to identify the impostor!</h3>
        )}
      </div>

      <button onClick={onRestart} className="restart-button">
        Play Again
      </button>
    </div>
  );
};

export default Results;