<?php
/**
 * Created by IntelliJ IDEA.
 * User: nakajimakouji
 * Date: 2019/03/09
 * Time: 9:26
 */
namespace App\Services;

use App\Employee;

class EmployeeService
{
    public function getEmployees()
    {
        return Employee::orderBy('employee_id')->get();
    }

    public function getEmployeeByEmployeeId(int $employeeId)
    {
        return Employee::where('employee_id', $employeeId)->first();
    }

    public function createEmployee(int $employeeId, string $name, int $year, int $departmentId, int $positionId)
    {
        $employee = new Employee();
        $employee->employee_id = $employeeId;
        $employee->name = $name;
        $employee->year = $year;
        $employee->department_id = $departmentId;
        $employee->position_id = $positionId;

        return $employee->save();
    }

    public function updateEmployee(int $employeeId, int $updatedEmployeeId, string $name, int $year, int $departmentId, int $positionId)
    {
        $employee = Employee::where('employee_id', $employeeId)->first();
        $employee->employee_id = $updatedEmployeeId;
        $employee->name = $name;
        $employee->year = $year;
        $employee->department_id = $departmentId;
        $employee->position_id = $positionId;

        return $employee->save();
    }

    public function deleteEmployee(int $employeeId)
    {
        $employee = Employee::where('employee_id', $employeeId)->first();

        $employee->delete();

        return;
    }
}
