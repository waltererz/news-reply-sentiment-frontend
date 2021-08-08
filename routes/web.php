<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OAuthController;

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

Route::prefix('')->group(function () {
    Route::get('/', [HomeController::class, 'index']);
});

Route::prefix('user')->group(function () {
    Route::get('/', [UserController::class, 'index']);
    Route::get('/signin', [UserController::class, 'index']);
    Route::get('/signup', [UserController::class, 'index']);
});

Route::prefix('oauth')->group(function () {
    Route::get('kakao', [OAuthController::class, 'kakao']);
});
