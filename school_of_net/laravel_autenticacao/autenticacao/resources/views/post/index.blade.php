<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Posts</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>
    <body>
        <ul>
            @foreach($posts as $post)
            <li>
                {{ $post->title }} Author: {{ $post->user->name }} #{{ $post->user->id }}
                @can('update', $post)
                - <a href="#">Edit</a>
                @endcan
            </li>
            @endforeach
        </ul>
    </body>
</html>