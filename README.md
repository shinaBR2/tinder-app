# tinder-app
This is a very basic "Tinder" like app. I will show not only the technical part, but also the business analysis, architecture consideration, and technical solutions.

## Requirements

Must have features:
- Actions: Like and pass
- View list of my liked/passed people
- View additional data of a person 

## Data structure

Basically this is the first thing to think about!!!!

Based on the requirements, we will have following models, we will using [GraphQL type system](https://graphql.org/learn/schema/) to define it.

Why GraphQL? Because GraphQL is just the future, not only about "the way how to fetch data", but also "how frontend and backend developers work together".

### Users

Each user should have basic information

```
type User {
  """
  UUID for sure
  """
  id: ID!
  
  age: Int!

  """
  Gender can be `male`/`female`/`unknown`/etc
  """
  gender: String!
  
  firstName: String!
  lastName: String!
  title: String!
}
```

### User Filters

Each user has some filters for people. For example user A only want to show only "male under 30 year olds". This filter can be changed over time. For simple version, we only allow filter by "age" and "gender" only

There are some logics behind the filter:
- . Each time user "save" the filter, we need to create new and use it for querying new people.
- The more fields of each filter, the more suitable people found. In other words, this is the core of our "suggesting system".

```
type AgeFilter {
  from: Int
  to: Int
}


type Filter{
  ###
  UUID for sure
  ###
  id: ID!

  ###
  A filter should be only belong to one specific user
  ###
  userId: String!

  """
  created time as Date string
  """
  created: String!

  """
  Range for age filter, e.g from 20 to 30
  """
  age: AgeFilter!

  """
  Gender filter
  """
  gender: String!
}
```


### Actions

One action is created when user like/pass another user. In the future, maybe we will have more type like super like and so on. The current filter from user should be used to query suitable people.

```
type Action {
  ###
  UUID for sure
  ###
  id: ID!

  """
  actionType can be `like`/`pass`
  """
  actionType: String!

  """
  ID of user who created this action
  Referenced to `User` model
  """
  from: String!

  """
  ID of user who were reacted to
  Referenced to `User` model
  """
  to: String!

  """
  Reference to `Filter` model
  """
  filterId: String!

  """
  created time as Date string
  """
  created: String!
}
```

These models are enough for our very basic requirements. So let's define queries and mutations.

### Query and Mutations

Basically we have:
- Queries:
	- Get list of all filtered people to make "reaction"
	- Get list of liked/passed people
- Mutaions:
	- React to a person (like/pass)

Because of powerful of GraphQL, we don't even need to have another query for get detail of each user.

So here we go

```
"""
Get list of people base on current filter
to make the "reaction"
"""
query getPeople($filterId: String!) {
  userList: [User!]
}
```

```
input ReactInput {
  actionType: String!
  to: String!
  filterId: String!
}

mutation react($reactInput: ReactInput!) {
  createReaction(reactInput: $reactInput) {
    result: Boolean
  }
}
```

## All the logics

After defined own data structure, we have the following logic:
- Each user has a default filter, user can change anytime.
- Use query `getPeople` to show all people with current filter.
- Each shown person has all needed information without any other request.
- User can take reaction to each shown person, one by one by calling `react` mutation.
- List of liked/passed people can be easily done by get list of `actions` created by current user and `actionType` (`like`/`pass`).

## Architecture

TBD

## Technical solutions

TBD
