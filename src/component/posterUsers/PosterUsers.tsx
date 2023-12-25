import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { RootState } from "../../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { DeletePoster } from "./../../redux/slice/userSlice";
type Props = {};
interface Myposter {
  imgsrc: string;
  imgtitle: string;
  id: string;
  userId: string;
}
const PosterUsers = (props: Props) => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  return (
    <section id="poster_users_section" style={{ display: "flex", gap: "10px" }}>
      {users.map((user) => (
        <div key={user.id} className="poster-user-card">
          {user.myposter!.map((poster: Myposter, index: number) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140, width: 200 }}
                image={poster.imgsrc}
                title="post image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {poster.imgtitle}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  style={{ color: "red" }}
                  size="small"
                  onClick={() => {
                    console.log(poster.id);
                    const id = poster.id;
                    const updatedMyposter = (
                      user.myposter as Myposter[]
                    ).filter((p) => p.id !== id);
                    console.log(updatedMyposter);
                    if (user.id) {
                      dispatch(
                        DeletePoster({
                          userId: user.id,
                          myposter: updatedMyposter,
                        }) as any
                      );
                    } else {
                      console.log("yook");
                    }
                  }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      ))}
    </section>
  );
};

export default PosterUsers;
