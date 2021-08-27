<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class AnalyticsController extends Controller
{
    public function index(): View
    {
        return view('index');
    }
}
