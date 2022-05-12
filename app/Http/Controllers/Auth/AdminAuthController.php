<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Routing\ResponseFactory;


class AdminAuthController extends Controller
{
    /**
     * Admin login
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|exists:users,email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response(array(
                'success' => false,
                'errors' => $validator->errors()

            ));
        }
        try {
            $token = auth('api')->attempt($validator->validated());
            if (!$token) {
                return response()->json(['success' => false, 'errors' => ['error' => 'Incorrect password']]);
            }
            $permissions = $this->userPermission();
            return response()->json([
                'success' => true,
                'token' => $token,
                'user' => $permissions
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false
            ]);
        }
    }
    /**
     * Admin logout
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        try {
            auth('api')->logout();
            return response()->json([
                'success' => true,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
            ]);
        }
    }
    /**
     * Refresh token if expired
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function isAdminLogin()
    {
        try {
            if (auth('api')->user()) {
                return response()->json([
                    'is_login' => true,
                    'is_refreshed' => false,
                    'success' => true,
                    'user' => auth()->user()
                ]);
            }
            return $this->respondWithToken(auth('api')->refresh());
        } catch (\Exception $e) {
            return response()->json([
                'is_login' => false,
                'success' => false,
            ]);
        }
    }
    /**
     * Get all permissions
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function userTaskPermissions()
    {
        $permissions = $this->userPermission();
        return response()->json([
            'success' => true,
            'user' => $permissions
        ]);
    }
    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'is_login' => true,
            'is_refreshed' => true,
            'success' => true,
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }

    /**
     * This method will return user permissions list
     * 
     * @return Object
     */
    protected function userPermission()
    {
        $permissions = DB::table('user_has_roles')
            ->join('roles', 'roles.id', '=', 'user_has_roles.role_id')
            ->join('role_has_permissions', 'role_has_permissions.role_id', '=', 'user_has_roles.role_id')
            ->join('permissions', 'permissions.id', '=', 'role_has_permissions.permission_id')
            ->where('user_id', '=', Auth::id())
            ->groupBy('user_has_roles.user_id')
            ->select(
                DB::raw('GROUP_CONCAT(DISTINCT(roles.id)) as role_id'),
                DB::raw('GROUP_CONCAT(DISTINCT(roles.role_name)) as role_name'),
                DB::raw('GROUP_CONCAT(DISTINCT(permissions.id)) as permission_id'),
                DB::raw('GROUP_CONCAT(DISTINCT(user_id)) as user_id')
            )->first();
        return $permissions;
    }
}
