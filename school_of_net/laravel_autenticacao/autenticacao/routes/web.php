<?php

/*
  |--------------------------------------------------------------------------
  | Web Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register web routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | contains the "web" middleware group. Now create something great!
  |
 */

/*Route::get('/', function() {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index');

Route::group(['prefix' => 'auth2'], function() {
    Route::get('/login/', 'Auth2Controller@login');
    Route::post('/login/', 'Auth2Controller@attempt');

    Route::get('/register/', 'Auth2Controller@register');
    Route::post('/register/', 'Auth2Controller@create');

    Route::get('/logout/', 'Auth2Controller@logout');
});

Route::group(['prefix' => 'auth/github'], function() {
    Route::get('/', 'GithubController@redirect');
    Route::get('/callback', 'GithubController@handle');
});

Route::group(['prefix' => 'dashboard', 'middleware' => 'auth'], function() {
    Route::get('/', 'HomeController@index');
});

Route::get('auth/{user}', function(App\User $user) {
    Auth::login($user);
    return "Autenticated as user #$user->id.";
});

Route::get('/post', 'PostController@index');
Route::get('/post/{post}/edit', 'PostController@update');
*/

Route::group(['middleware' => ['api', 'auth:api']], function() {
    Route::get('dashboard', function() {
        dd(Auth::guard('api')->user());
        return 'Você está autenticado via token.';
    });
});
