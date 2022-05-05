/* eslint-disable import/order */
import { GraphQLResolveInfo } from 'graphql'
import * as Operations from './documents'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
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
  desciption?: Maybe<Scalars['String']>
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
  placeList?: Maybe<Array<Maybe<Place>>>
  reviewByUser?: Maybe<Array<Maybe<Review>>>
  user: User
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
}

export type PlaceFieldsFragment = {
  __typename: 'Place'
  id?: string | null
  desciption?: string | null
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

export type addPlaceMutationVariables = Exact<{
  body: inputPlaceType
}>

export type addPlaceMutationResult = {
  __typename: 'Mutation'
  addPlace?: {
    __typename: 'Place'
    id?: string | null
    desciption?: string | null
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
  Place: ResolverTypeWrapper<Place>
  Query: ResolverTypeWrapper<{}>
  Review: ResolverTypeWrapper<Review>
  String: ResolverTypeWrapper<Scalars['String']>
  User: ResolverTypeWrapper<User>
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
  Place: Place
  Query: {}
  Review: Review
  String: Scalars['String']
  User: User
  inputPlaceType: inputPlaceType
  inputReviewType: inputReviewType
  inputUserType: inputUserType
}>

export type MutationResolvers<
  ContextType = any,
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
  ContextType = any,
  ParentType extends ResolversParentTypes['Place'] = ResolversParentTypes['Place']
> = ResolversObject<{
  desciption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  mainPhoto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  priceByNight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  place?: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, Partial<QueryplaceArgs>>
  placeList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Place']>>>, ParentType, ContextType>
  reviewByUser?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType,
    Partial<QueryreviewByUserArgs>
  >
  user?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<QueryuserArgs, 'id'>
  >
  userList?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>
}>

export type ReviewResolvers<
  ContextType = any,
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
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  photo?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>
  Place?: PlaceResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Review?: ReviewResolvers<ContextType>
  User?: UserResolvers<ContextType>
}>

export type addPlaceMutationMutationFn = Apollo.MutationFunction<
  addPlaceMutationResult,
  addPlaceMutationVariables
>

/**
 * __useaddPlaceMutation__
 *
 * To run a mutation, you first call `useaddPlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useaddPlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPlaceMutation, { data, loading, error }] = useaddPlaceMutation({
 *   variables: {
 *      body: // value for 'body'
 *   },
 * });
 */
export function useaddPlaceMutation(
  baseOptions?: Apollo.MutationHookOptions<addPlaceMutationResult, addPlaceMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<addPlaceMutationResult, addPlaceMutationVariables>(
    Operations.addPlaceMutation,
    options
  )
}
export type addPlaceMutationHookResult = ReturnType<typeof useaddPlaceMutation>
export type addPlaceMutationMutationResult = Apollo.MutationResult<addPlaceMutationResult>
export type addPlaceMutationMutationOptions = Apollo.BaseMutationOptions<
  addPlaceMutationResult,
  addPlaceMutationVariables
>
