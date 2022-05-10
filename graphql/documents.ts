/* eslint-disable */
import gql from 'graphql-tag'
export const UserFields = gql`
  fragment UserFields on User {
    id
    name
    email
    photo
  }
`
export const PlaceFields = gql`
  fragment PlaceFields on Place {
    id
    owner {
      ...UserFields
    }
    description
    mainPhoto
    photos
    priceByNight
    reviews {
      id
      author {
        ...UserFields
      }
      feedback
      rate
      place
    }
  }
  ${UserFields}
`
export const AddPlaceMutation = gql`
  mutation AddPlaceMutation($body: inputPlaceType!) {
    addPlace(body: $body) {
      ...PlaceFields
    }
  }
  ${PlaceFields}
`
export const AddUserMutation = gql`
  mutation AddUserMutation($body: inputUserType!) {
    addUser(body: $body) {
      ...UserFields
    }
  }
  ${UserFields}
`
export const PlaceListQuery = gql`
  query PlaceListQuery {
    placeList {
      id
      priceByNight
      description
      mainPhoto
    }
  }
`
