import React, { useEffect, useState } from "react";

const Cell = ({ index, activatedCell, setActiveCell }) => {
  return (
    <button
      className={`border border-black cursor-pointer rounded-lg ${
        activatedCell.includes(index) ? "bg-green-600" : ""
      }`}
      disabled={activatedCell.includes(index)}
      onClick={() => setActiveCell((perv) => [...perv, index])}
    ></button>
  );
};

const GridLights = () => {
  const [activatedCell, setActiveCell] = useState([]);
  const grids = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  useEffect(() => {
    const filteredGrids = grids.flat(1).filter(Boolean);
    if (filteredGrids.length === activatedCell.length) {
      const interval = setInterval(() => {
        setActiveCell((order) => {
          const newOrder = order.slice();
          newOrder.pop();
          if (newOrder.length === 0) {
            clearInterval(interval);
          }
          return newOrder;
        });
      }, 500);
    }
  }, [activatedCell]);

  return (
    <div className="flex justify-center items-center">
      <div
        className="w-96 h-96 grid p-2 gap-2"
        style={{ gridTemplateColumns: `repeat(${grids[0].length},1fr)` }}
      >
        {grids
          .flat(1)
          .map((value, index) =>
            value ? (
              <Cell
                key={index}
                index={index}
                activatedCell={activatedCell}
                setActiveCell={setActiveCell}
              />
            ) : (
              <span key={index}></span>
            )
          )}
      </div>
    </div>
  );
};

export default GridLights;
