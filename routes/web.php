<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\AppController;
use App\Http\Controllers\AnalyticsController;
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

Route::prefix('app')->group(function () {
    Route::get('/', [AppController::class, 'index']);
    Route::get('/introduction', [AppController::class, 'index']);
});

Route::prefix('analytics')->group(function () {
    Route::get('/', [AnalyticsController::class, 'index']);
    Route::get('/history', [AnalyticsController::class, 'index']);

    Route::prefix('add')->group(function () {
        Route::get('/', [AnalyticsController::class, 'index']);
        Route::post('/', [AnalyticsController::class, 'create']);
    });
});

Route::prefix('user')->group(function () {
    Route::get('/', [UserController::class, 'index']);
    Route::get('/signin', [UserController::class, 'index']);
    Route::get('/signup', [UserController::class, 'index']);
    Route::get('/signout', [UserController::class, 'index']);
});



Route::prefix('oauth')->group(function () {
    Route::get('kakao', [OAuthController::class, 'kakao']);
});
