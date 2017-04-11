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

Route::get('/', function() {
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

Route::group(['prefix' => 'dashboard', 'middleware' => 'auth'], function() {
    Route::get('/', 'HomeController@index');
});
