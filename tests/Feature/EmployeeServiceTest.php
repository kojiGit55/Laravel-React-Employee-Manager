<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Employee;
use App\Services\EmployeeService;

class EmployeeServiceTest extends TestCase
{
    use RefreshDatabase;

    private $service;

    public function setUp()
    {
        parent::setUp();

        $this->service = app()->make(EmployeeService::class);

        factory(Employee::class)->create([
            'id' => 1,
            'employee_id' => 1,
            'name' => 'A山A太郎',
            'age' => 5,
            'department_id' => 3,
            'position_id' => 3
        ]);
    }

    /**
     * @test
     *
     */
    public function getEmployees()
    {
        $response = $this->service->getEmployees();

        $this->assertArrayHasKey(0, $response);
    }

    /**
     * @test
     *
     */
    public function getEmployeeByEmployeeId()
    {
        $response = $this->service->getEmployeeByEmployeeId(1);

        $this->assertArrayHasKey('id', $response);
    }

    /**
     * @test
     *
     */
    public function createEmployee()
    {
        $this->service->createEmployee(
            2,
            'B山B太郎',
            10,
            3,
            3
        );

        $this->assertDatabaseHas('employees', [
            'employee_id' => 2,
            'name' => 'B山B太郎',
            'age' => 10,
            'department_id' => 3,
            'position_id' => 3
        ]);
    }

    /**
     * @test
     *
     */
    public function updateEmployee()
    {
        $this->service->updateEmployee(
            1,
            1,
            'A山A太郎',
            10,
            1,
            1
        );

        $this->assertDatabaseHas('employees', [
            'id' => 1,
            'employee_id' => 1,
            'name' => 'A山A太郎',
            'age' => 10,
            'department_id' => 1,
            'position_id' => 1
        ]);
    }

    /**
     * @test
     *
     */
    public function deleteEmployee()
    {
        $this->service->deleteEmployee(1);

        $this->assertDatabaseMissing('employees', [
            'id' => 1,
            'employee_id' => 1
        ]);
    }
}
