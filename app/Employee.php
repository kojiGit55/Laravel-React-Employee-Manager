<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employees';

    public function department()
    {
        $this->belongsTo('App\Department')->withDefault();
    }

    public function position()
    {
        $this->belongsTo('App\Position')->withDefault();
    }
}
