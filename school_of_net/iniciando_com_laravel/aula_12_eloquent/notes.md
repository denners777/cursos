DennerPC@DESKTOP-GVINNSO MINGW64 /c/laragon/www/cursos/school_of_net/iniciando_com_laravel/projeto_php_laravel (master)

$ php artisan tinker

Psy Shell v0.8.1 (PHP 7.0.12 ÔÇö cli) by Justin Hileman

$user = App\User::create(['name' => 'Denner Fernandes', 'email' => 'denners777@hotmail.com', 'password' => bcrypt('123456')])

=> App\User {#694
     name: "Denner Fernandes",
     email: "denners777@hotmail.com",
     updated_at: "2017-01-31 20:27:18",
     created_at: "2017-01-31 20:27:18",
     id: 2,
   }
   
$user->name

=> "Denner Fernandes"

$user->email

=> "denners777@hotmail.com"

$user->password

=> "$2y$10$3hkSDFh4z4reVReAIfhX3.eO7yudN02ZM.aara.FM9sgMFJMj3n7O"

$all = App\User::all()

=> Illuminate\Database\Eloquent\Collection {#670

     all: [
       App\User {#683
         id: 2,
         name: "Denner Fernandes",
         email: "denners777@hotmail.com",
         created_at: "2017-01-31 20:27:18",
         updated_at: "2017-01-31 20:27:18",
       },
     ],
     
   }
$user = App\User::find(2)

=> App\User {#688
     id: 2,
     name: "Denner Fernandes",
     email: "denners777@hotmail.com",
     created_at: "2017-01-31 20:27:18",
     updated_at: "2017-01-31 20:27:18",
   }
   
$user->update(['name' => 'Denner Fernandes da Silva'])

=> true

$all = App\User::all()

=> Illuminate\Database\Eloquent\Collection {#672

     all: [
       App\User {#687
         id: 2,
         name: "Denner Fernandes da Silva",
         email: "denners777@hotmail.com",
         created_at: "2017-01-31 20:27:18",
         updated_at: "2017-01-31 20:29:17",
       },
     ],
     
   }

$user->delete()

=> true

App\User::all()

=> Illuminate\Database\Eloquent\Collection {#674

     all: [],
     
   }
