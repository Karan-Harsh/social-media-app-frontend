import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Sidharth Shukla",
      userId: 1,
      profilePic:
        "https://imgs.search.brave.com/qFR9Cg5apZLfSSiD5_o8B4F25aTX6Pd-H84KtyEI0e8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2RlYy9z/aGVobmFhemdpbGxz/aWRkaGFydGhzaHVr/bGExMTY3MDgzNDc0/MC5qcGc",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis culpa, aliquid quod nam nesciunt ratione numquam doloribus labore ducimus vitae minus optio cum voluptatibus rem possimus quos nobis cumque",
      img: "https://imgs.search.brave.com/TIkDksjCsIX-9P05Tr1D8WwGS1sER3h75ef6n7VWMCo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGlua3ZpbGxhLmNv/bS9pbWFnZXMvMjAy/Mi0wOS9yYXNobWkt/ZGVzYWktYW5kLXNp/ZGRoYXJ0aC1zaHVr/bGEuanBn",
    },
    {
      id: 2,
      name: "Sidharth Shukla",
      userId: 1,
      profilePic:
        "https://imgs.search.brave.com/TIkDksjCsIX-9P05Tr1D8WwGS1sER3h75ef6n7VWMCo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGlua3ZpbGxhLmNv/bS9pbWFnZXMvMjAy/Mi0wOS9yYXNobWkt/ZGVzYWktYW5kLXNp/ZGRoYXJ0aC1zaHVr/bGEuanBn",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, tempore",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
export default Posts;
