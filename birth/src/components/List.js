import React from "react";

const List = ({ people }) => {
  return (
    <div className="person-list">
      <h2>List of {people.length} Persons</h2>

      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div className="person-info">
              <h3>{name}</h3>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
