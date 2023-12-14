import React from "react";
import "./container.css";

const Container = () => {
  const arr = ["Chest", "Back", "Biceps", "Triceps", "Shoulder", "Thighs", "Abs"];
  return (
    <div className="container">
      {arr.length > 0
        ? arr.map((ele) => {
            return (
              <div className="grid_box">
                <div>{ele} Workout</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam,Lorem ipsum dolor sit amet.
                </p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Container;
