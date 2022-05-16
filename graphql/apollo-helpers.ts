import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache'
export type MutationKeySpecifier = (
  | 'addPlace'
  | 'addReview'
  | 'addUser'
  | 'updateUser'
  | MutationKeySpecifier
)[]
export type MutationFieldPolicy = {
  addPlace?: FieldPolicy<any> | FieldReadFunction<any>
  addReview?: FieldPolicy<any> | FieldReadFunction<any>
  addUser?: FieldPolicy<any> | FieldReadFunction<any>
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>
}
export type PlaceKeySpecifier = (
  | 'description'
  | 'id'
  | 'mainPhoto'
  | 'owner'
  | 'photos'
  | 'priceByNight'
  | 'reviews'
  | PlaceKeySpecifier
)[]
export type PlaceFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  mainPhoto?: FieldPolicy<any> | FieldReadFunction<any>
  owner?: FieldPolicy<any> | FieldReadFunction<any>
  photos?: FieldPolicy<any> | FieldReadFunction<any>
  priceByNight?: FieldPolicy<any> | FieldReadFunction<any>
  reviews?: FieldPolicy<any> | FieldReadFunction<any>
}
export type QueryKeySpecifier = (
  | 'place'
  | 'placeList'
  | 'reviewByUser'
  | 'user'
  | 'userList'
  | QueryKeySpecifier
)[]
export type QueryFieldPolicy = {
  place?: FieldPolicy<any> | FieldReadFunction<any>
  placeList?: FieldPolicy<any> | FieldReadFunction<any>
  reviewByUser?: FieldPolicy<any> | FieldReadFunction<any>
  user?: FieldPolicy<any> | FieldReadFunction<any>
  userList?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ReviewKeySpecifier = (
  | 'author'
  | 'feedback'
  | 'id'
  | 'place'
  | 'rate'
  | ReviewKeySpecifier
)[]
export type ReviewFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>
  feedback?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  place?: FieldPolicy<any> | FieldReadFunction<any>
  rate?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UserKeySpecifier = ('email' | 'id' | 'name' | 'photo' | UserKeySpecifier)[]
export type UserFieldPolicy = {
  email?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
  photo?: FieldPolicy<any> | FieldReadFunction<any>
}
export type StrictTypedTypePolicies = {
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier)
    fields?: MutationFieldPolicy
  }
  Place?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | PlaceKeySpecifier | (() => undefined | PlaceKeySpecifier)
    fields?: PlaceFieldPolicy
  }
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier)
    fields?: QueryFieldPolicy
  }
  Review?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | ReviewKeySpecifier | (() => undefined | ReviewKeySpecifier)
    fields?: ReviewFieldPolicy
  }
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier)
    fields?: UserFieldPolicy
  }
}
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies
