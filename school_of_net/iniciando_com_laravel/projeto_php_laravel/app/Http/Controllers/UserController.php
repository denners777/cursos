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

    public function create()
    {
        return view('user.create');

    }

    public function post(Request $resquest)
    {
        echo 'Tudo', dump($resquest->all()),
                'Input', dump($resquest->input('email')),
                'Only', dump($resquest->only(['name', 'email'])),
                'Except', dump($resquest->except('name'))
                ;
    }

}
