@extends('layouts.default')

@section('body')
    <div class="container-fluid j2kb-container">
        <div class="inner-container">
            <div class="summary"></div>
            <div class="buttons">
                <a class="btn btn-primary" href="/user/signup" role="button">회원가입</a>
                <a class="btn btn-primary" href="/user/signin" role="button">로그인</a>
            </div>
        </div>
    </div>
@endsection
