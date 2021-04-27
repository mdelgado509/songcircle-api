# Songcircle API: Share Your Favorite Songs

An API to store Songcircle data. It allows clients to register as users of the API and post their favorite songs. This API currently requires user authentication to view data and ownership to manipulate it.


## Important Links

- [Other Repo](https://github.com/mdelgado509/songcircle-client)
- [Deployed API](https://pacific-wave-42861.herokuapp.com)
- [Deployed Client](https://mdelgado509.github.io/songcircle-client)


## API End Points

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out`            | `users#signout`   |
| PATCH  | `/change-password`     | `users#changepw`  |
| GET    | `/songs`               | `songs#index`     |
| POST   | `/songs`               | `songs#create`    |
| GET    | `/songs/:id`           | `songs#show`      |
| PATCH  | `/songs/:id`           | `songs#update`    |

All data returned from API actions is formatted as JSON.


### Technologies Used

- Express
- MongoDB
- Mongoose
- JavaScript

### Unsolved Problems

- Would like to eventually have an additional resource linked to the songs, such as a review (rating and comment) or location.

## Images

#### ERD:

![ERD](https://media.git.generalassemb.ly/user/35054/files/57a76080-a281-11eb-9fd5-6b93a099147c)
