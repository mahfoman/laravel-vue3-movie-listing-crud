<template>
    <div class="app-body">
        <main class="main">
            <div style="padding-top: 20px" class="container" >
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <router-link to="/" class="nav-link" href="#">Movies</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/create" class="nav-link" href="#">Create Movie</router-link>
                        </li>
                    </ul>
                </nav>
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>
