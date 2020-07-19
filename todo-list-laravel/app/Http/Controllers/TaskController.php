<?php

namespace App\Http\Controllers;

use App\Task;

class TaskController extends Controller
{
    public function passTask()
    {
        return json_encode(Task::all());
    }
}
