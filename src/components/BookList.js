import React from "react";

// import { gql } from "apollo-boost";
// import { Query, Mutation } from "react-apollo";
// import { Mutation } from 'react-apollo'
// import gql from 'graphql-tag'

import gql from "graphql-tag";
// import { Mutation } from "react-apollo";
import { useMutation, useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  query {
    dishes {
      _id
      name
      tasty
    }
  }
`;
// const GET_MOVIES = gql`
//   mutation addDish {
//     addDish(name: "Cake 3", country: "Pakistan", tasty: true, chefsId: 123) {
//       name
//       country
//       tasty
//     }
//   }
// `;
// Ye chala k dekh
const ADD_DISH = gql`
  mutation(
    $name: String!
    $country: String!
    $chefsId: Int!
    $tasty: Boolean!
  ) {
    addDish(name: $name, country: $country, chefsId: $chefsId, tasty: $tasty) {
      name
      country
      tasty
    }
  }
`;
// wait
function BookList() {
  // const getMovies = useQuery(GET_MOVIES);

  // if (getMovies.loading || getMovies.errors)
  //   return JSON.stringify(
  //     "error_____________________",
  //     getMovies.loading || getMovies.errors
  //   );
  // console.log(getMovies.data);
  const [dish_mutation, { data }] = useMutation(ADD_DISH, {
    onCompleted(data1) {
      console.log(data, data1);
    },
  });

  function handleMutation() {
    console.log("oj");
    // BookList
    dish_mutation({
      variables: {
        name: "cake 5",
        country: "Pakistan",
        chefsId: "123",
        tasty: false,
      },
    });
  }

  return <button onClick={() => handleMutation()}>on click</button>;
}

export default BookList;
