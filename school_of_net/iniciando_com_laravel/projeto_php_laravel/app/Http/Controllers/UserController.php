<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {
        $users = ['Denner', 'Jessica', 'Clarice'];

        return view('user.index', compact('users'));

    }

    public function show($id)
    {
        return view('user.show', compact('id'));

    }

}
