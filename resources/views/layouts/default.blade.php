<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="{{ mix('/css/landing.css') }}" rel="stylesheet">
    @yield('header')
</head>

<body>
    @yield('body')
    @yield('footer')
    <script defer src="{{ mix('/js/landing.js') }}" type="text/javascript"></script>
</body>

</html>
