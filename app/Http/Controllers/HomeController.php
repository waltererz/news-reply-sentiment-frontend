<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Request $request): View
    {
        if ($request->get('landing') == 'true') {
            return view('landing');
        } else {
            return view('index');
        }
    }
}
