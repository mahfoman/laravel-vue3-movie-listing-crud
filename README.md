## Laravel10 vue3 demo movie management app with seeding dummy data

This is simple two page demo project.

Here vue3 has been used for frontend and laravel10 for backend.

Two migration files are used for movies and genre table. 
Later seeding of some sample movies and genre data is done for showing in table listing along with crud with laravel and vue.

## Following features are implemented

- Schema migration created for movies and genres table 
- Demo data seeded for movies and genres with related factory and DatabaseSeeder 
- Movie Listing Page displaying movie details, including genre information
- Pagination to manage large datasets efficiently
- CRUD Functionality creating forms for adding, editing, and deleting movies
- Validation and loading indicators during form submission to enhance user experience
- Confirmation modals in deleting movie and sweet alert notifications during data insertion and update 
- Genre Dropdown and Filtering to filter movies based on their genres
- Laravel's API endpoints to establish connection between frontend and backend

Laravel 10.43.0 on php 8.1.0 and vue3 are being used for this demo project

## How to use

- Clone or download the project
- run [ composer install and npm install]
- create a mysql database and update the name in .env file
- run [ php artisan migrate:fresh --seed ]
- [ npm run dev and php artisan serve ]


## License
Feel free to use and re-use any way you want.

---

## You can check more tutorials and posts in my site [LaravelCodeSnippet.com](https://laravelcodesnippets.com)

## Most viewed Links in Laravelcodesnippets.com

- [Building mini ecommerce in Laravel](https://laravelcodesnippets.com/communities/projects/topics/mini-ecommerce/posts/113)
- [Building mini issue trackcer with vue3 spa, authentication and authorization in Laravel](https://laravelcodesnippets.com/communities/projects/topics/mini-issue-tracker/posts/159)

## Available for freelance work
Feel free to reach me at [mahfoozurrahman.com](https://www.mahfoozurrahman.com)
