<?php

use Faker\Generator as Faker;

$factory->define(App\Employee::class, function (Faker $faker) {
    return [
        'employee_id' => $faker->unique()->numberBetween(1, 100),
        'name' => $faker->name,
        'year' => $faker->numberBetween(1, 30),
        'department_id' => $faker->numberBetween(1, 5),
        'position_id' => $faker->numberBetween(1, 5),
    ];
});
