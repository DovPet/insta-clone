import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "dovpet",
    userImg:
      "https://scontent.fkun1-1.fna.fbcdn.net/v/t1.18169-9/17190547_1289081034507690_2404285031340810491_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0hRqFxCy_fgAX8kyfk1&_nc_ht=scontent.fkun1-1.fna&oh=00_AT_Nk0fD28zRsbZ9lCS_ZdZhkGv7V5wcilg3pHDkJ43WmA&oe=629446B8",
    img: "https://scontent.fkun1-1.fna.fbcdn.net/v/t1.18169-9/17190547_1289081034507690_2404285031340810491_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0hRqFxCy_fgAX8kyfk1&_nc_ht=scontent.fkun1-1.fna&oh=00_AT_Nk0fD28zRsbZ9lCS_ZdZhkGv7V5wcilg3pHDkJ43WmA&oe=629446B8",
    caption: "This Is Dope",
  },
  {
    id: "123",
    username: "dovpet",
    userImg:
      "https://scontent.fkun1-1.fna.fbcdn.net/v/t1.18169-9/17190547_1289081034507690_2404285031340810491_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0hRqFxCy_fgAX8kyfk1&_nc_ht=scontent.fkun1-1.fna&oh=00_AT_Nk0fD28zRsbZ9lCS_ZdZhkGv7V5wcilg3pHDkJ43WmA&oe=629446B8",
    img: "https://scontent.fkun1-1.fna.fbcdn.net/v/t1.18169-9/17190547_1289081034507690_2404285031340810491_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0hRqFxCy_fgAX8kyfk1&_nc_ht=scontent.fkun1-1.fna&oh=00_AT_Nk0fD28zRsbZ9lCS_ZdZhkGv7V5wcilg3pHDkJ43WmA&oe=629446B8",
    caption: "This Is Dope",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
