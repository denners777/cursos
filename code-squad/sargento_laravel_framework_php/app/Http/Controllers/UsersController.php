<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class UsersController extends Controller
{

    public function allUsers()
    {
        $users = \DB::table('users')->get();
        return view('dump', ['data' => $users]);

    }

    public function oneUser($id)
    {
        $user = \DB::table('users')->where('id', $id)->get();
        return view('dump', ['data' => $user]);

    }

}
