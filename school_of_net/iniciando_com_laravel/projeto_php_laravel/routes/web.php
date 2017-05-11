<?php

/*
  |--------------------------------------------------------------------------
  | Web Routes
  |--------------------------------------------------------------------------
  |
  | This file is where you may define all of the routes that are handled
  | by your application. Just tell Laravel the URIs it should respond
  | to using a Closure or controller method. Build something great!
  |
 */

Route::get('/', function () {
    return view('welcome');
});

Route::get('foo', function () {
    return 'Método GET';
});

Route::post('foo', function () {
    return 'Método POST';
});

Route::get('foo/bar', function () {
    return view('foo.bar', [
        'foo' => 'Asdr',
        'bar' => '<b>hfhfh</b>'
    ]);
});
Route::get('foo/baz', function () {
    return view('foo.baz');
});

/*
  Route::match(['get', 'post'], 'foo', function () {
  return 'Olá';
  });
 */

/*
  Route::any('foo', function () {
  return 'Any';
  }); */

// Não precisa mais disso
//Route::group(['middleware' => ['web']], function() {

Route::group(['prefix' => 'user'], function() {

    Route::get('/', ['uses' => 'UserController@index']);

    Route::get('add', ['uses' => 'UserController@create']);
    Route::post('add', ['uses' => 'UserController@post']);

    Route::get('{id}', ['uses' => 'UserController@show']);
    Route::get('{id}/edit', function ($id) {
        return 'Editando o usuário ' . $id;
    });
});
//});
