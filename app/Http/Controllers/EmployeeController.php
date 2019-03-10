<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\EmployeeService;

class EmployeeController extends Controller
{
    private $employee;

    public function __construct(EmployeeService $employee)
    {
        $this->employee = $employee;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = $this->employee->getEmployees();
        return response()->json($employees);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $employee = $this->employee->createEmployee(
            $request->employee_id,
            $request->name,
            $request->age,
            $request->department_id,
            $request->position_id
        );

        return response()->json($employee, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee = $this->employee->getEmployeeByEmployeeId($id);

        return response()->json($employee);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $employee = $this->employee->updateEmployee(
            $id,
            $request->employee_id,
            $request->name,
            $request->age,
            $request->department_id,
            $request->position_id
        );

        return response()->json($employee);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->employee->deleteEmployee($id);

        return response()->json(null, 204);
    }
}
