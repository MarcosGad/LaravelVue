<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::group(['prefix' => 'auth'], function () {
   Route::post('register', 'AuthController@register');
   Route::post('login', 'AuthController@login');
   
   Route::post('reset-password-request', 'AuthController@resetPasswordRequest'); 
   Route::post('reset-password', 'AuthController@resetPassword'); 

   Route::group(['middleware' => 'auth:api'], function () {
      Route::get('logout', 'AuthController@logout');
      Route::get('profile', 'AuthController@profile');
   });

});

Route::group(['prefix' => 'user'], function () {

   Route::group(['middleware' => 'auth:api'], function () {

      Route::group(['middleware' => 'scope:can_create'], function () {
        Route::get('/user-scope', function() {
            return response()->json([
                  'message' => 'User',
                  'status_code' => 200
            ], 200);
        });  
      });

      Route::group(['middleware' => 'scope:do_anything'], function () {
         Route::get('/admin-scope', function() {
             return response()->json([
                   'message' => 'Admin',
                   'status_code' => 200
             ], 200);
         });   
       });

      // Route::post('edit-category', function () {
      //    return response()->json([
      //       'message' => 'Admin access',
      //       'status_code' => 200
      //   ], 200);
      // })->middleware('scope:do_anything');

      // Route::post('create-category', function () {
      //    return response()->json([
      //       'message' => 'Everyone access',
      //       'status_code' => 200
      //   ], 200);
      // })->middleware('scope:do_anything,can_create');

   });
   
});

Route::group(['middleware' => 'auth:api'], function () {
   Route::group(['middleware' => 'scope:can_create'], function () {
      Route::get('get-categories', 'ProductController@categories');
      Route::resource('products', 'ProductController');
  });
  Route::group(['middleware' => 'scope:do_anything'], function () {
      Route::resource('categories', 'CategoryController');
  });
});