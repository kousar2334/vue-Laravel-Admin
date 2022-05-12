<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('admin-login', [App\Http\Controllers\Auth\AdminAuthController::class, 'login']);
Route::post('admin-logout', [App\Http\Controllers\Auth\AdminAuthController::class, 'logout']);
Route::post('is-admin-login', [App\Http\Controllers\Auth\AdminAuthController::class, 'isAdminLogin']);

Route::group(['middleware' => ['auth:api']], function () {
    Route::post('get-user-task-permissions', [App\Http\Controllers\Auth\AdminAuthController::class, 'userTaskPermissions']);
    //users croutes
    Route::post('get-all-users', [App\Http\Controllers\Backend\UsersController::class, 'allUsers']);
    Route::get('get-all-roles', [App\Http\Controllers\Backend\UsersController::class, 'allRoles']);
    Route::post('edit-user', [App\Http\Controllers\Backend\UsersController::class, 'editUser']);
    Route::post('update-user-info', [App\Http\Controllers\Backend\UsersController::class, 'updateUser']);
    Route::post('create-new-user', [App\Http\Controllers\Backend\UsersController::class, 'createUser']);
    Route::post('delete-user', [App\Http\Controllers\Backend\UsersController::class, 'deleteUser']);
    Route::post('get-permission-of-user-role', [App\Http\Controllers\Backend\UsersController::class, 'permissionsList']);
    Route::post('create-new-user-role', [App\Http\Controllers\Backend\UsersController::class, 'newUserRole']);
    Route::post('update-user-role', [App\Http\Controllers\Backend\UsersController::class, 'updateUserRole']);

    //user profile 
    Route::post('get-user-profile-details', [App\Http\Controllers\Backend\UsersController::class, 'getUserProfile']);
    Route::post('update-user-profile', [App\Http\Controllers\Backend\UsersController::class, 'updateProfileInfo']);
    Route::post('update-user-password', [App\Http\Controllers\Backend\UsersController::class, 'updateUserPassword']);
});
