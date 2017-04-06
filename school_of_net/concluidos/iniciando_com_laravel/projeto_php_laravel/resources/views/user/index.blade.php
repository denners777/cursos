@extends('foo.base')

@section('title', 'Index Users')

@section('container')
<div class="title m-b-md">
    Usuários
</div>
<p><b>Lista Usuários</b></p>

<ul>
    @foreach($users as $user)
    <li>{{ $user }}</li>
    @endforeach
</ul>

@endsection