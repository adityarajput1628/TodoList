import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");

  const [listData, setListData] = useState([]);

  function addActivity() {
    //ONE WAY
    //setListData([...listData,activity])

    //ANOTHER WAY
    setListData((listData) => {
      const updatedList = [...listData, activity];
      //console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(index) {
    let updatedlistData = listData.filter((element, id) => {
      return index != id;
    });
    setListData(updatedlistData);
  }

  function removeAll(){
    setListData([]);
  }
  return (
    <>
      <div className="containerDiv">
        <div>
          <h1>TodoList</h1>
        </div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value.toUpperCase())}
        />
        <button className="btn btn-danger" onClick={addActivity}>
          Add
        </button>
        <p className="list-heading"> Here is your List :{")"}</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p className="paradiv" key={i}>
                  <div className="listData"> {data}</div>
                  <div className="btn-position">
                    <button className="btn btn-danger" onClick={() => removeActivity(i)}>Remove(-)</button>
                  </div>
                </p>
              </>
            );
          })}
          {listData.length>=1 && <button className="btn btn-danger"  onClick={removeAll}>Remove All</button>}
      </div>
    </>
  );
}

export default TodoList;
