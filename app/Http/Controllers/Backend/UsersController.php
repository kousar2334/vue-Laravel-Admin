<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use App\Models\Model\Role;
use Illuminate\Http\Request;
use App\Models\Model\UserHasRoles;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    /**
     * This method will return all users
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function allUsers(Request $request)
    {
        try {
            $users = DB::table('users')
                ->leftjoin('user_has_roles', 'user_has_roles.user_id', '=', 'users.id')
                ->leftjoin('roles', 'roles.id', '=', 'user_has_roles.role_id')
                ->select('users.name as name', 'users.email as email', 'users.image as image', 'users.id as id', 'roles.role_name as role')
                ->get();
            return response()->json([
                'success' => true,
                'users' => $users
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
            ]);
        }
    }
    /**
     *Get  all user roles
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function allRoles()
    {
        try {
            $roles = DB::table('roles')
                ->select('id', 'role_name as label')
                ->get();
            return response()->json([
                'success' => true,
                'roles' => $roles
            ]);
        } catch (\Exception $e) {
            response()->json([
                'success' => false
            ]);
        }
    }
    /**
     * Store new user information to database
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:6',
            'image' => 'nullable|mimes:jpeg,jpg,png',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $image = "";
            if ($request->hasFile('image')) {
                $extension = $request->file('image')->getClientOriginalExtension();
                $imagename = $request->email . '.' . $extension;
                $requested_file = $request->file('image');
                $requested_file->move(public_path('/uploads/user_image/'), $imagename);
                $image = "uploads/user_image/" . $imagename;
            }
            DB::beginTransaction();
            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->image = $image;
            $user->password = bcrypt($request->password);
            $user->save();

            $user_has_role = new UserHasRoles;
            $user_has_role->role_id = $request->role;
            $user_has_role->user_id = $user->id;
            $user_has_role->save();
            DB::commit();
            return response()->json([
                'success' => true,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'error' => $e->getMessage()
            ]);
        }
    }
    /**
     * Update a single user
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:users,id',
            'role' => 'required|exists:roles,id',
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100',
            'image' => 'nullable|mimes:jpeg,jpg,png',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $image = "";
            if ($request->hasFile('image')) {
                $extension = $request->file('image')->getClientOriginalExtension();
                $imagename = $request->email . '.' . $extension;
                $requested_file = $request->file('image');
                $requested_file->move(public_path('/uploads/user_image/'), $imagename);
                $image = "uploads/user_image/" . $imagename;
            } else {
                $image = DB::table('users')->where('id', $request->id)->first()->image;
            }
            DB::beginTransaction();
            DB::table('users')->where('id', $request->id)
                ->update([
                    'name' => $request->name,
                    'email' => $request->email,
                    'image' => $image
                ]);
            DB::table('user_has_roles')->where('user_id', $request->id)
                ->update([
                    'role_id' => $request->role
                ]);

            DB::commit();
            return response()->json([
                'success' => true,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'error' => $e->getMessage()
            ]);
        }
    }
    /**
     * Get single user information
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function editUser(Request $request)
    {
        try {
            $user_info = DB::table('users')
                ->join('user_has_roles', 'user_has_roles.user_id', '=', 'users.id')
                ->select('users.*', 'user_has_roles.role_id')
                ->where('users.id', $request->id)
                ->first();
            return response()->json([
                'success' => true,
                'user_info' => $user_info,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => $e->getMessage()
            ]);
        }
    }
    /**
     * Delete a user from user table
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteUser(Request $request)
    {
        try {
            DB::beginTransaction();
            $user = User::find($request->id);
            $user->delete();
            DB::commit();
            return response()->json([
                'success' => true
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->josn([
                'success' => false,
            ]);
        }
    }
    /**
     *Get all permission list
     *
     *@param \Illuminate\Http\Request $request
     *@return \Illuminate\Http\JsonResponse
     */
    public function permissionsList(Request $request)
    {
        try {
            $all_permissions = DB::table('permissions')->select('name', 'id')->get();
            $role_info = DB::table('roles')->where('id', $request->id)->first();
            $role_permission = DB::table('role_has_permissions')
                ->where('role_id', '=', $request->id)
                ->pluck('permission_id');
            return response()->json([
                'success' => true,
                'all_permissions' => $all_permissions,
                'role_permission' => $role_permission,
                'role_info' => $role_info
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
            ]);
        }
    }
    /**
     * create new user role
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function newUserRole(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'role_name' => 'required|unique:roles,role_name',
            'permissions' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        try {
            DB::beginTransaction();
            $roles = new Role();
            $roles->role_name = $request['role_name'];
            $roles->saveOrFail();

            $role_permission_records = [];
            for ($i = 0; $i < sizeof($request['permissions']); $i++) {
                $records = ['role_id' => $roles->id, 'permission_id' => $request['permissions'][$i]];
                $role_permission_records[$i] = $records;
            }
            DB::table('role_has_permissions')->insert($role_permission_records);
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => "Role created successfully"
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false
            ]);
        }
    }
    /**
     * Update user role and it's permissions
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateUserRole(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'role_id' => 'required|exists:roles,id',
            'permissions' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        try {
            DB::beginTransaction();
            DB::table('roles')
                ->where('id', $request->role_id)
                ->update(['role_name' => $request->role_name]);

            DB::table('role_has_permissions')->where('role_id', $request->role_id)->delete();
            $role_permission_records = [];
            for ($i = 0; $i < sizeof($request['permissions']); $i++) {
                $records = ['role_id' => $request->role_id, 'permission_id' => $request['permissions'][$i]];
                $role_permission_records[$i] = $records;
            }
            DB::table('role_has_permissions')->insert($role_permission_records);
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => "Role Delected successfully"
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
            ]);
        }
    }

    /**
     * This function return the logged user details
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUserProfile(Request $request)
    {
        try {
            $user = DB::table('users')
                ->join('user_has_roles', 'user_has_roles.user_id', '=', 'users.id')
                ->join('roles', 'roles.id', '=', 'user_has_roles.role_id')
                ->select('users.*', 'roles.role_name')
                ->where('users.id', auth()->user()->id)
                ->first();
            return response()->json([
                'success' => true,
                'user' => $user,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false
            ]);
        }
    }
    /**
     * This method will update the user profile information
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateProfileInfo(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100',
            'image' => 'nullable|mimes:jpeg,jpg,png',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $image = "";
            if ($request->hasFile('image')) {
                $extension = $request->file('image')->getClientOriginalExtension();
                $imagename = $request->email . '.' . $extension;
                $requested_file = $request->file('image');
                $requested_file->move(public_path('/uploads/user_image/'), $imagename);
                $image = "uploads/user_image/" . $imagename;
            } else {
                $image = DB::table('users')->where('id', auth()->user()->id)->first()->image;
            }
            DB::beginTransaction();
            DB::table('users')->where('id', auth()->user()->id)
                ->update([
                    'name' => $request->name,
                    'email' => $request->email,
                    'image' => $image
                ]);

            DB::commit();
            return response()->json([
                'success' => true,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
            ]);
        }
    }
    /**
     * This method will update user password
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse 
     */
    public function updateUserPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|string|between:6,100|confirmed',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            DB::beginTransaction();
            DB::table('users')->where('id', auth()->user()->id)
                ->update([
                    'password' => bcrypt($request->password),
                ]);

            DB::commit();
            return response()->json([
                'success' => true,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
            ]);
        }
    }
}
