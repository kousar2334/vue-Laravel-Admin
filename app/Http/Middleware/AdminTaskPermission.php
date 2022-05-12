<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminTaskPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        return $next($request);
    }
    public function isPermitted($permission)
    {
        return DB::table('user_has_roles')
            ->join('role_has_permissions', 'role_has_permissions.role_id', '=', 'user_has_roles.role_id')
            ->where('user_has_roles.user_id', '=', Auth::id())
            ->where('role_has_permissions.permission_id', '=', $permission)
            ->exists();
    }
}
