import React, { useEffect, useState } from "react";

export default function Article() {
  const [Profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      let data = await response.json();
      setProfile(data);
    }, 2000);
  });

  return (
    <div>
      <div className="user_details">
        <div className="details">
          <h2>User Details</h2>
          {Profile && (
            <>
              <div className="profile">
                <h3>{Profile.username}</h3>
                <h4>{Profile.email}</h4>
                <a href={Profile.website}>{Profile.website}</a>
              </div>
            </>
          )}
          {!Profile && <div>loading.....</div>}
        </div>
      </div>
    </div>
  );
}
