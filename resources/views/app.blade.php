<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel Vue initial setup </title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />

    @vite(['resources/js/app.js', 'resources/css/app.css'])
</head>
<body>
<div class="app-body">
    <main class="main">
        <div style="padding-top: 20px" class="container" id="app">
            <movies-index></movies-index>
        </div>
    </main>
</div>
</body>
</html>
