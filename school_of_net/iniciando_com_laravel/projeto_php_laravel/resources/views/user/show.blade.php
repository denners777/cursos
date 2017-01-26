@extends('foo.base')

@section('title', 'Index Users')

@section('container')
<div class="title m-b-md">
    Usuário {{ $id }}
</div>
<p><b>Mostra um Usuário</b></p>

@endsection