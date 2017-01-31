@extends('foo.base')

@section('title', 'Create User')

@section('container')

<div class="title m-b-md">
    Create Usuário
</div>

<form action="/user/add" method="post">

    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
    <input type="text" name="name" placeholder="Nome" />
    <input type="email" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />
    <input type="password" name="password_confirmation" placeholder="Repeat Password" />
    <input type="submit" value="Enviar" />
</form>

{{ dump($errors) }}
{{ dump($errors->has('email')) }}
{{ dump($errors->get('name')) }}
{{ dump($errors->first('password')) }}
@endsection