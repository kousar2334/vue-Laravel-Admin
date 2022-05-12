<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('permissions')->insert([
            'name' => 'Dashboard',
        ]);
        DB::table('permissions')->insert([
            'name' => 'Users',
        ]);
        DB::table('permissions')->insert([
            'name' => 'Pages',
        ]);
    }
}
