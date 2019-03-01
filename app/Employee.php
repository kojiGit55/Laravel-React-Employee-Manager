<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Employee extends Model
{
    protected $table = 'employees';

    public static function createEmployee(Request $request)
    {
        $employee = new Employee();
        $employee->employee_id = $request->employee_id;
        $employee->name = $request->name;
        $employee->year = $request->year;
        $employee->department_id = $request->department_id;
        $employee->position_id = $request->position_id;

        return $employee->save();
    }
}
