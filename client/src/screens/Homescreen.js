import React, { useEffect, useState } from "react";

import axios from "axios";
import Room from "../components/Room";

function Homesceen() {
  const [rooms, setrooms] = useState([]);

  const [loading, setloading] = useState();

  const [error, seterror] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;
        setrooms(data);
        setloading(false);
      } catch (error) {
        seterror(error);
        console.error(error);
        setloading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-2">
                <Room room={room} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homesceen;
