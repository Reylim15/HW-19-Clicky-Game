import React from 'react';

const PillPost = props => (
  <section id={props.id} className="PillPost" value={props.id} onClick={() =>
  props.PillClicked(props.id)
  }>
    <section className="pill">
      <img src={props.image} className="db" alt="pill-img" />
    </section>
  </section>
)

export default PillPost;