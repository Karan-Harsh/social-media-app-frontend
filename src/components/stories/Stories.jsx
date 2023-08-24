import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Sidharth Shukla",
      img: "https://imgs.search.brave.com/qFR9Cg5apZLfSSiD5_o8B4F25aTX6Pd-H84KtyEI0e8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2RlYy9z/aGVobmFhemdpbGxz/aWRkaGFydGhzaHVr/bGExMTY3MDgzNDc0/MC5qcGc",
    },
    {
      id: 2,
      name: "Sidharth Shukla",
      img: "https://imgs.search.brave.com/qFR9Cg5apZLfSSiD5_o8B4F25aTX6Pd-H84KtyEI0e8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2RlYy9z/aGVobmFhemdpbGxz/aWRkaGFydGhzaHVr/bGExMTY3MDgzNDc0/MC5qcGc",
    },
    {
      id: 3,
      name: "Sidharth Shukla",
      img: "https://imgs.search.brave.com/qFR9Cg5apZLfSSiD5_o8B4F25aTX6Pd-H84KtyEI0e8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2RlYy9z/aGVobmFhemdpbGxz/aWRkaGFydGhzaHVr/bGExMTY3MDgzNDc0/MC5qcGc",
    },
    {
      id: 4,
      name: "Sidharth Shukla",
      img: "https://imgs.search.brave.com/qFR9Cg5apZLfSSiD5_o8B4F25aTX6Pd-H84KtyEI0e8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2RlYy9z/aGVobmFhemdpbGxz/aWRkaGFydGhzaHVr/bGExMTY3MDgzNDc0/MC5qcGc",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>-</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
