<?php

namespace App\Http\Controllers;

//use App\Http\Request;
use App\User;
use Auth;
use Illuminate\Http\Request;

class Auth2Controller extends Controller
{

    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);

    }

    public function login()
    {
        return view('auth2.login');

    }

    public function attempt(Request $request)
    {
        $this->validate($request, [
            'email' => ['required', 'max:255', 'email'],
            'password' => ['required', 'min:6', 'max:255'],
        ]);

        $credentials = $request->only(['email', 'password']);
        $remember = $request->has('remember');

        if (!Auth::attempt($credentials, $remember)) {
            return redirect()->back()
                            ->with('fail', 'Credenciais não combinam')
                            ->withInput();
        }

        return redirect('dashboard');

    }

    public function register()
    {
        return view('auth2.register');

    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'max:255'],
            'email' => ['required', 'max:255', 'email', 'unique:users'],
            'password' => ['required', 'min:6', 'max:255', 'confirmed'],
        ]);

        $credentials = array_merge($request->all(), ['password' => bcrypt($request->input('password')),
        ]);

        User::create($credentials);

        return redirect('auth2/login');

    }

    public function logout()
    {
        Auth::logout();
        return redirect('/');

    }

}
