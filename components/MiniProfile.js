import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] w-16 h-16"
        src="https://scontent.fkun1-1.fna.fbcdn.net/v/t1.18169-9/17190547_1289081034507690_2404285031340810491_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0hRqFxCy_fgAX8kyfk1&_nc_ht=scontent.fkun1-1.fna&oh=00_AT_Nk0fD28zRsbZ9lCS_ZdZhkGv7V5wcilg3pHDkJ43WmA&oe=629446B8"
        alt=""
      />
      <div className="flex-1 mx-4">
          <h2 className="font-bold">DovPet</h2>
          <h3 className="text-sm text-gray-400">Wecome to Insta Clone</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
