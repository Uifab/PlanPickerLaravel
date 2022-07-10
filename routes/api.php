<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\http\Controllers\PlanController;
use GuzzleHttp\Middleware;

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


//Route::get('/plans', [PlanController::class, 'index']);
//Route::post('/plans', [PlanController::class, 'store']);

Route::post('/register' , [AuthController::class, 'register']);
Route::post('/login'    , [AuthController::class, 'login']);


Route::resource('plans', PlanController::class );
Route::get('/plans/search/{name}', [PlanController::class, 'searchForName']);
    

//Protected
Route::group(['middleware' => ['auth:sanctum']], function(){

    Route::post('/plans'             , [PlanController::class, 'store']);
    Route::put('/plans/{id}'         , [PlanController::class, 'update']);
    Route::delete('/plans/{id}'      , [PlanController::class, 'destroy']);

    Route::post('/logout'            , [AuthController::class, 'logout'] );
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
