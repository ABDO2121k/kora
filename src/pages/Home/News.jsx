import { Grid } from "@mui/material";
import BlogCard from "../../components/news/BlogCard";
import FirstBlog from "../../components/news/FirstBlog";
import HeadeN from "../../components/news/HeadeN";
import BlogRecent from "../../components/news/BlogRecent";
import newsStyles from "../../components/news/styles/News.module.css";

const News = () => {
  const blogPostTable = [
    {
      id: 1,
      date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
      title: "afin a Nadir",
      text: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nisi cumque non facere ullam sed tempore eveniet accusamus porro explicabo quae possimus, nam, qui esse et earum! Cum quas distinctio similique minus nam. Deleniti harum recusandae cupiditate, omnis natus expedita quia minima deserunt architecto. Incidunt voluptatum facere possimus natus suscipit molestias quam dicta commodi corporis error veritatis hic exercitationem labore sint, quibusdam autem sapiente ullam cupiditate sit? Ullam quisquam sequi delectus veritatis, magni debitis perspiciatis sunt fugit tenetur impedit quidem, in quia eveniet cupiditate iste placeat? Ducimus aspernatur harum alias dolorum exercitationem velit dolor consectetur, excepturi praesentium? Neque, deserunt fugit!",
      images: [
        "https://img.freepik.com/photos-gratuite/photographie-arene-football-sport_1409-4807.jpg?t=st=1710514430~exp=1710518030~hmac=0c52851186530ccd5e4d7f5ce200fd2fd51a93538355b7177d500d266504e9f3&w=900",
        "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
      ],
      comments: [
        {
          id: 1,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
          replies: [
            { id: 1, text: "Reply 1 to Comment 1" },
            { id: 2, text: "Reply 2 to Comment 1" },
          ],
        },
        {
          id: 2,
          text: "Comment 2",
          replies: [
            { id: 1, text: "Reply 1 to Comment 1" },
            { id: 2, text: "Reply 2 to Comment 1" },
          ],
        },
      ],
    },
    {
      id: 2,
      date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nisi cumque non facere ullam sed tempore eveniet accusamus porro explicabo quae possimus, nam, qui esse et earum! Cum quas distinctio similique minus nam. Deleniti harum recusandae cupiditate, omnis natus expedita quia minima deserunt architecto. Incidunt voluptatum facere possimus natus suscipit molestias quam dicta commodi corporis error veritatis hic exercitationem labore sint, quibusdam autem sapiente ullam cupiditate sit? Ullam quisquam sequi delectus veritatis, magni debitis perspiciatis sunt fugit tenetur impedit quidem, in quia eveniet cupiditate iste placeat? Ducimus aspernatur harum alias dolorum exercitationem velit dolor consectetur, excepturi praesentium? Neque, deserunt fugit!",
      title: "afin a Nadir2",
      images: [
        "https://img.freepik.com/photos-gratuite/photographie-arene-football-sport_1409-4807.jpg?t=st=1710514430~exp=1710518030~hmac=0c52851186530ccd5e4d7f5ce200fd2fd51a93538355b7177d500d266504e9f3&w=900",
        "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
      ],
      comments: [
        {
          id: 3,
          text: "Comment 3",
          replies: [
            { id: 1, text: "Reply 1 to Comment 1" },
            { id: 2, text: "Reply 2 to Comment 1" },
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <div>
        <HeadeN />
      </div>
      <Grid container>
        <Grid item sm={8} xs={12}>
          <div>
            <FirstBlog blog={blogPostTable[0]} />
          </div>{" "}
          <div className="mt-5">
            {blogPostTable.map((e, i) => (
              <BlogCard key={i} blog={e} />
            ))}
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className="p-5">
            <div className={newsStyles.sectionT}>
              <h5>Recent Post</h5>
            </div>
            <div className="mt-5">
              {blogPostTable.slice(0,5).map((e, i) => (
                <BlogRecent key={i} blog={e} />
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default News;
