<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Employee::class, 50)->create();
        factory(App\Department::class, 10)->create();
        factory(App\Position::class, 10)->create();
    }
}
