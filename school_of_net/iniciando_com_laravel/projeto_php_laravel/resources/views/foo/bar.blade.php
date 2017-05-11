@extends('foo.base')

@section('title', 'Bar Page')

@section('container')
<div class="title m-b-md">
    Bar
</div>
<p>Bar container</p>

@if(true)
return true
@endif
<ul>
    @foreach(['foo', 'bar', 'baz'] as $item)
    <li>{{ $item }}</li>
    @endforeach
</ul>

@endsection