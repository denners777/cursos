DennerPC@DESKTOP-GVINNSO MINGW64 /c/laragon/www/cursos/school_of_net/iniciando_com_laravel/projeto_php_laravel (master)

$ php artisan tinker

Psy Shell v0.8.1 (PHP 7.0.12 ÔÇö cli) by Justin Hileman

DB::table('users')->insert(['name' => 'Denner Fernandes', 'email' => 'denners777@htomail.com', 'password' => bcrypt('mypassword')])

=> true

DB::table('users')->get()

=> Illuminate\Support\Collection {#699

     all: [
       {#674
         +"id": 1,
         +"name": "Denner Fernandes",
         +"email": "denners777@htomail.com",
         +"password": "$2y$10$3Ze6UeB9WwzZfYJCg8gcGeoTABhJNgiCs5NyCndiVUbA4Ket/YZ2S",
         +"remember_token": null,
         +"created_at": null,
         +"updated_at": null,
       },
     ],
   }

DB::table('users')->where('id', 1)->get()

=> Illuminate\Support\Collection {#681

     all: [
       {#692
         +"id": 1,
         +"name": "Denner Fernandes",
         +"email": "denners777@htomail.com",
         +"password": "$2y$10$3Ze6UeB9WwzZfYJCg8gcGeoTABhJNgiCs5NyCndiVUbA4Ket/YZ2S",
         +"remember_token": null,
         +"created_at": null,
         +"updated_at": null,
       },
     ],
   }
   
DB::table('users')->where('id', 1)->first()

=> {#689
     +"id": 1,
     +"name": "Denner Fernandes",
     +"email": "denners777@htomail.com",
     +"password": "$2y$10$3Ze6UeB9WwzZfYJCg8gcGeoTABhJNgiCs5NyCndiVUbA4Ket/YZ2S",
     +"remember_token": null,
     +"created_at": null,
     +"updated_at": null,
   }
   
DB::table('users')->first()

=> {#673
     +"id": 1,
     +"name": "Denner Fernandes",
     +"email": "denners777@htomail.com",
     +"password": "$2y$10$3Ze6UeB9WwzZfYJCg8gcGeoTABhJNgiCs5NyCndiVUbA4Ket/YZ2S",
     +"remember_token": null,
     +"created_at": null,
     +"updated_at": null,
   }
   
DB::table('users')->where('id', 1)->update(['name' => 'Denner Fernandes da Silva'])

=> 1

DB::table('users')->first()

=> {#685
     +"id": 1,
     +"name": "Denner Fernandes da Silva",
     +"email": "denners777@htomail.com",
     +"password": "$2y$10$3Ze6UeB9WwzZfYJCg8gcGeoTABhJNgiCs5NyCndiVUbA4Ket/YZ2S",
     +"remember_token": null,
     +"created_at": null,
     +"updated_at": null,
   }
   
DB::table('users')->delete()

=> 1

DB::table('users')->first()

=> null

DB::table('users')->get()

=> Illuminate\Support\Collection 
{#682
     all: [],
   }
