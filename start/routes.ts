/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import { Router } from '@adonisjs/core/build/standalone';
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get("publications", "PublicationsController.list");
  Route.post("publication", "PublicationsController.create");
  Route.put("publication/:id", "PublicationsController.update");
  Route.get("publication/:id", "PublicationsController.get");
  Route.delete("publication/:id", "PublicationsController.delete");
  Route.delete("search-publication", "PublicationsController.search");
}).prefix("v1");