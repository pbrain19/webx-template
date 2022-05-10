/* eslint-disable import/order */
import { GraphQLResolveInfo } from 'graphql'
import { User as UserModel } from '@prisma/client/index.d'
import { IContext } from 'graphql/context'
import * as Operations from './documents'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename: 'Mutation'
  addPlace?: Maybe<Place>
  addReview?: Maybe<Review>
  addUser: User
}

export type MutationaddPlaceArgs = {
  body?: InputMaybe<inputPlaceType>
}

export type MutationaddReviewArgs = {
  body?: InputMaybe<inputReviewType>
}

export type MutationaddUserArgs = {
  body?: InputMaybe<inputUserType>
}

export type Place = {
  __typename: 'Place'
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  mainPhoto?: Maybe<Scalars['String']>
  owner?: Maybe<User>
  photos?: Maybe<Array<Maybe<Scalars['String']>>>
  priceByNight?: Maybe<Scalars['Float']>
  reviews?: Maybe<Array<Maybe<Review>>>
}

export type Query = {
  __typename: 'Query'
  place?: Maybe<Place>
  placeList: Array<Place>
  reviewByUser?: Maybe<Array<Maybe<Review>>>
  user?: Maybe<User>
  userList: Array<User>
}

export type QueryplaceArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryreviewByUserArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryuserArgs = {
  id: Scalars['ID']
}

export type Review = {
  __typename: 'Review'
  author?: Maybe<User>
  feedback?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  place?: Maybe<Scalars['ID']>
  rate?: Maybe<Scalars['Float']>
}

export type User = {
  __typename: 'User'
  email: Scalars['String']
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  photo: Scalars['String']
}

export type inputPlaceType = {
  desciption?: InputMaybe<Scalars['String']>
  mainPhoto?: InputMaybe<Scalars['String']>
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  priceByNight?: InputMaybe<Scalars['Float']>
  type?: InputMaybe<Scalars['String']>
}

export type inputReviewType = {
  feedback?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  place?: InputMaybe<Scalars['ID']>
  rate?: InputMaybe<Scalars['Float']>
}

export type inputUserType = {
  email: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
}

export type PlaceFieldsFragment = {
  __typename: 'Place'
  id?: string | null
  description?: string | null
  mainPhoto?: string | null
  photos?: Array<string | null> | null
  priceByNight?: number | null
  owner?: {
    __typename: 'User'
    id: string
    name?: string | null
    email: string
    photo: string
  } | null
  reviews?: Array<{
    __typename: 'Review'
    id?: string | null
    feedback?: string | null
    rate?: number | null
    place?: string | null
    author?: {
      __typename: 'User'
      id: string
      name?: string | null
      email: string
      photo: string
    } | null
  } | null> | null
}

export type UserFieldsFragment = {
  __typename: 'User'
  id: string
  name?: string | null
  email: string
  photo: string
}

export type AddPlaceMutationVariables = Exact<{
  body: inputPlaceType
}>

export type AddPlaceMutationResult = {
  __typename: 'Mutation'
  addPlace?: {
    __typename: 'Place'
    id?: string | null
    description?: string | null
    mainPhoto?: string | null
    photos?: Array<string | null> | null
    priceByNight?: number | null
    owner?: {
      __typename: 'User'
      id: string
      name?: string | null
      email: string
      photo: string
    } | null
    reviews?: Array<{
      __typename: 'Review'
      id?: string | null
      feedback?: string | null
      rate?: number | null
      place?: string | null
      author?: {
        __typename: 'User'
        id: string
        name?: string | null
        email: string
        photo: string
      } | null
    } | null> | null
  } | null
}

export type AddUserMutationVariables = Exact<{
  body: inputUserType
}>

export type AddUserMutationResult = {
  __typename: 'Mutation'
  addUser: { __typename: 'User'; id: string; name?: string | null; email: string; photo: string }
}

export type PlaceListQueryVariables = Exact<{ [key: string]: never }>

export type PlaceListQueryResult = {
  __typename: 'Query'
  placeList: Array<{
    __typename: 'Place'
    id?: string | null
    priceByNight?: number | null
    description?: string | null
    mainPhoto?: string | null
  }>
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Float: ResolverTypeWrapper<Scalars['Float']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Mutation: ResolverTypeWrapper<{}>
  Place: ResolverTypeWrapper<
    Omit<Place, 'owner' | 'reviews'> & {
      owner?: Maybe<ResolversTypes['User']>
      reviews?: Maybe<Array<Maybe<ResolversTypes['Review']>>>
    }
  >
  Query: ResolverTypeWrapper<{}>
  Review: ResolverTypeWrapper<Omit<Review, 'author'> & { author?: Maybe<ResolversTypes['User']> }>
  String: ResolverTypeWrapper<Scalars['String']>
  User: ResolverTypeWrapper<UserModel>
  inputPlaceType: inputPlaceType
  inputReviewType: inputReviewType
  inputUserType: inputUserType
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']
  Float: Scalars['Float']
  ID: Scalars['ID']
  Mutation: {}
  Place: Omit<Place, 'owner' | 'reviews'> & {
    owner?: Maybe<ResolversParentTypes['User']>
    reviews?: Maybe<Array<Maybe<ResolversParentTypes['Review']>>>
  }
  Query: {}
  Review: Omit<Review, 'author'> & { author?: Maybe<ResolversParentTypes['User']> }
  String: Scalars['String']
  User: UserModel
  inputPlaceType: inputPlaceType
  inputReviewType: inputReviewType
  inputUserType: inputUserType
}>

export type MutationResolvers<
  ContextType = IContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  addPlace?: Resolver<
    Maybe<ResolversTypes['Place']>,
    ParentType,
    ContextType,
    Partial<MutationaddPlaceArgs>
  >
  addReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    Partial<MutationaddReviewArgs>
  >
  addUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, Partial<MutationaddUserArgs>>
}>

export type PlaceResolvers<
  ContextType = IContext,
  ParentType extends ResolversParentTypes['Place'] = ResolversParentTypes['Place']
> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  mainPhoto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  priceByNight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QueryResolvers<
  ContextType = IContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  place?: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, Partial<QueryplaceArgs>>
  placeList?: Resolver<Array<ResolversTypes['Place']>, ParentType, ContextType>
  reviewByUser?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType,
    Partial<QueryreviewByUserArgs>
  >
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryuserArgs, 'id'>
  >
  userList?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>
}>

export type ReviewResolvers<
  ContextType = IContext,
  ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']
> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  feedback?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  place?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UserResolvers<
  ContextType = IContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  photo?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = IContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>
  Place?: PlaceResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Review?: ReviewResolvers<ContextType>
  User?: UserResolvers<ContextType>
}>

export type AddPlaceMutationMutationFn = Apollo.MutationFunction<
  AddPlaceMutationResult,
  AddPlaceMutationVariables
>

/**
 * __useAddPlaceMutation__
 *
 * To run a mutation, you first call `useAddPlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPlaceMutation, { data, loading, error }] = useAddPlaceMutation({
 *   variables: {
 *      body: // value for 'body'
 *   },
 * });
 */
export function useAddPlaceMutation(
  baseOptions?: Apollo.MutationHookOptions<AddPlaceMutationResult, AddPlaceMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddPlaceMutationResult, AddPlaceMutationVariables>(
    Operations.AddPlaceMutation,
    options
  )
}
export type AddPlaceMutationHookResult = ReturnType<typeof useAddPlaceMutation>
export type AddPlaceMutationMutationResult = Apollo.MutationResult<AddPlaceMutationResult>
export type AddPlaceMutationMutationOptions = Apollo.BaseMutationOptions<
  AddPlaceMutationResult,
  AddPlaceMutationVariables
>
export type AddUserMutationMutationFn = Apollo.MutationFunction<
  AddUserMutationResult,
  AddUserMutationVariables
>

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      body: // value for 'body'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: Apollo.MutationHookOptions<AddUserMutationResult, AddUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddUserMutationResult, AddUserMutationVariables>(
    Operations.AddUserMutation,
    options
  )
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>
export type AddUserMutationMutationResult = Apollo.MutationResult<AddUserMutationResult>
export type AddUserMutationMutationOptions = Apollo.BaseMutationOptions<
  AddUserMutationResult,
  AddUserMutationVariables
>

/**
 * __usePlaceListQuery__
 *
 * To run a query within a React component, call `usePlaceListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaceListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaceListQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlaceListQuery(
  baseOptions?: Apollo.QueryHookOptions<PlaceListQueryResult, PlaceListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PlaceListQueryResult, PlaceListQueryVariables>(
    Operations.PlaceListQuery,
    options
  )
}
export function usePlaceListQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PlaceListQueryResult, PlaceListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PlaceListQueryResult, PlaceListQueryVariables>(
    Operations.PlaceListQuery,
    options
  )
}
export type PlaceListQueryHookResult = ReturnType<typeof usePlaceListQuery>
export type PlaceListQueryLazyQueryHookResult = ReturnType<typeof usePlaceListQueryLazyQuery>
export type PlaceListQueryQueryResult = Apollo.QueryResult<
  PlaceListQueryResult,
  PlaceListQueryVariables
>
