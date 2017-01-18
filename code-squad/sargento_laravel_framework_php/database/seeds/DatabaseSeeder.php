<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        $this->call(UsersTableSeeder::class);
        Model::reguard();

    }

}

class UsersTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        \App\User::create([
            'name' => 'Denners Fernandes',
            'email' => 'denners777@hotmail.com',
            'password' => bcrypt('123456'),
        ]);
        App\User::create([
            'name' => 'Denners Fernandes',
            'email' => 'devdenners@hotmail.com',
            'password' => bcrypt('123456'),
        ]);

    }

}
