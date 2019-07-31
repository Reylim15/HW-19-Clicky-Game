import React from 'react';

const IconCard = props => (
    <section id={props.id} className="iconCard" value={props.id} onClick={() =>
    props.clickedPlayer(props.id)
    }>
      <section className="character">
        <img src={props.image} className="db" alt="game-char" />
      </section>
    </section>
  )
  
  export default IconCard;