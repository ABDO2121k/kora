import { createContext, useEffect, useState } from "react";
import { senMessage } from './chat.js'
import axios from "axios"

axios.defaults.withCredentials = true;




export const myContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [blogPostTable, setBlogPostTable] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLo, setLogged] = useState(false);

  // begin
  useEffect(() => {
    setBlogPostTable([
      {
        id: "1123333333666",
        date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
        title: "afin a Nadir",
        text: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nisi cumque non facere ullam sed tempore eveniet accusamus porro explicabo quae possimus, nam, qui esse et earum! Cum quas distinctio similique minus nam. Deleniti harum recusandae cupiditate, omnis natus expedita quia minima deserunt architecto. Incidunt voluptatum facere possimus natus suscipit molestias quam dicta commodi corporis error veritatis hic exercitationem labore sint, quibusdam autem sapiente ullam cupiditate sit? Ullam quisquam sequi delectus veritatis, magni debitis perspiciatis sunt fugit tenetur impedit quidem, in quia eveniet cupiditate iste placeat? Ducimus aspernatur harum alias dolorum exercitationem velit dolor consectetur, excepturi praesentium? Neque, deserunt fugit!",
        images: [
          "https://img.freepik.com/photos-gratuite/photographie-arene-football-sport_1409-4807.jpg?t=st=1710514430~exp=1710518030~hmac=0c52851186530ccd5e4d7f5ce200fd2fd51a93538355b7177d500d266504e9f3&w=900",
          "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
        ],
        comments: [
          {
            id: "12447477772727727272",
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "slm cv",
            replies: [
              {
                id: "agggshshh15235353535",
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: "djfkfjfkfkfkf2i3i3i",
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: "agggshshhdd35353535",
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: "djjfj22222",
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: "15235353535",
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 1,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 1,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 1,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
        ],
      },
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
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
            ],
          },
          {
            id: 2,
            profile:
              "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
            likes: 12,
            date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
            firstName: "SSI ABDELKADER",
            lastName: "Kouah",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi labore illum hic laudantium nam impedit fugit sapiente facere? Laboriosam optio quibusdam atque. Perspiciatis ipsum eaque dolorem voluptatum et repudiandae nobis?",
            replies: [
              {
                id: 1,
                text: "Reply 1 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
              {
                id: 2,
                text: "Reply 2 to Comment 1",
                profile:
                  "https://img.freepik.com/photos-gratuite/photographie-arene-football-abandonnee_1409-4722.jpg?t=st=1710517554~exp=1710521154~hmac=5f8d55cc4b2ba7826d8e51875298f3007ac18ac614299617cf38ceb51aac5c99&w=900",
                likes: 12,
                date: "Fri Mar 15 2024 16:17:59 GMT+0000 ",
                firstName: "SSI ABDELKADER",
                lastName: "Kouah",
              },
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
    ]);
  }, []);
  //end


  //auth
  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:8000/api/user/login", inputs);
      setCurrentUser(res.data);
      setLogged(true);
    } catch (err) {
      console.error(err.response.data.message);
      throw new Error(err.response.data.message);
    }
  };

  const signup = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:8000/api/user/signup", inputs);
      return res
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  const logout = async () => {
    await axios.post("http://localhost:8000/api/user/logout");
    setCurrentUser(null);
    setLogged(false);
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.post("http://localhost:8000/api/user/verify");
        if (res.data) {
          setCurrentUser(res.data);
          setLogged(true);
        }
        return true;
      } catch (err) {
        return err;
      }
    };
    checkAuth();
  }, []);

  //end auth

  return (
    <myContext.Provider
      value={{
        blogPostTable,
        senMessage,
        currentUser,
        isLo,login,
        signup,logout
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default ContextProvider;
