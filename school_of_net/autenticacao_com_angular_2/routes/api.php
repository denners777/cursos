<?php
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/', function () {
    return view('welcome');
});


Route::group(['middleware' => 'cors'], function () {
    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::get('products', 'Api\ProductsController@index');
        Route::get('session', 'Api\PagSeguroController@getSessionId');
        Route::post('order', 'Api\OrdersController@store');
    });
    Route::post('login', 'Api\AuthController@login');
});
