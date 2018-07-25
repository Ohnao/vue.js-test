<!DOCTYPE html>

<html lang="{{ config('app.locale') }}">
  <head>
    <meta cahraset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>vue.js-test</title>

    <link rel="stylesheet" href="css/app.css">

    <script>
      window.Laravel = {};
      window.Laravel.csrf_Token = "{{ csrf_token() }}"
    </script>
  </head>

  <body>
    <div id="app">
      <p>@{{ message }}</p>
    </div>
  </body>

  <script src=" {{ mix('js/app.js') }} "></script>
</html>
